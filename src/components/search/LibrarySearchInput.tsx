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
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface LibrarySearchInput {}

const LibrarySearchInput: FC<LibrarySearchInput> = ({}) => {
	const router = useRouter();
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

	// Handle search form submission
	const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// console.log(`current search: ${search}`);

		const encodedSearch = encodeURIComponent(search);

		// console.log(`encoded search: ${encodedSearch}`);

		router.push(`/search?q=${encodedSearch}`);

		// toast.success("Search successful!");
	};

	return (
		<>
			<div className="flex flex-row-reverse justify-center w-full sticky top-0">
				<div className="grid w-full max-w-sm items-center gap-1.5">
					<form onSubmit={onSearch}>
						<Input
							type="text"
							placeholder="Search a library"
							value={search}
							onChange={(e) => {
								let s = e.target.value.slice(0, 35); // Limit the search to 50 characters
								dispatch(setSearch(s));
							}}
						/>
					</form>
				</div>
				<br />
				{/* <LibraryTable libs={search.length ? data ?? [] : startupLibrary} /> */}
			</div>
		</>
	);
};

export default LibrarySearchInput;
