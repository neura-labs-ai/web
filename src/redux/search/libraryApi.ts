import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Library } from "@prisma/client";
import { HOST_URL } from "@/helpers/constants";

export const libraryApi = createApi({
	reducerPath: "libraryApi",
	baseQuery: fetchBaseQuery({ baseUrl: `${HOST_URL}/api/` }),
	tagTypes: ["library", "libraryData"],
	endpoints: (builder) => ({
		search: builder.query<Library[], string>({
			query: (q) => `search?name=${q}`,
			providesTags: (result, error, search) => [{ type: "library", search }],
		}),
		searchUnique: builder.query<Library, string>({
			query: (q) => `search?nameUnique=${q}`,
			providesTags: (result, error, search) => [{ type: "libraryData", search }],
		})
	}),
});
