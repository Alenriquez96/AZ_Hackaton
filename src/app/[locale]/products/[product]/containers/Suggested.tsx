"use client";
import Image from "next/image";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import suggested1 from "@/app/assets/suggested1.svg";
import suggested2 from "@/app/assets/suggested2.svg";
import suggested3 from "@/app/assets/suggested3.svg";

const Suggested = () => {
  const t = useTranslations("dashboard");

  const cards: { img: string; title: string; footer: string }[] = [
    {
      img: suggested1,
      title: t("latestNews.label"),
      footer: t("latestNews.footer"),
    },
    {
      img: suggested2,
      title: t("latestNews.label"),
      footer: t("latestNews.footer"),
    },
    {
      img: suggested3,
      title: t("latestNews.label"),
      footer: t("latestNews.footer"),
    },
  ];

  return (
    <div className="  rounded-[8px] shadow-sm">
      <p className="text-[24px] font-medium m-3">{t("latestNews.suggested")}</p>
      <div className="flex items-center flex-wrap justify-center sm:justify-evenly">
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              className="rounded-[8px] m-2 w-[220px]  shadow-2xl cursor-pointer"
            >
              <Image src={card.img} alt="" width={300} height={200} />
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

export default Suggested;
