import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Library } from "@prisma/client";

export interface SearchState {
	search: string;
	startupLibrary: Library[];
}

const initialState: SearchState = {
	search: "",
	startupLibrary: [],
};

const searchSlice = createSlice({
	name: "search",
	initialState,
	reducers: {
		setSearch: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setStartupLibrary: (state, action: PayloadAction<Library[]>) => {
			state.startupLibrary = action.payload;
		},
	},
});

export const { setSearch, setStartupLibrary } = searchSlice.actions;
export default searchSlice.reducer;
