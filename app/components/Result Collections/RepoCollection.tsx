import RepoCard from "./cards/RepoCard";

export default function RepoCollection() {
    return (
        <div className="w-full grid sm:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[1rem] mx-auto place-items-center">
            <RepoCard />
            <RepoCard />
            <RepoCard />
            <RepoCard />
        </div>
    )
}