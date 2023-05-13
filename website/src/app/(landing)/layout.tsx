import LandingHeaderWhite from "@/components/landing/LandingHeaderWhite";
import ContentBody from "@/components/ui/ContentBody";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LandingHeaderWhite />
      <ContentBody>
        <div className="py-20">{children}</div>
      </ContentBody>
    </>
  );
}
