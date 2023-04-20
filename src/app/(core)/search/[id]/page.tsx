"use client";

import { Library } from "@prisma/client";
import { redirect, useParams } from "next/navigation";
import Link from "next/link";
import { HOST_URL } from "@/helpers/constants";

interface pageProps {}

type Params = {
  id: string;
} | null;

async function getSearchResults(searchId: string): Promise<Library | null> {
  const res = await fetch(`${HOST_URL}/api/search/library`, {
    method: "POST",
    // cache disabled so that next doesn't cache the response at compile time
    cache: "no-store",
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

  const searchId = params.id;

  const libData = await getSearchResults(searchId);

  // console.log("libData", libData);

  if (!libData) {
    return (
      <>
        <h1>Library not found</h1>
        <p>
          We couldn&apos;t find the library you were looking for on this url.
          Please try again later or{" "}
          <span className={"underline text-pink-400"}>
            {/* @ts-ignore */}
            <Link href={"/contact"}>contact</Link>
          </span>{" "}
          us if you think this is a mistake.
        </p>
      </>
    );
  }

  return (
    <>
      <h1>{JSON.stringify(libData, null, 2)}</h1>
    </>
  );
};

export default Page;
