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

interface SearchInputProps {}

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const SearchInput: FC<SearchInputProps> = ({}) => {
	try {
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
				<Input
					type="text"
					placeholder="Search a library"
					value={search}
					onChange={(e) => dispatch(setSearch(e.target.value))}
				/>
				<br />
				<LibraryTable libs={search.length ? data ?? [] : startupLibrary} />
			</>
		);
	} catch (error) {
		console.log(error);

		return <>null</>;
	}
};

export default SearchInput;
