import { Accordion, AccordionItem, Card, CardHeader } from "@nextui-org/react";
import { medicationsType } from "@/interfaces";

interface MedicationSchedulesProps {
  currentMedications: medicationsType[];
}

const accordionItems: string[] = ["Morning", "Afternoon", "Evening"];

const MedicationSchedules = ({
  currentMedications,
}: MedicationSchedulesProps) => {
  return (
    <Card className="p-4 ">
      <CardHeader>Medication Schedules</CardHeader>
      <Accordion>
        {accordionItems.map((item) => (
          <AccordionItem key={item} title={item}>
            <div className="flex justify-between bg-[#E0EEE5] dark:text-black rounded-lg p-3">
              <p>{currentMedications[0].name}</p>
              <p>
                {currentMedications[0].dose} {currentMedications[0].frequency}
              </p>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </Card>
  );
};

export default MedicationSchedules;
