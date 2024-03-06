"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";

interface UserContainerProps {
  handleSetIsLogged: () => void;
  loggedUser: object | null;
  isLogged: boolean;
  language: string;
}

const UserContainer = ({
  handleSetIsLogged,
  loggedUser,
  isLogged,
  language,
  ...props
}: UserContainerProps) => {
  const t = useTranslations("header");
  const router = useRouter();

  const handleOnUserClick = () => {
    router.push("/" + language + "/dashboard"); // Redirect to the dashboard page when the user is clicked
  };

  return (
    <div {...props} className=" flex items-center justify-between [&>*]:mx-1">
      {!isLogged ? (
        <>
          <Button
            variant="ghost"
            radius="full"
            className="text-[#486284] h-[48px] w-[86px] "
          >
            {t("register")}
          </Button>

          <Button
            onClick={handleSetIsLogged}
            variant="solid"
            radius="full"
            color="primary"
            className=" h-[48px] w-[86px]"
          >
            {t("login")}
          </Button>
        </>
      ) : (
        <Button
          radius="lg"
          variant="bordered"
          size="lg"
          className="h-[56px]"
          onClick={handleOnUserClick}
          startContent={
            <div className="rounded-full bg-[#414141] text-white h-[32px] w-[32px] grid place-content-center">
              O
            </div>
          }
        >
          Olivia
        </Button>
      )}
    </div>
  );
};

export default UserContainer;
