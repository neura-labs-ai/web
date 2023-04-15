import NotAuthorized from "@/components/NotAuthorized";
import LibrarySearchInput from "@/components/search/LibrarySearchInput";
import SearchPreloader from "@/components/search/SearchPreloader";
import SearchProviders from "@/components/search/SearchProvider";
import TempNav from "@/components/ui/TempNav";
import { HOST_URL } from "@/helpers/constants";
import { isAuthenticated, returnToLogin } from "@/lib/utils";
import { searchStore } from "@/redux/search";
import { setStartupLibrary } from "@/redux/search/searchSlice";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export async function generateMetadata({}: SearchPageProps): Promise<Metadata> {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return returnToLogin();

	return {
		title: "Search A Library",
		description:
			"Search through our amazing engine of library's made by the community.",
	};
}

interface SearchPageProps {}

async function search() {
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
	const session = await getServerSession();

	if (!isAuthenticated(session)) return <NotAuthorized />;

	const data = await search();

	searchStore.dispatch(setStartupLibrary(data));

	return (
		<>
			<TempNav session={session} />
			<br />
			<br />
			<SearchPreloader libs={data} />
			<SearchProviders>
				<LibrarySearchInput />
			</SearchProviders>
		</>
	);
};

export default page;
