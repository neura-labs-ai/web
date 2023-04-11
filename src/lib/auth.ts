import { NextAuthOptions } from "next-auth";
import CustomMongoDBAdaptor from "./db/adaptor";
import GitHubProvider from "next-auth/providers/github";
import connect from "./db/connect";
import { UserModel } from "./db/schemas/user-schema";

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
	secret: process.env.NEXT_AUTH_SECRET,
	adapter: CustomMongoDBAdaptor(),
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth/login",
	},
	providers: [
		GitHubProvider({
			clientId: GitHubAuthOptions().clientId,
			clientSecret: GitHubAuthOptions().clientSecret,
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			const u = await UserModel.findOne({ id: token.id });

			if (!u) {
				if (user) {
					token.id = user.id;
				}

				return token;
			}

			return { id: u.id, name: u.name, email: u.email, picture: u.image };
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
		async redirect() {
			return "/account";
		},
	},
};
