import { Metadata } from "next/types";
import { getServerSession } from "next-auth";
import TopCards from "@/components/ui/cards/TopCards";
import BarChart from "@/components/ui/charts/BarChart";
import RecentPayments from "@/components/ui/charts/RecentPayments";
import { redirect } from "next/navigation";
import { getChartStatistics, getUserPayments, getUserStatsAndCredits } from "@/lib/utils";

type Props = {};

export async function generateMetadata({}: Props): Promise<Metadata> {
	const session = await getServerSession();

	const userName = decodeURI(session?.user?.name!);

	return {
		title: `${userName} - Dashboard`,
		description: `Welcome home ${userName}!`,
	};
}

export default async function Dashboard({}: Props) {
	let session = await getServerSession();

	let email = session?.user?.email;

	if (!email) {
		redirect("/oauth/login");
	}

	let userData = await getUserStatsAndCredits(email);
	let userPayments = await getUserPayments(email);
	let userTableData = await getChartStatistics(email);

	return (
		<>
			<TopCards data={userData} />
			<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
				<BarChart tableData={userTableData} />
				<RecentPayments payments={userPayments} />
			</div>
		</>
	);
}
