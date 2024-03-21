import { Input } from "@nextui-org/react";
import { IconMenu2, IconSearch } from "@tabler/icons-react";

const SearchThisPage = ({ placeholder }: { placeholder: string }) => {
  return (
    <Input
      endContent={<IconSearch />}
      startContent={<IconMenu2 />}
      isClearable
      radius="full"
      placeholder={placeholder}
      className="max-w-[450px]"
    />
  );
};

export default SearchThisPage;
