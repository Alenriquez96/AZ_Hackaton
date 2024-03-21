import ProductDetails from "./containers/ProductDetails";
import { Product } from "@/interfaces";
import { redirect } from "next/navigation";

//Get all posts
const getProducts = async (): Promise<Product[] | any> => {
  try {
    const res = await fetch(
      `https://ec2-18-134-96-73.eu-west-2.compute.amazonaws.com/v1/products`,
      {
        cache: "no-cache",
        headers: {
          "Access-Control-Allow-Origin": "*",
          authorization:
            ("Bearer " + typeof window !== "undefined" &&
              localStorage.getItem("access_token")) ||
            "",
        },
      }
    );

    if (res.status === 401) {
      throw new Error("Unauthorized");
    }

    const products = await res.json();

    return products;
  } catch (error: any) {
    if (error.message === "Unauthorized") {
      return [{ name: "unauthorized" }];
    }
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
