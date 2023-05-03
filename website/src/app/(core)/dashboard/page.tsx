import { Metadata } from "next/types";
import { getServerSession } from "next-auth";
import TopCards from "@/components/ui/cards/TopCards";
import BarChart from "@/components/ui/charts/BarChart";
import RecentOrders from "@/components/ui/charts/RecentOrders";

type Props = {};

export async function generateMetadata({}: Props): Promise<Metadata> {
	const session = await getServerSession();

	const userName = decodeURI(session?.user?.name!);

	return {
		title: `${userName} - Dashboard`,
		description: `Welcome home ${userName}!`,
	};
}


const page = async ({}: Props) => {
	return (
		<>
			<TopCards />
			<div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
				<BarChart />
				<RecentOrders />
			</div>
		</>
	);
};

export default page;
