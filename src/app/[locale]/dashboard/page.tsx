"use client";

import InPageSearch from "../../components/InPageSearch";
import Text from "../../components/Text";
import Suggested from "../products/[product]/containers/Suggested";
import Notification from "../../components/Notification";
import HowFeeling from "./containers/HowFeeling";
import TrackYourStats from "./containers/TrackYourStats";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useUserContext } from "@/app/context/UserContext";
import MedicationTracker from "../my-medications/containers/MedicationTracker";
import { Title } from "@/app/components/Title";

export default function Dashboard({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = useTranslations("dashboard");
  const { user } = useUserContext();

  useEffect(() => {}, [user]);

  return (
    <main className="flex justify-evenly flex-wrap my-10 [&>*]:mx-2">
      <div className="flex flex-col [&>*]:m-5 lg:max-w-[50%]">
        <Text>
          {t("welcomeText")} {user.name}!
        </Text>

        {/* <Notification /> */}
        <InPageSearch locale={locale} />
        <HowFeeling />
        <Suggested />
      </div>
      <div className="flex flex-col items-center sm:items-start [&>*]:m-5 max-w-[400px] [&>*]:w-[94%]">
        <Title>{t("reminders")}</Title>
        <TrackYourStats />
        <MedicationTracker />
      </div>
      <footer className="bg-[url('../assets/spotted_footer.svg')] w-screen h-[500px] fixed z-[-1] bottom-0"></footer>
    </main>
  );
}
