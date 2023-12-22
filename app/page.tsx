import SearchSection from "./components/SearchSection";
import TopSection from "./components/TopSection";
import ResultsSection from "./components/ResultsSection";
import Test from "./components/Test";

export default function page() {
    return (
        <div className="relative">
            <Test />
            <TopSection />
            <SearchSection />
            <ResultsSection />
        </div>
    );
}