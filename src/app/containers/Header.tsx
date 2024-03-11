"use client";
import Logo from "../components/Logo";
import LanguageSelector from "../components/LanguageSelector";
import UserContainer from "./UserContainer";
import CountrySelector from "../components/CountrySelector";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useUserContext } from "../context/UserContext";

const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations("header");

  const { user } = useUserContext(); // Get the user from the context
  const { isLogged } = user; // Get the isLogged property from the user object

  let pathName = usePathname(); // Get the current path

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>; // Return null if the component is not mounted yet

  // Set the user as logged
  const handleSetIsLogged = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLogged", JSON.stringify(true));
    }
  };

  // Navigation items
  const navigation: { title: string; path: string }[] = [
    {
      title: t("navigation_btns.home"),
      path: isLogged ? "/dashboard" : "/",
    },
    { title: t("navigation_btns.my_medications"), path: "/my-medications" },
    { title: t("navigation_btns.calendar"), path: "/calendar" },
    { title: t("navigation_btns.communities"), path: "/communities" },
  ];

  return (
    <header className="h-24 flex justify-between content-center items-center border-b-[1px] border-b-[#DEE5ED] p-6">
      <div className="flex justify-start content-center">
        <Logo loggedUser={isLogged} />
      </div>
      <div className="justify-around items-center  lg:[&>*]:mx-2 flex">
        {isLogged &&
          navigation.map((navItem) => (
            <Link
              key={navItem.title}
              href={`/${locale || "en"}/${navItem.path}`}
            >
              <Button
                variant={pathName.includes(navItem.path) ? "solid" : "light"}
                color={
                  pathName.includes(navItem.path) ? "secondary" : "default"
                }
                radius="full"
                className="hidden lg:block"
              >
                {navItem.title}
              </Button>
            </Link>
          ))}
        {isLogged && (
          <>
            <CountrySelector />

            <LanguageSelector locale={locale} />
          </>
        )}

        <UserContainer
          loggedUser={user}
          isLogged={isLogged}
          language={locale}
        />
      </div>
    </header>
  );
};

export default Header;
