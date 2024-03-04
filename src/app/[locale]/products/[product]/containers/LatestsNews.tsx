"use client";
import Image from "next/image";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const LatestsNews = () => {
  const t = useTranslations("dashboard");
  return (
    <div className="  rounded-[8px] shadow-sm">
      <p className="text-[24px] font-medium m-3">{t("latestNews.suggested")}</p>
      <div className="flex items-center flex-wrap">
        {Array.from(Array(2)).map((i, x) => {
          return (
            <Card
              key={x}
              className="rounded-[8px] m-3 w-[300px] shadow-2xl cursor-pointer"
            >
              <Image
                src={
                  "https://d1pe6f90ru47yo.cloudfront.net/wp-content/uploads/2021/08/27144304/pexels-fauxels-3182811-860x375.jpg"
                }
                alt=""
                width={300}
                height={200}
              />
              <CardHeader className="text-[12px] text-[#090914] font-semibold m-3">
                {t("latestNews.label")}
              </CardHeader>
              <CardFooter className="text-[#63A87D] m-3">
                {t("latestNews.footer")}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default LatestsNews;
