import { NextRequest, NextResponse } from "next/server";

import libraryData from "../../../lib/data";
import { HOST_URL } from "@/helpers/constants";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get("q");

  // The libQuery controls the search bar autocomplete. If there is a name, we will return the first 10 results, else everything will be displayed.
  // We load json from the static db for better performance.
  // A new solution will be found later.
  if (query) {
    const filteredLibs = libraryData.filter((lib) =>
      lib.name.toLowerCase().includes(query.toLowerCase())
    );
    return NextResponse.json(filteredLibs.slice(0, 10), {
      status: 200,
    }); // return first 10 results
  }

  // if no query is provided, we will return all the libraries
  // todo - implement link to library page. We will use the search params to go to a dynamic page for that library and its
  return NextResponse.json(libraryData, {
    status: 200,
  });
}
