import Button from "@/components/ui/Button";
import { FC } from "react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export const metadata = {
	title: "Search",
};

interface pageProps {}

const page = async ({}) => {
	const session = await getServerSession();

	return (
		<>
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<Button>Search Something...</Button>
		</>
	);
};

export default page;
