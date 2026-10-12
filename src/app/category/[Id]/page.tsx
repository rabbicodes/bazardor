import { IProduct } from "@/type/ProductType";
import React from "react";
interface ParmasandProductType {
 params: Promise<{ Id: string }>,
 product : IProduct[]
}

const CategoryDetailsPage = async ({ params,product }:ParmasandProductType) => {
  const { Id } = await params;
  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/categories/${Id}`,
  );
  if (!res.ok) {
    throw new Error("Data is not fetch");
  }
  const categories = await res.json();
  const products = product.filter(p=>p.category===categories.nameBn)
  console.log(products);

  return (
    <div>
      <div className="flex justify-between items-center max-w-7xl mx-auto p-4 border border-gray-200 mt-6 rounded-[20px] bg-gray-50 ">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-[30px]">
            {categories.icon}
          </div>

          <div>
            <h1 className="text-[32px] font-bold">{categories.nameBn}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDetailsPage;
