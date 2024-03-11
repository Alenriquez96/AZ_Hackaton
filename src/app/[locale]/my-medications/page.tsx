"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Tabs,
  Tab,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import Image from "next/image";
import { IconPill } from "@tabler/icons-react";
import Text from "@/app/components/Text";
import { IconFilter, IconArrowsSort } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import inhaler from "../../../../public/inhaler.png";
import aspirin from "../../../../public/aspirin.png";
import pills from "../../../../public/pills.png";

interface medications {
  name: string;
  icon: React.ReactNode;
  instructions?: string;
  bg?: string;
  dose?: string;
  frequency?: string;
}

const currentMedications: medications[] = [
  {
    icon: <IconPill size={50} />,
    name: "Albuterol",
    instructions: "To be taken",
    bg: "../../../../public/inhaler.png",
    dose: "3ml",
    frequency: "every 2 days",
  },
  {
    icon: <IconPill size={50} />,
    name: "Insulin",
    instructions: "Taken at 1pm today ",
    bg: "../../../../public/aspirin.png",
    dose: "50mg",
    frequency: "Daily",
  },
  {
    icon: <IconPill size={50} />,
    name: "Levothyroxine",
    instructions: "Taken at 11am today ",
    bg: "../../../../public/pills.png",
    dose: "300mg",
    frequency: "Weekly",
  },
];

const pastMedications: medications[] = [
  {
    icon: <IconPill size={50} />,
    name: "Morphine",
    bg: "../../../../public/inhaler.png",
  },
  {
    icon: <IconPill size={50} />,
    name: "Aspirin",
    bg: "../../../../public/aspirin.png",
  },
  {
    icon: <IconPill size={50} />,
    name: "Sertraline",
    bg: "../../../../public/pills.png",
  },
];

function MyMedications() {
  const t = useTranslations("My_medications");
  return (
    <main className="min-h-screen p-10 flex-wrap flex justify-evenly">
      <section>
        <Tabs aria-label="medications">
          <Tab
            title={
              t("current_medications") +
              " " +
              "(" +
              currentMedications.length.toString() +
              ")"
            }
          >
            {currentMedications.map((med, i) => (
              <Card key={i} isPressable className=" bg-[#F1EFE9] w-full my-4">
                <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 h-[130px]"></CardHeader>
                <CardBody className=" flex flex-row justify-between items-center">
                  <div>
                    <Text>{med.name}</Text>
                    <p>{med.instructions}</p>
                  </div>
                  <p>{med.dose}</p>
                </CardBody>
              </Card>
            ))}
          </Tab>
          <Tab
            title={
              t("past_medications") +
              " " +
              "(" +
              pastMedications.length.toString() +
              ")"
            }
          >
            {pastMedications.map((med, i) => (
              <Card key={i} isPressable className=" bg-[#F1EFE9] w-full my-4">
                <CardHeader
                  className={`bg-gradient-to-r from-purple-500 to-pink-500 h-[130px]`}
                ></CardHeader>
                <CardBody className="">
                  <Text>{med.name}</Text>
                  <p>{med.instructions}</p>
                </CardBody>
              </Card>
            ))}
          </Tab>
        </Tabs>
      </section>

      <section className="flex flex-col ">
        <div className="[&>*]:mx-3 [&>*]:mb-5">
          <Button
            variant="solid"
            color="secondary"
            radius="full"
            className="w-[202px] h-[50px]"
          >
            {t("btns.mng_medication")}
          </Button>
          <Button
            className="bg-[#63A87D] text-white w-[202px] h-[50px]"
            radius="full"
          >
            + {t("btns.add_medication")}
          </Button>
        </div>
        <Card className="p-4">
          <CardHeader>Medication Schedules</CardHeader>
          <Accordion>
            <AccordionItem title="Morning">
              <div className="flex justify-between bg-[#E0EEE5] rounded-lg p-3">
                <p>{currentMedications[0].name}</p>
                <p>
                  {currentMedications[0].dose} {currentMedications[0].frequency}
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Afternoon">
              <div className="flex justify-between bg-[#E0EEE5] rounded-lg p-3">
                <p>{currentMedications[1].name}</p>
                <p>
                  {currentMedications[1].dose} {currentMedications[1].frequency}
                </p>
              </div>
            </AccordionItem>
            <AccordionItem title="Evening">
              <div className="flex justify-between bg-[#E0EEE5] rounded-lg p-3">
                <p>{currentMedications[2].name}</p>
                <p>
                  {currentMedications[2].dose} {currentMedications[2].frequency}
                </p>
              </div>
            </AccordionItem>
          </Accordion>
        </Card>
      </section>
    </main>
  );
}

export default MyMedications;
