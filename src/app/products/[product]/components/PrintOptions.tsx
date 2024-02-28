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

const PrintOptions = () => {
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
            Share
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownSection showDivider>
            <DropdownItem startContent={<IconMail />} key="new">
              Send via Email
            </DropdownItem>
          </DropdownSection>

          <DropdownItem startContent={<IconMessageCircle />} key="copy">
            Send via Text
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Button
        className="ml-2 h-[50px] "
        startContent={<IconPrinter />}
        radius="full"
        variant="bordered"
      >
        Print
      </Button>
    </div>
  );
};

export default PrintOptions;
