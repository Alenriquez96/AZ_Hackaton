"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";
import { useState } from "react";
import { getCountry, getCountryCode } from "@/app/utils/getCountry";
import "/node_modules/flag-icons/css/flag-icons.min.css";

type countryType = { name: string; code: string };

const countries: countryType[] = [
  { name: "United Kingdom", code: "GB" },
  { name: "Spain", code: "ES" },
  { name: "France", code: "FR" },
  { name: "Portugal", code: "PT" },
  { name: "Romania", code: "RO" },
];

const CountrySelector = ({ ...props }) => {
  const [selectedCountry, setSelectedCountry] = useState<countryType>(
    {
      name: getCountry(),
      code: getCountryCode(),
    } || countries[0]
  );

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          radius="full"
          {...props}
          className="h-[56px] [&>*]:mx-2 lg:border-[2px] lg:border-gray-200 "
          endContent={
            <CountryFlag countryCode={selectedCountry.code.toLowerCase()} />
          }
        >
          <p className="lg:block hidden">{selectedCountry.name}</p>
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        {countries.map((country) => (
          <DropdownItem
            startContent={
              <CountryFlag countryCode={country.code.toLowerCase()} />
            }
            onClick={() => setSelectedCountry(country)}
            key={country.code}
            title={country.name}
          />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

const CountryFlag = ({ countryCode }: { countryCode: string }) => (
  <div
    className={`fi-${countryCode.toLowerCase()} w-[32px] h-[32px] rounded-full text-center bg-center`}
  />
);

export default CountrySelector;
