"use client";

import { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui/Input";
import { AppDispatch, RootState } from "@/redux/search";
import { setSearch } from "@/redux/search/searchSlice";
import { Library } from "@prisma/client";
import LibraryTable from "./LibraryTable";
import { libraryApi } from "@/redux/search/libraryApi";
import type { TypedUseSelectorHook } from "react-redux";

interface LibrarySearchInput {}

const LibrarySearchInput: FC<LibrarySearchInput> = ({}) => {
	const useAppDispatch: () => AppDispatch = useDispatch;
	const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
	const dispatch = useAppDispatch();
	const search = useAppSelector((state) => state.search.search);
	const startupLibrary = useAppSelector((state) => state.search.startupLibrary);

	const data = useAppSelector(
		(state) => state.libraryApi.queries[`search("${search}")`]?.data as Library[]
	);

	useEffect(() => {
		dispatch(libraryApi.endpoints.search.initiate(search));
	}, [dispatch, search]);

	return (
		<>
			<div className="flex flex-row-reverse justify-center w-full sticky top-0">
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<Input
						type="text"
						placeholder="Search a library"
						value={search}
						onChange={(e) => {
							let s = e.target.value.slice(0, 35); // Limit the search to 50 characters
							dispatch(setSearch(s));
						}}
					/>
				</div>
				<br />
				<LibraryTable
					libs={search.length ? data ?? [] : startupLibrary}
				/>
			</div>
		</>
	);
};

export default LibrarySearchInput;
