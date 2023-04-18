import LibrarySearchInput from "@/components/search/LibrarySearchInput";
import SearchPreloader from "@/components/search/SearchPreloader";
import SearchProviders from "@/components/search/SearchProvider";
import { HOST_URL } from "@/helpers/constants";
import { JsonSearchData } from "@/lib/data";
import { delay } from "@/lib/utils";
import { Metadata } from "next";

import libraryData from "../../../lib/data";

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
			headers: {
				"Content-Type": "application/json",
			}
		});

		// console.log("res", res);

		console.log('data.text', await res.text());

		const json = await res.json();

		console.log('json', json);

		return json;

		// return libraryData;
	} catch (error) {
		console.log(error);
		throw error;
	}
}

const page = async ({}: SearchPageProps) => {
	const data = await getLibs();

	// await delay(500);

	return (
		<>
			<h1>Search</h1>
			<br />
			{JSON.stringify(data)}
			<SearchPreloader libs={data} />
			<SearchProviders>
				<LibrarySearchInput />
			</SearchProviders>
		</>
	);
};

export default page;
