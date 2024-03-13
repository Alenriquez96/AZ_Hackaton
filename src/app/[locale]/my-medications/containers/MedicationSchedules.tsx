import { Accordion, AccordionItem, Card, CardHeader } from "@nextui-org/react";
import { medicationsType } from "@/interfaces";

interface MedicationSchedulesProps {
  currentMedications: medicationsType[];
}

const MedicationSchedules = ({
  currentMedications,
}: MedicationSchedulesProps) => {
  return (
    <Card className="p-4 ">
      <CardHeader>Medication Schedules</CardHeader>
      <Accordion>
        <AccordionItem title="Morning">
          <div className="flex justify-between bg-[#E0EEE5] rounded-lg p-3">
            <p>{currentMedications[0].name}</p>
            <p>
              {currentMedications[0].dose} {currentMedications[0].frequency}
            </p>
          </div>
        </AccordionItem>
        <AccordionItem title="Afternoon">
          <div className="flex justify-between bg-[#E0EEE5] rounded-lg p-3">
            <p>{currentMedications[0].name}</p>
            <p>
              {currentMedications[0].dose} {currentMedications[0].frequency}
            </p>
          </div>
        </AccordionItem>
        <AccordionItem title="Evening">
          <div className="flex justify-between bg-[#E0EEE5] rounded-lg p-3">
            <p>{currentMedications[0].name}</p>
            <p>
              {currentMedications[0].dose} {currentMedications[0].frequency}
            </p>
          </div>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default MedicationSchedules;
