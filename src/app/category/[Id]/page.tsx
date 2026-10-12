import SortingDropdown from "@/component/SortingDropdown";
import { IProduct } from "@/type/ProductType";

interface PageProps {
  params: Promise<{ Id: string }>;
}

const CategoryDetailsPage = async ({ params }: PageProps) => {
  const { Id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/categories/${Id}`,
  );
  if (!res.ok) {
    throw new Error("Category data is not fetched");
  }
  const categories = await res.json();

  const productRes = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  if (!productRes.ok) {
    throw new Error("Product data is not fetched");
  }
  const productList: IProduct[] = await productRes.json();

  const products = productList.filter((p) => p.category === categories.slug);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center  p-4 border border-gray-200 mt-6 rounded-[20px] bg-gray-50 ">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-[30px]">
            {categories.icon}
          </div>

          <div>
            <h1 className="text-[32px] font-bold">{categories.nameBn}</h1>
            <p className="text-gray-400">
              {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      <div className="m-9 flex justify-between items-center ">
        <p>মোট ${products.length}টি পণ্য দেখানো হচ্ছে</p>
        <div>
         <SortingDropdown products={products}></SortingDropdown>
        </div>
      </div>

     
    </div>
  );
};

export default CategoryDetailsPage;
