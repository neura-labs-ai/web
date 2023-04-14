import NotAuthorized from "@/components/NotAuthorized";
import Button from "@/components/ui/Button";
import TempNav from "@/components/ui/TempNav";
import { isAuthenticated, returnToLogin } from "@/lib/utils";
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

const page = async ({}: SearchPageProps) => {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return <NotAuthorized />;

	return (
		<>
			<h1>Some Amazing Search Engine</h1>

			<br />
			<TempNav session={session}/>
		</>
	);
};

export default page;
