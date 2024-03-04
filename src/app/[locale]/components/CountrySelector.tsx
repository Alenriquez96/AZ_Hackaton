"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";
import { useState } from "react";
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
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="bordered"
          radius="full"
          {...props}
          className="h-[56px]  sm:flex  hidden [&>*]:mx-2"
          endContent={
            <CountryFlag countryCode={selectedCountry.code.toLowerCase()} />
          }
        >
          {selectedCountry.name}
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
          >
            {country.name}
          </DropdownItem>
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
