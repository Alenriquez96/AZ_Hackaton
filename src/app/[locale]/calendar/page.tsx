"use client";
import Text from "../../components/Text";
import { useTranslations } from "next-intl";

const Calendar = () => {
  const t = useTranslations("calendar");
  return (
    <main className="min-h-screen">
      <Text>{t("title")}</Text>
    </main>
  );
};

export default Calendar;
