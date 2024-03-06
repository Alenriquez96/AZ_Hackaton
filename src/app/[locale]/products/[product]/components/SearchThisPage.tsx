import { Input } from "@nextui-org/react";
import { IconMenu2, IconSearch } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

const SearchThisPage = () => {
  const t = useTranslations("product");
  return (
    <Input
      endContent={<IconSearch color="#49454F" />}
      startContent={<IconMenu2 color="#49454F" />}
      isClearable
      radius="full"
      placeholder={t("search")}
      className="max-w-[450px]"
    />
  );
};

export default SearchThisPage;
