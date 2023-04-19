import "../styles/globals.css";

import { SITE } from "@/helpers/constants";
import ErrorProvider from "@/components/ErrorProvider";
import AuthProvider from "@/components/AuthProvider";
import Analytics from "@/components/telemetry/VercelAnalytics";
import React from "react";

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
        <Analytics />
        <ErrorProvider>
          <AuthProvider>
            <div>{children}</div>
          </AuthProvider>
        </ErrorProvider>
      </body>
    </html>
  );
}
