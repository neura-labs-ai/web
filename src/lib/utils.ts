import { isNullOrUndefined } from "@sapphire/utilities";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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
	if(isNullOrUndefined(session)) {
        return false;
    }

    return !isNullOrUndefined(session.user);
}

export function returnToLogin(): never {
	redirect("/auth/login");
}

export async function getUserFromDatabase() {}
