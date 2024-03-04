"use client";
import { useState } from "react";
import { useOutsideClick, useHover } from "@/app/[locale]/hooks";
import { useRef } from "react";
import { useTranslations } from "next-intl";

const Chatbot = () => {
  const t = useTranslations("chatBot");
  const [openChatbot, setOpenChatbot] = useState(false);
  const outerElement = useRef(null);
  const [hoverRef, isHovered] = useHover();

  useOutsideClick(outerElement, () => setOpenChatbot(false));

  return (
    <>
      <div
        ref={outerElement}
        className={`bg-[#63A87D] text-white rounded-[16px] h-[74px] w-[380px] p-[24px] ${
          isHovered ? "fixed" : "hidden"
        }  bottom-[93px] right-36`}
      >
        {t("tooltip")}
      </div>
      <button
        ref={hoverRef}
        onClick={() => setOpenChatbot(!openChatbot)}
        className={`
      z-50 fixed bottom-20 right-6 bg-white animate-bounce-short transition-all hover:-translate-y-0.5 text-[40px] font-bold border-[2px] border-[#462255] rounded-full p-4`}
      >
        <span className="text-primary">M</span>
        <span className="text-[#FC7853]">G</span>
      </button>
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
    </>
  );
};

export default Chatbot;
