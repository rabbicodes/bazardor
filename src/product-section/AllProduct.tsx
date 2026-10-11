import ProductCard from '@/component/ProductCard';
import { IProduct } from '@/type/ProductType';
import React from 'react';

const AllProduct = async() => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
      );
      if (!res.ok) {
        throw new Error("Data failed to fetch");
      }
      const products: IProduct[] = await res.json();
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='px-4'>
                <h1 className='text-[32px] font-bold'>সব পণ্য</h1>
            <p className='text-gray-400'>মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
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

export default AllProduct;