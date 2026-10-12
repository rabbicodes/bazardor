import { IProduct } from "@/type/ProductType";
import Link from "next/link";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";

interface ProductCardProps {
  product: IProduct;
}

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

const bn = (n: number) => n.toLocaleString("bn-BD");

const ProductCard = ({ product }: ProductCardProps) => {
  const { dir, pct } = product.change;

  const color =
    dir === "up"
      ? "text-red-600"
      : dir === "down"
      ? "text-green-600"
      : "text-gray-500";

  return (
    <Link href={`/products/${product.id}`} className="block">
    <div className="rounded-2xl border border-gray-200 hover:border-gray-400 bg-[#fafcfa] p-4 sm:p-5">

      <div className="flex items-center gap-3 sm:gap-4">
        <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl sm:text-3xl">
          {product.image}
        </div>
        <div className="min-w-0">
          <h2 className="break-words text-lg sm:text-xl font-bold text-gray-900">{product.nameBn}</h2>
          <p className="text-sm text-gray-700">
            প্রতি {unitBn[product.unit] ?? product.unit}
          </p>
        </div>
      </div>


      <div className="mt-4 sm:mt-5 flex items-end justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm text-gray-700">আজকের দাম</p>
          <p className="mt-1 text-xl sm:text-2xl font-bold text-gray-900">
            {bn(product.today)}{" "}
            <span className="text-sm sm:text-base font-normal">টাকা</span>
          </p>
        </div>

        <span
          className={`flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full bg-[#f0f0ee] px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm font-semibold ${color}`}
        >
          {dir === "up" && <TiArrowSortedUp />}
          {dir === "down" && <TiArrowSortedDown />}
          {bn(Math.abs(pct))}%
        </span>
      </div>
    </div>
    </Link>
  );
};

export default ProductCard;