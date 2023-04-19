import NotAuthorized from "@/components/NotAuthorized";
import { isAuthenticated, returnToLogin } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { Metadata } from "next/types";
import { Library } from "@prisma/client";
import { prisma } from "@/server/db";

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

async function getSearchResults(searchId: string): Promise<Library | null> {
  return prisma.library.findUnique({
    where: {
      id: searchId
    }
  });
}

const page = async ({}) => {
  const session = await getServerSession();

  // todo - get the data from the api so we can use client side rendering (aka hooks)
  const searchId = "643de5c0ac8c1d3a72951dac";

  if (!isAuthenticated(session)) return <NotAuthorized />;

  const libData = await getSearchResults(searchId);

  console.log(libData);

  if (!libData) return <h1>Library not found</h1>;

  return (
    <>
      <h1>{JSON.stringify(libData, null, 2)}</h1>
    </>
  );
};

export default page;
