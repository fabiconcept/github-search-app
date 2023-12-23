import { Repository, SearchResponse, Topic, User } from "@/lib/Interfaces";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"; 
import { fetchRepositories, fetchTopics, fetchUsers } from "../thunk";
import { Categories } from "@/lib/enums";

type loadingState = 'idle' | 'pending' | 'succeeded' | 'failed';
type initial<T> = {
    loading: loadingState;
    hasError: boolean;
    response: SearchResponse<T> | null
}

type CategoryTemplate = keyof typeof Categories;
type CategoriesState = {
    value: CategoryTemplate
};
const CategoryInitialState: CategoriesState = {
    value: "ALL"
}

const initialStateUsers:initial<User> = {
    loading: 'idle',
    hasError: false,
    response: null
}

const initialStateRepositories:initial<Repository> = {
    loading: 'idle',
    hasError: false,
    response: null
}

const initialStateTopics:initial<Topic> = {
    loading: 'idle',
    hasError: false,
    response: null
}

const SearchResultUsers = createSlice({
    name: "users",
    initialState: initialStateUsers,
    reducers: {
        clearUsers: (state) =>{
            state.response = null;
            state.hasError = false;
            state.loading = "idle";
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading = "pending";
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.response = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state) => {
            state.loading = "failed";
            state.hasError = true;
        })
    },
});

const SearchResultRepositories = createSlice({
    name: "repositories",
    initialState: initialStateRepositories,
    reducers: {
        clearRepo: (state) =>{
            state.response = null;
            state.hasError = false;
            state.loading = "idle";
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchRepositories.pending, (state)=>{
            state.loading = "pending";
        });
        builder.addCase(fetchRepositories.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.response = action.payload;
        });
        builder.addCase(fetchRepositories.rejected, (state) => {
            state.loading = "failed";
            state.hasError = true;
        })
    },
});

const SearchResultTopics = createSlice({
    name: "topics",
    initialState: initialStateTopics,
    reducers: {
        clearTopics: (state) =>{
            state.response = null;
            state.hasError = false;
            state.loading = "idle";
        }
    },
    extraReducers: (builder)=> {
        builder.addCase(fetchTopics.pending, (state)=>{
            state.loading = "pending";
        });
        builder.addCase(fetchTopics.fulfilled, (state, action) => {
            state.loading = "succeeded";
            state.response = action.payload;
        });
        builder.addCase(fetchTopics.rejected, (state) => {
            state.loading = "failed";
            state.hasError = true;
        })
    },
});

const CategoryState = createSlice({
    name: "category",
    initialState: CategoryInitialState,
    reducers: {
        updateCategory: (state, action:PayloadAction<CategoryTemplate>) =>{
            state.value = action.payload;
        }
    }
})

export const { clearUsers } = SearchResultUsers.actions
export const { clearRepo } = SearchResultRepositories.actions
export const { clearTopics } = SearchResultTopics.actions
export const { updateCategory } = CategoryState.actions;

export const SearchResultRepositoriesSlice = SearchResultRepositories.reducer
export const SearchResultUsersSlice = SearchResultUsers.reducer
export const SearchResultTopicsSlice = SearchResultTopics.reducer
export const CategoryStateSlice = CategoryState.reducer