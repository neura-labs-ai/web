import DisplayAccount from "@/components/accounts/DisplayAccount";
import NotAuthorized from "@/components/NotAuthorized";
import { isAuthenticated, returnToLogin } from "@/lib/utils";
import { prisma } from "@/server/db";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

interface pageProps {
  params: {};
}

export async function generateMetadata({
  params,
}: pageProps): Promise<Metadata> {
  const session = await getServerSession();

  if (!isAuthenticated(session)) return returnToLogin();

  return {
			title: `${decodeURI(session?.user.name!)}` ?? `Account Not found`,
			description: `${decodeURI(session?.user.name!)}'s Account information`,
		};
}

async function getUser(name: string) {
  return await prisma.user.findFirst({
    where: {
      name: name,
    },
  });
}

const page = async ({ params }: pageProps) => {
  const session = await getServerSession();

  if (!isAuthenticated(session)) return <NotAuthorized />;

  return <DisplayAccount session={session} user={session!.user} />;
};

export default page;
