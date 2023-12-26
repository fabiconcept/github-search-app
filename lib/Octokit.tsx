import { Octokit } from "octokit";
import { GitHubUser, Repository, SearchResponse, Topic, User } from "./Interfaces";
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
        per_page: 15
    });

    return response.data
} 

export const getRepositories = async (params:Params):Promise<SearchResponse<Repository>> => {
    const response = await octokit.request("GET /search/repositories", {
        q: params.q,
        sort: "updated",
        page: params.currentPage,
        per_page: 15
    });

    return response.data
} 

export const getTopics = async (params:Params):Promise<SearchResponse<Topic>> => {
    const response = await octokit.request("GET /search/topics", {
        q: params.q,
        sort: "updated",
        page: params.currentPage,
        per_page: 15
    });

    return response.data
} 

export const getUser = async (params: string):Promise<[GitHubUser | undefined, boolean, number]> => {
    let data:GitHubUser | undefined;
    let error: boolean = false;
    let status: number;

    try {
        const response = await octokit.rest.users.getByUsername({
            username: params
        });

        const res = response.data;
        status = response.status;
        data = res;
    } catch (error) {
        status = 404;
        error = true;
    }
    
    return [data, error, status];
}
