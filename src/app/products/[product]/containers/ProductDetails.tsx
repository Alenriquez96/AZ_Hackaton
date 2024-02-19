"use client";

import { useState, useEffect } from "react";
import AvailableCountries from "../components/AvailableCountries";
import PrintOptions from "../components/PrintOptions";
import SearchThisPage from "../components/SearchThisPage";
import Accordions from "./Accordions";
import { JumpToSection } from "./JumpToSection";
import LatestsNews from "./LatestsNews";
import LoadingSpinner from "../components/LoadingSpinner";

const ProductDetails = ({ product }: { product: string }) => {
  const [productData, setProductData] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const getProductData = async (product: string) => {
    const language =
      typeof document !== "undefined" && localStorage.getItem("lan");
    try {
      setLoading(true);
      const singleProduct = await fetch(
        `https://7cc9-170-194-32-44.ngrok-free.app/v1/products/search?name=${product}`,
        {
          headers: {
            Language: language || "en",
          },
          cache: "no-cache",
        }
      );
      const data = await singleProduct.json();
      setProductData(data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
      setProductData({});
    }
  };

  useEffect(() => {
    getProductData(product);
  }, []);

  return (
    <div className="p-11 flex justify-evenly flex-wrap">
      <div className="flex flex-col [&>*]:p-4 max-w-[700px]">
        <div className="flex items-center justify-between">
          <SearchThisPage />
        </div>
        <div className="flex items-center justify-between flex-row-reverse">
          <AvailableCountries />
          <div>
            <h1 className="text-[#344054] text-[32px] font-bold">
              {productData.name}
            </h1>
            <p className="text-[#344054] font-[24px] ">
              {productData.activeIngredient}
            </p>
            <p className="text-[#344054] font-[24px] ">
              Manufactured by: {productData.company}
            </p>
          </div>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Accordions productData={productData} />
        )}
        <LatestsNews />
      </div>

      <div className="flex flex-col  [&>button]:my-8 [&>div]:my-8">
        <button className="bg-[#D80027] text-white rounded-[50px] w-[221px] h-[48px] shadow-2xl">
          Report an averse event
        </button>
        <PrintOptions />
        <JumpToSection />
      </div>
    </div>
  );
};

export default ProductDetails;
