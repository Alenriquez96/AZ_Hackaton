"use client";
import InPageSearch from "../../components/InPageSearch";
import Text from "../../components/Text";
import LatestsNews from "../products/[product]/containers/Suggested";
import Notification from "../../components/Notification";
import HowFeeling from "./containers/HowFeeling";
import TrackYourStats from "./containers/TrackYourStats";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useUserContext } from "@/app/context/UserContext";

export default function Dashboard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("dashboard");
  const { user } = useUserContext();

  useEffect(() => {}, [user]);

  return (
    <main className="flex justify-evenly flex-wrap [&>*]:mx-2">
      <div className="flex flex-col [&>*]:m-5 ">
        <Text>
          {t("welcomeText")} {user.name}!
        </Text>

        {/* <Notification /> */}
        <InPageSearch locale={locale} />
        <LatestsNews />
      </div>
      <div className="flex flex-col items-center sm:items-start [&>*]:m-5 max-w-[400px]">
        <p className="text-[24px]">{t("reminders")}</p>
        <TrackYourStats />
        <HowFeeling />
      </div>
    </main>
  );
}
