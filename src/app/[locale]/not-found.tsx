"use client";
import Link from "next/link";
import Text from "./components/Text";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <div className="min-h-screen grid place-content-center text-center [&>*]:my-3">
      <Text>{t("title")}</Text>
      <p className="text-wrap px-10">{t("description")}</p>
      <Link href="/">
        <Button variant="shadow" color="primary">
          {t("btn")}
        </Button>
      </Link>{" "}
    </div>
  );
}
