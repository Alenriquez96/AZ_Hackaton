"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { locales as languages } from "@/navigation";
import { IconWorld } from "@tabler/icons-react";

const LanguageSelector = ({ ...props }) => {
  const locale = props.locale || "en";
  const pathName = usePathname();
  const router = useRouter();

  console.log(locale);

  const handleChangeLocale = (e: any) => {
    let route = pathName;
    languages.map((language) => {
      if (locale === language) {
        route = route.replace("/" + language, "/" + e.target.value);
      }
      return;
    });

    router.push(route);
  };

  return (
    <Select
      aria-label="Language"
      variant="underlined"
      value={locale}
      name="Language"
      items={languages}
      placeholder={locale.toUpperCase() || "EN"}
      className="w-[90px] "
      endContent={<IconWorld width={43} height={43} />}
      onChange={handleChangeLocale}
    >
      {languages.map((language, i) => (
        <SelectItem
          showDivider={i !== languages.length - 1}
          key={language}
          value={language}
        >
          {language.toLocaleUpperCase()}
        </SelectItem>
      ))}
    </Select>
  );
};

export default LanguageSelector;
