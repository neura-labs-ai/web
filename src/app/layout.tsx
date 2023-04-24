import "../styles/globals.css";

import React from "react";
import { Metadata } from "next";
import VercelAnalytics from "@/components/internal/telemetry/VercelAnalytics";
import { SITE } from "@/lib/helpers/constants";
import AuthProvider from "@/components/Providers/AuthProvider";
import ErrorProvider from "@/components/Providers/ErrorProvider";

export const metadata: Metadata = {
	title: SITE.NAME,
	description: SITE.META.DESCRIPTION,
	keywords: SITE.META.KEYWORDS,
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<VercelAnalytics />
				<ErrorProvider>
					<AuthProvider>{children}</AuthProvider>
				</ErrorProvider>
			</body>
		</html>
	);
}
