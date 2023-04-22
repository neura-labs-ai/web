import { isNullOrUndefined } from "@sapphire/utilities";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { UserRole } from "@prisma/client";
import { NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

/**
 * Class Names function
 * @param inputs Any array of class names to merge TainWind-css classes together
 * @returns
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function toPusherKey(key: string) {
  return key.replace(/:/g, "__");
}

export function chatHrefConstructor(id1: string, id2: string) {
  const sortedIds = [id1, id2].sort();
  return `${sortedIds[0]}--${sortedIds[1]}`;
}

/**
 * Checks if the session is authenticated or not
 * @param session
 * @returns {boolean} true if the session is authenticated, false otherwise
 */
export function isAuthenticated(session: Session | null): boolean {
  if (isNullOrUndefined(session)) {
    return false;
  }

  return !isNullOrUndefined(session.user);
}

/**
 * Check user session permissions
 * @param session
 * @param role handled by prisma client
 * @returns
 */
export function hasPermission(
  session: Session | null,
  role: UserRole
): boolean {
  let exist = isAuthenticated(session);

  if (!exist) return false;

  return session?.user.roles?.includes(role) ?? false;
}

export function returnToLogin(): never {
  redirect("/auth/login");
}

export async function getUserFromDatabase() {}

/**
 * A simple function to check if the user is allowed to routes on the web app.
 * It is handled by the middleware.ts file and the withAuth function.
 * @param req {NextRequestWithAuth} The request object
 * @param role {Role} The role to check against
 * @returns Nothing if the user is allowed, a NextResponse if the user is not allowed
 */
export function notAllowedReply(req: NextRequestWithAuth, role: UserRole) {
  if (req.nextauth.token?.roles) {
    if (req.nextauth.token.roles.includes(role)) {
      return NextResponse.next();
    }
  }

  return NextResponse.json(
    {
      error: `Unauthorized access (${
        req.nextauth.token?.roles?.map((r) => r).join(", ") ?? "Unknown"
      })!`,
    },
    {
      status: 401,
    }
  );
}

/**
 * Halt the execution of the code for a given amount of time
 * @param ms The amount of time to halt the execution of the code
 * @returns Nothing
 */
export function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * Delays the execution of a callback function for a given amount of time
 * @param ms The amount of time to delay the execution of the callback function
 * @param cb The callback function to execute after the delay
 */
export function delayWithCB(ms: number, cb: () => any) {
  setTimeout(cb, ms);
}
