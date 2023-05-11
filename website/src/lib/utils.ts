import { isNullOrUndefined } from "@sapphire/utilities";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { LOCAL_STORAGE_KEYS } from "./helpers/constants";
import { User } from "@prisma/client";

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

export function returnToLogin(): never {
  redirect("/auth/login");
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

/**
 * Validates the state of app telemetry.
 * If the user has opted out of telemetry, then the telemetry is disabled.
 * @param user
 */
export function createOrValidateTelemetryState(user: User) {
  const tel = localStorage.getItem(LOCAL_STORAGE_KEYS.TELEMETRY);

  if (tel) return;

  localStorage.setItem(
    LOCAL_STORAGE_KEYS.TELEMETRY,
    JSON.stringify({
      enabled: user.telemetry,
    })
  );

  return;
}
