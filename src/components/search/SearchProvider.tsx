import { searchStore } from "@/lib/redux";
import { Provider } from "react-redux";
import React from "react";

export default function SearchProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={searchStore}>{children}</Provider>;
}
