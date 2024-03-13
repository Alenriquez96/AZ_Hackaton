"use client";
import {
  IconHome,
  IconMedicalCross,
  IconCalendar,
  IconMessageCircle,
  IconTrendingUp,
  IconReportAnalytics,
  IconCropPortrait,
} from "@tabler/icons-react";
import { Card, Link, Button } from "@nextui-org/react";
import LanguageSelector from "../components/LanguageSelector";
import Logo from "../components/Logo";
import { useTranslations } from "next-intl";
import { useUserContext } from "../context/UserContext";

interface mobileNavigationBarProps {
  icon: React.ReactNode;
  label: string;
  path: string;
}

const MobileNavbar = ({ ...props }) => {
  const locale = props.locale || "en";
  const t = useTranslations("footer");
  const { user } = useUserContext();

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
    // {
    //   icon: <IconMessageCircle />,
    //   label: "Communities",
    //   path: "/" + locale + "/communities",
    // },
    {
      icon: <IconTrendingUp />,
      label: "My Stats",
      path: "/" + locale + "/my-stats",
    },
  ];

  const employeeMobileNavigationBar: mobileNavigationBarProps[] = [
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
      icon: <IconReportAnalytics />,
      label: "Product Analytics",
      path: "/" + locale + "/product-analytics",
    },
    {
      icon: <IconCropPortrait />,
      label: "Portfolio Analytics",
      path: "/" + locale + "/portfolio-analytics",
    },
  ];

  return (
    <>
      {user.isLogged ? (
        <Card radius="none" className="sm:hidden w-full sticky bottom-0 z-10">
          <div className="flex w-full justify-around">
            {user.profileType === "Proffesional"
              ? employeeMobileNavigationBar.map((item, i) => (
                  <Link href={item.path} key={i}>
                    <Button
                      className="flex flex-col p-2 items-center h-[100px] my-4"
                      variant="light"
                    >
                      {item.icon}
                      <p className="text-wrap">{item.label}</p>
                    </Button>
                  </Link>
                ))
              : mobileNavigationBar.map((item, i) => (
                  <Link href={item.path} key={i}>
                    <Button
                      className="flex flex-col p-2 items-center h-[100px] my-4"
                      variant="light"
                    >
                      {item.icon}
                      <p className="text-wrap">{item.label}</p>
                    </Button>
                  </Link>
                ))}
          </div>
        </Card>
      ) : (
        <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center border-t-[1px] px-5 mt-5 h-[100px] ">
          <div className="block sm:hidden my-2">
            <LanguageSelector locale={locale} />
          </div>
          <Logo />
          <p className="text-[#98A2B3] text-[16px] my-5">
            {t("all_rights_reserved")}
          </p>
        </div>
      )}
    </>
  );
};

export default MobileNavbar;
