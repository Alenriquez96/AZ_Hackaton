"use client";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { IconPill } from "@tabler/icons-react";
import Text from "@/app/components/Text";
import { IconFilter, IconArrowsSort } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

interface medications {
  name: string;
  icon: React.ReactNode;
}

const currentMedications: medications[] = [
  {
    icon: <IconPill size={50} />,
    name: "Atorvastatin",
  },
  {
    icon: <IconPill size={50} />,
    name: "Insulin",
  },
  {
    icon: <IconPill size={50} />,
    name: "Levothyroxine",
  },
];

const pastMedications: medications[] = [
  {
    icon: <IconPill size={50} />,
    name: "Morphine",
  },
  {
    icon: <IconPill size={50} />,
    name: "Aspirin",
  },
  {
    icon: <IconPill size={50} />,
    name: "Sertraline",
  },
];

function MyMedications() {
  const t = useTranslations("My_medications");
  return (
    <main className="min-h-screen">
      <div className="flex flex-wrap flex-col-reverse sm:flex-row m-11 justify-evenly">
        <section className="flex flex-col justify-around">
          <Text>{t("title")}</Text>
          <Button
            variant="solid"
            color="secondary"
            radius="full"
            className="w-[202px] h-[50px]"
          >
            {t("btns.mng_medication")}
          </Button>
          <div className="flex flex-col ">
            <Text>
              {t("current_medications")} ({currentMedications.length.toString()}
              )
            </Text>
            <div className="flex justify-center flex-wrap items-center [&>*]:mr-8 [&>*]:my-8">
              {currentMedications.map((med, i) => (
                <Card
                  key={i}
                  isPressable
                  className="min-h-[200px] min-w-[200px] bg-[#F1EFE9] "
                >
                  <CardBody>{med.icon}</CardBody>
                  <CardHeader>{med.name}</CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <Text>
              {t("past_medications")} ({pastMedications.length.toString()})
            </Text>
            <div className="flex justify-center  flex-wrap items-center [&>*]:mr-8 [&>*]:my-8">
              {pastMedications.map((med, i) => (
                <Card
                  key={i}
                  isPressable
                  className="min-h-[200px] min-w-[200px] bg-[#F1EFE9]"
                >
                  <CardBody>{med.icon}</CardBody>
                  <CardHeader>{med.name}</CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <Button
            className="bg-[#63A87D] text-white w-[202px] h-[50px]"
            radius="full"
          >
            + {t("btns.add_medication")}
          </Button>
          <div className="flex items-center justify-between my-2">
            <Button
              endContent={<IconFilter />}
              variant="bordered"
              radius="full"
            >
              {t("btns.filter")}
            </Button>
            <Button
              endContent={<IconArrowsSort />}
              variant="bordered"
              radius="full"
            >
              {t("btns.sort")}
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default MyMedications;
