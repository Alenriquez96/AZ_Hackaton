import InPageSearch from "../components/InPageSearch";
import ProductInfo from "../containers/ProductInfo";
import Footer from "../containers/Footer";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
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
