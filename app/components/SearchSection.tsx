"use client"
import React, { useState } from "react";
import DropDown from "./sub components/DropDown";
import SearchElement from "./sub components/SearchElement";
import { Categories } from "@/lib/enums";
import CategoriesSection from "./sub components/CategoriesSection";



type CategoriesState = keyof typeof Categories;

type SearchContextType = {
    category: CategoriesState;
    setCategory: React.Dispatch<React.SetStateAction<CategoriesState>>;
    openDropDown: boolean;
    setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContext = React.createContext<SearchContextType | undefined>(undefined);
export default function SearchSection() {
    const [openDropDown, setOpenDropDown] = useState<boolean>(false);
    const [category, setCategory] = useState<CategoriesState>("ALL");
    const contectData: SearchContextType = { category, setCategory, setOpenDropDown, openDropDown }

    return (
        <SearchContext.Provider value={contectData}>
            <div className="sticky top-0 bg-body z-50">
                <section className="flex items-center border-y dark:border-white/10 border-black/10 group focus-within:border-black dark:focus-within:border-white text-sm">
                    <DropDown />
                    <SearchElement />
                </section>
                <CategoriesSection />
            </div>
        </SearchContext.Provider>
    )
}