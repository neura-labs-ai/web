import DisplayAccount from "@/components/accounts/DisplayAccount";
import NotAuthorized from "@/components/NotAuthorized";
import { COLLECTIONS, DATABASE_NAME, HOST_URL } from "@/helpers/constants";
import { isAuthenticated, returnToLogin } from "@/helpers/utils";
import clientPromise from "@/lib/db/connect";
import { isNullOrUndefinedOrEmpty } from "@sapphire/utilities";
import { Metadata } from "next";
import { getServerSession, User } from "next-auth";

interface pageProps {
	params: {
		// The name of the user to display
		name: string;
	};
}

export async function generateMetadata({
	params,
}: pageProps): Promise<Metadata> {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return returnToLogin();

	return {
		title: `${params.name}` ?? `Account Not found`,
		description: `${params.name}'s Account information`,
	};
}

async function getUser(name: string): Promise<User | null> {
	// todo - fix failed to parse url error when a name is something other than the session.user.name
	const response = await fetch(`${HOST_URL}/api/account/${name}`, {
		next: {
			revalidate: 6 * 5,
		}
	});

	const user = await response.json();

	return user;
}

const page = async ({ params }: pageProps) => {
	console.log("params", params);

	const session = await getServerSession();

	if (!isAuthenticated(session)) return <NotAuthorized />;

	// If the user is the same as the session user, display the account, we don't need to fetch the user
	if (session?.user.name === params.name) {
		return <DisplayAccount session={session} user={session.user} />;
	}

	let fetchedUser = await getUser(params.name);

	// If the user does not exist, display an error
	if (isNullOrUndefinedOrEmpty(fetchedUser)) {
		return (
			<>
				<h1>{params.name} doesn't exist in our system...</h1>
			</>
		);
	}

	return <DisplayAccount session={session} user={fetchedUser} />;
};

export default page;
