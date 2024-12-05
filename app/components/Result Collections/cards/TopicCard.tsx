"use client"
import { formatLastUpdated } from "@/lib/helper";
import Link from "next/link";
import { FaArrowRight, FaClock } from "react-icons/fa";

interface TopicCard {
    name: string;
    short_description: string;
    updated_at: string
    topic_url: string;
}

export default function TopicCard(params:TopicCard) {
    return (
        <div className="p-4 w-full flex-1 bg-white dark:bg-black/20 shadow-lg border border-black/10 dark:border-white/10 hover:border-green-700/50 hover:bg-white/50 dark:hover:bg-white/5 active:scale-95 hover:shadow-green-600/10 rounded-lg text-xs flex gap-3 items-center relative">
            <div className="py-2 grid flex-1 gap-2">
                <span className="font-semibold text-green-500">{params.name}</span>
                <span className="line-clamp-2">{!!params.short_description ? params.short_description : (<>&#8203;</>)}</span>
                <div className="flex items-center gap-8 text-[0.65rem] dark:text-white/50 text-black/50">
                    <div className="flex items-center gap-1">
                        <FaClock />
                        <span>{formatLastUpdated(params.updated_at)}</span>
                    </div>
                </div>
            </div>
            <Link href={params.topic_url} title="Open in github" target="_blank" className="group-hover:grid hidden absolute right-0 h-full bg-gradient-to-r from-transparent to-green-400/10 hover:to-green-400/30 hover:animate-none cursor-pointer place-items-center w-[6rem] animate-pulse">
                <FaArrowRight className="sm:text-xl" />
            </Link>
        </div>
    )
}