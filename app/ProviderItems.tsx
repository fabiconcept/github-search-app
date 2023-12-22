"use client"

import ProviderComponent from "@/redux-store/provider"
import ResultsSection from "./components/ResultsSection"
import SearchSection from "./components/SearchSection"
import Test from "./components/Test"

export default function ProviderItems() {
    return (
        <ProviderComponent>
            <Test />
            <SearchSection />
            <ResultsSection />
        </ProviderComponent>
    )
}