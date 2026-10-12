import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { IProduct } from "@/type/ProductType";

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

const Marquee = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  if (!res.ok) {
    throw new Error("Data failed to fetch");
  }
  const products: IProduct[] = await res.json();
  return (
    <div className="border border-gray-200 p-4 bg-white">
      <MarqueeText direction="right" duration={10}>
        {products.map((product) => {
          return (
            <div key={product.id} className="flex items-center px-4 ">
              <div className="flex items-center px-2 ">
                <span>{product.image}</span>
                <h1>{product.nameBn}</h1>
              </div>
              <div className="flex items-center ">
                <h1>{toBn(product.today)}/</h1>
                <h1>{unitBn[product.unit] ?? product.unit}</h1>
              </div>
              <div className="flex items-center px-2">
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
                    <h1 className="text-red-500">
                      {toBn(product.change.pct)}%
                    </h1>
                  ) : (
                    <h1 className="text-green-500">
                      {toBn(product.change.pct)}%
                    </h1>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </MarqueeText>
    </div>
  );
};

export default Marquee;
