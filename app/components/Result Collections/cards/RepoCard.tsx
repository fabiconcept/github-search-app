import { formatLastUpdated, formatNumber, getLanguageColor } from "@/lib/helper";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

interface RepositoryCard {
    avatar_url: string;
    full_name: string;
    description?: string | null;
    language: string;
    stargazers_count: number;
    updated_at: string;
    repo_url: string
}

export default function RepoCard(params:RepositoryCard) {
    return (
        <Link href={params.repo_url} title="Open in github" target="_blank"  className="sm:px-4 sm:py-4 hover:-translate-y-1 px-4 py-2 w-full flex-1 bg-white dark:bg-black/20 group shadow-lg border border-black/10 dark:border-white/10 hover:border-green-700/50 hover:bg-white/50 cursor-pointer group dark:hover:bg-white/5 active:scale-95 hover:shadow-green-600/10 rounded-lg text-xs flex gap-3 items-center relative overflow-hidden">
            <div className="h-16 w-16 border dark:border-white/30 border-black/30 rounded-lg overflow-hidden">
                <Image
                    src={params.avatar_url}
                    alt={`${params.full_name} photo`}
                    height={250}
                    width={250}
                    className="w-full object-cover"
                    priority
                />
            </div>
            <div className="py-2 grid flex-1 gap-2 w-full">
                <span className="font-semibold text-green-500 max-w-[90%] truncate">{params.full_name}</span>
                <span className="w-[80%] truncate sm:text-sm text-xs">{params.description ?? (<>&#8203;</>)}</span>
                <div className="flex items-center gap-8 sm:text-[0.65rem] text-[0.55rem] dark:text-white/50 text-black/50">
                    {params.language && <div className="flex items-center gap-1 relative after:absolute after:h-[4px] after:w-[4px] dark:after:bg-white/30 after:bg-black/30 after:right-[-1.15rem] after:rounded-full">
                        <div className="h-3 w-3 border rounded-full" style={{backgroundColor:  `${getLanguageColor(params.language)}`}}></div>
                        <span>{params.language}</span>
                    </div>}
                    <div className="flex items-center gap-1  relative after:absolute after:h-[4px] after:w-[4px] dark:after:bg-white/30 after:bg-black/30 after:right-[-1.15rem] after:rounded-full">
                        <FaStar />
                        <span>{formatNumber(params.stargazers_count)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>{formatLastUpdated(params.updated_at)}</span>
                    </div>
                </div>
            </div>
            <span className="group-hover:grid hidden absolute right-0 h-full bg-gradient-to-r from-transparent to-green-400/10 hover:to-green-400/30 hover:animate-none cursor-pointer place-items-center w-[6rem] animate-pulse">
                <FaArrowRight className="sm:text-xl" />
            </span>
        </Link>
    )
}