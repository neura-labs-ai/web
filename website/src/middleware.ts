import { NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    return NextResponse.next();
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
export const config = {
  matcher: [
    "/dashboard:path*",
    "/account/:path*",
    "/search/:path*",
    "/auth/logout",
    // "/api/:path*",
  ],
};
