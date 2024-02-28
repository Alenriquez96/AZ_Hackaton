import { Input } from "@nextui-org/react";
import { IconMenu2, IconSearch } from "@tabler/icons-react";

const SearchThisPage = () => {
  return (
    <Input
      endContent={<IconSearch color="#49454F" />}
      startContent={<IconMenu2 color="#49454F" />}
      isClearable
      radius="full"
      placeholder="Search this page"
    />
  );
};

export default SearchThisPage;
