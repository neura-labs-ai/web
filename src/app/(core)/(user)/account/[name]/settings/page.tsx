import NotAuthorized from "@/components/NotAuthorized";
import TempNav from "@/components/ui/TempNav";
import { isAuthenticated, returnToLogin } from "@/lib/utils";
import { Metadata } from "next";
import { getServerSession } from "next-auth";

export async function generateMetadata({}: SettingsProps): Promise<Metadata> {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return returnToLogin()

	return {
		title: `${session?.user?.name} Settings`,
		description: `Settings for ${session?.user?.name}`,
	};
}

interface SettingsProps {}

const page = async ({}: SettingsProps) => {
	const session = await getServerSession();

	if (!isAuthenticated(session)) return <NotAuthorized />;

	return (
		<>
			<h1>Account Settings</h1>
			<p>Under development...</p>
			<br />
			<TempNav session={session} />
		</>
	);
};

export default page;
