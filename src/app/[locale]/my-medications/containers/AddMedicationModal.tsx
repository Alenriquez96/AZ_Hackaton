import {
  Modal,
  ModalContent,
  ModalBody,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
  Input,
} from "@nextui-org/react";
import { Button } from "@nextui-org/react";

interface AddMedicationModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onClose: () => void;
}

interface OptionsType {
  label: string;
  value: string;
}

const medicationsSample: OptionsType[] = [
  {
    label: "Albuterol",
    value: "albuterol",
  },
  {
    label: "Insulin",
    value: "insulin",
  },
  {
    label: "Levothyroxine",
    value: "levothyroxine",
  },
  {
    label: "Lisinopril",
    value: "lisinopril",
  },
  {
    label: "Metformin",
    value: "metformin",
  },
  {
    label: "Omeprazole",
    value: "omeprazole",
  },
  {
    label: "Simvastatin",
    value: "simvastatin",
  },
  {
    label: "Atorvastatin",
    value: "atorvastatin",
  },
  {
    label: "Amlodipine",
    value: "amlodipine",
  },
  {
    label: "Hydrochlorothiazide",
    value: "hydrochlorothiazide",
  },
  {
    label: "Metoprolol",
    value: "metoprolol",
  },
  {
    label: "Losartan",
    value: "losartan",
  },
  {
    label: "Gabapentin",
    value: "gabapentin",
  },
  {
    label: "Sertraline",
    value: "sertraline",
  },
  {
    label: "Azithromycin",
    value: "azithromycin",
  },
  {
    label: "Amoxicillin",
    value: "amoxicillin",
  },
  {
    label: "Hydrocodone",
    value: "hydrocodone",
  },
  {
    label: "Tramadol",
    value: "tramadol",
  },
  {
    label: "Cyclobenzaprine",
    value: "cyclobenzaprine",
  },
  {
    label: "Trazodone",
    value: "trazodone",
  },
  {
    label: "Clonazepam",
    value: "clonazepam",
  },
  {
    label: "Citalopram",
    value: "citalopram",
  },
  {
    label: "Propranolol",
    value: "propranolol",
  },
  {
    label: "Duloxetine",
    value: "duloxetine",
  },
  {
    label: "Venlafaxine",
    value: "venlafaxine",
  },
  {
    label: "Bupropion",
    value: "bupropion",
  },
];

const formOptions: OptionsType[] = [
  { label: "Tablet", value: "tablet" },
  { label: "Liquid", value: "liquid" },
  { label: "Tropical", value: "Tropical" },
  { label: "Injection", value: "injection" },
];

const dosageOptions: OptionsType[] = [
  { label: "mg", value: "mg" },
  { label: "ml", value: "ml" },
  { label: "g", value: "g" },
  { label: "mcg", value: "mcg" },
];

const frequencyOptions: OptionsType[] = [
  { label: "Daily", value: "daily" },
  { label: "Weekly", value: "weekly" },
  { label: "Monthly", value: "monthly" },
  { label: "Every 2 days", value: "every2days" },
];

const timesOptions: OptionsType[] = [
  { label: "Morning", value: "morning" },
  { label: "Afternoon", value: "afternoon" },
  { label: "Evening", value: "evening" },
  { label: "Night", value: "night" },
];

const AddMedicationModal = ({
  isOpen,
  onOpenChange,
  onClose,
}: AddMedicationModalProps) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <ModalContent>
        <Card>
          <ModalBody>
            <CardHeader className="flex flex-col items-start">
              <h1 className="font-black text-lg mb-3">Add a Medication</h1>
              <p>
                Dosage and schedule should be confirmed with your health care
                practitioner
              </p>
            </CardHeader>
            <CardBody className="[&>*]:my-1">
              <Autocomplete variant="bordered" label="Search for a medication">
                {medicationsSample.map((medication) => (
                  <AutocompleteItem
                    key={medication.value}
                    value={medication.value}
                  >
                    {medication.label}
                  </AutocompleteItem>
                ))}
              </Autocomplete>

              <p>Dosage</p>
              <div className="flex flex-row items-center ">
                <Input
                  label="Enter Dosage"
                  isRequired
                  variant="bordered"
                  className=""
                />
                <Select variant="bordered" isRequired className="ml-6 max-w-24">
                  {dosageOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <p>Form</p>
              <Select variant="bordered" isRequired label="Choose Form">
                {formOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>

              <p>Frequency</p>
              <Select variant="bordered" isRequired label="Choose Frequency">
                {frequencyOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>

              <p>Time</p>
              <Select variant="bordered" isRequired label="Choose Time">
                {timesOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </CardBody>
            <CardFooter className="flex justify-between">
              <Button radius="full" variant="bordered" onPress={onClose}>
                Cancel
              </Button>
              <Button radius="full" variant="solid" color="primary">
                Add Medication
              </Button>
            </CardFooter>
          </ModalBody>
        </Card>
      </ModalContent>
    </Modal>
  );
};

export default AddMedicationModal;
