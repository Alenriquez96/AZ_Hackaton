"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface NavigationProps {
  locale: string;
}

const Navigation = ({ locale }: NavigationProps) => {
  const t = useTranslations("header");

  // Navigation items
  const navigation: { title: string; path: string }[] = [
    {
      title: t("navigation_btns.home"),
      path: "/dashboard",
    },
    { title: t("navigation_btns.my_medications"), path: "/my-medications" },
    { title: t("navigation_btns.calendar"), path: "/calendar" },
    // { title: t("navigation_btns.communities"), path: "/communities" },
    { title: "My Stats", path: "/my-stats" },
  ];

  const pathName = usePathname();
  return (
    <>
      {navigation.map((navItem) => (
        <Link key={navItem.title} href={`/${locale || "en"}/${navItem.path}`}>
          <Button
            variant={pathName.includes(navItem.path) ? "solid" : "light"}
            color={pathName.includes(navItem.path) ? "secondary" : "default"}
            radius="full"
            className="hidden lg:block"
          >
            {navItem.title}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default Navigation;
