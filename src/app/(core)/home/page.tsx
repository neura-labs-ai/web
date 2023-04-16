import NotAuthorized from "@/components/NotAuthorized";
import { isAuthenticated, returnToLogin } from "@/lib/utils";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

type Props = {};

export async function generateMetadata({}: Props): Promise<Metadata> {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return returnToLogin();

	const userName = decodeURI(session?.user?.name!);

	return {
		title: `${userName} - Home`,
		description: `Welcome home ${userName}!`,
	};
}

const page = async ({}) => {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return <NotAuthorized />;

	const userName = decodeURI(session?.user?.name!);

	return (
		<>
			<br />
			<h1>Welcome home {userName}!</h1>
			<p>It seams your pocking around this development site... 😜</p>
			<p>Stay tunned for more!</p>
		</>
	);
};

export default page;
