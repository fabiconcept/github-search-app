import { Repository, SearchResponse, Topic, User } from "@/lib/Interfaces";
import { Params } from "@/lib/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit"; 

type initial<T> = {
    isLoading: boolean;
    hasError: boolean;
    response: SearchResponse<T> | null
}

const initialStateUsers:initial<User> = {
    isLoading: false,
    hasError: false,
    response: null
}

const initialStateRepositories:initial<Repository> = {
    isLoading: false,
    hasError: false,
    response: null
}

const initialStateTopics:initial<Topic> = {
    isLoading: false,
    hasError: false,
    response: null
}

const SearchResultUsers = createSlice({
    name: "Users",
    initialState: initialStateUsers,
    reducers: {
        initiate: (state, action:PayloadAction<SearchResponse<User>>) =>{
            console.log(action.payload);
        },
        setLoadingState: (state, action:PayloadAction<boolean>) =>{
            state.isLoading = action.payload;
        },
        setErrorState: (state, action:PayloadAction<boolean>) =>{
            state.hasError = action.payload;
        }
    }
});

const SearchResultRepositories = createSlice({
    name: "Repositories",
    initialState: initialStateRepositories,
    reducers: {
        initiate: (state) =>{
            console.log(state);
        },
        changePage: (state, action:PayloadAction) =>{
            console.log(action.payload);
        },
        setLoadingState: (state, action:PayloadAction<boolean>) =>{
            state.isLoading = action.payload;
        },
        setErrorState: (state, action:PayloadAction<boolean>) =>{
            state.hasError = action.payload;
        }
    }
});

const SearchResultTopics = createSlice({
    name: "Topics",
    initialState: initialStateTopics,
    reducers: {
        initiate: (state, action:PayloadAction) =>{
            console.log(action.payload);
        },
        changePage: (state, action:PayloadAction) =>{
            console.log(action.payload);
        },
        setLoadingState: (state, action:PayloadAction<boolean>) =>{
            state.isLoading = action.payload;
        },
        setErrorState: (state, action:PayloadAction<boolean>) =>{
            state.hasError = action.payload;
        }
    }
});

export const { 
    initiate: initiateUsers, 
    setErrorState:setErrorStateUsers, 
    setLoadingState: setLoadingStateUsers  
} = SearchResultUsers.actions;
export const { 
    changePage: changePageRepositories,
    initiate: initiateRepositories, 
    setErrorState:setErrorStateRepositories, 
    setLoadingState: setLoadingStateRepositories  
} = SearchResultRepositories.actions;
export const { 
    changePage: changePageTopics,
    initiate: initiateTopics, 
    setErrorState:setErrorStateTopics, 
    setLoadingState: setLoadingStateTopics  
} = SearchResultTopics.actions; 

export const SearchResultRepositoriesSlice = SearchResultRepositories.reducer
export const SearchResultUsersSlice = SearchResultUsers.reducer
export const SearchResultTopicsSlice = SearchResultTopics.reducer