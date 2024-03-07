"use client";
import {
  IconHome,
  IconMedicalCross,
  IconCalendar,
  IconMessageCircle,
} from "@tabler/icons-react";
import { Card, Link, Button } from "@nextui-org/react";
import LanguageSelector from "../components/LanguageSelector";
import Logo from "../components/Logo";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface mobileNavigationBarProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const MobileNavbar = ({ ...props }) => {
  const locale = props.locale || "en";
  const t = useTranslations("footer");
  const [mounted, setMounted] = useState(false);
  const userLogged =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("isLogged") || "false")
      : false;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  const mobileNavigationBar: mobileNavigationBarProps[] = [
    {
      icon: <IconHome />,
      label: "Home",
      path: "/" + locale + "/",
    },
    {
      icon: <IconMedicalCross />,
      label: "Medications",
      path: "/" + locale + "/my-medications",
    },
    {
      icon: <IconCalendar />,
      label: "Calendar",
      path: "/" + locale + "/calendar",
    },
    {
      icon: <IconMessageCircle />,
      label: "Communities",
      path: "/" + locale + "/communities",
    },
  ];

  return (
    <>
      {userLogged ? (
        <Card radius="none" className="sm:hidden w-full sticky bottom-0 z-10">
          <div className="flex w-full justify-around">
            {mobileNavigationBar.map((item, i) => (
              <Link href={item.path} key={i}>
                <Button
                  className="flex flex-col p-2 items-center h-[100px] my-4"
                  variant="light"
                >
                  {item.icon}
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </Card>
      ) : (
        <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center border-t-[1px] lg:w-[80%] mt-5 h-[100px] ">
          <Logo className="my-6 sm:m-0" />
          <div className="block sm:hidden">
            <LanguageSelector locale={locale} />
          </div>
          <p className="text-[#98A2B3] text-[16px] my-5">
            {t("all_rights_reserved")}
          </p>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
