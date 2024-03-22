import Text from "@/app/components/Text";
import { Card, CardBody, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import { default as employeeIcon } from "@/app/assets/patientIcon.svg";
import { default as carerIcon } from "@/app/assets/carerIcon.svg";
import { default as newPatientIcon } from "@/app/assets/newpatienticon.svg";
import CardFooterComponent from "./CardFooterComponent";
import { useTranslations } from "next-intl";

type ProfileTypeProps = {
  handleProfileType: (type: string) => void;
};

interface ProfileTypes {
  tooltip: {
    title: string;
    description: string;
    value: string;
  };
  icon: string;
}

const ProfileType = ({ handleProfileType }: ProfileTypeProps) => {
  const t = useTranslations("register");

  const profileTypes: ProfileTypes[] = [
    {
      tooltip: {
        title: t("profileType.proffesional.title"),
        description: t("profileType.proffesional.description"),
        value: "Proffesional",
      },
      icon: employeeIcon,
    },
    {
      tooltip: {
        title: t("profileType.patient.title"),
        description: t("profileType.patient.description"),
        value: "Patient",
      },
      icon: newPatientIcon,
    },
    {
      tooltip: {
        title: t("profileType.carer.title"),
        description: t("profileType.carer.description"),
        value: "Carer",
      },
      icon: carerIcon,
    },
  ];

  const renderTooltip = (title: string, description: string) => {
    return (
      <div className="flex flex-col items-center m-3">
        <p className="font-black">{title}</p>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col items-center m-6 text-center">
        <Text>{t("profileType.title")}</Text>
        <p>{t("profileType.subtitle")}</p>
      </div>
      <Card className="m-4" shadow="lg">
        <CardBody className="flex flex-row flex-wrap justify-center my-10">
          {profileTypes.map((profileType, i) => (
            <Tooltip
              showArrow
              content={renderTooltip(
                profileType.tooltip.title,
                profileType.tooltip.description
              )}
              isOpen={true}
              key={i}
            >
              <Image
                alt={profileType.tooltip.description}
                src={profileType.icon}
                onClick={() => handleProfileType(profileType.tooltip.value)}
              />
            </Tooltip>
          ))}
        </CardBody>
        <CardFooterComponent />
      </Card>
    </>
  );
};

export default ProfileType;
