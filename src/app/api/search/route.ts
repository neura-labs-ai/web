import { test_lib_populate } from "@/helpers/testing";
import { NextRequest, NextResponse } from "next/server";

import libs from "../../../mock_libs.json";

export async function GET(request: NextRequest) {
	const { searchParams } = new URL(request.url);

	const name = searchParams.get("name"); // example: ?name=react

	// If no params, we will return all libraries and there data.
	// The data is preloaded using redux so this should not show, but just in case.
	if (!name) {
		return NextResponse.json(libs);
	}

	// ? Only used to populate the database with mock data
	await test_lib_populate();

	const filteredLibs = libs.filter((lib) =>
		lib.name.toLowerCase().includes(name.toLowerCase())
	);

	return NextResponse.json(filteredLibs.slice(0, 10)); // return first 10 results
}
