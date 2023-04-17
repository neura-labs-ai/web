import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { notAllowedReply } from "./lib/utils";

export default withAuth(
	function middleware(req: NextRequestWithAuth) {
		console.log(`Middleware: ${req.nextUrl.pathname}`);
		console.log(req.nextauth.token);

		// Protect the raw api routes from the user accessing them directly
		// Later, i might implement a public api system using api keys for members but for now, this is fine
		if (req.nextUrl.pathname === "/api") {
			return notAllowedReply(req, "ADMIN");
		}
		if (req.nextUrl.pathname === "/api/search") {
			return notAllowedReply(req, "ADMIN");
		}
	},
	{
		callbacks: {
			authorized: ({ token }) => {
				return !!token;
			},
		},
	}
);

/**
 * These routes are protected by AuthJs. If accessed without being logged in, the user will be redirected to the login page.
 * However, once a user is logged in we still want to hide the raw api routes from the user. So we need to handle them in the withAuth middleware.
 */

// todo = Find out how to protect sub-routes. Right now I have the protections hard coded in them.
// example = /account/<username>/settings should be protected thought this middleware if possible.
export const config = {
	matcher: [
		"/home",
		"/account",
		"/search",
		"/auth/logout",
		"/api",
		"/api/search",
	],
};
