import { AppointmentsType } from "@/interfaces";

const mockedAppointments: AppointmentsType[] = [
  {
    id: 1,
    type: "appointment",
    title: "Doctor's Appointment",
    range: "10:00 - 11:00",
  },
  {
    id: 2,
    type: "appointment",
    title: "Revision",
    range: "11:00 - 12:00",
  },
  {
    id: 3,
    type: "appointment",
    title: "Medical Checkup",
    range: "12:00 - 13:00",
  },
  {
    id: 4,
    type: "reminder",
    title: "Pick up Albuterol prescription",
  },
  {
    id: 5,
    type: "reminder",
    title: "Take Insulin",
  },
  {
    id: 6,
    type: "reminder",
    title: "Take Levothyroxine",
  },
];

export default mockedAppointments;
