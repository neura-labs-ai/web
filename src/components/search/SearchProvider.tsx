"use client";
import { searchStore } from "@/redux/search";
import { Provider } from "react-redux";

export default function SearchProviders({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Provider store={searchStore}>{children}</Provider>;
}
