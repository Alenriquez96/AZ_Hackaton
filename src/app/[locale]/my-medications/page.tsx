"use client";
import {
  Card,
  CardBody,
  Button,
  Tabs,
  Tab,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import Text from "@/app/components/Text";
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
import { medicationsSample } from "../../../data/medications";
import Appointments from "../calendar/components/Appointments";
import { AppointmentsType } from "@/interfaces";
import mockedAppointments from "@/data/appointments";
import Reminders from "../calendar/components/Reminders";

const slicedCurrentMedications = medicationsSample.slice(0, 4);
const slicedPastMedications = medicationsSample
  .filter((med) => !slicedCurrentMedications.includes(med))
  .slice(0, 4);

function MyMedications() {
  const t = useTranslations("My_medications");
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [month, setMonth] = useState<number | undefined>(date?.getMonth());
  const [currentMedications, setCurrentMedications] = useState<
    medicationsType[]
  >([]);
  const [pastMedications, setPastMedications] = useState<medicationsType[]>([]);
  const [appointments, setAppointments] = useState<AppointmentsType[]>();

  //fills randomly the current and past medications
  useFillRandomly(slicedCurrentMedications, setCurrentMedications);
  useFillRandomly(slicedPastMedications, setPastMedications);
  useFillRandomly(mockedAppointments, setAppointments, date);

  //add a medication to current medications
  const addAMedication = (med: medicationsType) => {
    setCurrentMedications((prev) => [med, ...prev]);
  };

  const addAnAppointment = (appointment: AppointmentsType) => {
    setAppointments((prev) => (prev ? [...prev, appointment] : [appointment]));
  };

  const deleteAppointment = (index: number) => {
    setAppointments((prev) => prev?.filter((_, i) => i !== index));
  };

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
        addAMedication={addAMedication}
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
                <CardBody className=" flex flex-row justify-between items-center dark:bg-slate-700">
                  <div>
                    <Text>{med.name}</Text>
                    <p>{med.instructions}</p>
                  </div>
                  <p>
                    {med.dose} {med.dosageMeasure}
                  </p>
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
                <CardBody className=" flex flex-row justify-between items-center dark:bg-slate-700">
                  <div>
                    <Text>{med.name}</Text>
                    <p>Taken</p>
                  </div>
                  <p>
                    {med.dose} {med.dosageMeasure}
                  </p>
                </CardBody>
              </Card>
            ))}
          </Tab>
        </Tabs>
      </section>

      <section className="flex flex-col items-center [&>*]:mb-8 [&>*]:min-w-full">
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
          <CardBody className="flex flex-col items-center [&>*]:my-1 ">
            <Calendar
              selected={date}
              onSelect={setDate}
              mode="single"
              className="cursor-pointer"
            />
            {appointments
              ?.slice(0, 3)
              .map((appointment, i) =>
                appointment.type === "appointment" ? (
                  <Appointments
                    key={i}
                    title={appointment.title}
                    date={date || new Date()}
                    deleteAppointment={() => deleteAppointment(i)}
                    range={appointment.range ? appointment.range : ""}
                  />
                ) : (
                  <Reminders
                    key={i}
                    title={appointment.title}
                    date={date || new Date()}
                    deleteReminder={() => deleteAppointment(i)}
                  />
                )
              )}
          </CardBody>
        </Card>
      </section>
      <footer className="bg-[url('../assets/spotted_footer.svg')] w-screen h-[500px] fixed z-[-1] bottom-0"></footer>
    </main>
  );
}

export default MyMedications;
