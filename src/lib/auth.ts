import { NextAuthOptions, User } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./db/connect";
import { DATABASE_NAME } from "@/helpers/constants";

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
	adapter: MongoDBAdapter(clientPromise, {
		databaseName: "code-library-engine",
	}),
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
		async jwt({ token, user }) {
			const authUser = (await clientPromise)
				.db(DATABASE_NAME)
				.collection<User>("users").findOne({ id: token.id })

			if (!authUser) {
				if (user) token.id = user.id;

				return token;
			}

			return token;
		},
		async session({ session, token }) {
			if (token) {
				session.user.id = token.id;
				session.user.name = token.name;
				session.user.email = token.email;
				session.user.image = token.picture;
			}

			return session;
		},
		redirect() {
			return "/home";
		},
	},
};
