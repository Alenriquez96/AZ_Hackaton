import SearchThisPage from "../components/SearchThisPage";
import AppleWallet from "../components/AppleWallet";
import {
  DropdownMenu,
  DropdownTrigger,
  Dropdown,
  DropdownItem,
} from "@nextui-org/react";
import {
  IconDotsVertical,
  IconMail,
  IconTextSize,
  IconAlertTriangleFilled,
} from "@tabler/icons-react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";

const options: { label: string; icon: React.ReactNode }[] = [
  { label: "Share via email", icon: <IconMail width={24} height={24} /> },
  {
    label: "Share via text",
    icon: <ChatBubbleLeftIcon width={24} height={24} />,
  },
  { label: "Change text size", icon: <IconTextSize width={24} height={24} /> },
  {
    label: "Report an adverse event",
    icon: <IconAlertTriangleFilled width={24} height={24} />,
  },
];

const MobileOptions = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="sm:hidden flex items-center mb-4">
        <div className="hidden ">
          <SearchThisPage />
        </div>
        <Dropdown>
          <DropdownTrigger className="cursor-pointer">
            <IconDotsVertical width={16} height={16} />
          </DropdownTrigger>
          <DropdownMenu>
            {options.map((option, i) => (
              <DropdownItem
                startContent={option.icon}
                showDivider={i !== options.length - 1}
                key={i}
              >
                {option.label}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <AppleWallet />
    </div>
  );
};

export default MobileOptions;
