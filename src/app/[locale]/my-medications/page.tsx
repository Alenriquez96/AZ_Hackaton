"use client";
import {
  Card,
  CardBody,
  Button,
  Tabs,
  Tab,
  useDisclosure,
  Image as Img,
} from "@nextui-org/react";
import Image from "next/image";
import { IconPill } from "@tabler/icons-react";
import Text from "@/app/components/Text";
import { IconFilter, IconArrowsSort } from "@tabler/icons-react";
import { useTranslations } from "next-intl";
import inhaler from "../../assets/inhaler.png";
import aspirin from "../../assets/aspirin.png";
import pills from "../../assets/pills.png";
import injection from "../../assets/injection.png";
import AddMedicationModal from "./containers/AddMedicationModal";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import MedicationSchedules from "./containers/MedicationSchedules";
import MedicationTracker from "./containers/MedicationTracker";
import { medicationsType } from "@/interfaces";
import { useFillRandomly } from "@/app/hooks";

const currentMedicationsMock: medicationsType[] = [
  {
    name: "Albuterol",
    instructions: "To be taken",
    dose: "3ml",
    frequency: "every 2 days",
    type: "inhaler",
  },
  {
    name: "Insulin",
    instructions: "Taken at 1pm today ",
    dose: "50mg",
    frequency: "Daily",
    type: "pill",
  },
  {
    name: "Levothyroxine",
    instructions: "Taken at 11am today ",
    dose: "300mg",
    frequency: "Weekly",
    type: "tablet",
  },
  {
    name: "Humalog",
    instructions: "To be taken",
    dose: "3ml",
    frequency: "every 2 days",
    type: "injection",
  },
  {
    name: "Sertraline",
    instructions: "To be taken",
    dose: "3ml",
    frequency: "every 2 days",
    type: "tablet",
  },
];

const pastMedicationsMock: medicationsType[] = [
  {
    name: "Humalog",
    type: "injection",
  },
  {
    name: "Aspirin",
    type: "tablet",
  },
  {
    name: "Sertraline",
    type: "tablet",
  },
  {
    name: "Albuterol",
    type: "inhaler",
  },
  {
    name: "Insulin",
    type: "injection",
  },
];

function MyMedications() {
  const t = useTranslations("My_medications");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [currentMedications, setCurrentMedications] = useState<
    medicationsType[]
  >([]);
  const [pastMedications, setPastMedications] = useState<medicationsType[]>([]);

  useFillRandomly(currentMedicationsMock, setCurrentMedications);
  useFillRandomly(pastMedicationsMock, setPastMedications);

  const showImg = (type: string) => {
    if (type === "inhaler") {
      return <Image alt="bg" width={500} height={700} src={inhaler} />;
    }

    if (type === "tablet") {
      return <Image alt="bg" width={500} height={700} src={aspirin} />;
    }

    if (type === "pill") {
      return <Image alt="bg" width={500} height={700} src={pills} />;
    }

    if (type === "injection") {
      return <Image alt="bg" width={500} height={700} src={injection} />;
    }
  };

  return (
    <main className="min-h-screen p-10 flex-wrap flex justify-evenly">
      <AddMedicationModal
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
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
                {showImg(med.type)}
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
                {showImg(med.type)}
                <CardBody className="">
                  <Text>{med.name}</Text>
                  <p>{med.instructions}</p>
                </CardBody>
              </Card>
            ))}
          </Tab>
        </Tabs>
      </section>

      <section className="flex flex-col items-center [&>*]:mb-8 [&>*]:min-w-[80%]">
        <div className="[&>*]:mx-3 [&>*]:mb-5">
          <Button
            variant="solid"
            color="secondary"
            radius="full"
            className="w-[150px] "
          >
            {t("btns.mng_medication")}
          </Button>
          <Button
            className="bg-[#63A87D] text-white w-[150px]  "
            radius="full"
            onPress={onOpen}
          >
            + {t("btns.add_medication")}
          </Button>
        </div>
        <MedicationTracker />
        {currentMedications.length && (
          <MedicationSchedules currentMedications={currentMedications} />
        )}
        <Card>
          <CardBody className="grid place-content-center">
            <Calendar
              selected={date}
              onSelect={setDate}
              mode="single"
              className="cursor-pointer"
            />
          </CardBody>
        </Card>
      </section>
    </main>
  );
}

export default MyMedications;
