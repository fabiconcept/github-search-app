import Image from "next/image";
import { FaBook, FaUsers } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

interface UserCardParams {
    avatar_img: string;
    id: number; 
    login: string;
    url: string;
    followers_url: string;
    site_admin: boolean;
    repos_url: string;
}

export default function UserCard() {
    return (
        <div className="p-2 min-w-[15rem] flex-1 sm:max-w-[15rem] max-w-[20rem] bg-black/20 shadow-lg border border-black/10 dark:border-white/10 hover:border-green-700/50 hover:scale-105 active:scale-95 hover:shadow-green-600/10 rounded-lg text-xs">
            <div className="overflow-hidden rounded-lg w-full aspect-auto grid place-items-center relative">
                <Image
                    src={"https://github-lobby.sirv.com/ape01.jpg"}
                    alt="user"
                    height={250}
                    width={250}
                    className="w-full sm:h-[10rem] object-cover"
                />
                <div className="absolute top-0 h-full w-full bg-gradient-to-t from-[rgb(15,15,15)] via-transparent">

                </div>
            </div>
            <div className="mx-3 py-3 flex items-center justify-between border-b border-white/10">
                <span className="flex gap-1">
                    <span className="text-green-500 font-semibold">@Hello</span>
                </span>
                <div className="cursor-pointer" title="Open in GitHub">
                    <FaArrowUpRightFromSquare />
                </div>
            </div>
            <div className="mx-3 py-3 flex items-center text-center justify-between last:border-none border-b border-white/10 opacity-50  text-[0.65rem]">
                <span>Shangai, China</span>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1"><FaBook className="text-md" />  <span>310</span></span>
                    <span className="flex items-center gap-1"><FaUsers className="text-md" /> <span>4K</span></span>
                </div>
            </div>
        </div>
    )
}