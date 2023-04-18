"use client";

import { searchStore } from "@/lib/redux";
import { setStartupLibrary } from "@/lib/redux/searchSlice";
import { Library } from "@prisma/client";
import { FC } from "react";
import { useRef } from "react";

interface SearchPreloaderProps {
	libs: Library[];
}

const SearchPreloader: FC<SearchPreloaderProps> = ({ libs }) => {
	const loaded = useRef(false);

	if (!loaded.current) {
		searchStore.dispatch(setStartupLibrary(libs));
		loaded.current = true;
	}

	return null;
};

export default SearchPreloader;
