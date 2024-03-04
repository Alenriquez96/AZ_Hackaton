"use client";
import { useState, useEffect } from "react";
import { SpeakerWaveIcon } from "@heroicons/react/24/outline";
import { useSpeachSynthesisApi } from "@/app/[locale]/hooks/useSpeechSynthesis";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { Video } from "@/app/[locale]/components/Video";
import { Accordion, AccordionItem, Card, Input } from "@nextui-org/react";
import { IconThumbDown, IconThumbUp } from "@tabler/icons-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

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
  const [number, setNumber] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
        "https://mediguide-api-latest.onrender.com/v1/notifications/sms",
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
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Send via SMS
              </ModalHeader>
              <form onSubmit={handleSubmitPhoneNumber}>
                <ModalBody>
                  <Input
                    label="Enter a Number"
                    name="sms"
                    type="text"
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    radius="full"
                    color="primary"
                    variant="bordered"
                    onPress={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    onPress={onClose}
                    radius="full"
                    color="primary"
                    type="submit"
                  >
                    Send SMS
                  </Button>
                </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
      <Accordion>
        {sectionHeadings.map((section, i) => {
          return (
            <AccordionItem
              className={section.title.replaceAll(" ", "").toLowerCase()}
              key={i}
              title={section.title}
            >
              <div className="flex justify-between items-center border-b-[1px] border-b[#DBDBDB] mb-3 pb-3 flex-row-reverse">
                <div className="flex items-center">
                  <ChatBubbleOvalLeftIcon width={24} height={24} />
                  <button className="px-2" onClick={onOpen}>
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
              <p className=" rounded-[8px] bg-[#E8E8E8] text-[14px] leading-[30px] text-black my-5 p-5">
                {choosePath(productData, section.section)}
              </p>
              {section.showVideo && (
                <Video src="https://www.youtube.com/watch?v=LQwxNS7ny0E" />
              )}
              <div className=" bg-[#F2F2F2] py-[12px] text-[14px] rounded-lg px-4 h-[46px] flex items-center justify-between">
                <p>Your feedback on this section</p>
                <div className="flex items-center [&>div]:mx-1">
                  <div className="flex items-center [&>*]:mx-1">
                    <p>Easy to understand</p>
                    <IconThumbUp width={16} height={16} />
                  </div>
                  <div className="flex items-center [&>*]:mx-1">
                    <p>Difficult to understand</p>
                    <IconThumbDown width={16} height={16} />
                  </div>
                </div>
              </div>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Accordions;
