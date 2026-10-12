import { IProduct } from "@/type/ProductType";

const toBn = (n: number) =>
  n.toLocaleString("bn-BD", {
    useGrouping: false,
    maximumFractionDigits: 2,
  });

const PriceSummaryCard = ({ product }: { product: IProduct }) => {
  if (product.markets.length === 0) return null;

  const lowestPrice = product.markets.reduce(
    (lowest, m) => (m.min < lowest ? m.min : lowest),
    Infinity,
  );
  const highestPrice = product.markets.reduce(
    (highest, m) => (m.max > highest ? m.max : highest),
    0,
  );
  const maxPrice = product.markets.reduce((sum, m) => sum + m.max, 0);
  const minPrice = product.markets.reduce((sum, m) => sum + m.min, 0);
  const firstAverage = (maxPrice + minPrice) / 2;
  const finalAverage = (firstAverage / product.markets.length).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto p-4 bg-white rounded-[20px] my-6">
      
        <h1 className="text-[32px] font-semibold">দামের সারসংক্ষেপ</h1>

  <div className="grid grid-cols-3 items-center gap-4 ">
        <div className="border border-gray-300 rounded-[20px] bg-white p-4">
          <p>সর্বনিম্ন দাম</p>
          <h1 className="text-green-500"> <span className="text-[32px] font-bold">{toBn(lowestPrice)}</span> টাকা</h1>
          <p>সবচেয়ে কম দামের বাজার</p>
        </div>
          
        <div className="border border-gray-300 rounded-[20px] bg-white p-4">
          <p>সর্বাধিক দাম</p>
          <h1 className="text-red-500"> <span className="text-[32px] font-bold">{toBn(highestPrice)}</span> টাকা</h1>
          <p>সবচেয়ে বেশি দামের বাজার</p>
        </div>
        <div className="border border-gray-300 rounded-[20px] bg-white p-4">
          <p>গড় দাম</p>
          <h1 className="text-green-500"> <span className="text-[32px] font-bold">{toBn(Number(finalAverage))}</span> টাকা</h1>
          <p>প্রতি কেজি-এর হিসাবে</p>
        </div>
          
      
        </div>
      </div>
    
  );
};

export default PriceSummaryCard;