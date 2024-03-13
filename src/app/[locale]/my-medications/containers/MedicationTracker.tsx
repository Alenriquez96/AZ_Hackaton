"use client";
import { Card, CardHeader, CardBody, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useFillRandomly } from "@/app/hooks/";
import { medicationsType } from "@/interfaces";

const toBeTakenSample: medicationsType[] = [
  { name: "Aspirin", type: "tablet" },
  { name: "Paracetamol", type: "pill" },
  { name: "Albuterol", type: "inhaler" },
  { name: "Levothyroxine", type: "tablet" },
];
const takenSample: medicationsType[] = [
  { name: "Aspirin", type: "tablet" },
  { name: "Paracetamol", type: "pill" },
  { name: "Albuterol", type: "inhaler" },
  { name: "Levothyroxine", type: "tablet" },
];

const MedicationTracker = () => {
  const [toBeTaken, setToBeTaken] = useState<medicationsType[]>([]);
  const [taken, setTaken] = useState<medicationsType[]>([]);

  useFillRandomly(toBeTakenSample, setToBeTaken);
  useFillRandomly(takenSample, setTaken);

  const markAsTaken = (index: number) => {
    setToBeTaken(toBeTaken.filter((_, i) => i !== index));
  };

  const markAsNotTaken = (index: number) => {
    setTaken(taken.filter((_, i) => i !== index));
  };

  return (
    <Card className="p-3">
      <CardHeader>
        <h1>Medication Tracker</h1>
      </CardHeader>
      <CardBody className="[&>*]:my-3">
        <div>
          <p>To be taken</p>
          {toBeTaken &&
            toBeTaken.map((medication, index) => (
              <Card
                className="bg-[#3D7B55] flex flex-row justify-between items-center  rounded-lg text-white my-3"
                key={index}
              >
                <p className="px-2">{medication.name}</p>
                <Button
                  onClick={() => markAsTaken(index)}
                  variant="faded"
                  radius="full"
                  className="m-2 p-2"
                >
                  Mark as Taken
                </Button>
              </Card>
            ))}
        </div>
        <div>
          <p>Taken</p>
          {taken &&
            taken.map((medication, index) => (
              <Card
                className="bg-[#E0EEE5] rounded-lg text-black flex flex-row items-center justify-between my-3"
                key={index}
              >
                <p className="px-2">{medication.name}</p>
                <Button
                  onClick={() => markAsNotTaken(index)}
                  variant="faded"
                  radius="full"
                  className="m-2 p-2"
                >
                  Mark as not Taken
                </Button>
              </Card>
            ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default MedicationTracker;
