// import Test from "./components/Test";
import SearchSection from "./components/SearchSection";
import TopSection from "./components/TopSection";
import ResultsSection from "./components/ResultsSection";

export default function page() {
    return (
        <div className="relative">
            <div className="sticky top-0 bg-body z-50">
                <TopSection />
                <SearchSection />
            </div>
            <ResultsSection />
        </div>
    );
}