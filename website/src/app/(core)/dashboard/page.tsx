import { Metadata } from "next/types";
import { getServerSession } from "next-auth";
import TopCards from "@/components/ui/cards/TopCards";
import BarChart from "@/components/ui/charts/BarChart";
import RecentPayments from "@/components/ui/charts/RecentPayments";
import { redirect } from "next/navigation";
// import { getUserStatsAndCredits, getUserPayments, getChartStatistics } from "@/lib/server-utils";

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

  // let userData = await getUserStatsAndCredits(email);
  // let userPayments = await getUserPayments(email);
  // let userTableData = await getChartStatistics(email);

  // Load the dummy data for now. Ignore types as I checked the objects and they are correct.
  const { userData, userPayments, userTableData } = loadDefaults() as any;

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

// This function is temp until the api is complete on the backend.
// To stop massive db calls on page load.
function loadDefaults() {
  let userData = {
    credits: {
      current_amount: 100,
      used_amount: 5,
    },
    stats: {
      usage: {
        api_calls: 69,
      },
    },
  };

  let userPayments = [
    {
      id: "hello-world-payment",
      active: true,
      subscription_id: "hello-world-subscription",
      subscription_date: new Date(),
      subscription_date_end: new Date(),
      credits_purchased: 300,
    },
    {
      id: "hello-world-payment2",
      active: false,
      subscription_id: "hello-world-subscription2",
      subscription_date: new Date(),
      subscription_date_end: new Date(),
      credits_purchased: 200,
    },
    {
      id: "hello-world-payment3",
      active: true,
      subscription_id: "hello-world-subscription3",
      subscription_date: new Date(),
      subscription_date_end: new Date(),
      credits_purchased: 500,
    },
  ];

  let userTableData = [1, 2, 3, 4, 5, 6, 7];

  return {
    userData,
    userPayments,
    userTableData,
  };
}
