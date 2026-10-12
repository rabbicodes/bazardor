import { IProduct } from "@/type/ProductType";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import PriceSummaryCard from "./PriceSummaryCard";
import TodayMarketPrice from "./TodayMarketPrice";
import Link from "next/link";

const toBn = (n: number) =>
  n.toLocaleString("bn-BD", {
    useGrouping: false,
    maximumFractionDigits: 2,
  });

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const ProductsDetailsCard = ({ product }: { product: IProduct }) => {
  const diff = product.yesterday - product.today;
  const unit = unitBn[product.unit] ?? product.unit;
  return (
    <div className=" max-w-7xl mx-auto">
      <div className="flex flex-wrap items-center text-sm sm:text-[16px] m-3 sm:m-4 gap-2 sm:gap-4">
      <Link href='/'><h1>হোম</h1></Link>
      <span><MdOutlineKeyboardArrowRight /></span>
       <Link href={`/category/${product.category}`}><h1>{product.categoryNameBn}</h1></Link>
       <span><MdOutlineKeyboardArrowRight /></span>
         <h1>{product.nameBn}</h1>
    </div>
    <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center p-3 sm:p-4 mx-3 sm:mx-4 border border-gray-200 mt-4 sm:mt-6 rounded-[20px] bg-gray-50 ">
    
    
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl sm:text-[30px]">
          {product.image}
        </div>
        <div className="min-w-0">
          <div>
            <h1 className="wrap-break-word text-2xl sm:text-[32px] font-bold leading-snug">{product.nameBn}</h1>
            <p className="text-sm sm:text-base text-gray-500">
              প্রতি {unit}.{product.categoryNameBn}
            </p>
          </div>
          <p className="text-sm sm:text-base">গতকালের তুলনায় আজ দাম <span className="font-semibold">বেড়েছে </span>{toBn(Math.abs(diff))} টাকা</p>
        </div>
      </div>

      <div className="bg-[#f0f5f0] p-4 rounded-[20px] w-full sm:w-auto">
        <p>আজকের দাম</p>
        <h1 className="font-bold text-2xl sm:text-[32px] text-center">{toBn(product.today)}</h1>
        <h1 className="text-center">টাকা /{unit}</h1>

        <div className="flex items-center justify-center sm:justify-start px-0 sm:px-6">
          <div>
            {product.change.dir === "up" ? (
              <span className="text-red-500">
                <TiArrowSortedUp />
              </span>
            ) : product.change.dir === "down" ? (
              <span className="text-green-500">
                <TiArrowSortedDown />
              </span>
            ) : (
              ""
            )}
          </div>
          <div>
            {product.change.pct > 0 ? (
              <h1 className="text-red-500">{toBn(product.change.pct)}%</h1>
            ) : (
              <h1 className="text-green-500">{toBn(product.change.pct)}%</h1>
            )}
          </div>
        </div>
      </div>
     
       
     
    </div>
    <PriceSummaryCard product={product}></PriceSummaryCard>
    <TodayMarketPrice product = {product}></TodayMarketPrice>
    </div>
  );
};

export default ProductsDetailsCard;