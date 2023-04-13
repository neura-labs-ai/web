import "../styles/globals.css";
import ErrorProvider from "@/components/ErrorProvider";
import { SITE } from "@/helpers/constants";
import AuthProvider from "@/components/AuthProvider";

export const metadata = {
	title: SITE.META.TITLE,
	description: SITE.META.DESCRIPTION,
};

interface RootLayoutProps {
	children: React.ReactNode;
	params: any;
}

export default function RootLayout({ children, params }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>
				<ErrorProvider>
					<AuthProvider>{children}</AuthProvider>
				</ErrorProvider>
			</body>
		</html>
	);
}
