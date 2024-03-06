"use client";

import { useState, useEffect, useCallback } from "react";
import Options from "../components/Options";
import SearchThisPage from "../components/SearchThisPage";
import Accordions from "./Accordions";
import { JumpToSection } from "./JumpToSection";
import Suggested from "./Suggested";
import LoadingSpinner from "../components/LoadingSpinner";
import Text from "@/app/[locale]/components/Text";
import { Button } from "@nextui-org/react";
import { notFound } from "next/navigation";
import { Product, Section } from "@/interfaces";
import { useTranslations } from "next-intl";
import Notification from "@/app/[locale]/components/Notification";
import AppleWallet from "../components/AppleWallet";

const ProductDetails = ({ product }: { product: string }) => {
  const t = useTranslations("product");
  const [productData, setProductData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>({});
  const [productId, setProductId] = useState<string>("");
  const [sectionHeadings, setSectionHeadings] = useState<Section[]>([]);
  const [fontSize, setFontSize] = useState(14);
  const [notifications, setNotifications] = useState<{ text: string }[]>([]);

  const handleSetFontSize = useCallback(
    (size: number) => {
      setFontSize(size);
    },
    [fontSize]
  );

  const language =
    typeof document !== "undefined" && localStorage.getItem("lan");

  // Get the product data
  const getProductData = async (product: string) => {
    try {
      setLoading(true);
      const singleProduct = await fetch(
        `https://mediguide-api-latest.onrender.com/v1/products/search?name=${product}`,
        {
          headers: {
            Language: language || "en",
          },
        }
      );
      const data = await singleProduct.json();
      setProductData(data);
      setProductId(data.id);
    } catch (error) {
      console.log({ error });
      setProductData({});
      setError({ error });
    }
  };

  //Get notifications
  const getNotifications = async (id: string) => {
    try {
      const res = await fetch(
        `https://mediguide-api-latest.onrender.com/v1/notifications?productId=${id}`,
        {
          headers: {
            Language: language || "en",
          },
        }
      );
      const notifications = await res.json();
      setNotifications(notifications.notifications);
    } catch (error) {
      console.log({ error });
      return [];
    }
  };

  const getSections = async (id: string) => {
    try {
      setLoading(true);
      const sections = await fetch(
        `https://mediguide-api-latest.onrender.com/v1/users/labels?productId=${id}`,
        {
          headers: {
            Language: language || "en",
          },
        }
      );

      const data = await sections.json();
      setSectionHeadings(data);
    } catch (error) {
      console.log({ error });
      setSectionHeadings([]);
      setError({ error });
    }
  };

  useEffect(() => {
    getProductData(product);
  }, [language]);

  //Get sections & notifications
  useEffect(() => {
    getSections(productId);
    getNotifications(productId);
  }, [productId, language]);

  useEffect(() => {
    if (Object.keys(productData).length && sectionHeadings.length)
      setLoading(false);
  }, [productData, sectionHeadings]);

  useEffect(() => {
    if (error.error) notFound();
  }, [error]);

  return (
    <div
      className={`p-11 flex justify-evenly flex-wrap`}
      style={{ fontSize: fontSize + "px" }}
    >
      <div className="flex flex-col [&>*]:p-4 max-w-[900px]">
        <div className="flex items-center justify-between">
          <SearchThisPage />
        </div>
        <div className="flex items-center justify-between flex-row">
          <div className="flex flex-col">
            <Text>{productData.name}</Text>
            <p className="text-[#344054] font-[24px] ">
              {productData.activeIngredient}
            </p>
            <p className="text-[#344054] font-[24px] ">
              {t("manufacturedBy")} {productData.company}
            </p>
            {notifications &&
              notifications.map((notification: { text: string }, i: number) => (
                <Notification key={i} title={notification.text} />
              ))}
          </div>
          <AppleWallet />
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Accordions
            productData={productData}
            sectionHeadings={sectionHeadings}
            fontSize={fontSize}
          />
        )}
        <Suggested />
      </div>

      <div className=" flex-col sm:flex hidden [&>div]:my-8">
        <Button
          variant="shadow"
          radius="full"
          style={{ fontSize }}
          className="bg-[#D80027] text-white   h-[48px]"
        >
          {t("buttons.report_event")}
        </Button>
        <Options fontSize={fontSize} setFontSize={handleSetFontSize} />
        {sectionHeadings && <JumpToSection sectionHeadings={sectionHeadings} />}
      </div>
    </div>
  );
};

export default ProductDetails;
