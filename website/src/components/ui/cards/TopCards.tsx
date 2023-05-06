import { prisma } from "@/lib/db";
import { Credits, Usage } from "@prisma/client";
import { getServerSession } from "next-auth";

interface TopCardsProps {}

const TopCards = async ({}) => {
	const session = await getServerSession();

	const userEmail = session?.user.email;

	if (!userEmail) {
		return null;
	}

	let [creditData, apiData] = await getCurrentData(userEmail);

	console.log(creditData, apiData);

	if (!creditData && !apiData) {
		// @ts-ignore
		creditData = {
			current_amount: 0,
			used_amount: 0,
		};
		apiData = {
			// @ts-ignore
			usage: {
				api_calls: 0,
			},
		};
	}

	if (!creditData) {
		// @ts-ignore
		creditData = {
			current_amount: 0,
			used_amount: 0,
		} as Credits;
	}

	if (!apiData) {
		// @ts-ignore
		apiData = {
			usage: {
				api_calls: 0,
			} as Usage,
		};
	}

	let credits = await getUserCredits(
		creditData.current_amount ?? 0,
		creditData.used_amount ?? 0
	);

	let apiUsage = await getAPIUsage(
		creditData.current_amount ?? 0,
		apiData?.usage?.api_calls ?? 0
	);

	const creditsPercentage = parseFloat(credits.percentage);
	const apiUsagePercentage = parseFloat(apiUsage.percentage);

	const creditsPercentageClassName =
		creditsPercentage > 85
			? "bg-red-300"
			: creditsPercentage > 50
			? "bg-yellow-300"
			: "bg-green-300";

	const apiUsagePercentageClassName =
		apiUsagePercentage > 85
			? "bg-red-300"
			: apiUsagePercentage > 50
			? "bg-yellow-300"
			: "bg-green-300";

	return (
		<>
			<div className="grid lg:grid-cols-5 gap-4 p-4">
				<div className="lg:col-span-2 col-span-1 bg-zinc-800 flex justify-between w-full border p-4 rounded-lg">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">
							{credits.amount.used}/{credits.amount.total}
						</p>
						<span className="text-green-500 text-lg">Current Account Credits</span>
					</div>
					<p
						className={`flex justify-center items-center p-2 rounded-lg text-black text-lg ${creditsPercentageClassName}`}>
						{credits.percentage}
					</p>
				</div>
				<div className="bg-zinc-800 flex justify-between w-full border p-4 rounded-lg">
					<div className="flex flex-col w-full pb-4">
						<p className="text-2xl font-bold">{apiUsage.amount.used}</p>
						<p className="text-green-500">API Request Processed</p>
					</div>
					<p
						className={`flex justify-center items-center p-2 rounded-lg text-black text-lg ${apiUsagePercentageClassName}`}>
						{apiUsage.percentage}
					</p>
				</div>
			</div>
		</>
	);
};

export default TopCards;

async function getCurrentData(email: string) {
	return Promise.all([
		prisma.credits.findFirst({
			where: {
				User: {
					email,
				},
			},
		}),
		prisma.statistics.findFirst({
			where: {
				User: {
					email,
				},
			},
		}),
	]);
}

type Data = {
	amount: {
		total: number;
		used: number;
	};
	percentage: string;
};

async function getUserCredits(total: number, used: number): Promise<Data> {
	if (total === 0) {
		return {
			amount: {
				total: 0,
				used: 0,
			},
			percentage: "0.00%",
		};
	}
	const percentage = ((used / total) * 100).toFixed(2) + "%";
	return {
		amount: {
			total,
			used,
		},
		percentage: percentage,
	};
}

async function getAPIUsage(total: number, used: number): Promise<Data> {
	if (total === 0) {
		return {
			amount: {
				total: 0,
				used: 0,
			},
			percentage: "0.00%",
		};
	}
	const percentage = ((used / total) * 100).toFixed(2) + "%";
	return {
		amount: {
			total,
			used,
		},
		percentage: percentage,
	};
}
