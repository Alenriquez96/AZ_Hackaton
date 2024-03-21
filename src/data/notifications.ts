import { NotificationType } from "@/interfaces";

const mockNotifications: NotificationType[] = [
  { time: "10:00", action: "Reminder: Take Paracetamol", type: "reminder" },
  { time: "11:00", action: "Reminder: Take Levothyroxine", type: "reminder" },
  { time: "17:00", action: "Reminder: Take Aspirin", type: "reminder" },
  { time: "12:00", action: "Reminder: Take Albuterol", type: "reminder" },
  {
    action:
      "Have you disposed of your Aspirin correctly? See disposal information",
    type: "info",
  },
  {
    action:
      "Have you disposed of your Paracetamol correctly? See disposal information",
    type: "info",
  },
  {
    action:
      "Have you disposed of your Levothyroxine correctly? See disposal information",
    type: "info",
  },
  {
    action:
      "Have you disposed of your Albuterol correctly? See disposal information",
    type: "info",
  },
];

export default mockNotifications;
