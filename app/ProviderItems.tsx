"use client"

import ProviderComponent from "@/redux-store/provider";
import ResultsSection from "./components/ResultsSection";
import SearchSection from "./components/SearchSection";

export default function ProviderItems() {
    return (
        <ProviderComponent>
            <div className=" flex-1 flex flex-col bg-black/5">
                <SearchSection />
                <ResultsSection />
            </div>
        </ProviderComponent>
    )
}