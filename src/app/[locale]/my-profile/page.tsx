"use client";
import { Button, Card, CardBody, Link, Avatar } from "@nextui-org/react";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useUserContext } from "@/app/context/UserContext";
import { useTranslations } from "next-intl";
import PillPalIcon from "./components/PillPalIcon";
import HealthSyncIcon from "./components/HealthSyncIcon";
import Text from "@/app/components/Text";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "../products/[product]/components/LoadingSpinner";
import { useToast } from "@/components/ui/use-toast";
import MyDetailsContainer from "./containers/MyDetailsContainer";
import MyConditionsContainer from "./containers/MyConditionsContainer";

const pillPalHeaders: { label: string; value: string }[] = [
  { label: "Id", value: "id" },
  { label: "User Id", value: "userId" },
  { label: "Age", value: "age" },
  { label: "Sex", value: "sex" },
  { label: "Medical Conditions", value: "medicalConditions" },
];

const MyProfilePage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { user } = useUserContext();
  const t = useTranslations("myProfile");
  const router = useRouter();
  const [isConnectedToPillPal, setIsConnectedToPillPal] = useState(false);
  const [pillPallData, setPillPallData] = useState<any>({});
  const { toast } = useToast();

  const details: string[][] = [
    [
      t("personalInfo.name"),
      t("personalInfo.age"),
      t("personalInfo.gender"),
      t("personalInfo.country"),
      t("personalInfo.language"),
    ],
    [user?.name, user?.age, user?.gender, user?.country, locale],
  ];

  const checkPillPal = async () => {
    try {
      const res = await fetch(
        "https://mediguide-api-latest.onrender.com/v1/users/link?app=PillPal&userId=f497561c-22ea-4d6f-8d8a-fe64bb5a3248",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            cache: "no-store",
            authorization:
              "Bearer " + localStorage.getItem("access_token") || "",
          },
        }
      );

      const data = await res.json();
      if (data.result === true) {
        fetchPillPallData();
        setIsConnectedToPillPal(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchPillPallData = async () => {
    try {
      const res = await fetch(
        "https://mediguide-api-latest.onrender.com/v1/users",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            authorization:
              "Bearer " + localStorage.getItem("access_token") || "",
          },
        }
      );

      const data = await res.json();
      setPillPallData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const integrateWithPilPall = async () => {
    router.push("http://pillpal.s3-website.eu-west-2.amazonaws.com/");
  };

  const unLinkPillPal = async () => {
    try {
      const res = await fetch(
        "https://mediguide-api-latest.onrender.com/v1/users?app=PillPal&userId=f497561c-22ea-4d6f-8d8a-fe64bb5a3248",
        {
          method: "DELETE",
          headers: {
            "Access-Control-Allow-Origin": "*",
            authorization:
              "Bearer " + localStorage.getItem("access_token") || "",
          },
        }
      );

      const data = await res;
      if (data.ok) {
        setIsConnectedToPillPal(false);
        setPillPallData({});
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkPillPal();

    if (isConnectedToPillPal) {
      toast({
        title: "PillPal Account Synced",
        duration: 2000,
      });
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-wrap justify-evenly p-12">
      <section className="flex flex-col [&>*]:p-10 [&>*]:my-4">
        <Card>
          <Text>
            {t("title")}
            {": " + user.profileType}
          </Text>
          <CardBody className="flex flex-row items-center">
            <Avatar name={user.name} size="lg" className="m-2" />
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
        <MyDetailsContainer details={details} />
        <MyConditionsContainer user={user} />
      </section>
      <section className="flex flex-col [&>*]:p-10 [&>*]:my-4">
        <div className="h-[12px] w-full  flex-row justify-end lg:flex hidden">
          <Button color="primary" variant="solid" radius="full">
            Edit Profile
          </Button>
        </div>
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
              {!isConnectedToPillPal ? (
                <Link
                  onClick={integrateWithPilPall}
                  className="text-[#63A87D] cursor-pointer"
                >
                  {t("sync.pillpal")}
                </Link>
              ) : (
                <Link
                  onClick={unLinkPillPal}
                  className="text-[#c04747] cursor-pointer"
                >
                  Unlink PillPal
                </Link>
              )}
              <Link className="text-[#63A87D]">{t("sync.healthsync")}</Link>
            </div>
          </CardBody>
        </Card>
        {isConnectedToPillPal &&
          (Object.keys(pillPallData).length !== 0 ? (
            <Card>
              <Text>PillPal Data</Text>
              <CardBody className="flex flex-col justify-between">
                {pillPalHeaders
                  .slice(2, pillPalHeaders.length)
                  .map((header, i) => (
                    <div
                      className="flex flex-row justify-between [&>*]:my-2"
                      key={i}
                    >
                      <span className="font-black">{header.label}:</span>
                      <p>{pillPallData[header.value]}</p>
                    </div>
                  ))}
              </CardBody>
            </Card>
          ) : (
            <LoadingSpinner />
          ))}
      </section>
    </main>
  );
};

export default MyProfilePage;
