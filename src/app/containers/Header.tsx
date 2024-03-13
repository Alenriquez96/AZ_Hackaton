"use client";
import Logo from "../components/Logo";
import LanguageSelector from "../components/LanguageSelector";
import UserContainer from "./UserContainer";
import CountrySelector from "../components/CountrySelector";
import { Button } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useUserContext } from "../context/UserContext";
import BellComponent from "../components/BellComponent";
import { useRouter } from "next/navigation";
import Navigation from "./Navigation";
import EmployeeNavbar from "./EmployeeNavbar";

const Header = ({ locale }: { locale: string }) => {
  const t = useTranslations("header");
  const router = useRouter();
  const { user } = useUserContext(); // Get the user from the context
  const { isLogged } = user; // Get the isLogged property from the user object

  return (
    <header className="h-24 flex justify-between content-center items-center border-b-[1px] border-b-[#DEE5ED] p-2 lg:p-6">
      <div className="flex justify-start content-center">
        <Logo />
      </div>

      <div className="justify-around items-center  lg:[&>*]:mx-2 flex">
        {isLogged ? (
          <>
            {user.profileType === "Proffesional" ? (
              <EmployeeNavbar locale={locale} />
            ) : (
              <Navigation locale={locale} />
            )}

            <CountrySelector />

            <LanguageSelector locale={locale} />
            <BellComponent />
            <UserContainer
              loggedUser={user}
              isLogged={isLogged}
              language={locale}
            />
          </>
        ) : (
          <>
            <Button
              variant="ghost"
              radius="full"
              className="text-[#486284] h-[48px] w-[86px] "
              onClick={() => router.push("/" + locale + "/register")}
            >
              {t("register")}
            </Button>

            <Button
              variant="solid"
              radius="full"
              color="primary"
              className=" h-[48px] w-[86px]"
              onClick={() => router.push("/" + locale + "/login")}
            >
              {t("login")}
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
