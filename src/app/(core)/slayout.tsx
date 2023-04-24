import React from "react";

interface RootLayoutProps {
	children: React.ReactNode;
}

// todo - make this custom for this layout
export default async function CoreLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
