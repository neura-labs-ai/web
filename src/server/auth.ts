import { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./db";

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
	},
	providers: [
		GitHubProvider({
			clientId: GitHubAuthOptions().clientId,
			clientSecret: GitHubAuthOptions().clientSecret,
		}),
	],
	callbacks: {
		async signIn({}) {
			return true;
		},
		async jwt({ token, user }) {
			// console.log("token", token);
			// console.log("user", user);

			if (user) {
				token.id = user.id;
				token.name = encodeURI(user.name!);
				token.email = user.email;
				token.picture = user.image;
				token.role = user.role;
			}

			return token;
		},
		async session({ session, token }) {
			// console.log("session", session);
			// console.log("token", token);
			if (token) {
				session.user.id = token.id;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.image = token.picture;
				session.user.role = token.role;
			}

			return session;
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
