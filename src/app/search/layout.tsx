import TempNav from "@/components/ui/TempNav";
import { getServerSession } from "next-auth";

interface RootLayoutProps {
	children: React.ReactNode;
}

export default async function CoreLayout({ children }: RootLayoutProps) {
	const session = await getServerSession();
	return (
		<html lang="en">
			<body>
				<TempNav session={session} />
				{children}
			</body>
		</html>
	);
}
