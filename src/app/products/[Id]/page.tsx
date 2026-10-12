import ProductsDetailsCard from "@/component/ProductsDetailsCard";
import { notFound } from "next/navigation";

const ProductsDetailPage = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${Id}`)
  if(!res.ok){
    notFound()
  }
  const products = await res.json();

  return <div>
    <ProductsDetailsCard product = {products}></ProductsDetailsCard>
    </div>;
};

export default ProductsDetailPage;