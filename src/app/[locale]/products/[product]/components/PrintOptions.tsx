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

const PrintOptions = () => {
  const t = useTranslations("product");
  return (
    <div>
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

export default PrintOptions;
