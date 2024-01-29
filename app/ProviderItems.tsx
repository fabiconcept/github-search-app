"use client"

import ProviderComponent from "@/redux-store/provider";
import ResultsSection from "./components/ResultsSection";
import SearchSection from "./components/SearchSection";

export default function ProviderItems() {
    return (
        <ProviderComponent>
            <SearchSection />
            <ResultsSection />
        </ProviderComponent>
    )
}