import { formatLastUpdated, formatNumber, getLanguageColor } from "@/lib/helper";
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
        <div className="sm:px-4 sm:py-4 px-4 py-2 w-full flex-1 bg-black/20 shadow-lg border border-black/10 dark:border-white/10 hover:border-green-700/50 hover:bg-black/5 dark:hover:bg-white/5 active:scale-95 hover:shadow-green-600/10 rounded-lg text-xs flex gap-3 items-center">
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
                <span className="w-[80%] truncate sm:text-sm text-xs">{params.description}</span>
                <div className="flex items-center gap-8 sm:text-[0.65rem] text-[0.55rem] dark:text-white/50 text-black/50">
                    {params.language && <div className="flex items-center gap-1 relative after:absolute after:h-[4px] after:w-[4px] dark:after:bg-white/30 after:bg-black/30 after:right-[-1.15rem] after:rounded-full">
                        <div className="h-2 w-2 rounded-full" style={{backgroundColor:  `${getLanguageColor(params.language)}`}}></div>
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
        </div>
    )
}