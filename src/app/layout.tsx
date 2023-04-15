import "../styles/globals.css";
import ErrorProvider from "@/components/ErrorProvider";
import { SITE } from "@/helpers/constants";
import AuthProvider from "@/components/AuthProvider";
import Analytics from "@/components/utils/Analytics";

export const metadata = {
	title: SITE.META.TITLE,
	description: SITE.META.DESCRIPTION,
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<ErrorProvider>
					<Analytics />
					<AuthProvider>{children}</AuthProvider>
				</ErrorProvider>
			</body>
		</html>
	);
}
