import { HOST_URL } from "@/helpers/constants";
import { delay } from "@/lib/utils";
import { Metadata } from "next";

export async function generateMetadata({}: SearchPageProps): Promise<Metadata> {
	return {
		title: "Search A Library",
		description:
			"Search through our amazing engine of library's made by the community.",
	};
}

interface SearchPageProps {}

async function getLibs() {
	const data = await fetch(`${HOST_URL}/api`)

	return await data.json();
}

const page = async ({}: SearchPageProps) => {

	const libs = await getLibs();

	await delay(500);

	return (
		<>
				<pre>{JSON.stringify(libs, null, 2)}</pre>
		</>
	);
};

export default page;
