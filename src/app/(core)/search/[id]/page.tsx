import NotAuthorized from "@/components/NotAuthorized";
import { isAuthenticated, returnToLogin } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { Metadata } from "next/types";

interface pageProps {
}

export async function generateMetadata({}: pageProps): Promise<Metadata> {
  const session = await getServerSession();

  if (!isAuthenticated(session)) return returnToLogin();

  return {
    title: `Search [ID]`, // todo - make the name of the library that was searched
    description: `Search results for [ID]`
  };
}

const page = async ({}) => {
  const session = await getServerSession();

  if (!isAuthenticated(session)) return <NotAuthorized />;

  return (
    <>
      <div>page</div>
    </>
  );
};

export default page;
