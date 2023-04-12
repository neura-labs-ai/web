import { isNullOrUndefined } from "@sapphire/utilities"
import { Session } from "next-auth";

/**
 * Checks if the session is authenticated or not
 * @param session 
 * @returns {boolean} true if the session is authenticated, false otherwise
 */
export function isAuthenticated(session: Session | null): boolean {
    return isNullOrUndefined(session) ? false : true;
}

export async function getUserFromDatabase() {
	
}