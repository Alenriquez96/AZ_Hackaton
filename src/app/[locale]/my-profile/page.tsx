"use client";
import Text from "@/app/components/Text";
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

const MyProfilePage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { user } = useUserContext();
  const country = getCountry();
  const t = useTranslations("myProfile");

  const details: string[][] = [
    [
      t("personalInfo.name"),
      t("personalInfo.age"),
      t("personalInfo.gender"),
      t("personalInfo.country"),
      t("personalInfo.language"),
    ],
    [user.name, user.age, user.gender, country, locale],
  ];

  return (
    <main className="min-h-screen flex flex-wrap justify-evenly p-12">
      <section className="flex flex-col [&>*]:p-10 [&>*]:my-4">
        <Card>
          <Text>
            {t("title")}: {user.profileType}
          </Text>
          <CardBody className="flex flex-row items-center">
            <Avatar
              name={(user.name && user.name.charAt(0).toUpperCase()) || ""}
              size="lg"
              className="m-2"
            />
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
            {details.map((detail, i) => (
              <div
                key={i}
                style={{
                  fontWeight: i === 0 ? "bold" : "normal",
                }}
                className="flex flex-col font-black [&>*]:m-2"
              >
                {detail.map((item, j) => (
                  <p key={j}>{item}</p>
                ))}
              </div>
            ))}
          </CardBody>
        </Card>
        <Card>
          <Text>{t("conditions.title")}</Text>
          <CardBody className="[&>*]:m-2">
            {user.existingHealthCondition &&
              user.existingHealthCondition.map(
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

const PillPalIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.96 11.6598C20.77 10.9098 19.39 10.4998 17.97 10.4998C13.83 10.4998 10.47 13.8598 10.47 17.9998C10.47 19.4198 10.87 20.7898 11.62 21.9798C11.16 21.9698 10.69 21.9198 10.21 21.8498C6.09999 21.1498 2.78999 17.8198 2.10999 13.6998C0.97999 6.84977 6.81999 1.00978 13.67 2.13978C17.79 2.81978 21.12 6.12977 21.82 10.2398C21.9 10.7198 21.95 11.1998 21.96 11.6598Z"
      fill="#FC7853"
    />
    <path
      d="M13.38 21.86C12.5 20.82 11.97 19.47 11.97 18C11.97 14.69 14.66 12 17.97 12C19.44 12 20.79 12.53 21.83 13.41"
      fill="#02F2F2"
    />
  </svg>
);

const HealthSyncIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 8.75C11.59 8.75 11.25 8.41 11.25 8C11.25 7.59 11.59 7.25 12 7.25C14.62 7.25 16.75 9.38 16.75 12C16.75 14.62 14.62 16.75 12 16.75C11.59 16.75 11.25 16.41 11.25 16C11.25 15.59 11.59 15.25 12 15.25C13.79 15.25 15.25 13.79 15.25 12C15.25 10.21 13.79 8.75 12 8.75ZM12 19.75C7.73 19.75 4.25 16.27 4.25 12C4.25 11.59 4.59 11.25 5 11.25C5.41 11.25 5.75 11.59 5.75 12C5.75 15.45 8.55 18.25 12 18.25C15.45 18.25 18.25 15.45 18.25 12C18.25 8.55 15.45 5.75 12 5.75C11.59 5.75 11.25 5.41 11.25 5C11.25 4.59 11.59 4.25 12 4.25C16.27 4.25 19.75 7.73 19.75 12C19.75 16.27 16.27 19.75 12 19.75Z"
      fill="#FF2CC4"
    />
  </svg>
);
