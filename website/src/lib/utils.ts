import { isNullOrUndefined } from "@sapphire/utilities";
import { Session } from "next-auth";
import { redirect } from "next/navigation";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Payment, User, UserRole } from "@prisma/client";
import { LOCAL_STORAGE_KEYS } from "./helpers/constants";
import { prisma } from "./db";

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
export async function hasPermission(
	session: Session | null,
	role: UserRole
): Promise<boolean> {
	let exist = isAuthenticated(session);

	if (!exist) return false;

	let user = await getUserFromDatabase(session?.user.email!);

	if (user?.roles.includes(role)) {
		return true;
	} else {
		return false;
	}
}

export function returnToLogin(): never {
	redirect("/auth/login");
}

export async function getUserFromDatabase(email: string) {
	return await prisma.user.findUnique({
		where: {
			email: email,
		},
	});
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

export async function getUserStatsAndCredits(email: string) {
	return await prisma.user.findUnique({
		where: {
			email,
		},
		include: {
			credits: true,
			stats: true,
		},
	});
}

export async function getUserPayments(email: string): Promise<Payment[]> {
	return await prisma.payment.findMany({
		where: {
			User: {
				email,
			},
		},
		orderBy: {
			subscription_date: "desc",
		},
	});
}

export async function getChartStatistics(email: string): Promise<number[]> {
	let defaultData = [0, 0, 0, 0, 0, 0, 0];

	let data = await prisma.statistics.findMany({
		where: {
			User: {
				email,
			},
		},
		select: {
			usage: true,
		},
	});

	if (!data || data.length === 0) return defaultData;

	let organizedData = [...defaultData];

	for (let i = 0; i < data.length; i++) {
		const usage = data[i].usage;

		if (!usage) continue;

		organizedData[0] += usage.api_calls_monday ?? 0;
		organizedData[1] += usage.api_calls_tuesday ?? 0;
		organizedData[2] += usage.api_calls_wed ?? 0;
		organizedData[3] += usage.api_calls_thurs ?? 0;
		organizedData[4] += usage.api_calls_fri ?? 0;
		organizedData[5] += usage.api_calls_sat ?? 0;
		organizedData[6] += usage.api_calls_sun ?? 0;
	}

	return organizedData;
}

export type StatsResponse = {
	customers: number;
	api_calls: number;
	github_stars: number;
};

export async function getLandingStats(): Promise<StatsResponse> {
	// const res = await fetch(
	// 	`${EXTERNAL_API_URL}/api/v1/stats`,
	// 	{
	// 		headers: {
	// 			Authorization: `bypass`,
	// 		},
	//     next: {
	//       revalidate: 60 * 5,
	//     }
	// 	}
	// );

	// let json = await res.json();

	// console.log(json)

	// return json

	// todo - fetch this data. This is just a placeholder
	return {
		customers: 0,
		api_calls: 40,
		github_stars: 2,
	};
}