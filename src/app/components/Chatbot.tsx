"use client";
import { useState } from "react";

const Chatbot = () => {
  const [openChatbot, setOpenChatbot] = useState(false);

  return (
    <>
      <div className="bg-[#63A87D] text-white rounded-[16px] h-[74px] w-[380px] p-[24px] fixed bottom-[93px] right-36">
        Hi - ask me about medication!
      </div>
      <button
        onClick={() => setOpenChatbot(!openChatbot)}
        className={`
      z-50 fixed bottom-20 right-6  animate-bounce-short transition-all hover:-translate-y-0.5 text-[40px] font-bold border-[2px] rounded-full p-4`}
      >
        <span className="text-[#462255]">M</span>
        <span className="text-[#FC7853]">G</span>
      </button>
      <div
        className={`right-32 bottom-0 z-50  ${
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
