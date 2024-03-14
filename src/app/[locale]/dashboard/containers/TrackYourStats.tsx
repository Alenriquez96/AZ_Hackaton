"use client";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Title } from "@/app/components/Title";

const TrackYourStats = () => {
  const t = useTranslations("dashboard");
  return (
    <div className="border-1 border-[#E5E5E5] rounded-[8px] flex max-w-[387px] p-5">
      <div className="[&>*]:my-3">
        <Title>{t("trackStats.title")}</Title>
        <p>{t("trackStats.reminders")}</p>
        <div className="flex items-center">
          <Button size="md" radius="full" color="primary">
            {t("trackStats.btns.log")}
          </Button>
          <Button
            size="md"
            radius="full"
            className="text-primary border-1 border-primary bg-transparent ml-3"
          >
            {t("trackStats.btns.trends")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TrackYourStats;
