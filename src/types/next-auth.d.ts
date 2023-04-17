import { Role } from "@prisma/client";
import type { JWT } from "next-auth/jwt";
import type { Session } from "next-auth";

type UserId = string;

declare module "next-auth/jwt" {
	interface JWT {
		id: UserId;
		roles: Role[] | null | undefined;
		bio: string | null | undefined;
		username: string | null | undefined;
	}
}

declare module "next-auth" {
	interface Session {
		user: User;
	}

	// The user model is based off the github API data. This is extended  from the Auth.js User Mode.
	// see - https://api.github.com/users/GitHub for an example user.
	interface User {
		/**
		 * The user's unique id number
		 */
		id: string;
		/**
		 * The user's email address
		 */
		email?: string | null;

		/**
		 * The users preferred avatar.
		 * Usually provided by the user's OAuth provider of choice
		 */
		image?: string | null;

		/**
		 * The user's custom name
		 */
		name?: string | null;

		/**
		 * The user's custom & public username viewable to others
		 */
		username?: string | null;

		/**
		 * The user's roles
		 */
		roles?: Role[] | null;

		/**
		 * The users bio content
		 */
		bio?: string | null;
	}
}

/**
 * Custom profile object returned when a user account
 * is saved into the database on sign-in.
 * The full profile object can be found in ./server/gh_profile.json
 */
export interface GitHubProfile {
	id: number;
	login: string;
	email: string;
	avatar_url: string;
	name?: string;
	bio?: string;
}
