import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Library } from "@prisma/client";

export const libraryApi = createApi({
	reducerPath: "libraryApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/" }),
	tagTypes: ["library"],
	endpoints: (builder) => ({
		search: builder.query<Library[], string>({
			query: (q) => `search?name=${q}`,
			providesTags: (result, error, search) => [{ type: "library", search }],
		}),
	}),
});
