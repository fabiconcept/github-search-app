import TopicCard from "./cards/TopicCard";

export default function TopicCollection() {
    return (
        <div className="w-full grid sm:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[1rem] mx-auto place-items-center">
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
        </div>
    )
}