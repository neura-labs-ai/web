import LibrarySearchInput from "@/components/search/LibrarySearchInput";
import SearchPreloader from "@/components/search/SearchPreloader";
import SearchProviders from "@/components/search/SearchProvider";
import { HOST_URL } from "@/helpers/constants";
import { JsonSearchData } from "@/lib/data";
import { delay } from "@/lib/utils";
import { Metadata } from "next";

// export async function generateMetadata({}: SearchPageProps): Promise<Metadata> {
// 	return {
// 		title: "Search A Library",
// 		description:
// 			"Search through our amazing engine of library's made by the community.",
// 	};
// }

interface SearchPageProps {}

async function getLibs(): Promise<JsonSearchData> {
	const res = await fetch(`${HOST_URL}/api/search`);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();

	console.log(json)

	return json;
}

const page = async ({}: SearchPageProps) => {
	// const data = await getLibs();

	await delay(500);

	return (
		<>
			<h1>Search</h1>
			<br />
			{/* <SearchPreloader libs={data} />
			<SearchProviders>
				<LibrarySearchInput />
			</SearchProviders> */}
		</>
	);
};

export default page;
