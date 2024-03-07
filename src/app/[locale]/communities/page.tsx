"use client";
import Text from "@/app/components/Text";
import { useTranslations } from "next-intl";

const Communities = () => {
  const t = useTranslations("communities");

  return (
    <main className="min-h-screen">
      <Text>{t("title")}</Text>
    </main>
  );
};

export default Communities;
