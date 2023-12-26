"use client"
import { useContext } from "react";
import { FaTag, FaAngleDown } from "react-icons/fa";
import { SearchContext } from "../SearchSection";

export default function DropDown() {
    const contextData = useContext(SearchContext);

    return (
        <div className="flex items-center sm:py-4 py-3 sm:pl-24 sm:px-8 px-3 gap-3 cursor-pointer border-r dark:border-white/10 border-black/10 group-focus-within:border-black dark:group-focus-within:border-white relative select-none" onClick={()=>contextData?.setOpenDropDown(!contextData?.openDropDown)}>
            <FaTag className="sm:block hidden" />
            <div className="flex items-center"><span className="sm:block hidden">Category:</span> <span className="lowercase bg-green-400/20 px-1 py-1">{contextData?.category}</span></div>
            <FaAngleDown className={`${contextData?.openDropDown ? "" : "rotate-180"}`} />
        </div>
    )
}
