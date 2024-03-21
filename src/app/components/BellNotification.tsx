import { NotificationType } from "@/interfaces";
import { Button } from "@nextui-org/react";
import { IconClock, IconTrash, IconX } from "@tabler/icons-react";

const BellNotification = ({
  notification,
  deleteNotification,
}: {
  notification: NotificationType;
  deleteNotification: () => void;
}) => {
  if (notification.type === "reminder")
    return (
      <div className="flex py-[10px] px-[18px] justify-between items-center gap-16 rounded-[12px] border-2 [&>*]:mx-1 border-[#0972D3] bg-[#F2F8FD] font-bold my-2 max-w-[480px]">
        <div className="flex items-center [&>*]:mx-1 ">
          <IconClock className="w-[20px] h-[20px]" />
          <p>{notification.time}</p>
        </div>
        <p>{notification.action}</p>
        <IconX
          onClick={deleteNotification}
          cursor={"pointer"}
          className="w-[20px] h-[20px]"
        />
      </div>
    );

  if (notification.type === "info")
    return (
      <div className="bg-[#E0EEE5] rounded-[12px] border-2 border-[#3D7B55] flex py-[10px] px-[18px] font-bold items-center [&>*]:mx-1 justify-between  flex-1 text-black max-w-[480px] my-2">
        <IconTrash
          cursor={"pointer"}
          onClick={deleteNotification}
          className="min-w-[20px] min-h-[20px]"
        />
        <p className="text-wrap">{notification.action}</p>
        <Button onClick={deleteNotification} radius="full" variant="faded">
          Confirm
        </Button>
      </div>
    );
};

export default BellNotification;
