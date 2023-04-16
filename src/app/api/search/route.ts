import { test_lib_populate } from "@/helpers/testing";
import { NextRequest, NextResponse } from "next/server";

import libs from "../../../mock_libs";

export async function GET(request: NextRequest) {
	// ? Only used to populate the database with mock data
	await test_lib_populate(false);

	const { searchParams } = new URL(request.url);

	// console.log("searchParams", searchParams);

	const libQuery = searchParams.get("q"); // example: ?q=react
	// Used for search submit

	// The libQuery controls the search bar autocomplete. If there is a name, we will return the first 10 results, else everything will be displayed.
	// We load json from the static db for better performance.
	// A new solution will be found later.
	if (libQuery) {
		const filteredLibs = libs.filter((lib) =>
			lib.name.toLowerCase().includes(libQuery.toLowerCase())
		);
		return NextResponse.json(filteredLibs.slice(0, 10)); // return first 10 results
	}

	// todo - implement link to library page. We will use the search params to go to a dynamic page for that library and its

	return NextResponse.json(libs);
}
