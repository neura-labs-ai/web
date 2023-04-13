import NotAuthorized from "@/components/NotAuthorized";
import TempNav from "@/components/ui/TempNav";
import { isAuthenticated, returnToLogin } from "@/helpers/utils";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

interface pageProps {}

export async function generateMetadata({}: pageProps): Promise<Metadata> {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return returnToLogin();

	return {
		title: `${session?.user?.name} Account`,
		description: `${session?.user?.name}'s Account information`,
	};
}

const page = async ({}: pageProps) => {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return <NotAuthorized />;

	// todo - get the user from the search slug and fetch from them from the database and display their account information
	let name;

	// if (isNullOrUndefinedOrEmpty(name) || name !== typeof "string") {
	// 	return (
	// 		<>
	// 			<h1>Account does not exist...</h1>
	// 		</>
	// 	);
	// }

	// const user = await getUserFromDatabase({ name: name });

	return (
		<>
			<h1>{session?.user.name} Account information</h1>
			<br />
			<div>
				<div className="code-block">
					<pre>{JSON.stringify(session?.user, null, 2)}</pre>
				</div>
			</div>

			<br />
			<TempNav session={session} />
		</>
	);
};

export default page;
