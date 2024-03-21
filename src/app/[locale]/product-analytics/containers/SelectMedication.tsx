"use client";
import { CardBody, Card, Select, SelectItem, Button } from "@nextui-org/react";
import { useState } from "react";

interface MedicationsType {
  label: string;
  value: string;
}

const medicationsSample: MedicationsType[] = [
  { label: "Avorstatin", value: "avorstatin" },
  { label: "Albuterol", value: "albuterol" },
  { label: "Levothyroxine", value: "levothyroxine" },
];
const SelectMedication = () => {
  const [medications, setMedications] = useState(medicationsSample[0]);
  return (
    <Card className="bg-primary">
      <CardBody className="flex flex-row p-5 justify-between">
        <div className="flex flex-col items-start text-white justify-center content-between [&>*]:my-2">
          <h2>Select a medication</h2>
          <p>Or view aggregated data</p>
        </div>
        <div className="flex flex-col justify-center [&>*]:my-3 w-[50%]">
          <Select
            aria-label="medication"
            items={medicationsSample}
            value={medications.value}
            placeholder={medications.label}
          >
            {medicationsSample.map((medication) => (
              <SelectItem
                onPress={() => setMedications(medication)}
                key={medication.value}
                value={medication.value}
              >
                {medication.label}
              </SelectItem>
            ))}
          </Select>
          <Button className="bg-[#63A87D] text-white" radius="full">
            View Data
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default SelectMedication;
