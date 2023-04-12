import Button from "@/components/ui/Button";
import { Link } from "lucide-react";
import { FC } from "react";

export const metadata = {
	title: "Account Settings",
	description: "",
};
interface pageProps {}

const page: FC<pageProps> = ({}) => {
	return (
		<>
			<h1>Account Settings</h1>
			<br />
			<Button>
				<Link href={"/"}>Back</Link>
			</Button>
		</>
	);
};

export default page;
