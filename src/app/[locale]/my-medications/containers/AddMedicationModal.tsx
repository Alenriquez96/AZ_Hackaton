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
            <CardHeader className="flex flex-col justify-start">
              <h1>Add a Medication</h1>
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
              <Select variant="bordered" isRequired label="Choose Dosage">
                {dosageOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select>

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
