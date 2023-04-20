import { getServerSession } from "next-auth";
import React from "react";
import SideNavBar from "@/components/ui/SideNavBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function CoreLayout({ children }: RootLayoutProps) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body>
        <div className="h-screen flex justify-start">
          <SideNavBar />
          <div className={"flex-1 p-4"}>{children}</div>
        </div>
      </body>
    </html>
  );
}
