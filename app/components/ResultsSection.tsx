"use client"
import { RootState } from "@/redux-store";
import RepoCollection from "./Result Collections/RepoCollection";
import TopicCollection from "./Result Collections/TopicCollection";
import UserCollection from "./Result Collections/UserCollection";
import { useSelector } from "react-redux";

export default function ResultsSection() {
    const { Category } = useSelector((state: RootState) => state);

    return (
        <section className="p-6 flex flex-col gap-8 w-full">
            {(Category.value === "ALL" || Category.value === "USERS") && <UserCollection />}
            {(Category.value === "ALL" || Category.value === "REPOSITORIES") &&<RepoCollection />}
            {(Category.value === "ALL" || Category.value === "TOPICS") &&<TopicCollection />}
        </section>
    )
}