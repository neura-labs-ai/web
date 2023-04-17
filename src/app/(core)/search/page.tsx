import LibrarySearchInput from "@/components/search/LibrarySearchInput";
import SearchPreloader from "@/components/search/SearchPreloader";
import SearchProviders from "@/components/search/SearchProvider";
import { HOST_URL } from "@/helpers/constants";
import { delay } from "@/lib/utils";
import { searchStore } from "@/redux/search";
import { setStartupLibrary } from "@/redux/search/searchSlice";
import { Metadata } from "next";

export async function generateMetadata({}: SearchPageProps): Promise<Metadata> {
	return {
		title: "Search A Library",
		description:
			"Search through our amazing engine of library's made by the community.",
	};
}

interface SearchPageProps {}

async function getSearchResults() {
	const res = await fetch(`${HOST_URL}/api/search`, {
		cache: "force-cache",
		next: {
			revalidate: 5,
		},
	});

	const data = await res.json();

	return data;
}

const page = async ({}: SearchPageProps) => {

	await delay(500)

	const data = await getSearchResults();

	searchStore.dispatch(setStartupLibrary(data));

	return (
		<>
			<br />
			<SearchPreloader libs={data} />
			<SearchProviders>
				<LibrarySearchInput />
			</SearchProviders>
		</>
	);
};

export default page;
