import Image from "next/image";

export default function TopSection() {
    return (
        <section className="p-12 px-24 grid gap-6 border-b dark:border-white/10 border-black/10 topper">
            <span className="uppercase font-semibold text-xs opacity-70">GitHub Repositories</span>
            <div className="flex items-center gap-1">
                <Image
                    src={"https://github-lobby.sirv.com/github-icon-1.svg"}
                    alt="github logo"
                    height={50}
                    width={50}
                    className="h-10 select-none pointer-events-none dark:invert-[1] opacity-70"
                />
                <h2 className="text-4xl font-semibold text-green-500">GitHub Explorer</h2>
            </div>
            <span className="text-xs opacity-70 max-w-2xl">Explore GitHub&apos;s vast collection of repositories, discover talented users, and find solutions to your coding challenges. Search across projects, users, issues, and more to uncover the perfect assets for your next project.</span>
        </section>
    )
}