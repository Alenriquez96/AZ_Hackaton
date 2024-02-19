import ProductDetails from "./containers/ProductDetails";

//Get all posts
const getProducts = async () => {
  try {
    const res = await fetch(
      `https://7cc9-170-194-32-44.ngrok-free.app/v1/products`,
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
  params: { product: string };
}) {
  const { product } = params;

  return <ProductDetails product={product} />;
}
