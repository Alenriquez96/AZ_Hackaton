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
import { useFillRandomly } from "../hooks";
import mockNotifications from "@/data/notifications";
import { NotificationType } from "@/interfaces";
import BellNotification from "./BellNotification";

const BellComponent = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>();
  useFillRandomly(mockNotifications, setNotifications);

  const deleteNotification = (index: number) => {
    setNotifications(notifications?.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <Popover placement="bottom-end">
        <PopoverTrigger>
          <div className="w-[24px] h-[24px]">
            <Badge
              content={notifications?.length ? notifications?.length : <></>}
              color="primary"
            >
              <BellIcon cursor={"pointer"} />
            </Badge>
          </div>
        </PopoverTrigger>
        <PopoverContent className="p-6">
          <h2 className="font-bold text-lg">
            Notifications {"(" + notifications?.length.toString() + ")"}
          </h2>
          <div className=" flex flex-col ">
            {notifications?.map((notification, index) => (
              <BellNotification
                key={index}
                notification={notification}
                deleteNotification={() => deleteNotification(index)}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default BellComponent;
