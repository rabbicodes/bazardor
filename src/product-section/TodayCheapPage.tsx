import ProductCard from "@/component/ProductCard";
import { IProduct } from "@/type/ProductType";
import { TiArrowSortedUp } from "react-icons/ti";

const TodayCheapPage = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  if (!res.ok) {
    throw new Error("Data failed to fetch");
  }
  const data: IProduct[] = await res.json();
  const products = data
    .filter((product) => product.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct)
    .slice(0, 6);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center p-4">
        <span className="text-[32px] text-red-500">
          <TiArrowSortedUp />
        </span>
        <h1 className="text-[32px] font-bold"> আজ দাম বেড়েছে</h1>
      </div>
       <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product) => {
        return (
          <div key={product.id}>
            <ProductCard key={product.id} product={product}></ProductCard>
          </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default TodayCheapPage;
