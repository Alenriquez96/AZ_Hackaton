"use client";
import { useState, useEffect } from "react";
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import { useSpeachSynthesisApi } from "@/app/[locale]/hooks/useSpeechSynthesis";
import { Video } from "@/app/[locale]/components/Video";
import { Accordion, AccordionItem, Card, Input } from "@nextui-org/react";
import {
  IconThumbDown,
  IconThumbUp,
  IconPencil,
  IconDotsVertical,
  IconMail,
} from "@tabler/icons-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";
import { Section, Product } from "@/interfaces";
import { useTranslations } from "next-intl";

const excludeHeadings: string[] = ["activeIngredient", "company", "name"];

const Accordions = ({
  productData,
  sectionHeadings,
}: {
  productData: Product;
  sectionHeadings: Section[];
}) => {
  const [opened, setOpened] = useState<number | null>(null);
  const [number, setNumber] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [textToSpeech, setTextToSpeech] = useState<string | null>(null);
  const t = useTranslations("product");

  const options: any[] = [
    <Button variant="light" startContent={<IconMail width={24} height={24} />}>
      {t("buttons.email")}
    </Button>,
    <Button
      onClick={onOpen}
      variant="light"
      startContent={<ChatBubbleOvalLeftIcon width={24} height={24} />}
    >
      {t("buttons.text")}
    </Button>,
    <Button
      variant="light"
      startContent={<IconPencil width={24} height={24} />}
    >
      {t("buttons.highlight")}
    </Button>,
  ];

  // Get the locale from the local storage
  const locale: string =
    (typeof window !== "undefined" && localStorage.getItem("lan")) || "en-GB";

  const { setText, isSpeaking, speak, cancel } = useSpeachSynthesisApi(locale);

  useEffect(() => {
    cancel();
    if (textToSpeech !== null) {
      setText(textToSpeech);
    }
  }, [textToSpeech]);

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

  //Matches the sectionHeading.section to the productData[key] and returns the productData[key] value
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
        {sectionHeadings &&
          sectionHeadings
            .filter((section) => !excludeHeadings.includes(section.section))
            .map((section, i: number) => {
              return (
                <AccordionItem
                  className={section.title.replaceAll(" ", "").toLowerCase()}
                  key={i}
                  title={section.title}
                  onPress={() =>
                    setTextToSpeech(choosePath(productData, section.section))
                  }
                >
                  <div className="flex justify-between items-center border-b-[1px] border-b[#DBDBDB] mb-3 pb-3 flex-row-reverse">
                    <div className="flex items-center">
                      <Dropdown>
                        <DropdownTrigger className="cursor-pointer">
                          <IconDotsVertical width={16} height={16} />
                        </DropdownTrigger>
                        <DropdownMenu>
                          {options.map((option, i) => (
                            <DropdownItem
                              showDivider={i !== options.length - 1}
                              key={i}
                            >
                              {option}
                            </DropdownItem>
                          ))}
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                    <div
                      onClick={() => (isSpeaking ? cancel() : speak())}
                      className="flex justify-end items-center [&>p]:px-2   cursor-pointer"
                    >
                      {isSpeaking ? (
                        <SpeakerXMarkIcon
                          height={20}
                          width={20}
                          color="#486284"
                        />
                      ) : (
                        <SpeakerWaveIcon
                          height={20}
                          width={20}
                          color="#486284"
                        />
                      )}
                      <p className="text-[#486284]">{t("buttons.listen")}</p>
                    </div>
                  </div>
                  <p className=" rounded-[8px] bg-[#E8E8E8]  leading-[30px] text-black my-5 p-5">
                    {choosePath(productData, section.section)}
                  </p>
                  {section.showVideo && (
                    <Video src="https://www.youtube.com/watch?v=LQwxNS7ny0E" />
                  )}
                  <div className=" bg-[#F2F2F2] py-[12px]  rounded-lg px-4 h-[46px] flex items-center justify-between">
                    <p>{t("feedback")}</p>
                    <div className="flex items-center [&>div]:mx-1">
                      <div className="flex items-center [&>*]:mx-1">
                        <p>{t("buttons.easy")}</p>
                        <IconThumbUp width={16} height={16} />
                      </div>
                      <div className="flex items-center [&>*]:mx-1">
                        <p>{t("buttons.difficult")}</p>
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
