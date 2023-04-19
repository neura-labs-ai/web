"use client";

import { Library } from "@prisma/client";
import { HOST_URL } from "@/helpers/constants";
import { redirect, useParams } from "next/navigation";

interface pageProps {}

type Params = {
  id: string;
} | null;

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

const Page = async ({}) => {
  const params = useParams() as Params;

  if (!params) redirect("/search");

  console.log("params", params);

  const searchId = params.id;

  const libData = await getSearchResults(searchId);

  console.log("libData", libData);

  if (!libData) return <h1>Library not found</h1>;

  return (
    <>
      <h1>{JSON.stringify(libData, null, 2)}</h1>
    </>
  );
};

export default Page;
