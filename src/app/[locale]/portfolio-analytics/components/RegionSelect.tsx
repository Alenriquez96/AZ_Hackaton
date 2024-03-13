"use client";
import { Select, SelectItem, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

const regionsSample: string[] = [
  "All",
  "United States",
  "Canada",
  "Australia",
  "United Kingdom",
  "Spain",
  "Romania",
  "France",
];

const RegionSelect = () => {
  const [region, setRegion] = useState("All");
  return (
    <Card className="bg-primary">
      <CardBody className="flex flex-row justify-between items-center [&>*]:mx-2">
        <p className="text-white">Select a Region</p>
        <Select
          aria-label="region"
          className="max-w-[200px]"
          placeholder={region}
        >
          {regionsSample.map((region) => (
            <SelectItem
              onPress={() => setRegion(region)}
              key={region}
              value={region}
            >
              {region}
            </SelectItem>
          ))}
        </Select>
      </CardBody>
    </Card>
  );
};

export default RegionSelect;
