import { Octokit } from "octokit";
import { Repository, SearchResponse, Topic, User } from "./Interfaces";
import { Params } from "./types";

const authToken: string = process.env.NEXT_PUBLIC_GIT_AUTH_TOKEN!

const octokit = new Octokit({
    auth: `${authToken}`
});

export const getUsers = async (params:Params):Promise<SearchResponse<User>> => {
    const response = await octokit.request("GET /search/users", {
        q: params.q,
        sort: "joined",
        page: params.currentPage,
        per_page: 10
    });

    return response.data
} 

export const getRepositories = async (params:Params):Promise<SearchResponse<Repository>> => {
    const response = await octokit.request("GET /search/repositories", {
        q: params.q,
        sort: "updated",
        page: params.currentPage,
        per_page: 10
    });

    return response.data
} 

export const getTopics = async (params:Params):Promise<SearchResponse<Topic>> => {
    const response = await octokit.request("GET /search/topics", {
        q: params.q,
        sort: "updated",
        page: params.currentPage,
        per_page: 10
    });

    return response.data
} 
