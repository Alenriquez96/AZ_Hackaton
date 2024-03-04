"use client";
import Logo from "../components/Logo";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  const links: { heading: string; links: string[] }[] = [
    {
      heading: t("product.title"),
      links: [
        t("product.overview"),
        t("product.features"),
        t("product.solutions"),
        t("product.releases"),
      ],
    },
    {
      heading: t("company.title"),
      links: [
        t("company.aboutUs"),
        t("company.careers"),
        t("company.press"),
        t("company.news"),
        t("company.employeeLogIn"),
      ],
    },
    {
      heading: t("resources.title"),
      links: [
        t("resources.blog"),
        t("resources.helpCenter"),
        t("resources.tutorials"),
        t("resources.support"),
      ],
    },
    {
      heading: t("social.title"),
      links: [
        t("social.x"),
        t("social.linkedIn"),
        t("social.facebook"),
        t("social.instagram"),
      ],
    },
    {
      heading: t("legal.title"),
      links: [
        t("legal.terms"),
        t("legal.privacy"),
        t("legal.cookies"),
        t("legal.licenses"),
        t("legal.settings"),
      ],
    },
  ];

  return (
    <footer className="bg-[#F9FAFB] w-full  p-6 flex flex-col items-center ">
      <div className="w-[80%] sm:flex items-start justify-between hidden">
        {links.map((row, i) => {
          return (
            <div key={i} className="flex flex-col justify-start">
              <p className="font-semibold text-[#98A2B3] text-[14px] my-2">
                {row.heading}
              </p>
              {row.links.map((link, i) => (
                <p
                  key={i}
                  className="text-[#667085] text-[16px] font-semibold my-2"
                >
                  {link}
                </p>
              ))}
            </div>
          );
        })}
      </div>
      <div className="flex sm:justify-between justify-center sm:items-center border-t-[1px] w-[80%] mt-5 h-[100px] ">
        <Logo className="my-6 sm:m-0" />
        <p className="text-[#98A2B3] text-[16px] hidden sm:block">
          {t("all_rights_reserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
