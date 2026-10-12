"use client";
import { IProduct } from "@/type/ProductType";
import { useState } from "react";
import Link from "next/link";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import SortingDropdown from "./SortingDropdown";

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const bn = (n: number) => n.toLocaleString("bn-BD");

const ProductSection = ({ products }: { products: IProduct[] }) => {
  const [text, setText] = useState("ডিফল্ট");
  const [product, setProduct] = useState(products);
  const assending = products.toSorted((a, b) => a.today - b.today);
  const descending = products.toSorted((a, b) => b.today - a.today);

  const handleCheapToExpensive = () => {
    setText("কম থেকে বেশি");
    setProduct(assending);
  };
  const handleExpensiveToCheap = () => {
    setText("বেশি থেকে কম");
    setProduct(descending);
  };

  return (
    <div>
        
      
      <div className="flex justify-between items-center  gap-3 rounded-2xl border border-gray-200 bg-white p-4 mb-8">
        <p className="mt-4 mb-3 text-sm text-gray-500">
        মোট {bn(product.length)}টি পণ্য দেখানো হচ্ছে
      </p>
      <div className="flex gap-2 items-center">
        <span className="text-sm text-gray-500">সাজান</span>
        <SortingDropdown
          text={text}
          onCheapToExpensive={handleCheapToExpensive}
          onExpensiveToCheap={handleExpensiveToCheap}
        />
        </div>
      </div>


      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {product.map((p) => {
          const dir = p.change.dir;
          const color =
            dir === "up"
              ? "text-red-600"
              : dir === "down"
              ? "text-green-600"
              : "text-gray-500";

          return (
            <Link key={p.id} href={`/products/${p.id}`} className="hover:border hover:border-gray-400 hover:rounded-2xl ">
              <div className="rounded-2xl border border-gray-200 bg-[#fafcfa] p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-3xl">
                    {p.image}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{p.nameBn}</h2>
                    <p className="text-sm text-gray-700">
                      প্রতি {unitBn[p.unit] ?? p.unit}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-sm text-gray-700">আজকের দাম</p>
                    <p className="mt-1 text-2xl font-bold text-gray-900">
                      {bn(p.today)}{" "}
                      <span className="text-base font-normal">টাকা</span>
                    </p>
                  </div>

                  <span
                    className={`flex items-center gap-1 rounded-full bg-[#f0f0ee] px-3 py-2 text-sm font-semibold ${color}`}
                  >
                    {dir === "up" && <TiArrowSortedUp />}
                    {dir === "down" && <TiArrowSortedDown />}
                    {bn(Math.abs(p.change.pct))}%
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSection;