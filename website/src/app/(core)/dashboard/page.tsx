import { Metadata } from "next/types";
import { getServerSession } from "next-auth";

type Props = {};

export async function generateMetadata({}: Props): Promise<Metadata> {
	const session = await getServerSession();

	const userName = decodeURI(session?.user?.name!);

	return {
		title: `${userName} - Dashboard`,
		description: `Welcome home ${userName}!`,
	};
}

const page = async ({}: Props) => {
	const session = await getServerSession();

	const userName = decodeURI(session?.user?.name!);

	return (
		<>
			<br />
			<h1>Welcome to your Dashboard {userName}!</h1>
            <p>Here you can access our services and API information.</p>
		</>
	);
};

export default page;
