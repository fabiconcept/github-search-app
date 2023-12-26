import Image from "next/image";
import Link from "next/link";

interface FollowerProp {
    login: string;
    avatar: string
}

export default function Follower(prop:FollowerProp) {
    return (
        <div className="flex flex-col items-center gap-1 sm:py-0 py-2">
            <Link href={`./${prop.login}`} className="h-12 w-12 hover:bg-green-500/50 hover:scale-[1.075] active:scale-90 rounded-full border dark:border-white/30 border-black/30 p-1 overflow-hidden">
                <div className="rounded-full overflow-hidden h-full w-full bg-white/10">
                    <Image
                        src={prop.avatar}
                        alt={prop.login}
                        height={200}
                        width={200}
                        className="w-full object-cover"
                    />
                </div>
            </Link>
            <div className="max-w-[2.75rem] truncate text-[0.65rem] sm:block hidden">{prop.login}</div>
        </div>
    )
}