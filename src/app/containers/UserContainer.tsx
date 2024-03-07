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
import { IconUserCircle, IconZoomIn, IconMoon } from "@tabler/icons-react";
import { useTheme } from "next-themes";

interface UserContainerProps {
  handleSetIsLogged: () => void;
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
  handleSetIsLogged,
  loggedUser,
  isLogged,
  language,
  ...props
}: UserContainerProps) => {
  const t = useTranslations("header");
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleOnUserClick = () => {
    router.push("/" + language + "/dashboard"); // Redirect to the dashboard page when the user is clicked
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
      label: t("dropdown.darkMode"),
      icon: <IconMoon width={24} height={24} />,
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
        <Dropdown>
          <DropdownTrigger>
            <Avatar className="cursor-pointer" name="O" />
            {/* <Button
              radius="lg"
              variant="bordered"
              size="sm"
              className="h-[56px] "
              startContent={
                <div className="rounded-full bg-[#414141] text-white h-[32px] w-[32px] grid place-content-center">
                  O
                </div>
              }
            /> */}
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
