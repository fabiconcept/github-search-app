"use client"
import { formatLastUpdated } from "@/lib/helper";
import { FaClock } from "react-icons/fa";

interface TopicCard {
    name: string;
    short_description: string;
    updated_at: string
}

export default function TopicCard(params:TopicCard) {
    return (
        <div className="p-4 w-full flex-1 bg-black/20 shadow-lg border border-black/10 dark:border-white/10 hover:border-green-700/50 hover:scale-105 active:scale-95 hover:shadow-green-600/10 rounded-lg text-xs flex gap-3 items-center">
            <div className="py-2 grid flex-1 gap-2">
                <span className="font-semibold text-green-500">{params.name}</span>
                <span className="line-clamp-2">{params.short_description}</span>
                <div className="flex items-center gap-8 text-[0.65rem] dark:text-white/50 text-black/50">
                    <div className="flex items-center gap-1">
                        <FaClock />
                        <span>{formatLastUpdated(params.updated_at)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}