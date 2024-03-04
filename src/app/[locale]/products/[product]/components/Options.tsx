import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  DropdownSection,
} from "@nextui-org/react";
import {
  IconMail,
  IconMessageCircle,
  IconShare,
  IconPrinter,
} from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const Options = () => {
  const t = useTranslations("product");
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center pr-3">
        <p>{t("buttons.textSize")}:</p>
        <div className="flex items-baseline">
          {new Array(3).fill("A").map((letter, i) => (
            <p
              key={i}
              style={{
                fontWeight: 700,
                fontSize: (i + 1) * 13,
                padding: "0 2px",
              }}
            >
              {letter}
            </p>
          ))}
        </div>
      </div>
      <Dropdown>
        <DropdownTrigger>
          <Button
            className="mr-2 h-[50px] "
            startContent={<IconShare />}
            radius="full"
            variant="bordered"
          >
            {t("buttons.shareBtn")}
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownSection showDivider>
            <DropdownItem startContent={<IconMail />} key="new">
              {t("buttons.email")}
            </DropdownItem>
          </DropdownSection>

          <DropdownItem startContent={<IconMessageCircle />} key="copy">
            {t("buttons.text")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button
        className="ml-2 h-[50px] "
        startContent={<IconPrinter />}
        radius="full"
        variant="bordered"
      >
        {t("buttons.print")}
      </Button>
    </div>
  );
};

export default Options;
