"use client"
import { FaSearch } from "react-icons/fa";
import { SearchContext } from "../SearchSection";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "@/redux-store";
import { fetchRepositories, fetchTopics, fetchUsers } from "@/redux-store/thunk";
import { getRepositoriesResults, getTopicsResults, getUsersResults, setSearchQuery } from "@/redux-store/slices";

export default function SearchElement() {
    const contextData = useContext(SearchContext);
    const dispatch= useDispatch<AppDispatch>();
    const TopicsResults = useSelector(getTopicsResults);
    const RepositoriesResults = useSelector(getRepositoriesResults);
    const UsersResults = useSelector(getUsersResults);

    const isLoading = UsersResults.loading === "pending" || RepositoriesResults.loading === "pending" || TopicsResults.loading === "pending";
    const [searchQuery, setQearchQuery] = useState<string>("");

    const performSearch = (): void => {
        if(searchQuery.length === 0) return;
        if (isLoading) return;
        switch(contextData?.category){
            case "USERS":
                dispatch(fetchUsers({q: searchQuery}));
                break;
            case "REPOSITORIES":
                dispatch(fetchRepositories({q: searchQuery}));
                break;
            case "TOPICS":
                dispatch(fetchTopics({q: searchQuery}));
                break;
            default:
                dispatch(fetchUsers({q: searchQuery}));
                dispatch(fetchRepositories({q: searchQuery}));
                dispatch(fetchTopics({q: searchQuery}));
        }
        dispatch(setSearchQuery(searchQuery));
    }

    return (
        <div className="flex items-stretch gap-3 flex-1">
            <input 
                type="text"
                placeholder={`Search ${(contextData?.category)?.toLowerCase()} github`} 
                className="px-8 py-4 flex-1 bg-transparent outline-none border-none peer" 
                onChange={(e)=>setQearchQuery(e.target.value)}
                value={searchQuery}
            />
            <div className={`${searchQuery.length > 0 ? "dark:hover:bg-white/10 hover:bg-black/10 cursor-pointer group" : "pointer-events-none"} border-l dark:border-white/10 border-black/10 grid place-items-center px-6 group-focus-within:border-black dark:group-focus-within:border-white`} onClick={performSearch}>
                {!isLoading && <FaSearch className={`${searchQuery.length > 0 ? "peer-placeholder-shown:opacity-10 text-green-500 group-hover:scale-125 group-active:scale-90 group-active:rotate-[-45deg]" : "opacity-10 text-green-200"}`} />}
                {isLoading && <div role="status">
                    <svg aria-hidden="true" className="w-7 h-7 text-gray-200 animate-spin dark:text-gray-500 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>}
            </div>
        </div>
    )
}