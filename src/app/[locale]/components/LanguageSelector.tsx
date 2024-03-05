"use client";
import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { useRouter, usePathname } from "next/navigation";
import { locales as languages } from "@/navigation";

const LanguageSelector = ({ ...props }) => {
  const pathName = usePathname();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.filter((language) => pathName.includes(language))[0] || "en"
  );

  useEffect(() => {
    typeof document !== "undefined" &&
      localStorage.setItem("lan", selectedLanguage);
  }, [selectedLanguage]);

  const handleChangeLocale = (e: any) => {
    let route = pathName;
    languages.map((language) => {
      if (pathName.includes(language)) {
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
      value={selectedLanguage}
      name="Language"
      items={languages}
      placeholder={selectedLanguage.toUpperCase()}
      className="w-[90px] "
      endContent={<WorldLanguageIcon />}
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

const WorldLanguageIcon = ({ ...props }) => {
  const { onClick } = props;
  return (
    <svg
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.166504 16.0001C0.166504 7.26008 7.244 0.166748 15.984 0.166748C24.7398 0.166748 31.8332 7.26008 31.8332 16.0001C31.8332 24.7401 24.7398 31.8334 15.984 31.8334C7.244 31.8334 0.166504 24.7401 0.166504 16.0001ZM22.2857 9.66675H26.9565C25.4365 7.05425 23.014 5.02758 20.1007 4.03008C21.0507 5.78758 21.779 7.68758 22.2857 9.66675ZM15.9998 3.39675C17.314 5.29675 18.3432 7.40258 19.024 9.66675H12.9757C13.6565 7.40258 14.6857 5.29675 15.9998 3.39675ZM3.33317 16.0001C3.33317 17.0926 3.4915 18.1534 3.74484 19.1667H9.0965C8.96984 18.1217 8.87484 17.0767 8.87484 16.0001C8.87484 14.9234 8.96984 13.8784 9.0965 12.8334H3.74484C3.4915 13.8467 3.33317 14.9076 3.33317 16.0001ZM5.04317 22.3334H9.714C10.2207 24.3126 10.949 26.2126 11.899 27.9701C8.98567 26.9726 6.56317 24.9617 5.04317 22.3334ZM5.04317 9.66675H9.714C10.2207 7.68758 10.949 5.78758 11.899 4.03008C8.98567 5.02758 6.56317 7.03841 5.04317 9.66675ZM15.9998 28.6034C14.6857 26.7034 13.6565 24.5976 12.9757 22.3334H19.024C18.3432 24.5976 17.314 26.7034 15.9998 28.6034ZM12.0415 16.0001C12.0415 17.0767 12.1523 18.1217 12.2948 19.1667H19.7048C19.8473 18.1217 19.9582 17.0767 19.9582 16.0001C19.9582 14.9234 19.8473 13.8626 19.7048 12.8334H12.2948C12.1523 13.8626 12.0415 14.9234 12.0415 16.0001ZM20.1007 27.9701C21.0507 26.2126 21.779 24.3126 22.2857 22.3334H26.9565C25.4365 24.9459 23.014 26.9726 20.1007 27.9701ZM23.1248 16.0001C23.1248 17.0767 23.0298 18.1217 22.9032 19.1667H28.2548C28.5082 18.1534 28.6665 17.0926 28.6665 16.0001C28.6665 14.9076 28.5082 13.8467 28.2548 12.8334H22.9032C23.0298 13.8784 23.1248 14.9234 23.1248 16.0001Z"
        fill="black"
      />
    </svg>
  );
};

export default LanguageSelector;
