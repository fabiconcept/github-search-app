"use client"
import { AppDispatch, RootState } from "@/redux-store";
import TopicCard from "./cards/TopicCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { Topic } from "@/lib/Interfaces";
import { fetchTopics } from "@/redux-store/thunk";
import { FaEllipsisH } from "react-icons/fa";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function TopicCollection() {
    const dispatch = useDispatch<AppDispatch>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const { TopicsResults, searchQuery } = useSelector((state: RootState) => state);
    const [displayTopic, setDisplayTopics] = useState<Topic[]>([]);

    const getPages = (val: number): number => {
        return Math.ceil(val / 15);
    }

    const canChangeCurrentPage = useMemo(() => {
        if (!TopicsResults.response) return false;
        if (!TopicsResults.response.total_count) return false;
        return displayTopic.length > 0 && TopicsResults.response.total_count > 15
    }, [displayTopic.length, TopicsResults.response]);

    useEffect(() => {
        if (!canChangeCurrentPage) return;
        dispatch(fetchTopics({ q: searchQuery.q, currentPage }));
    }, [currentPage, dispatch, searchQuery.q, canChangeCurrentPage]);

    useEffect(() => {
        if (TopicsResults.response === null) return;
        setDisplayTopics(TopicsResults.response?.items);
    }, [TopicsResults.response]);

    const prevHandler = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    }

    const nextHandler = () => {
        if (!TopicsResults?.response) return;
        if (currentPage === getPages(TopicsResults?.response?.total_count)) return;
        setCurrentPage(currentPage + 1);
    }

    const renderPagination = () => {
        const totalPages = getPages(TopicsResults?.response?.total_count || 0);

        const handlePageClick = (page: number) => {
            if (page === currentPage) return;
            setCurrentPage(page);
        };

        if (totalPages > 4) {
            if (currentPage < 4) {
                return (
                    <>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div
                                className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === index + 1 ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                    }`}
                                key={index}
                                onClick={() => handlePageClick(index + 1)}
                            >
                                {index + 1}
                            </div>
                        ))}
                        <span className="px-3">
                            <FaEllipsisH />
                        </span>
                        <div
                            className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === totalPages ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                }`}
                            onClick={() => handlePageClick(totalPages)}
                        >
                            {totalPages}
                        </div>
                    </>
                );
            } else if (currentPage > totalPages - 4) {
                return (
                    <>
                        <div
                            className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === 1 ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                }`}
                            onClick={() => handlePageClick(1)}
                        >
                            {1}
                        </div>
                        <span className="px-3">
                            <FaEllipsisH />
                        </span>
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === totalPages - 5 + index ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                    }`}
                                key={index}
                                onClick={() => handlePageClick(totalPages - 5 + index)}
                            >
                                {totalPages - 5 + index}
                            </div>
                        ))}
                        <div
                            className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === totalPages ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                }`}
                            onClick={() => handlePageClick(totalPages)}
                        >
                            {totalPages}
                        </div>
                    </>
                );
            } else {
                return (
                    <>
                        <div
                            className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === 1 ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                }`}
                            onClick={() => handlePageClick(1)}
                        >
                            {1}
                        </div>
                        <span className="px-3">
                            <FaEllipsisH />
                        </span>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <div
                                className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === currentPage - 2 + index ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                    }`}
                                key={index}
                                onClick={() => handlePageClick(currentPage - 1 + index)}
                            >
                                {currentPage - 1 + index}
                            </div>
                        ))}
                        <div
                            className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === currentPage ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                }`}
                            onClick={() => handlePageClick(currentPage)}
                        >
                            {currentPage}
                        </div>
                        {Array.from({ length: 1 }).map((_, index) => (
                            <div
                                className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === currentPage + (index + 1) ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                    }`}
                                key={index}
                                onClick={() => handlePageClick(currentPage + (index + 1))}
                            >
                                {currentPage + (index + 1)}
                            </div>
                        ))}
                        <span className="px-3">
                            <FaEllipsisH />
                        </span>
                        <div
                            className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === totalPages ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                                }`}
                            onClick={() => handlePageClick(totalPages)}
                        >
                            {totalPages}
                        </div>
                    </>
                );
            }
        } else {
            return Array.from({ length: totalPages }).map((_, index) => (
                <div
                    className={`text-xs px-4 py-2 border hover:scale-105 active:scale-90 cursor-pointer ${currentPage === index + 1 ? "bg-green-500 dark:text-black text-white font-semibold border-transparent select-none" : "hover:bg-green-500/20"
                        }`}
                    key={index}
                    onClick={() => handlePageClick(index + 1)}
                >
                    {index + 1}
                </div>
            ));
        }
    };
    return (
        <div className="w-full relative">
            {TopicsResults.loading === "pending" && <div className="absolute top-0 left-0 h-full w-full z-10 bg-white/5 backdrop-blur-md grid place-items-center">
                <div role="status">
                    <svg aria-hidden="true" className="w-12 h-1w-12 text-gray-200 animate-spin dark:text-gray-500 fill-green-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>}

            {!!(displayTopic.length > 0) && <div className=" grid sm:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-[1rem] mx-auto place-items-center">
                {displayTopic.map((topic) => (
                    <TopicCard 
                        key={topic.name}
                        name={topic.name}
                        short_description={topic.short_description || ""}
                        updated_at={topic.updated_at}
                    />
                ))}
            </div>}

            {!(displayTopic.length > 0) && <div className="grid place-items-center p-8 gap-4 opacity-70 h-[20rem]object">
                <Image
                    src={"https://github-lobby.sirv.com/notfound03.svg"}
                    alt="Not Found"
                    height={500}
                    width={500}
                    className="obeject-contain max-w-[12rem] h-auto opacity-50"
                />
                <span>No Topic found</span>
            </div>}

            {!!(displayTopic.length > 0) && TopicsResults.response && TopicsResults.response.total_count > 10 && <div className="flex items-center justify-center gap-1 mt-6 text-xs">
                <div className={`flex gap-1 items-center px-4 cursor-default ${currentPage === 1 ? "opacity-40" : "text-green-500 cursor-pointer active:scale-90 select-none"}`} onClick={prevHandler}>
                    <FaAngleLeft/>
                    Previous
                </div>
                {renderPagination()}
                <div className={`flex gap-1 items-center px-4 cursor-default ${currentPage === getPages(TopicsResults.response.total_count) ? "opacity-40" : "text-green-500 cursor-pointer active:scale-90 select-none"}`} onClick={nextHandler}>
                    Next
                    <FaAngleRight />
                </div>
            </div>}
        </div>
    )
}