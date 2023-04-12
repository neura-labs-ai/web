import Button from "@/components/ui/Button";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Link from "next/link";

type Props = {};

export async function generateMetadata({}: Props): Promise<Metadata> {
	const session = await getServerSession()

	return {
		title: `${session?.user?.name} - Home`,
		description: `Welcome home ${session?.user?.name}!`,
	};
}

const page = async ({}) => {
	const session = await getServerSession();

	return (
		<>
			<h1>{session?.user?.name} Home page</h1>

			<br />
			<Button>
				<Link href={"/"}>Back</Link>
			</Button>
			<Button>
				<Link href={`/account/${session?.user.name}`}>Account</Link>
			</Button>
		</>
	);
};

export default page;