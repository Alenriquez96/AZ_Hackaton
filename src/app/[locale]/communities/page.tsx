"use client";
import Text from "@/app/[locale]/components/Text";
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
