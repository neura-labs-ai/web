import { FC } from "react";

interface TopCardsProps {}

const TopCards = async ({}) => {
	let credits = await getUserCredits(500, 3);
	let apiUsage = await getAPIUsage(credits.amount.total, 27);

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
						<span className="text-green-500 text-lg">Account Credits Used</span>
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


type Data = {
	amount: {
		total: number;
		used: number;
	};
	percentage: string;
};

async function getUserCredits(total: number, used: number): Promise<Data> {
	const percentage = ((used / total) * 100).toFixed(2) + "%";
	return {
		amount: {
			total: total,
			used: used,
		},
		percentage: percentage,
	};
}

async function getAPIUsage(total: number, used: number): Promise<Data> {
	const percentage = ((used / total) * 100).toFixed(2) + "%";
	return {
		amount: {
			total: total,
			used: used,
		},
		percentage: percentage,
	};
}