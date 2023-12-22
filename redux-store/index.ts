import { configureStore } from "@reduxjs/toolkit";
import { SearchResultRepositoriesSlice, SearchResultTopicsSlice, SearchResultUsersSlice } from "./slices";

const store = configureStore({
    reducer: {
        UsersResults: SearchResultUsersSlice,
        TopicsResults: SearchResultTopicsSlice,
        RepositoriesResults: SearchResultRepositoriesSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;