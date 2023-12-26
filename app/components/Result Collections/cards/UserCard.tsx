"use client"

import Image from "next/image";
import Link from "next/link";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface UserCardParams {
    avatar_img: string;
    id: number; 
    login: string;
    url: string;
    site_admin: boolean;
    type: string
}

export default function UserCard(params:UserCardParams) {
    return (
        <div className="p-2 min-w-[15rem] flex-1 sm:max-w-[15rem] max-w-[20rem] bg-black/20 shadow-lg border border-black/10 dark:border-white/10 hover:border-green-700/50 hover:scale-105 active:scale-95 hover:shadow-green-600/10 rounded-lg text-xs">
            <div className="overflow-hidden rounded-lg w-full aspect-auto grid place-items-center relative">
                <Image
                    src={params.avatar_img}
                    alt={`${params.login} photo`}
                    height={250}
                    width={250}
                    className="w-full sm:h-[10rem] object-cover"
                    priority
                />
                <div className="absolute top-0 h-full w-full bg-gradient-to-t from-[rgb(15,15,15)] via-transparent">

                </div>
            </div>
            <div className="mx-3 py-3 flex items-center justify-between border-b border-white/10">
                <span className="flex gap-1 w-full">
                    <span className="text-green-500 font-semibold max-w-[90%] truncate">@{params.site_admin ? "You" : params.login}</span>
                </span>
                <Link href={`/user/${params.login}`} className="cursor-pointer hover:text-green-500 hover:scale-125" title="Open in GitHub">
                    <FaArrowUpRightFromSquare />
                </Link>
            </div>
            <div className="mx-3 py-3 flex items-center text-center justify-center uppercase last:border-none border-b border-white/10 opacity-50  text-[0.65rem]">
                <span>{params.type}</span>
            </div>
        </div>
    )
}