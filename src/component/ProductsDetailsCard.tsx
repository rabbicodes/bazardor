import { IProduct } from "@/type/ProductType";
import React from "react";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

const ProductsDetailsCard = ({ product }: { product: IProduct }) => {
  const diff = product.yesterday - product.today;
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto p-4 border border-gray-200 mt-6 rounded-[20px] bg-white ">
      <div className="flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
          {product.image}
        </div>
        <div>
          <div>
            <h1>{product.nameBn}</h1>
            <p className="text-gray-500">
              প্রতি {product.unit}.{product.categoryNameBn}
            </p>
          </div>
          <p>গতকালের তুলনায় আজ দাম <span className="font-semibold">বেড়েছে </span>{Math.abs(diff)} টাকা</p>
        </div>
      </div>

      <div className="bg-gray-200 p-4 rounded-[20px]">
        <p>আজকের দাম</p>
        <h1 className="font-bold text-[32px] text-center">{product.today}</h1>
        <h1 className="text-center">টাকা /{product.unit}</h1>

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
              <h1 className="text-red-500">{product.change.pct}%</h1>
            ) : (
              <h1 className="text-green-500">{product.change.pct}%</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsCard;
