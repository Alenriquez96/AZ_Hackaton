import Logo from "@/app/components/Logo";
import {
  Button,
  Card,
  CardBody,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import Text from "@/app/components/Text";
import { useTranslations } from "next-intl";

const RegisterComponent = ({
  handleSubmitRegister,
}: {
  handleSubmitRegister: (e: React.FormEvent<HTMLFormElement>) => void;
}) => {
  const t = useTranslations("register");
  return (
    <>
      <div className="flex flex-col items-center m-8 text-center">
        <Logo />
        <Text>{t("createAccount.title")}</Text>
        <p>{t("createAccount.subtitle")}</p>
      </div>
      <Card className="m-2 p-2 w-[80%] max-w-[500px]">
        <form onSubmit={handleSubmitRegister}>
          <CardBody className="[&>*]:my-2">
            <Input
              name="email"
              label={t("createAccount.form.email")}
              isRequired
            />
            <Input
              name="password"
              type="password"
              label={t("createAccount.form.password")}
              isRequired
            />
            <Checkbox defaultSelected>
              {t("createAccount.form.remember")}
            </Checkbox>

            <Button type="submit" color="primary" variant="solid">
              {t("createAccount.form.register")}
            </Button>
            <Button variant="shadow">{t("createAccount.form.google")}</Button>
            <Link href={""}>{t("createAccount.form.haveAccount")}</Link>
          </CardBody>
        </form>
      </Card>
    </>
  );
};

export default RegisterComponent;
