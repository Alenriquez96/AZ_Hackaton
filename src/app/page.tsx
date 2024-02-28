import InPageSearch from "@/app/components/InPageSearch";
import ProductInfo from "@/app/containers/ProductInfo";
// import FloatingMenu from "@/app/containers/FloatingMenu";
import BackToTop from "@/app/components/BackToTop";
// import LatestsNews from "@/app/containers/LatestsNews";
import Footer from "@/app/containers/Footer";

export default async function Home() {
  return (
    <main className="flex  flex-col items-center bg-[url('../assets/world.svg')]">
      <div className="flex min-h-[800px]">
        <div className="flex sm:flex-row-reverse flex-col-reverse items-center flex-wrap justify-center my-20">
          <InPageSearch />
          <ProductInfo />
        </div>
      </div>
      <Footer />
    </main>
  );
}
