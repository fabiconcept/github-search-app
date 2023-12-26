import { getUser } from "@/lib/Octokit";
import { NextPage } from "next";
import ProfileSection from "./components/ProfileSection";
import FollowersSection from "./components/FollowersSection";
import RepoCollection from "./components/RepositorySection";

interface PageProps {
    params?: { id: string };
}

const UserPage: NextPage<PageProps> = async ({ params }) => {
const [data, hasError, status] = await getUser(params?.id ?? "loco");

    if(hasError || !data){
        return (
            <div>
                En error occured
            </div>
        )
    }

    return (
        <div className="max-w-screen p-3 h-screen flex flex-wrap items-center gap-3">
            <ProfileSection 
                followers={data.followers}
                following={data.following}
                avatar={data.avatar_url}
                login={data.login}
                name={data.name}
                public_repos={data.public_repos}
                type={data.type}
                key={data.id}
                bio={data.bio}
                company={data.company}
            />
            <FollowersSection 
                url={data.followers_url}
            />
            <RepoCollection
                url={data.repos_url}
                login={data.login}
            />
        </div>
    );
}


export default UserPage;