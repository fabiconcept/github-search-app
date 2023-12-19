import Image from "next/image";
import { FaBook, FaUsers } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function UserCard() {
    return (
        <div className="p-2 min-w-[15rem] flex-1 max-w-[20rem] bg-black/20 shadow-lg border border-black/10 dark:border-white/10 rounded-lg text-xs">
            <div className="overflow-hidden rounded-lg w-full aspect-auto grid place-items-center">
                <Image
                    src={"https://github-lobby.sirv.com/ape01.jpg"}
                    alt="user"
                    height={250}
                    width={250}
                    className="w-full object-cover"
                />
            </div>
            <div className="mx-3 py-3 flex items-center justify-between border-b border-white/10">
                <span className="flex gap-1">
                    <span className="text-green-500 font-semibold">@Hello</span>
                    <span className="opacity-50">World</span>
                </span>
                <div className="cursor-pointer" title="Open in GitHub">
                    <FaArrowUpRightFromSquare />
                </div>
            </div>
            <div className="mx-3 py-5 flex items-center text-center justify-center last:border-none border-b border-white/10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, mollitia!
            </div>
            <div className="mx-3 py-3 flex items-center text-center justify-between last:border-none border-b border-white/10 opacity-50">
                <span>Shangai, China</span>
                <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1"><FaBook className="text-md" />  <span>310</span></span>
                    <span className="flex items-center gap-1"><FaUsers className="text-lg" /> <span>4K</span></span>
                </div>
            </div>
        </div>
    )
}