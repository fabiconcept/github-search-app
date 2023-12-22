import RepoCollection from "./Result Collections/RepoCollection";
import TopicCollection from "./Result Collections/TopicCollection";
import UserCollection from "./Result Collections/UserCollection";

export default function ResultsSection() {
    return (
        <section className="p-6 flex flex-col gap-8 w-full">
            <UserCollection />
            <RepoCollection />
            <TopicCollection />
        </section>
    )
}