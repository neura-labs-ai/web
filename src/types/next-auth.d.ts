import { Role } from "@prisma/client";
import type { Session, User } from "next-auth";
import type { JWT } from "next-auth/jwt";

type UserId = string;

declare module "next-auth/jwt" {
	interface JWT {
		id: UserId;
		role: Role | null | undefined;
	}
}

declare module "next-auth" {
	interface Session {
		user: {
			/**
			 * The user's email address
			 */
			email?: string | null;

			/**
			 * The user's unique id number
			 */
			id?: string | null;

			/**
			 * The users preferred avatar.
			 * Provided by GitHub
			 */
			image?: string | null;

			/**
			 * The user's full name
			 */
			name?: string | null;

			/**
			 * The user's custom & public username viewable to others
			 */
			username?: string | null;

			/**
			 * The user's role
			 */
			role?: Role | null;
		};
	}

	interface User {
		/**
		 * The user's email address
		 */
		email?: string | null;

		/**
		 * The user's unique id number
		 */
		id: string;

		/**
		 * The users preferred avatar.
		 * Usually provided by the user's OAuth provider of choice
		 */
		image?: string | null;

		/**
		 * The user's full name
		 */
		name?: string | null;

		/**
		 * The user's custom & public username viewable to others
		 */
		username?: string | null;

		/**
		 * The user's role
		 */
		role?: Role | null;
	}
}
