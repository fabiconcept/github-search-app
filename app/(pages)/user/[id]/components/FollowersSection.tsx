"use client"

import React, { useRef } from 'react';
import Follower from './Follower';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useCustomFetch } from '@/lib/hooks';
import { GitHubUser } from '@/lib/Interfaces';

export default function FollowersSection({ url }: { url: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const containerParentRef = useRef<HTMLDivElement>(null);
    const [ followersCount, followers ] = useCustomFetch<GitHubUser>(url);

    const scrollUp = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop -= 100; // Adjust the scroll distance as needed
        }
    };

    const scrollDown = () => {
        if (containerRef.current) {
            containerRef.current.scrollTop += 100; // Adjust the scroll distance as needed
        }
    };

    return (
        <section ref={containerParentRef} className='w-fit py-6 dark:bg-white/5 bg-black/5 rounded-[5rem] flex flex-col justify-center border dark:border-white/5 border-black/5 h-[calc(100%-2rem)] relative'>
            {!!(followersCount > 0) && <div ref={containerRef} className='px-2 overflow-y-auto no-scroll flex flex-col gap-3 flex-1'>
                {followers.map((follower) => (
                    <Follower
                        key={follower.id}
                        avatar={follower.avatar_url}
                        login={follower.login}
                    />
                ))}
            </div>}
            {!!(followersCount > 0) && <div className='dark:hover:bg-white dark:hover:text-black cursor-pointer active:scale-90 hover:bg-black absolute left-1/2 -translate-x-[50%] -top-2 p-1 dark:bg-white/10 bg-black/10 text-white text-xs rounded-full' onClick={scrollUp}>
                <FaAngleUp />
            </div>}
            {!!(followersCount > 0) && <div className='dark:hover:bg-white dark:hover:text-black cursor-pointer active:scale-90 hover:bg-black absolute left-1/2 -translate-x-[50%] -bottom-2 p-1 dark:bg-white/10 bg-black/10 text-white text-xs rounded-full' onClick={scrollDown}>
                <FaAngleDown />
            </div>}

            {!(followersCount > 0) && <div className='w-12 -mb-5'>
                    <div className='whitespace-nowrap -rotate-90'>
                        No followers yet
                    </div>
            </div>}
        </section>
    )
}
