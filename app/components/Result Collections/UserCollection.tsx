import UserCard from "./cards/UserCard";

export default function UserCollection() {
    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4 mx-auto place-items-center">
            <UserCard />
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