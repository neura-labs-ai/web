"use client";

import React, { FC, useState } from "react";
import { useRouter } from "next/navigation";
import { JsonSearchData } from "@/lib/data";
import LibraryTable from "./LibraryTable";

interface LibrarySearchInput {
	libs: JsonSearchData;
}

const LibrarySearchInput: FC<LibrarySearchInput> = ({ libs }) => {
	const router = useRouter();
	const [search, setSearch] = useState("");

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
			<div className="flex flex-row-reverse justify-center w-full sticky top-0 pt-10">
				{/*<div className="grid w-full max-w-sm items-center gap-1.5">*/}
				{/*	<form onSubmit={onSearch}>*/}
				{/*		<Input*/}
				{/*			type="text"*/}
				{/*			placeholder="Search a library"*/}
				{/*			value={search}*/}
				{/*			onChange={(e) => setSearch(e.target.value.slice(0, 35))}*/}
				{/*		/>*/}
				{/*	</form>*/}
				{/*</div>*/}
				{/*<br />*/}
				<LibraryTable data={libs} />
			</div>
		</>
	);
};

export default LibrarySearchInput;
