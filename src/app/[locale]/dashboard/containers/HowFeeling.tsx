"use client";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const HowFeeling = () => {
  const t = useTranslations("dashboard");

  const buttons: string[] = [
    t("feeling_component.btns.headache"),
    t("feeling_component.btns.nausea"),
    t("feeling_component.btns.dizziness"),
    t("feeling_component.btns.shortness_of_breath"),
  ];

  return (
    <div className="rounded-[8px] border-1 border-[#E5E5E5] text-secondary max-w-[386px] [&>*]:my-5 p-6">
      <p className=" font-bold text-[20px]">{t("feeling_component.title")}</p>
      <div className="flex items-center [&>*]:mx-2 [&>*]:cursor-pointer">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 28C16 28 19 32 24 32C29 32 32 28 32 28M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
            stroke="#313B72"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 32C32 32 29 28 24 28C19 28 16 32 16 32M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
            stroke="#313B72"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className=" font-bold text-[20px]">{t("feeling_component.action")}</p>
      <div className="flex items-center flex-wrap">
        {buttons.map((button, i) => (
          <Button
            variant="bordered"
            radius="full"
            key={i}
            className="border-[1px]  border-secondary  h-[40px] m-1"
          >
            {button}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HowFeeling;
