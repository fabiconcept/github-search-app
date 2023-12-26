import { getRepositories, getTopics, getUsers } from "@/lib/Octokit";
import { Params } from "@/lib/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk(
    "users/fetchUser", 
    async (param: Params) => {
        const response = await getUsers(param);
        return response;
    }
);

const fetchRepositories = createAsyncThunk(
    "repositories/fetchRepositories", 
    async (param: Params) => {
        const response = await getRepositories(param);
        return response;
    }
);

const fetchTopics = createAsyncThunk(
    "repositories/fetchTopics", 
    async (param: Params) => {
        const response = await getTopics(param);
        return response;
    }
);


export { fetchRepositories, fetchUsers, fetchTopics };