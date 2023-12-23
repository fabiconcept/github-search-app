"use client"
import { useSelector } from "react-redux";
import UserCard from "./cards/UserCard";
import { RootState } from "@/redux-store";
import { useEffect, useState } from "react";
import { User } from "@/lib/Interfaces";

export default function UserCollection() {
    const { UsersResults } = useSelector((state: RootState) => state);
    const [displayUsers, setDisplayUsers] = useState<User[]>([]);

    useEffect(() => {
        if(UsersResults.response === null) return;
        setDisplayUsers(UsersResults.response?.items);
    }, [UsersResults.response]);


    return (
        <div className="w-full min-h-[20rem]">
            <div className=" grid sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[2rem_1rem] mx-auto place-items-center">
                {displayUsers.map((user) => (<UserCard
                    key={user.node_id}
                />))}
            </div>
        </div>
    )
}