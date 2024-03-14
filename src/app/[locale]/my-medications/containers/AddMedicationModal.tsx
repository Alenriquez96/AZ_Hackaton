import { toast } from "@/components/ui/use-toast";
import { medicationsType } from "@/interfaces";
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
  addAMedication: (med: medicationsType) => void;
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
  { label: "Inhaler", value: "inhaler" },
  { label: "Pill", value: "pill" },
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
  addAMedication,
}: AddMedicationModalProps) => {
  const handleAddMedication = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const name = e.target.name.value;
    const dose = e.target.dose.value;
    const dosageMeasure = e.target.dosageMeasure.value;
    const type = e.target.type.value;
    const frequency = e.target.frequency.value;
    const times = e.target.times.value;

    try {
      const anyEmpty = [name, dose, dosageMeasure, type, frequency, times].find(
        (any) => any.length === 0
      );

      if (anyEmpty) {
        throw new Error("All fields are required");
      }

      if (name && dose && dosageMeasure && type && frequency && times) {
        addAMedication({
          name,
          dose: parseInt(dose),
          dosageMeasure,
          type,
          frequency,
          times,
        });
        onClose();
      }
    } catch (error: any) {
      toast({
        description: error.message,
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
      <form onSubmit={handleAddMedication}>
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
                <Autocomplete
                  variant="bordered"
                  label="Search for a medication"
                  name="name"
                >
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
                    name="dose"
                  />
                  <Select
                    variant="bordered"
                    isRequired
                    className="ml-6 max-w-24"
                    name="dosageMeasure"
                  >
                    {dosageOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                <p>Form</p>
                <Select
                  name="type"
                  variant="bordered"
                  isRequired
                  label="Choose Form"
                >
                  {formOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>

                <p>Frequency</p>
                <Select
                  name="frequency"
                  variant="bordered"
                  isRequired
                  label="Choose Frequency"
                >
                  {frequencyOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </Select>

                <p>Time</p>
                <Select
                  name="times"
                  variant="bordered"
                  isRequired
                  label="Choose Time"
                >
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
                <Button
                  type="submit"
                  radius="full"
                  variant="solid"
                  color="primary"
                >
                  Add Medication
                </Button>
              </CardFooter>
            </ModalBody>
          </Card>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddMedicationModal;
