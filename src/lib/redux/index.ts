import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./searchSlice";
import { libraryApi } from "./libraryApi";

export const searchStore = configureStore({
	reducer: {
		search: searchReducer,
		libraryApi: libraryApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(libraryApi.middleware),
});

export type RootState = ReturnType<typeof searchStore.getState>;
export type AppDispatch = typeof searchStore.dispatch;
