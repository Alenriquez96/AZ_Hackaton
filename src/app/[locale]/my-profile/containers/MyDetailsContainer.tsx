import { Card, CardBody } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import Text from "@/app/components/Text";

const MyDetailsContainer = ({ details }: { details: string[][] }) => {
  const t = useTranslations("myProfile");
  return (
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
  );
};

export default MyDetailsContainer;
