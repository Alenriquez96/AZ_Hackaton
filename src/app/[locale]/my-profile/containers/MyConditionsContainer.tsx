import { Card, CardBody, Snippet } from "@nextui-org/react";
import Text from "@/app/components/Text";
import { useTranslations } from "next-intl";
import { user } from "@/interfaces";

const MyConditionsContainer = ({ user }: { user: user }) => {
  const t = useTranslations("myProfile");
  return (
    <Card>
      <Text>{t("conditions.title")}</Text>
      <CardBody className="[&>*]:m-2">
        {user?.existingHealthCondition &&
          user?.existingHealthCondition.map((condition: string, i: number) => (
            <Snippet
              hideCopyButton
              hideSymbol
              key={i}
              className="grid place-content-center"
            >
              {condition}
            </Snippet>
          ))}
      </CardBody>
    </Card>
  );
};

export default MyConditionsContainer;
