import ProductDetails from "./containers/ProductDetails";
import { Product } from "@/interfaces";

//Get all posts
const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch(
      `https://mediguide-api-latest.onrender.com/v1/products`,
      {
        cache: "no-cache",
      }
    );
    const products = await res.json();

    return products;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

export async function generateStaticParams() {
  const products = await getProducts();

  return products?.map((product: { name: string }) => {
    return {
      product: product.name,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: { product: string };
}) {
  return { title: "MediGuide" };
}

export default async function Post({
  params,
}: {
  params: { product: string; locale: string };
}) {
  const { product, locale } = params;

  return <ProductDetails product={product} language={locale} />;
}
