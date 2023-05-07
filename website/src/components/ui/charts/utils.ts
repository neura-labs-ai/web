"use server"

import { prisma } from "@/lib/db";

export async function getChartStatistics(email: string): Promise<number[]> {
	"use server";
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
