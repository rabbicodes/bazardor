import ProductsDetailsCard from "@/component/ProductsDetailsCard";

const ProductsDetailPage = async ({
  params,
}: {
  params: Promise<{ Id: string }>;
}) => {
  const { Id } = await params;
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products/${Id}`)
  const products = await res.json();

  return <div>
    <ProductsDetailsCard product = {products}></ProductsDetailsCard>
    </div>;
};

export default ProductsDetailPage;