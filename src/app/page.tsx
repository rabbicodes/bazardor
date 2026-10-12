import Banner from "@/component/Banner";
import AllProduct from "@/product-section/AllProduct";
import TodayCheapPage from "@/product-section/TodayCheapPage";
import TodayExpansivePage from "@/product-section/TodayExpansive";


export default function Home() {
  return (
    <div>
    <Banner/>
    <TodayExpansivePage/>
    <TodayCheapPage/>
  
    <AllProduct/>
    </div>
  );
}
