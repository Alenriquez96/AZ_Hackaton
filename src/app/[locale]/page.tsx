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
  const router = useRouter();
  console.log(searchParams.access_token);

  if (searchParams.access_token && typeof window !== "undefined") {
    localStorage.setItem("access_token", searchParams.access_token);
  }

  const fetchToken = async () => {
    try {
      const res = await fetch(
        "https://mediguide-api-latest.onrender.com/v1/me",
        {
          cache: "no-cache",
          headers: {
            authorization: `Bearer ${searchParams.access_token}`,
          },
        }
      );
      if (res.status === 401) {
        router.push(
          "https://mediguide-api-latest.onrender.com/v1/login?state=http://localhost:3000/"
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchToken();

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
