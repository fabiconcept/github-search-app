import TopSection from "./components/TopSection";
import ProviderItems from "./ProviderItems";

export default function page() {
    return (
        <div className="relative flex flex-col min-h-screen">
            <TopSection />
            <ProviderItems />
        </div>
    );
}