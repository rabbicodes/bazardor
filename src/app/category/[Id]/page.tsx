import ProductSection from "@/component/ProductSection";
import { IProduct } from "@/type/ProductType";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ Id: string }>;
}

const CategoryDetailsPage = async ({ params }: PageProps) => {
  const { Id } = await params;

  const res = await fetch(
    `https://openapi.programming-hero.com/api/bazardor/categories/${Id}`,
  );
  if (!res.ok) {
    notFound()
  }
  const categories = await res.json();

  const productRes = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/products",
  );
  if (!productRes.ok) {
    notFound()
  }
  const productList: IProduct[] = await productRes.json();

  const products = productList.filter((p) => p.category === categories.slug);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center p-3 sm:p-4 mx-3 sm:mx-4 border border-gray-200 mt-4 sm:mt-6 rounded-[20px] bg-gray-50 ">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl sm:text-[30px]">
            {categories.icon}
          </div>

          <div className="min-w-0">
            <h1 className="wrap-break-word text-2xl sm:text-[32px] font-bold leading-snug">{categories.nameBn}</h1>
            <p className="text-sm sm:text-base text-gray-400">
              {products.length}টি পণ্যের আজকের দাম ও পরিবর্তন
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-6">
        <ProductSection products={products} />
      </div>
    </div>
  );
};

export default CategoryDetailsPage;