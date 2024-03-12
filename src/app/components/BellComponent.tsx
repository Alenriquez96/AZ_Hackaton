"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Badge,
} from "@nextui-org/react";
import { BellIcon } from "lucide-react";
import { IconClock, IconTrash, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

interface NotificationType {
  time?: string;
  action: string;
  type: string;
}

const mockNotifications: NotificationType[] = [
  { time: "10:00", action: "Take Paracetamol", type: "reminder" },
  { time: "12:00", action: "Take Aspirin", type: "reminder" },
  {
    action:
      "Have you disposed of your Aspirin correctly? See disposal information",
    type: "info",
  },
];

const BellComponent = () => {
  const randomNotificationsNumber = Math.floor(Math.random() * 4); // Random number of notifications
  const [notifications, setNotifications] = useState<NotificationType[]>();

  useEffect(() => {
    setNotifications(
      Array.from(
        { length: randomNotificationsNumber },
        () =>
          mockNotifications[
            Math.floor(Math.random() * mockNotifications.length)
          ]
      )
    );
  }, []);

  const deleteNotification = (index: number) => {
    setNotifications(notifications?.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <Badge
            content={notifications?.length ? notifications?.length : <></>}
            color="primary"
          >
            <BellIcon cursor={"pointer"} />
          </Badge>
        </PopoverTrigger>
        <PopoverContent className="p-6">
          <h2 className="font-bold text-lg">
            Notifications {"(" + notifications?.length.toString() + ")"}
          </h2>
          <div className=" flex flex-col ">
            {notifications?.map((reminder, index) =>
              reminder.type === "reminder" ? (
                <div
                  className="flex py-[10px] px-[18px] justify-center items-center gap-16 rounded-[12px] border-2 [&>*]:mx-1 border-[#0972D3] bg-[#F2F8FD]  my-2"
                  key={index}
                >
                  <IconClock className="w-[20px] h-[20px]" />
                  {reminder.time} - {reminder.action}
                  <IconX
                    onClick={() => deleteNotification(index)}
                    cursor={"pointer"}
                    className="w-[20px] h-[20px]"
                  />
                </div>
              ) : (
                <div
                  className="bg-[#E0EEE5] rounded-[12px] border-2 border-[#3D7B55] flex py-[10px] px-[18px] items-center [&>*]:mx-1 justify-between flex-wrap flex-1 text-black  my-2"
                  key={index}
                >
                  <IconTrash
                    cursor={"pointer"}
                    onClick={() => deleteNotification(index)}
                    className="w-[20px] h-[20px]"
                  />
                  {reminder.action}
                </div>
              )
            )}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BellComponent;
