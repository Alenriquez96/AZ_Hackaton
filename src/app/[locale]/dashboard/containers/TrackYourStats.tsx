"use client";
import { Button, Card, CardBody } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Title } from "@/app/components/Title";

const TrackYourStats = () => {
  const t = useTranslations("dashboard");
  return (
    <Card>
      <CardBody className=" flex max-w-[387px] p-5">
        <div className="[&>*]:my-3">
          {/* <Title>{t("trackStats.title")}</Title> */}
          <p className="font-bold">
            Have you remembered to take your medication today?
          </p>
          <div className="flex items-center">
            <Button
              radius="full"
              color="primary"
              variant="bordered"
              className="text-primary"
            >
              View adherence tracking
            </Button>
            {/* <Button size="md" radius="full" color="primary">
              {t("trackStats.btns.log")}
            </Button>
            <Button
              size="md"
              radius="full"
              className="text-primary border-1 border-primary bg-transparent ml-3"
            >
              {t("trackStats.btns.trends")}
            </Button> */}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default TrackYourStats;
