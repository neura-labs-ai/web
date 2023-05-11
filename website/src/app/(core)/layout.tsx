import Header from "@/components/ui/Header";
import Sidebar from "@/components/ui/Sidebar";
import React from "react";

interface RootLayoutProps {
  children: React.ReactNode;
}

// todo - make this custom for this layout
export default async function CoreLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Sidebar>
          <Header />
          <div className="min-h-screen bg-zinc-950">{children}</div>
        </Sidebar>
      </body>
    </html>
  );
}
