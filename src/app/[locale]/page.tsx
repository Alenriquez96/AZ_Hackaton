import InPageSearch from "../components/InPageSearch";
import ProductInfo from "../containers/ProductInfo";
import Footer from "../containers/Footer";
import { redirect } from "next/navigation";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "{}")
      : {};

  if (Object.keys(user).length > 0) {
    redirect("/" + locale + "/dashboard");
  }

  return (
    <main className="flex flex-col items-center bg-[url('../assets/world.svg')]">
      <div className="min-h-[800px] w-full ">
        <div className="flex  sm:flex-row-reverse  flex-col-reverse items-center flex-wrap justify-evenly my-20">
          <InPageSearch locale={locale} />
          <ProductInfo />
        </div>
      </div>
      <Footer locale={locale} />
    </main>
  );
}
