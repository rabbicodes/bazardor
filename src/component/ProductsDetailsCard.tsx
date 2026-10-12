import { IProduct } from "@/type/ProductType";
import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import PriceSummaryCard from "./PriceSummaryCard";
import TodayMarketPrice from "./TodayMarketPrice";

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
    <div>
    <div className="flex justify-between items-center max-w-7xl mx-auto p-4 border border-gray-200 mt-6 rounded-[20px] bg-gray-50 ">
    <div>
      <h1>হোম </h1>
    </div>
    
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-[30px]">
          {product.image}
        </div>
        <div>
          <div>
            <h1 className="text-[32px] font-bold">{product.nameBn}</h1>
            <p className="text-gray-500">
              প্রতি {unit}.{product.categoryNameBn}
            </p>
          </div>
          <p>গতকালের তুলনায় আজ দাম <span className="font-semibold">বেড়েছে </span>{toBn(Math.abs(diff))} টাকা</p>
        </div>
      </div>

      <div className="bg-[#f0f5f0] p-4 rounded-[20px]">
        <p>আজকের দাম</p>
        <h1 className="font-bold text-[32px] text-center">{toBn(product.today)}</h1>
        <h1 className="text-center">টাকা /{unit}</h1>

        <div className="flex items-center px-6">
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