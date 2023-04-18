import LibrarySearchInput from "@/components/search/LibrarySearchInput";
import { HOST_URL } from "@/helpers/constants";
import { Metadata } from "next/types";

export async function generateMetadata({}: SearchPageProps): Promise<Metadata> {
  return {
    title: "Search A Library",
    description:
      "Search through our amazing engine of library's made by the community.",
  };
}

interface SearchPageProps {}

async function getLibs() {
  try {
    const res = await fetch(`${HOST_URL}/api/search`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "force-cache",
      next: {
        revalidate: 60,
      },
    });

    return await res.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const page = async ({}: SearchPageProps) => {
  const data = await getLibs();

  return (
    <>
      {/*{JSON.stringify(data, null, 2)}*/}
      <LibrarySearchInput libs={data} />
      {/*<SearchProviders>*/}
      {/*	<SearchPreloader libs={data} />*/}
      {/*</SearchProviders>*/}
    </>
  );
};

export default page;
