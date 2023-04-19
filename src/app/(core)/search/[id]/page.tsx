import NotAuthorized from "@/components/NotAuthorized";
import { isAuthenticated } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { Library } from "@prisma/client";
import { HOST_URL } from "@/helpers/constants";

interface pageProps {}

async function getSearchResults(searchId: string): Promise<Library | null> {
  const res = await fetch(`${HOST_URL}/api/search/library`, {
    method: "POST",
    cache: "no-store",
    next: {
      revalidate: 60,
    },
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: searchId,
    }),
  });

  if (res.status === 200) {
    return await res.json();
  } else {
    return null;
  }
}

const page = async ({}) => {
  const session = await getServerSession();

  // todo - get the data from the api so we can use client side rendering (aka hooks)
  const searchId = "643de5c0ac8c1d3a72951dac";

  if (!isAuthenticated(session)) return <NotAuthorized />;

  const libData = await getSearchResults(searchId);

  console.log("libData", libData);

  if (!libData) return <h1>Library not found</h1>;

  return (
    <>
      <h1>{JSON.stringify(libData, null, 2)}</h1>
    </>
  );
};

export default page;
