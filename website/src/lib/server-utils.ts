/// ? These functions are ran only on the server side.
/// We need another file for this so server side code is not loaded into the client side js.

import { Payment, UserRole } from "@prisma/client";
import { prisma } from "./db";
import { isAuthenticated } from "./utils";
import { Session } from "next-auth";

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

export async function getUserFromDatabase(email: string) {
  return await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}

///
export async function getUserStatsAndCredits(email: string) {
  let data = await prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      credits: true,
      stats: true,
    },
  });

  if (!data) return null;

  return {
    credits: data.credits,
    stats: data.stats,
  };
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
