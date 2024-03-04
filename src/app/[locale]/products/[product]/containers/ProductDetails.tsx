"use client";

import { useState, useEffect } from "react";
import AvailableCountries from "../components/AvailableCountries";
import PrintOptions from "../components/PrintOptions";
import SearchThisPage from "../components/SearchThisPage";
import Accordions from "./Accordions";
import { JumpToSection } from "./JumpToSection";
import LatestsNews from "./LatestsNews";
import LoadingSpinner from "../components/LoadingSpinner";
import Text from "@/app/[locale]/components/Text";
import { Button } from "@nextui-org/react";
import { notFound } from "next/navigation";

const ProductDetails = ({ product }: { product: string }) => {
  const [productData, setProductData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>({});

  const getProductData = async (product: string) => {
    const language =
      typeof document !== "undefined" && localStorage.getItem("lan");
    try {
      setLoading(true);
      const singleProduct = await fetch(
        `https://mediguide-api-latest.onrender.com/v1/products/search?name=${product}`,
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
      setError({ error });
    }
  };

  useEffect(() => {
    getProductData(product);
  }, []);

  useEffect(() => {
    if (error.error) notFound();
  }, [error]);

  return (
    <div className="p-11 flex justify-evenly flex-wrap">
      <div className="flex flex-col [&>*]:p-4 max-w-[700px]">
        <div className="flex items-center justify-between">
          <SearchThisPage />
        </div>
        <div className="flex items-center justify-between flex-row-reverse">
          <AvailableCountries />
          <div>
            <Text>{productData.name}</Text>
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

      <div className=" flex-col sm:flex hidden [&>div]:my-8">
        <Button
          variant="solid"
          radius="full"
          className="bg-[#D80027] text-white  w-[221px] h-[48px]"
        >
          Report an averse event
        </Button>

        <PrintOptions />
        <JumpToSection />
      </div>
    </div>
  );
};

export default ProductDetails;
