import { Octokit } from "octokit";

export const authToken: string = process.env.NEXT_PUBLIC_GIT_AUTH_TOKEN!

export const octokit = new Octokit({
    auth: `${authToken}`
});

export const testRun = async () => {
    const response = await octokit.request("GET /search/repositories", {
        q: "fabiconcept"
    });

    return response.data
}
