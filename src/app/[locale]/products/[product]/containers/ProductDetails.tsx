"use client";

import { useState, useEffect, useCallback } from "react";
import Options from "../components/Options";
import SearchThisPage from "../components/SearchThisPage";
import Accordions from "./Accordions";
import { JumpToSection } from "./JumpToSection";
import Suggested from "./Suggested";
import LoadingSpinner from "../components/LoadingSpinner";
import Text from "@/app/components/Text";
import { Button } from "@nextui-org/react";
import { notFound } from "next/navigation";
import { Product, Section } from "@/interfaces";
import { useTranslations } from "next-intl";
import Notification from "@/app/components/Notification";
import MobileOptions from "./MobileOptions";
import { Link } from "@/navigation";
import { usePathname, useRouter } from "next/navigation";

const ProductDetails = ({
  product,
  language,
}: {
  product: string;
  language: string;
}) => {
  const t = useTranslations("product");
  const [productData, setProductData] = useState<Product | any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>({});
  const [productId, setProductId] = useState<string>("");
  const [sectionHeadings, setSectionHeadings] = useState<Section[]>([]);
  const [fontSize, setFontSize] = useState(14);
  const [notifications, setNotifications] = useState<{ text: string }[]>([]);

  const pathName = usePathname();
  const router = useRouter();

  const handleSetFontSize = useCallback(
    (size: number) => {
      setFontSize(size);
    },
    [fontSize]
  );

  // Get the product data
  const getProductData = async (product: string) => {
    try {
      setLoading(true);
      const singleProduct = await fetch(
        `https://ec2-18-134-96-73.eu-west-2.compute.amazonaws.com/v1/products/search?name=${product}`,
        {
          headers: {
            Language: language || "en",
            "Access-Control-Allow-Origin": "*",
            authorization:
              "Bearer " + localStorage.getItem("access_token") || "",
          },
        }
      );
      if (singleProduct.status === 401) {
        router.push("/");
      }
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
        `https://ec2-18-134-96-73.eu-west-2.compute.amazonaws.com/v1/notifications?productId=${id}`,
        {
          headers: {
            Language: language || "en",
            authorization:
              "Bearer " + localStorage.getItem("access_token") || "",
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
        `https://ec2-18-134-96-73.eu-west-2.compute.amazonaws.com/v1/users/labels?productId=${id}`,
        {
          headers: {
            Language: language || "en",
            authorization:
              "Bearer " + localStorage.getItem("access_token") || "",
          },
        }
      );

      if (sections.status === 401) {
        router.push("/");
      }
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

  const deleteNotification = (index: number) => {
    setNotifications(notifications.filter((n, i) => i !== index));
  };

  return (
    <div
      className={`p-11 flex justify-evenly flex-wrap min-h-screen`}
      style={{ fontSize: fontSize + "px" }}
    >
      {!loading ? (
        <div className="flex flex-col [&>*]:p-4 max-w-[900px]">
          <div className="hidden sm:flex items-center justify-between">
            <SearchThisPage placeholder={t("search")} />
          </div>

          <div className="flex items-center justify-between flex-row [&>*]:mx-4 ">
            <div className="flex flex-col">
              <Text>{productData.name}</Text>
              <p className=" font-[24px] ">{productData.activeIngredient}</p>
              <p className=" font-[24px] ">
                {t("manufacturedBy")} {productData.company}
              </p>
              {notifications &&
                notifications.map(
                  (notification: { text: string }, i: number) => (
                    <Notification
                      key={i}
                      title={notification.text}
                      deleteNotification={() => deleteNotification(i)}
                    />
                  )
                )}
            </div>
            <MobileOptions />
          </div>

          <Accordions
            productData={productData}
            sectionHeadings={sectionHeadings}
            fontSize={fontSize}
            language={language}
          />

          <Link
            className="underline"
            href={"./sustainability?product=" + productData.name}
          >
            See sustainability information
          </Link>
          <Suggested />
        </div>
      ) : (
        <LoadingSpinner />
      )}

      <div className="flex-col lg:flex hidden [&>div]:my-8">
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
