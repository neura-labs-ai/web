import "../styles/globals.css";

import { SITE } from "@/helpers/constants";
import ErrorProvider from "@/components/ErrorProvider";
import AuthProvider from "@/components/AuthProvider";
import Analytics from "@/components/telemetry/VercelAnalytics";

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
        {/* Temp fix - https://github.com/vercel/next.js/issues/47024 */}
        <Analytics />
        <ErrorProvider>
          <AuthProvider>{children}</AuthProvider>
        </ErrorProvider>
      </body>
    </html>
  );
}
