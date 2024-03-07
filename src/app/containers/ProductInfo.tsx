"use client";
import Text from "@/app/components/Text";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const ProductInfo = () => {
  const t = useTranslations("home");

  const productInfo = {
    name: t("brand"),
    subTitle: t("title"),
    description: t("description"),
  };

  return (
    <div className="p-5 sm:p-10 [&>p]:py-3 [&>button]:my-3 sm:max-w-[640px] ">
      <p className="font-medium text-[21px] leading-[22px] text-[#344054] dark:text-white">
        {productInfo.name}
      </p>
      <Text style={{ fontSize: "60px" }}>{productInfo.subTitle}</Text>
      <p className="text-[#667085] font-normal text-[20px] dark:text-white">
        {productInfo.description}
      </p>

      <Button color="primary" size="lg" radius="full" variant="solid">
        {t("btns.get_started")}
      </Button>
    </div>
  );
};

export default ProductInfo;
