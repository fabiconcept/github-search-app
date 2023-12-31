"use client"

import React, { useRef } from 'react';
import Follower from './Follower';
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp } from 'react-icons/fa';
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
    
    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 100; // Adjust the scroll distance as needed
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 100; // Adjust the scroll distance as needed
        }
    };

    return (
        <section ref={containerParentRef} className='sm:w-fit w-full sm:py-6 sm:px-0 px-3 py-0 dark:bg-white/5 bg-black/5 rounded-[5rem] flex sm:flex-col flex-row justify-center border dark:border-white/5 border-black/5 sm:h-[calc(100%-2rem)] h-fit relative'>
            {!!(followersCount > 0) && <div ref={containerRef} className='px-2 sm:overflow-y-auto overflow-x-auto no-scroll sm:rounded-[0] rounded-[5rem] flex sm:flex-col flex-row gap-3 flex-1'>
                {followers.map((follower) => (
                    <Follower
                        key={follower.id}
                        avatar={follower.avatar_url}
                        login={follower.login}
                    />
                ))}
            </div>}
            
            {!!(followersCount > 0) && <div className='sm:block hidden dark:hover:bg-white dark:hover:text-black cursor-pointer active:scale-90 hover:bg-black absolute left-1/2 -translate-x-[50%] -top-2 p-1 dark:bg-white/10 bg-black/10 text-white text-xs rounded-full' onClick={scrollUp}>
                <FaAngleUp />
            </div>}
            {!!(followersCount > 0) && <div className='sm:block hidden dark:hover:bg-white dark:hover:text-black cursor-pointer active:scale-90 hover:bg-black absolute left-1/2 -translate-x-[50%] -bottom-2 p-1 dark:bg-white/10 bg-black/10 text-white text-xs rounded-full' onClick={scrollDown}>
                <FaAngleDown />
            </div>}
            {!!(followersCount > 0) && <div className='sm:hidden block dark:hover:bg-white dark:hover:text-black cursor-pointer active:scale-90 hover:bg-black absolute -left-2 -translate-y-[50%] top-1/2 p-1 dark:bg-white/10 bg-black/10 text-white text-xs rounded-full' onClick={scrollLeft}>
                <FaAngleLeft />
            </div>}
            {!!(followersCount > 0) && <div className='sm:hidden block dark:hover:bg-white dark:hover:text-black cursor-pointer active:scale-90 hover:bg-black absolute -right-2 -translate-y-[50%] top-1/2 p-1 dark:bg-white/10 bg-black/10 text-white text-xs rounded-full' onClick={scrollRight}>
                <FaAngleRight />
            </div>}

            {!(followersCount > 0) && <div className='sm:w-12 sm:h-auto w-auto h-12 sm:block grid place-items-center sm:text-base text-sm'>
                    <div className='whitespace-nowrap sm:-rotate-[90deg]'>
                        No followers yet
                    </div>
            </div>}
        </section>
    )
}
