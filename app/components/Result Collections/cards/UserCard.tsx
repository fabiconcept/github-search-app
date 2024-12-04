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
        <Link href={`/user/${params.login}`} className="group p-2 min-w-[15rem] hover:-translate-y-1 flex-1 sm:max-w-[15rem] max-w-[18rem] bg-white shadow-lg border border-black/10 dark:border-white/10 hover:border-green-700/50 hover:bg-white/50 dark:hover:bg-white/5 active:scale-95 hover:shadow-green-600/10 rounded-lg text-xs">
            <div className="overflow-hidden rounded-lg w-full aspect-auto grid place-items-center relative">
                <Image
                    src={params.avatar_img}
                    alt={`${params.login} photo`}
                    height={250}
                    width={250}
                    className="w-full sm:h-[10rem] object-cover"
                    priority
                />
                <div className="absolute top-0 h-full w-full bg-gradient-to-t dark:from-[rgb(15,15,15)] from-[rgb(15,15,15,0.2)] via-transparent">

                </div>
            </div>
            <div className="mx-3 py-3 flex items-center justify-between border-b dark:border-white/10 border-black/10">
                <span className="flex gap-1 w-full">
                    <span className="text-green-500 font-semibold max-w-[90%] truncate">@{params.site_admin ? "You" : params.login}</span>
                </span>
                <span className="cursor-pointer group-hover:text-green-500 group-hover:scale-125" title="Open in GitHub">
                    <FaArrowUpRightFromSquare />
                </span>
            </div>
            <div className="mx-3 py-3 flex items-center text-center justify-center uppercase last:border-none border-b border-white/10 opacity-50  text-[0.65rem]">
                <span>{params.type}</span>
            </div>
        </Link>
    )
}