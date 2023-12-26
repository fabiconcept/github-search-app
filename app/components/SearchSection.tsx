"use client"
import React, { useEffect, useState } from "react";
import DropDown from "./sub components/DropDown";
import SearchElement from "./sub components/SearchElement";
import { Categories } from "@/lib/enums";
import CategoriesSection from "./sub components/CategoriesSection";
import { updateCategory } from "@/redux-store/slices";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux-store";



type CategoriesState = keyof typeof Categories;

type SearchContextType = {
    category: CategoriesState;
    setCategory: React.Dispatch<React.SetStateAction<CategoriesState>>;
    openDropDown: boolean;
    setOpenDropDown: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContext = React.createContext<SearchContextType | undefined>(undefined);
export default function SearchSection() {
    const dispatch= useDispatch<AppDispatch>();

    const [openDropDown, setOpenDropDown] = useState<boolean>(false);
    const [category, setCategory] = useState<CategoriesState>("ALL");

    useEffect(() => {
        dispatch(updateCategory(category));
    }, [category, dispatch]);
    
    const contectData: SearchContextType = { category, setCategory, setOpenDropDown, openDropDown }

    return (
        <SearchContext.Provider value={contectData}>
            <div className="sticky top-0 bg-body backdrop-blur-lg z-50 sm:text-sm text-[0.65rem]">
                <section className="flex items-center border-y dark:border-white/10 border-black/10 group focus-within:border-black dark:focus-within:border-white">
                    <DropDown />
                    <SearchElement />
                </section>
                <CategoriesSection />
            </div>
        </SearchContext.Provider>
    )
}