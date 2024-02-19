"use client";
import { useState, useEffect } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useSpeachSynthesisApi } from "@/app/hooks/useSpeechSynthesis";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { Video } from "@/app/components/Video";

export const sectionHeadings: {
  title: string;
  section: string;
  showVideo?: boolean;
}[] = [
  { title: "What is this medicine for?", section: "description" },
  {
    title: "Before you take the medicine",
    section: "prerequisites.warningsAndPrecautions",
  },
  {
    title: "How to take the medicine",
    section: "instructions.instruction",
    showVideo: true,
  },
  {
    title: "Possible Side Effects",
    section: "sideEffects.possibleSideEffects",
  },
  { title: "Storing the medicine", section: "storage" },
  { title: "Disposing of the medicine", section: "disposalAndHandling" },
  {
    title: "Further information",
    section: "authorizationHolderAndManufacturer",
  },
];

const Accordions = ({ productData }: any) => {
  const [opened, setOpened] = useState<number | null>(null);
  const [modal, setModal] = useState<boolean>(false);
  const [number, setNumber] = useState("");

  const {
    text,
    setText,
    isSpeaking,
    isPaused,
    isResumed,
    isEnded,
    speak,
    pause,
    resume,
    cancel,
  } = useSpeachSynthesisApi();

  useEffect(() => {
    cancel();
    if (productData.description) {
      setText(productData.description.slice(0, 100));
    }
  }, [productData.description]);

  const handleSubmitPhoneNumber = async (e: any) => {
    e.preventDefault();

    const el: any = sectionHeadings.find((_, i) => i === opened);

    try {
      const res = await fetch(
        "https://7cc9-170-194-32-44.ngrok-free.app/v1/notifications/sms",
        {
          method: "POST",
          body: JSON.stringify({
            phoneNumber: number,
            text: choosePath(productData, el?.section).slice(0, 100),
          }),
          headers: {
            "content-type": "application/json",
          },
        }
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log("Error ocurred: " + error);
    }
  };

  function choosePath(product: any, path: string) {
    const splitedPath: any = path.split(".");
    let current = product;
    while (splitedPath.length) {
      if (typeof current !== "object") return undefined;
      current = current[splitedPath.shift()];
    }
    return current;
  }

  return (
    <div>
      <div>
        {sectionHeadings.map((section, i) => {
          return (
            <div
              id={section.title}
              key={i}
              onClick={() => {
                // if (i === opened) setOpened(null);

                setOpened(i);
              }}
              className="[&>*]:my-5"
            >
              <p className="w-[700px] h-[50px] rounded-[8px] bg-[#E8E8E8] text-[24px]  items-center px-5 text-black cursor-pointer flex justify-between ">
                {section.title}
                {opened === i ? (
                  <svg
                    onClick={() => {
                      setOpened(null);
                    }}
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9363 13C15.736 13 16.2122 12.1079 15.7672 11.4435L8.83336 1.09045C8.43681 0.498349 7.56586 0.499223 7.1705 1.09212L0.266757 11.4452C-0.176382 12.1098 0.3 13 1.09875 13H14.9363ZM4.84131 10H11.1906L7.99981 5.23232L4.84131 10Z"
                      fill="black"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="13"
                    viewBox="0 0 16 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.9363 0C15.736 0 16.2122 0.892051 15.7672 1.55646L8.83336 11.9096C8.43681 12.5017 7.56586 12.5008 7.1705 11.9079L0.266757 1.55479C-0.176382 0.890247 0.3 0 1.09875 0H14.9363ZM4.84131 3H11.1906L7.99981 7.76768L4.84131 3Z"
                      fill="black"
                    />
                  </svg>
                )}
              </p>

              <div className={`${opened === i ? "block" : "hidden"}`}>
                <div className="flex justify-between items-center border-b-[1px] border-b[#DBDBDB] mb-3 pb-3 flex-row-reverse">
                  <div className="flex items-center">
                    <ChatBubbleOvalLeftIcon width={24} height={24} />
                    <button className="px-2" onClick={() => setModal(!modal)}>
                      Send via text
                    </button>
                  </div>
                  <div
                    onClick={() => (isSpeaking ? cancel() : speak())}
                    className="flex justify-end items-center [&>p]:px-2   cursor-pointer"
                  >
                    <SpeakerWaveIcon height={20} width={20} color="#486284" />
                    <p className="text-[#486284]">Listen to this section</p>
                  </div>
                </div>
                <p className="w-[700px] rounded-[8px] bg-[#E8E8E8] text-[14px] leading-[30px] text-black my-5 p-5">
                  {choosePath(productData, section.section)}
                </p>
                {section.showVideo && (
                  <Video src="https://www.youtube.com/watch?v=LQwxNS7ny0E" />
                )}
                <div className="w-[700px] bg-[#F2F2F2] py-[12px] px-[20px] h-[46px] flex items-center justify-between">
                  <p>Your feedback on this section</p>
                  <div className="flex items-center [&>div]:mx-1">
                    <div className="flex items-center [&>*]:mx-1">
                      <p>Easy to understand</p>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.48607 3.13686L8.4855 3.1378L6 7.27716V13H11.44C11.8983 13 12.2991 12.6854 12.4092 12.24L13.419 8.1911L13.4192 8.18998C13.5742 7.55708 13.097 6.95 12.45 6.95H10.01C9.45772 6.95 9.01 6.50228 9.01 5.95V3.28C9.01 3.12228 8.88772 3 8.73 3C8.63273 3 8.53634 3.05459 8.48607 3.13686ZM4 13V8H3V13H4ZM4.43403 6L6.77268 2.10521L6.7745 2.10219C7.18438 1.42499 7.92764 1 8.73 1C9.99229 1 11.01 2.01771 11.01 3.28V4.95H12.45C14.4027 4.95 15.8252 6.78221 15.361 8.66891L15.3603 8.67198L14.3508 12.72L14.3505 12.721C14.0202 14.0551 12.8213 15 11.44 15H2C1.44772 15 1 14.5523 1 14V7C1 6.44771 1.44772 6 2 6H4.43403Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center [&>*]:mx-1">
                      <p>Difficult to understand</p>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M2 1C1.44772 1 1 1.44772 1 2V9C1 9.55228 1.44772 10 2 10H4.43403L6.77268 13.8948L6.7745 13.8978C7.18438 14.575 7.92763 15 8.73 15C9.99228 15 11.01 13.9823 11.01 12.72V11.05H12.45C14.4027 11.05 15.8252 9.21781 15.361 7.3311L15.3603 7.32804L14.3508 3.28004L14.3504 3.27861C14.02 1.94475 12.8212 1 11.44 1H5H2ZM3 8V3H4V8H3ZM6 8.72284L8.4855 12.8622L8.48606 12.8631C8.53634 12.9454 8.63273 13 8.73 13C8.88772 13 9.01 12.8777 9.01 12.72V10.05C9.01 9.49772 9.45772 9.05 10.01 9.05H12.45C13.0969 9.05 13.5741 8.44302 13.4193 7.81019L13.419 7.80891L12.4097 3.76198L12.4092 3.75997C12.2991 3.31459 11.8983 3 11.44 3H6V8.72284Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <form
        onSubmit={handleSubmitPhoneNumber}
        className={`${
          modal ? "block" : "hidden"
        } fixed max-w-[360px] bg-white border-2 border-black rounded-[16px] mx-auto left-0 right-0 top-[500px]  z-50`}
      >
        <div className="flex flex-col justify-center items-start [&>*]:mx-11 m-8 ">
          <h1 className="py-2 text-[24px] font-semibold">Send via SMS</h1>
          <label className="py-2" htmlFor="sms">
            Enter a Number
          </label>
          <input
            name="sms"
            type="text"
            placeholder="Mobile phone Number"
            className="p-2 rounded-xl border-[1px] border-black"
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Accordions;
