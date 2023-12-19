"use client"
import { useContext } from "react";
import { SearchContext } from "../SearchSection";
import { Categories } from "@/lib/enums";

type subCategories = keyof typeof Categories

export default function CategoriesSection() {
    const contextData = useContext(SearchContext);
    const chips:subCategories[] =["ALL", "CODE", "COMMENTS", "REPO", "TOPICS", "USER", "WIKIS"];

    const openDropDown = contextData?.openDropDown;

    return (
        <div className={`border-b dark:border-white/10 border-black/10 flex gap-3 transition-[max-height_padding_border] duration-300 overflow-hidden ${openDropDown ? "max-h-[10rem] py-4" :"max-h-0 py-0 border-transparent dark:border-transparent"} px-24 justify-center`}>
            {chips.map(item=>(<Chip key={item}>{item}</Chip>))}
        </div>
    )
}

export interface ChildrenProp {
    children: subCategories;
}

const Chip:React.FC<ChildrenProp> = ({children}) => {
    const contextData = useContext(SearchContext);
    const isSame = contextData?.category === children;
    const updateCategory = () => {
        if (isSame) {
            return;
        }

        contextData?.setCategory(children);
    }
    return ( 
        <div className={`text-xs py-2 px-4 select-none capitalize ${!isSame ? "bg-black/20 opacity-50 hover:opacity-100 text-black dark:bg-white/20 dark:text-white shadow-sm" : "bg-green-600/20 dark:text-white text-black scale-90"} cursor-pointer`} onClick={updateCategory}>
            {children}
        </div>
    )
}