import { SvelteKitAuth } from '@auth/sveltekit';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import { redirect, type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { prisma } from '$lib/server/prisma';
import GitHub from '@auth/core/providers/github';

async function authorization({ event, resolve }: any) {
	// Protect any routes under /authenticated
	if (event.url.pathname.startsWith('/dashboard')) {
		const session = await event.locals.getSession();
		if (!session) {
			throw redirect(303, '/auth');
		}
	}

	// If the request is still here, just proceed as normally
	return resolve(event);
}

// First handle authentication, then authorization
// Each function acts as a middleware, receiving the request handle
// And returning a handle which gets passed to the next function
export const handle: Handle = sequence(
	SvelteKitAuth({
		providers: [
			GitHub({
				clientId: GITHUB_CLIENT_ID,
				clientSecret: GITHUB_CLIENT_SECRET,
				profile(profile) {
					return {
						id: profile.id.toString(),
						name: profile.name || profile.login,
						username: profile.login,
						email: profile.email,
						image: profile.avatar_url,
						bio: profile.bio
					};
				}
			})
		] as any,
		adapter: PrismaAdapter(prisma),
		session: {
			strategy: 'jwt'
		},
		callbacks: {
			async signIn({}) {
				return true;
			},
			async jwt({ token, user }) {
				if (user) {
					token.id = user.id;
					token.name = encodeURI(user.name!);
					token.email = user.email;
					token.picture = user.image;
				}

				return token;
			},
			async session({ session, token }) {
				if (token) {
					//@ts-expect-error - Types missing
					session.user!.id = token.id;
					session.user!.name = token.name;
					//@ts-expect-error - Types missing
					session.user!.username = token.username;
					session.user!.email = token.email;
					session.user!.image = token.picture;
				}

				return session;
			},
			redirect({ url, baseUrl }) {
				// Allows relative callback URLs
				if (url.startsWith('/')) return `${baseUrl}${url}`;
				// Allows callback URLs on the same origin
				else if (new URL(url).origin === baseUrl) return url;
				return baseUrl;
			}
		}
	}),
	authorization
);
