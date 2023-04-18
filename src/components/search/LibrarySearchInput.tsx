"use client";

import React, { FC, useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../ui/Input";
import { Library } from "@prisma/client";
import type { TypedUseSelectorHook } from "react-redux";
import { useRouter } from "next/navigation";
import { AppDispatch, RootState } from "@/lib/redux";
import { libraryApi } from "@/lib/redux/libraryApi";
import { setSearch } from "@/lib/redux/searchSlice";
import LibraryTable from "./LibraryTable";
import { JsonSearchData } from "@/lib/data";
import Link from "next/link";

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
