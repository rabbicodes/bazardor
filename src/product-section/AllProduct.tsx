import ProductCard from '@/component/ProductCard';
import { IProduct } from '@/type/ProductType';
import { notFound } from 'next/navigation';


const AllProduct = async() => {
    const res = await fetch(
        "https://openapi.programming-hero.com/api/bazardor/products",
      );
      if (!res.ok) {
        notFound()
      }
      const products: IProduct[] = await res.json();
    return (
        <div className='max-w-7xl mx-auto ' id='allProduct'>
            <div className='px-3 sm:px-4'>
                <h1 className='text-2xl sm:text-[32px] font-bold'>সব পণ্য</h1>
            <p className='text-sm sm:text-base text-gray-400'>মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4">
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