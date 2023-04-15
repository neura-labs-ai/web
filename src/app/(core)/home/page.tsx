import NotAuthorized from "@/components/NotAuthorized";
import { isAuthenticated, returnToLogin } from "@/lib/utils";
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
			<br />
			<h1>Welcome home {session?.user?.name}!</h1>
			<p>It seams your pocking around this development site... 😜</p>
			<p>Stay tunned for more!</p>
		</>
	);
};

export default page;
