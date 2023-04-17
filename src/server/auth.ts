import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";
import { Role } from "@prisma/client";

function GitHubAuthOptions() {
	const clientId = process.env.GITHUB_CLIENT_ID;
	const clientSecret = process.env.GITHUB_CLIENT_SECRET;

	if (!clientId || !clientSecret) {
		throw new Error("Missing GitHub client ID or secret.");
	}

	return {
		clientId,
		clientSecret,
	};
}

export const authOptions: NextAuthOptions = {
	secret: process.env.NEXTAUTH_SECRET,
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth/login",
		signOut: "/auth/logout",
		error: "/auth/login", // Error code passed in query string as ?error=
	},
	providers: [
		GitHubProvider({
			clientId: GitHubAuthOptions().clientId,
			clientSecret: GitHubAuthOptions().clientSecret,
			// This callback returns the data thats passed into prisma create when a user is created
			// see ./types/next-auth.d.ts  for types
			profile(profile) {
				return {
					id: profile.id.toString(),
					name: profile.name || profile.login,
					username: profile.login,
					email: profile.email,
					image: profile.avatar_url,
					bio: profile.bio,
					roles: [Role.USER],
				};
			},
		}),
	],
	callbacks: {
		// async signIn({}) {
		// 	return true;
		// },
		async jwt({ token, user, session }) {
			if (user) {
				token.id = user.id;
				token.name = encodeURI(user.name!);
				token.email = user.email;
				token.picture = user.image;
				token.roles = user.roles;
				token.bio = user.bio;
			}

			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id;
				session.user.name = token.name;
				session.user.username = token.username;
				session.user.email = token.email;
				session.user.image = token.picture;
				session.user.bio = token.bio;
				session.user.roles = token.roles;
			}
			return {
				...session,
				user: {
					...session.user,
					...token,
				},
			};
		},
		redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		},
	},
};
