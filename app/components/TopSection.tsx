import Image from "next/image";

export default function TopSection() {
    return (
        <section className="p-12 sm:px-24 px-6 grid gap-6 border-b dark:border-white/10 border-black/10 topper">
            <span className="uppercase font-semibold text-xs opacity-70">GitHub Repositories</span>
            <div className="flex items-center gap-1">
                <Image
                    src={"https://github-lobby.sirv.com/github-icon-1.svg"}
                    alt="github logo"
                    height={50}
                    width={50}
                    className="sm:h-10 h-6 w-auto object-contain select-none pointer-events-none dark:invert-[1] opacity-70"
                />
                <h2 className="sm:text-4xl text-2xl font-semibold text-green-500">GitHub Explorer</h2>
            </div>
            <div className="text-xs opacity-70 sm:max-w-2xl max-w-[80%]">Explore GitHub&apos;s vast collection of repositories, discover talented users, and find solutions to your coding challenges. Search across projects, users, issues, and more to uncover the perfect assets for your next project.</div>
        </section>
    )
}