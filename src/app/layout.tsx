import "../styles/globals.css";
import Providers from "@/components/Providers";

export const metadata = {
	title: "Code Library | Search Engine",
	description:
		"A search engine for programers, powered by Artificial Intelligence and Amazing Programers all over the world.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
