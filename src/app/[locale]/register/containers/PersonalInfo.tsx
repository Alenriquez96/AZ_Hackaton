import Text from "@/app/components/Text";
import {
  Card,
  Autocomplete,
  AutocompleteItem,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { IconSearch } from "@tabler/icons-react";
import CardFooterComponent from "./CardFooterComponent";
import { useTranslations } from "next-intl";

type PersonalInfoProps = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const PersonalInfo = ({ handleSubmit }: PersonalInfoProps) => {
  const t = useTranslations("register");

  const genders: string[] = [
    t("about.form.gender.female"),
    t("about.form.gender.male"),
    t("about.form.gender.notSay"),
  ];
  const healthConditions: string[] = ["Diabetes", "Hypertension", "Asthma"];
  const medications: string[] = ["Paracetamol", "Ibuprofen", "Aspirin"];

  return (
    <>
      <div className="flex flex-col items-center m-6 text-center">
        <Text>{t("about.title")}</Text>
        <p>{t("about.subtitle")}</p>
      </div>
      <Card className="m-4 w-[80%] max-w-[600px]" shadow="lg">
        <form className="flex flex-col [&>*]:my-3 p-10" onSubmit={handleSubmit}>
          <Input label="First Name" name="firstName" isRequired />
          <Input label="Age" name="age" isRequired />
          <Select
            aria-label="Gender"
            variant="flat"
            name="gender"
            items={genders}
            placeholder={"Gender"}
          >
            {genders.map((gender, i) => (
              <SelectItem
                showDivider={i !== genders.length - 1}
                key={gender}
                value={gender}
              >
                {gender}
              </SelectItem>
            ))}
          </Select>
          <Autocomplete
            name="existingHealthConditions"
            label={t("about.form.existingConditions.label")}
            placeholder={t("about.form.existingConditions.placeholder")}
            endContent={<IconSearch />}
          >
            {healthConditions.map((condition, i) => (
              <AutocompleteItem key={i}>{condition}</AutocompleteItem>
            ))}
          </Autocomplete>
          <Autocomplete
            name="existingMedications"
            label={t("about.form.existingMedications.label")}
            placeholder={t("about.form.existingMedications.placeholder")}
            endContent={<IconSearch />}
          >
            {medications.map((medication, i) => (
              <AutocompleteItem key={i}>{medication}</AutocompleteItem>
            ))}
          </Autocomplete>
          <CardFooterComponent />
        </form>
      </Card>
    </>
  );
};

export default PersonalInfo;
