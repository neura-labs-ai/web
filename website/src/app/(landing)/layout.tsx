import LandingHeader from "@/components/landing/LandingHeader";
import React from "react";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<LandingHeader />
			<div className="mt-20">{children}</div>
		</>
	);
}
