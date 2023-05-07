import { Credits, Statistics, User } from "@prisma/client";

interface TopCardsProps {
	data:
		| (User & {
				credits: Credits | null;
				stats: Statistics | null;
		  })
		| null;
}

export default function TopCards({ data }: TopCardsProps) {
	if (!data) return null;

	let credits = getUserCredits(
		data?.credits?.current_amount ?? 0,
		data?.credits?.used_amount ?? 0
	);

	let apiUsage = getAPIUsage(
		data?.credits?.current_amount ?? 0,
		data?.stats?.usage?.api_calls ?? 0
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
}

type Data = {
	amount: {
		total: number;
		used: number;
	};
	percentage: string;
};

function getUserCredits(total: number, used: number): Data {
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

function getAPIUsage(total: number, used: number): Data {
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
