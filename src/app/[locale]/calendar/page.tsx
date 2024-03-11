"use client";
import Text from "../../components/Text";
import { useTranslations } from "next-intl";
import { Calendar } from "../../../components/ui/calendar";
import { Button, Card, CardBody, Link, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import Appointments from "./components/Appointments";
import ModalContainer from "./containers/Modal";
import GoogleCalendarIcon from "./components/GoogleCalendarIcon";
import OutlookIcon from "./components/OutlookIcon";

interface Appointments {
  title: string;
  range: string;
}

interface Reminders {
  date: Date;
  title: string;
}

const exampleAppointments: Appointments[] = [
  {
    title: "Doctor's Appointment",
    range: "10:00 - 11:00",
  },
  {
    title: "Revision",
    range: "11:00 - 12:00",
  },
  {
    title: "Medical Checkup",
    range: "12:00 - 13:00",
  },
];

const exampleReminders: Reminders[] = [
  {
    date: new Date("2023-02-10"),
    title: "Pick up Albuterol prescription",
  },
  {
    date: new Date("2023-02-11"),
    title: "Take Insulin",
  },
  {
    date: new Date("2023-02-12"),
    title: "Take Levothyroxine",
  },
];

const CalendarPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const t = useTranslations("calendar");
  const { isOpen, onOpen, onOpenChange } = useDisclosure(); //modal actions
  const [date, setDate] = useState<Date | undefined>();
  const [appointments, setAppointments] = useState<
    Appointments[] | undefined
  >();
  const [reminders, setReminders] = useState<Reminders[] | undefined>();

  const randomAppointmentsNumber = Math.floor(Math.random() * 3) + 1; // Random number of appointments
  const randomRemindersNumber = Math.floor(Math.random() * 3) + 1; // Random number of reminders

  const handleOnDayClick = (val: Date) => {
    //set a certain number of appointments depending on randomAppointmentsNumber
    setAppointments(
      Array.from({ length: randomAppointmentsNumber }, (_, i) => ({
        title: exampleAppointments[i].title,
        range: exampleAppointments[i].range,
      }))
    );
    setReminders(exampleReminders);
    setDate(val);
  };

  return (
    <main className="min-h-screen p-12 flex flex-wrap justify-evenly">
      <section className="flex flex-col">
        <Text>{t("title")}</Text>

        <Card>
          <CardBody>
            <Calendar
              selected={date}
              onSelect={(val: any) => handleOnDayClick(val)}
              mode="single"
              className="cursor-pointer"
            />
          </CardBody>
        </Card>
      </section>
      <section className="flex flex-col [&>*]:my-5">
        <div className="flex justify-end">
          <Button
            className="w-[132px]"
            color="primary"
            variant="solid"
            radius="full"
            onPress={onOpen}
          >
            Create Event
          </Button>
        </div>
        <Card className="p-6">
          <p>Appointments</p>
          <CardBody>
            {appointments &&
              appointments?.map((appointment, i) => (
                <Appointments
                  key={i}
                  date={date || new Date()}
                  range={appointment.range}
                  title={appointment.title}
                />
              ))}
          </CardBody>
        </Card>
        <Card className="p-6">
          <p>Reminders</p>
          <CardBody></CardBody>
        </Card>
        <Card className="p-6">
          <Text>Sync</Text>
          <p>Sync your other calendars with MediGuide</p>
          <CardBody className="flex flex-row justify-between">
            <div className="flex flex-col [&>*]:m-2">
              <p className="flex items-center [&>*]:mr-2">
                <GoogleCalendarIcon />
                Google Calendar
              </p>
              <p className="flex items-center [&>*]:mr-2">
                <OutlookIcon />
                Outlook
              </p>
            </div>
            <div className="flex flex-col [&>*]:m-2">
              <Link className="text-[#63A87D]">Sync with Google Calendar</Link>
              <Link className="text-[#63A87D]">Sync with Outlook</Link>
            </div>
          </CardBody>
        </Card>
      </section>
      <ModalContainer isOpen={isOpen} onOpenChange={onOpenChange} />
    </main>
  );
};

export default CalendarPage;
