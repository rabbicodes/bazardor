import Banner from "@/component/Banner";
import TodayCheapPage from "@/product-section/TodayCheapPage";
import TodayExpansivePage from "@/product-section/TodayExpansive";


export default function Home() {
  return (
    <div>
    <Banner/>
    <TodayExpansivePage/>
    <TodayCheapPage/>
    </div>
  );
}
