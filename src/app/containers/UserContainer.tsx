"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Accordion,
  AccordionItem,
  Listbox,
  ListboxItem,
  Avatar,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import {
  IconUserCircle,
  IconZoomIn,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { useUserContext } from "../context/UserContext";

interface UserContainerProps {
  handleSetIsLogged?: () => void;
  loggedUser: object | null;
  isLogged: boolean;
  language: string;
}

interface DropdownOptionType {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
  isReadOnly: boolean;
}

interface AccordionItemType {
  label: string;
  onClick?: () => void;
}

const UserContainer = ({
  loggedUser,
  isLogged,
  language,
  ...props
}: UserContainerProps) => {
  const t = useTranslations("header");
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { user } = useUserContext();

  const handleOnUserClick = () => {
    router.push("/" + language + "/my-profile"); // Redirect to the dashboard page when the user is clicked
  };

  const dropDownOptions: DropdownOptionType[] = [
    {
      label: t("dropdown.profile"),
      icon: <IconUserCircle width={24} height={24} />,
      onClick: handleOnUserClick,
      isReadOnly: false,
    },
    {
      label: t("dropdown.settings.label"),
      icon: <IconZoomIn width={24} height={24} />,
      isReadOnly: true,
    },
    {
      label:
        theme === "light" ? t("dropdown.darkMode") : t("dropdown.lightMode"),
      icon:
        theme === "dark" ? (
          <IconSun width={24} height={24} />
        ) : (
          <IconMoon width={24} height={24} />
        ),
      isReadOnly: false,

      onClick: () => setTheme(theme === "light" ? "dark" : "light"),
    },
  ];

  const accordionItems: AccordionItemType[] = [
    {
      label: t("dropdown.settings.small"),
    },
    { label: t("dropdown.settings.medium") },
    { label: t("dropdown.settings.large") },
  ];

  return (
    <div {...props} className=" flex items-center justify-between [&>*]:mx-1">
      {!isLogged ? (
        <>
          <Button
            variant="ghost"
            radius="full"
            className="text-[#486284] h-[48px] w-[86px] "
            onClick={() => router.push("/" + language + "/register")}
          >
            {t("register")}
          </Button>

          <Button
            variant="solid"
            radius="full"
            color="primary"
            className=" h-[48px] w-[86px]"
            onClick={() => router.push("/" + language + "/register")}
          >
            {t("login")}
          </Button>
        </>
      ) : (
        <Dropdown>
          <DropdownTrigger>
            <Avatar
              className="cursor-pointer"
              name={(user.name && user.name.charAt(0).toUpperCase()) || ""}
            />
          </DropdownTrigger>
          <DropdownMenu>
            {dropDownOptions.map((option, i) =>
              i !== 1 ? (
                <DropdownItem
                  isReadOnly={option.isReadOnly}
                  endContent={
                    <Accordion>
                      <AccordionItem
                        onPress={option.onClick}
                        hideIndicator
                        startContent={option.icon}
                        title={option.label}
                      />
                    </Accordion>
                  }
                />
              ) : (
                <DropdownItem
                  isReadOnly={option.isReadOnly}
                  endContent={
                    <Accordion>
                      <AccordionItem
                        startContent={option.icon}
                        title={option.label}
                      >
                        <Listbox>
                          {accordionItems.map((item, i) => (
                            <ListboxItem
                              key={i}
                              title={item.label}
                              onClick={() => console.log(item.label)}
                            />
                          ))}
                        </Listbox>
                      </AccordionItem>
                    </Accordion>
                  }
                ></DropdownItem>
              )
            )}
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
};

export default UserContainer;
