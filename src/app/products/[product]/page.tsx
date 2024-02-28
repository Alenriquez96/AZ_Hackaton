import ProductDetails from "./containers/ProductDetails";
import { notFound } from "next/navigation";

//Get all posts
const getProducts = async () => {
  try {
    const res = await fetch(
      `https://ae6c-2a02-2f05-d31d-2000-9b0-a80c-b002-637d.ngrok-free.app/v1/products`,
      {
        cache: "no-cache",
      }
    );
    const products = await res.json();

    return products;
  } catch (error) {
    console.log({ error });
    return [
      {
        name: "Insulin",
      },
    ];
  }
};

export async function generateStaticParams() {
  const products = await getProducts();

  if (!products) {
    notFound();
  }

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
  params: { product: string };
}) {
  const { product } = params;

  return <ProductDetails product={product} />;
}
