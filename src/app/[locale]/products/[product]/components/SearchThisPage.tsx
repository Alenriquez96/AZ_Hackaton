import { Input } from "@nextui-org/react";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const SearchThisPage = () => {
  const t = useTranslations("product");
  return (
    <Input
      endContent={<IconSearch />}
      startContent={<IconMenu2 />}
      isClearable
      radius="full"
      placeholder={t("search")}
      className="max-w-[450px]"
    />
  );
};

export default SearchThisPage;
