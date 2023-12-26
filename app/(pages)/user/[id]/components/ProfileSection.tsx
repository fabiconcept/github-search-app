import Image from "next/image";
import GoBack from "./GoBack";
import { formatNumber } from "@/lib/helper";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

interface ProfileProps {
    login: string;
    name: string | null;
    public_repos: number;
    followers: number;
    following: number;
    bio?: string | null;
    type: string;
    company?: string | null;
    avatar: string
}

export default function ProfileSection(prop:ProfileProps) {
    return (
        <section className="flex flex-col sm:h-full rounded-lg bg-black/5 dark:bg-white/5 sm:w-fit w-full p-3 border border-black/5 dark:border-white/5 sm:max-w-[20rem] mx-w-full relative">
            <div className="flex items-center justify-between gap-6 text-xs min-w-[15rem] z-20">
                <GoBack />
                <span>@{prop.login}</span>
                <Link href={"../"} className="cursor-pointer active:scale-90 hover:scale-125">
                    <FaHome />
                </Link>
            </div>
            <div className="absolute h-full w-full overflow-hidden rounded-lg top-0 opacity-10 left-0">
                <Image
                    src={prop.avatar}
                    alt={`${prop.login}`}
                    height={500}
                    width={500}
                    className="object-cover h-full"
                />
            </div>
            <div className="absolute h-full w-full overflow-hidden rounded-lg top-0 left-0 backdrop-blur-lg z-10">

            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-4 mt-6 mb-3 w-full z-20">
                <section className="flex flex-col items-center gap-4 w-full">
                    <div className="p-1 rounded-full border-2 border-black/50 dark:border-white/50 h-24 w-24">
                        <div className="bg-white rounded-full overflow-hidden w-full h-full gird place-items-center">
                            <Image
                                src={prop.avatar}
                                alt={`${prop.login}`}
                                height={500}
                                width={500}
                                className="object-cover w-full"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="flex flex-col items-center">
                            <span className="text-sm">{formatNumber(prop.public_repos)}</span>
                            <span className="text-[0.65rem] opacity-50">Repos</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm">{formatNumber(prop.followers)}</span>
                            <span className="text-[0.65rem] opacity-50">Followers</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm">{formatNumber(prop.following)}</span>
                            <span className="text-[0.65rem] opacity-50">Following</span>
                        </div>
                    </div>
                    <div className="grid w-full sm:text-left text-center">
                        <span className="font-semibold text-green-500">{prop.name}</span>
                        <span className="text-xs opacity-50">{prop.company ? `${prop.company} - (company)` : prop.type}</span>
                    </div>
                    <div className="grid w-full sm:text-left text-center">
                        <span className="text-xs line-clamp-5 sm:max-w-[90%]">
                            {prop.bio ? prop.bio : "No bio yet."}
                        </span>
                    </div>
                </section>
            </div>
        </section>
    );
}