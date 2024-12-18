"use client"

import RepoCollection from "./Result Collections/RepoCollection";
import TopicCollection from "./Result Collections/TopicCollection";
import UserCollection from "./Result Collections/UserCollection";
import { useSelector } from "react-redux";
import { getCategory, getRepositoriesResults, getTopicsResults, getUsersResults } from "@/redux-store/slices";
import { useMemo } from "react";
import Image from "next/image";

export default function ResultsSection() {
    const Category = useSelector(getCategory);
    const UsersResults = useSelector(getUsersResults);
    const RepositoriesResults = useSelector(getRepositoriesResults);
    const TopicsResults = useSelector(getTopicsResults);
    const isLoaded = UsersResults.loading === "succeeded" && RepositoriesResults.loading === "succeeded" && TopicsResults.loading === "succeeded";
    const isIdle = UsersResults.loading === "idle" || RepositoriesResults.loading === "idle" || TopicsResults.loading === "idle";
    const isFailed = UsersResults.loading === "failed" && RepositoriesResults.loading === "failed" && TopicsResults.loading === "failed";

    const NoResult =useMemo(()=>{
        return isLoaded && UsersResults.response?.total_count === 0 && RepositoriesResults.response?.total_count === 0 && TopicsResults.response?.total_count === 0
    }, [UsersResults, RepositoriesResults, TopicsResults, isLoaded]);


    return (
        <section className="sm:p-6 p-3 flex flex-col gap-8 w-full flex-1">
            {!isFailed && !isIdle && !NoResult && (Category.value === "ALL" || Category.value === "USERS") && <UserCollection />}
            {!isFailed && !isIdle && !NoResult && (Category.value === "ALL" || Category.value === "REPOSITORIES") &&<RepoCollection />}
            {!isFailed && !isIdle && !NoResult && (Category.value === "ALL" || Category.value === "TOPICS") &&<TopicCollection />}
            {isIdle && <div className="h-full min-h-[20rem] flex flex-col items-center justify-center pointer-events-none select-none opacity-70">
                <Image
                    src={"https://github-lobby.sirv.com/welcome.svg"}
                    alt="Welcome svg"
                    height={300}
                    width={500}
                    className="w-[clamp(10rem,30%,25rem)] h-auto object-contain dark:opacity-30"
                />
            </div>}
            {NoResult && <div className="h-full min-h-[20rem] grid place-items-center pointer-events-none select-none opacity-70">
                <Image
                    src={"https://github-lobby.sirv.com/noresult.svg"}
                    alt="Welcome svg"
                    height={300}
                    width={500}
                    className="w-[clamp(10rem,30%,25rem)] h-auto object-contain dark:opacity-30"
                />
                <span>No Results</span>
            </div>}
            {isFailed && <div className="h-full min-h-[20rem] grid place-items-center pointer-events-none select-none opacity-70">
                <Image
                    src={"https://github-lobby.sirv.com/error.svg"}
                    alt="Welcome svg"
                    height={300}
                    width={500}
                    className="w-[clamp(10rem,30%,25rem)] h-auto object-contain dark:opacity-30"
                />
                <span>Opps...An Error Occured</span>
            </div>}
        </section>
    )
}