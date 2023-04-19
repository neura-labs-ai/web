import DisplayAccount from "@/components/accounts/DisplayAccount";
import { delay } from "@/lib/utils";
import { prisma } from "@/server/db";
import { getServerSession } from "next-auth";
import { Metadata } from "next/types";

interface pageProps {}

export async function generateMetadata(): Promise<Metadata> {
  const session = await getServerSession();

  return {
    title: `${decodeURI(session?.user.name!)}` ?? `Account Not found`,
    description: `${decodeURI(session?.user.name!)}'s Account information`,
  };
}

async function getUser(userEmail: string | undefined) {
  return prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
}

const page = async ({}: pageProps) => {
  const session = await getServerSession();

  const userData = await getUser(session?.user.email!);

  await delay(500);

  return <DisplayAccount user={userData} />;
};

export default page;
