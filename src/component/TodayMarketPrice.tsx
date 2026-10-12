import { IProduct } from '@/type/ProductType';
import React from 'react';

const TodayMarketPrice = ({product}:{product:IProduct}) => {
    const markets = product.markets;
    const formatTaka = (n: number) =>
  `${n.toLocaleString('bn-BD', {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  })} টাকা`;
    return (
        <div className='max-w-7xl mx-auto bg-white p-4 rounded-[20px]'>
            <h1 className='text-[32px] font-semibold my-6 '>
                বাজারভিত্তিক আজকের দাম
            </h1>
       <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
  <table className="w-full text-sm">
    <thead>
      <tr className="text-gray-500">
        <th className="px-6 py-4 text-left font-medium">বাজার</th>
        <th className="px-6 py-4 text-left font-medium">বিভাগ</th>
        <th className="px-6 py-4 text-right font-medium">সর্বনিম্ন</th>
        <th className="px-6 py-4 text-right font-medium">সর্বাধিক</th>
        <th className="px-6 py-4 text-right font-medium">গড়</th>
      </tr>
    </thead>
    <tbody>
      {markets.map((market, ind) => (
        <tr
          key={ind}
          className="border-t border-gray-700/80 odd:bg-white even:bg-[#f1f5f1]"
        >
          <td className="px-6 py-4 text-gray-800">{market.market}</td>
          <td className="px-6 py-4 text-gray-600">{market.division}</td>
          <td className="px-6 py-4 text-right text-gray-600">
            {formatTaka(market.min)}
          </td>
          <td className="px-6 py-4 text-right text-gray-600">
            {formatTaka(market.max)}
          </td>
          <td className="px-6 py-4 text-right font-semibold text-gray-900">
            {formatTaka((market.max + market.min) / 2)}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
</div>
    );
};

export default TodayMarketPrice;