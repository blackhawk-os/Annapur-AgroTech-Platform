import Breadcrumb from "@/components/BreadCrumbs/BreadCrumb";
import ProductDetail from "@/components/ui/Market/ProductDetail";
import products from "@/data/market-products.json";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(), // Convert number → string
    slug: product.name.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return {};

  return {
    title: `${product.name} | Marketplace`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default function ProductPage({
  params,
}: {
  params: { id: string; slug: string };
}) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) return notFound();

  return (
    <>
      <Breadcrumb productName={product.name} />
      <ProductDetail product={product} />
    </>
  );
}
