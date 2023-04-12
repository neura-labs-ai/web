import Button from "@/components/ui/Button";
// import { getUserFromDatabase } from "@/helpers/utils";
import { isNullOrUndefinedOrEmpty } from "@sapphire/utilities";
import { getServerSession } from "next-auth";
import Link from "next/link";

interface pageProps {
	slug: string;
}

const page = async ({}) => {
	const session = await getServerSession();

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
			<Button>
				<Link href={"/"}>Back</Link>
			</Button>
			<Button>
				<Link href={`/home`}>Home</Link>
			</Button>
			<Button>
				<Link href={`/account/${session?.user.name}/settings`}>Settings</Link>
			</Button>
		</>
	);
};

export default page;
