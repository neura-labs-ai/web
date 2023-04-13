import NotAuthorized from "@/components/NotAuthorized";
import TempNav from "@/components/ui/TempNav";
import { isAuthenticated, returnToLogin } from "@/helpers/utils";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

type Props = {};

export async function generateMetadata({}: Props): Promise<Metadata> {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return returnToLogin();
	
	return {
		title: `${session?.user?.name} - Home`,
		description: `Welcome home ${session?.user?.name}!`,
	};
}


const page = async ({}) => {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return <NotAuthorized />;

	return (
		<>
			<h1>Welcome Home {session?.user?.name}!</h1>
			<p>It seams your pocking around this development site... 😜</p>
			<p>Stay tunned for more!</p>

			<br />
			<TempNav session={session} />
		</>
	);
};

export default page;
