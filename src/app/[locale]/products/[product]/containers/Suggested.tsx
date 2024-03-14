"use client";
import Image from "next/image";
import { Card, CardHeader, CardFooter } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import suggested1 from "@/app/assets/suggested1.svg";
import suggested2 from "@/app/assets/suggested2.svg";
import suggested3 from "@/app/assets/suggested3.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Title } from "@/app/components/Title";

const Suggested = () => {
  const t = useTranslations("dashboard");

  const cards: { img: string; title: string; footer: string }[] = [
    {
      img: suggested1,
      title: t("latestNews.suggested1.label"),
      footer: t("latestNews.suggested1.footer"),
    },
    {
      img: suggested2,
      title: t("latestNews.suggested2.label"),
      footer: t("latestNews.suggested2.footer"),
    },
    {
      img: suggested3,
      title: t("latestNews.suggested3.label"),
      footer: t("latestNews.suggested3.footer"),
    },
    {
      img: suggested1,
      title: t("latestNews.suggested1.label"),
      footer: t("latestNews.suggested1.footer"),
    },
    {
      img: suggested2,
      title: t("latestNews.suggested2.label"),
      footer: t("latestNews.suggested2.footer"),
    },
    {
      img: suggested3,
      title: t("latestNews.suggested3.label"),
      footer: t("latestNews.suggested3.footer"),
    },
  ];

  return (
    <div className="  rounded-[8px] shadow-sm flex flex-col items-center ">
      <div className="w-full p-5">
        <Title>{t("latestNews.suggested")}</Title>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[80%]"
      >
        <CarouselContent>
          {cards.map((card, i) => (
            <CarouselItem
              key={i}
              className="md:basis-1/2 lg:basis-1/3 grid place-content-center"
            >
              <Card key={i} className="rounded-[8px]  cursor-pointer">
                <Image src={card.img} alt="" />
                <CardHeader className="text-[12px] text-[#090914] font-semibold m-3">
                  {card.title}
                </CardHeader>
                <CardFooter className="text-[#63A87D] m-3">
                  {card.footer}
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Suggested;
