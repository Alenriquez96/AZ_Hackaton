"use client";
import Image from "next/image";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import suggested1 from "@/app/assets/suggested1.svg";
import suggested2 from "@/app/assets/suggested2.svg";
import suggested3 from "@/app/assets/suggested3.svg";

const cards: { img: string; title: string; footer: string }[] = [
  {
    img: suggested1,
    title: "New Study Reveals Potential Side Effects of Levothyroxine",
    footer: "New Study Reveals Potential Side Effects of Levothyroxine",
  },
  {
    img: suggested2,
    title: "FDA Approves Generic Version of Levothyroxine",
    footer: "Thyroid Today",
  },
  {
    img: suggested3,
    title: "Research Suggests Dosage Guidelines for Levothyroxine",
    footer: "Med Review",
  },
];

const Suggested = () => {
  const t = useTranslations("dashboard");
  return (
    <div className="  rounded-[8px] shadow-sm">
      <p className="text-[24px] font-medium m-3">{t("latestNews.suggested")}</p>
      <div className="flex items-center flex-wrap justify-center">
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              className="rounded-[8px] m-2 w-[220px]  shadow-2xl cursor-pointer"
            >
              <Image src={card.img} alt="" width={300} height={200} />
              <CardHeader className="text-[12px] text-[#090914] font-semibold m-3">
                {/* {t("latestNews.label")} */}
                {card.title}
              </CardHeader>
              <CardFooter className="text-[#63A87D] m-3">
                {/* {t("latestNews.footer")} */}
                {card.footer}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Suggested;
