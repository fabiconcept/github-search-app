import { formatLastUpdated, formatNumber } from "@/lib/helper";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface RepositoryCard {
    avatar_url: string;
    full_name: string;
    description?: string | null;
    language: string;
    stargazers_count: number;
    updated_at: string;
}

export default function RepoCard(params:RepositoryCard) {
    return (
        <div className="p-4 w-full flex-1 bg-black/20 shadow-lg border border-black/10 dark:border-white/10 hover:border-green-700/50 hover:scale-105 active:scale-95 hover:shadow-green-600/10 rounded-lg text-xs flex gap-3 items-center">
            <div className="h-16 w-16 border dark:border-white/30 border-black/30 rounded-lg overflow-hidden">
                <Image
                    src={params.avatar_url}
                    alt="user"
                    height={250}
                    width={250}
                    className="w-full object-cover"
                />
            </div>
            <div className="py-2 grid flex-1 gap-2">
                <span className="font-semibold text-green-500">{params.full_name}</span>
                <span className="w-[80%] truncate">{params.description}</span>
                <div className="flex items-center gap-8 text-[0.65rem] dark:text-white/50 text-black/50">
                    <div className="flex items-center gap-1 relative after:absolute after:h-[4px] after:w-[4px] dark:after:bg-white/30 after:bg-black/30 after:right-[-1.15rem] after:rounded-full">
                        <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                        <span>{params.language}</span>
                    </div>
                    <div className="flex items-center gap-1  relative after:absolute after:h-[4px] after:w-[4px] dark:after:bg-white/30 after:bg-black/30 after:right-[-1.15rem] after:rounded-full">
                        <FaStar />
                        <span>{formatNumber(params.stargazers_count)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>{formatLastUpdated(params.updated_at)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}