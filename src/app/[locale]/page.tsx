"use client";
import InPageSearch from "../components/InPageSearch";
import ProductInfo from "../containers/ProductInfo";
import Footer from "../containers/Footer";
import { useRouter } from "next/navigation";

export default async function Home({
  params: { locale },
  searchParams,
}: {
  params: { locale: string };
  searchParams: { access_token: string };
}) {
  return (
    <main className="flex flex-col items-center bg-[url('../assets/world.svg')]">
      <div className="min-h-[800px] w-full ">
        <div className="flex  sm:flex-row-reverse  flex-col-reverse items-center flex-wrap justify-evenly my-20">
          <InPageSearch locale={locale} />
          <ProductInfo />
        </div>
      </div>
      {/* <Footer locale={locale} /> */}
    </main>
  );
}
