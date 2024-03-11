"use client";
import { useState } from "react";
import { useOutsideClick, useHover } from "@/app/hooks";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Tooltip } from "@nextui-org/react";

const Chatbot = () => {
  const t = useTranslations("chatBot");
  const [openChatbot, setOpenChatbot] = useState(false);
  const outerElement = useRef(null);
  const [hoverRef, isHovered] = useHover();

  useOutsideClick(outerElement, () => setOpenChatbot(false));

  return (
    <div ref={outerElement}>
      <Tooltip
        shadow="lg"
        placement="left"
        shouldFlip
        className="bg-[#FC7853] h-[74px] w-[380px] text-white "
        content={<div>{t("tooltip")}</div>}
      >
        <button
          ref={hoverRef}
          onClick={() => setOpenChatbot(!openChatbot)}
          className={`
      z-50  fixed bottom-40 right-6 bg-white animate-bounce-short transition-all hover:-translate-y-0.5  font-bold border-[2px] border-[#462255] rounded-full flex text-[20px] p-4`}
        >
          <p className="text-primary">M</p>
          <p className="text-[#FC7853]">G</p>
        </button>
      </Tooltip>
      <div
        className={`right-0 sm:right-32 bottom-0 z-50  ${
          openChatbot ? "fixed" : "hidden"
        }`}
      >
        <iframe
          style={{ border: "none" }}
          height="600px"
          width="400px"
          src="https://widget.kommunicate.io/chat?appId=f5f1873c14f914530e4172bb5764606a"
          allow="microphone; geolocation;"
        ></iframe>
      </div>
    </div>
  );
};

export default Chatbot;
