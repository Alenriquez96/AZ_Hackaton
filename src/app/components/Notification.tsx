"use client";
import { useTranslations } from "next-intl";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IconInfoCircle } from "@tabler/icons-react";
import { Card, CardBody } from "@nextui-org/react";

const Notification = ({ title }: { title?: string }) => {
  const t = useTranslations("dashboard");
  return (
    <Card className="hidden sm:block  h-[72px] rounded-[12px] bg-[#F2F8FD] border-2 border-[#0972D3] my-4">
      <CardBody className="flex flex-row justify-between h-full items-center [&>*]:mx-3">
        <IconInfoCircle color="#0972D3" />
        <div>
          <p className="text-[16px]">{title}</p>
          {/* <p>{t("alert.title")}</p> */}
          {/* <p>{t("alert.description")}</p> */}
        </div>
        <XMarkIcon height={36} width={36} cursor={"pointer"} />
      </CardBody>
    </Card>
  );
};

export default Notification;
