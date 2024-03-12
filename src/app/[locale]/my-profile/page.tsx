"use client";
import {
  Button,
  Card,
  CardBody,
  Link,
  Snippet,
  Avatar,
} from "@nextui-org/react";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useUserContext } from "@/app/context/UserContext";
import { getCountry } from "@/app/utils/getCountry";
import { useTranslations } from "next-intl";
import PillPalIcon from "./components/PillPalIcon";
import HealthSyncIcon from "./components/HealthSyncIcon";
import Text from "@/app/components/Text";

const MyProfilePage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { user } = useUserContext();
  // const country = getCountry();
  const t = useTranslations("myProfile");

  const details: string[][] = [
    [
      t("personalInfo.name"),
      t("personalInfo.age"),
      t("personalInfo.gender"),
      t("personalInfo.country"),
      t("personalInfo.language"),
    ],
    [user?.name, user?.age, user?.gender, "United Kingdom", locale],
  ];

  return (
    <main className="min-h-screen flex flex-wrap justify-evenly p-12">
      <section className="flex flex-col [&>*]:p-10 [&>*]:my-4">
        <Card>
          <Text>
            {t("title")}:{user.profileType}
          </Text>
          <CardBody className="flex flex-row items-center">
            <Avatar name={""} size="lg" className="m-2" />
            <div className="[&>*]:m-2 flex flex-col">
              <Button
                radius="full"
                variant="solid"
                color="primary"
                endContent={<IconPencil />}
              >
                {t("btns.change")}
              </Button>
              <Button
                radius="full"
                variant="bordered"
                endContent={<IconTrash />}
              >
                {t("btns.remove")}
              </Button>
            </div>
          </CardBody>
        </Card>
        <Card>
          <Text> {t("personalInfo.title")}</Text>
          <CardBody className="flex flex-row justify-between">
            {details?.map((detail, i) => (
              <div
                key={i}
                style={{
                  fontWeight: i === 0 ? "bold" : "normal",
                }}
                className="flex flex-col font-black [&>*]:m-2"
              >
                {detail?.map((item, j) => (
                  <p key={j}>{item}</p>
                ))}
              </div>
            ))}
          </CardBody>
        </Card>
        <Card>
          <Text>{t("conditions.title")}</Text>
          <CardBody className="[&>*]:m-2">
            {user?.existingHealthCondition &&
              user?.existingHealthCondition.map(
                (condition: string, i: number) => (
                  <Snippet
                    hideCopyButton
                    hideSymbol
                    key={i}
                    className="grid place-content-center"
                  >
                    {condition}
                  </Snippet>
                )
              )}
          </CardBody>
        </Card>
      </section>
      <section className="flex flex-col [&>*]:p-10 [&>*]:my-4">
        <Card>
          <Text>{t("sync.title")}</Text>
          <p>{t("sync.description")}</p>
          <CardBody className="flex flex-row justify-between">
            <div className="flex flex-col [&>*]:m-2">
              <p className="flex items-center [&>*]:mr-2">
                <PillPalIcon />
                PillPal
              </p>
              <p className="flex items-center [&>*]:mr-2">
                <HealthSyncIcon />
                HealthSync
              </p>
            </div>
            <div className="flex flex-col [&>*]:m-2">
              <Link className="text-[#63A87D]">{t("sync.pillpal")}</Link>
              <Link className="text-[#63A87D]">{t("sync.healthsync")}</Link>
            </div>
          </CardBody>
        </Card>
      </section>
    </main>
  );
};

export default MyProfilePage;
