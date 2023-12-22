import UserCard from "./cards/UserCard";

export default function UserCollection() {
    return (
        <div className="w-full grid sm:grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[2rem_1rem] mx-auto place-items-center">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
    )
}