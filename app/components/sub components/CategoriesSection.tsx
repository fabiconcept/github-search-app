"use client"
import { useContext } from "react";
import { SearchContext } from "../SearchSection";
import { Categories } from "@/lib/enums";

type subCategories = keyof typeof Categories

export default function CategoriesSection() {
    const contextData = useContext(SearchContext);
    const chips: subCategories[] = ["ALL", "USERS", "REPOSITORIES", "TOPICS"];

    const openDropDown = contextData?.openDropDown;

    return (
        <div className={`border-b dark:border-white/10 border-black/10 flex sm:gap-3 gap-2 transition-[max-height_padding_border] duration-300 overflow-hidden ${openDropDown ? "max-h-[10rem] sm:py-4 py-2" :"max-h-0 py-0 border-transparent dark:border-transparent"} sm:px-24 px-12 justify-center`}>
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
        <div className={`sm:text-xs text-[0.5rem] py-2 sm:px-4 px-2 select-none capitalize ${!isSame ? "bg-black/20 opacity-50 hover:opacity-100 text-black dark:bg-white/20 dark:text-white shadow-sm" : "bg-green-600/20 dark:text-white text-black scale-90"} cursor-pointer`} onClick={updateCategory}>
            {children}
        </div>
    )
}