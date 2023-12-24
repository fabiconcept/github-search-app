import { configureStore } from "@reduxjs/toolkit";
import { CategoryStateSlice, SearchResultRepositoriesSlice, SearchResultTopicsSlice, SearchResultUsersSlice, searchQueryTextSlice } from "./slices";

const store = configureStore({
    reducer: {
        UsersResults: SearchResultUsersSlice,
        TopicsResults: SearchResultTopicsSlice,
        RepositoriesResults: SearchResultRepositoriesSlice,
        Category: CategoryStateSlice,
        searchQuery: searchQueryTextSlice,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;