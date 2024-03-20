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
          <g clipPath="url(#clip0_479_9110)">
            <g filter="url(#filter0_d_479_9110)">
              <path
                d="M16 28C16 28 19 32 24 32C29 32 32 28 32 28M18 18H18.02M30 18H30.02M44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24Z"
                stroke="#FC7853"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                shapeRendering="crispEdges"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_479_9110"
              x="1"
              y="1"
              width="48"
              height="48"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_479_9110"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_479_9110"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_479_9110">
              <rect width="48" height="48" fill="white" />
            </clipPath>
          </defs>
        </svg>

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
