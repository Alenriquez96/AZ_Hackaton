"use client";
import Text from "@/app/components/Text";
import {
  Card,
  Autocomplete,
  AutocompleteItem,
  Input,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import { IconSearch, IconX } from "@tabler/icons-react";
import CardFooterComponent from "./CardFooterComponent";
import { useTranslations } from "next-intl";
import { useState } from "react";

type PersonalInfoProps = {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    conditions: string[],
    meds: string[]
  ) => void;
  profileType: string;
};

const healthConditions: string[] = [
  "Diabetes",
  "Hypertension",
  "Asthma",
  "Covid",
  "Cancer",
  "HIV",
  "Tuberculosis",
  "Malaria",
  "Cholera",
  "Typhoid",
  "Yellow Fever",
  "Measles",
  "Mumps",
  "Rubella",
  "Chickenpox",
  "Pneumonia",
  "Bronchitis",
  "Emphysema",
  "Cystic Fibrosis",
  "Chronic Obstructive Pulmonary Disease",
  "Asthma",
  "Chronic Bronchitis",
  "Lung Cancer",
  "Pulmonary Fibrosis",
  "Pulmonary Hypertension",
  "Pulmonary Embolism",
  "Pneumothorax",
  "Sarcoidosis",
  "Tuberculosis",
  "Pneumonia",
  "Bronchitis",
  "Emphysema",
  "Cystic Fibrosis",
  "Chronic Obstructive Pulmonary Disease",
  "Asthma",
  "Chronic Bronchitis",
  "Lung Cancer",
  "Pulmonary Fibrosis",
  "Pulmonary Hypertension",
  "Pulmonary Embolism",
  "Pneumothorax",
  "Sarcoidosis",
  "Tuberculosis",
  "Pneumonia",
  "Bronchitis",
  "Emphysema",
  "Cystic Fibrosis",
  "Chronic Obstructive Pulmonary Disease",
  "Asthma",
  "Chronic Bronchitis",
  "Lung Cancer",
  "Pulmonary Fibrosis",
  "Pulmonary Hypertension",
  "Pulmonary Embolism",
  "Pneumothorax",
  "Sarcoidosis",
  "Tuberculosis",
  "Pneumonia",
  "Bronchitis",
  "Emphysema",
  "Cystic Fibrosis",
  "Chronic Obstructive Pulmonary Disease",
  "Asthma",
  "Chronic Bronchitis",
  "Lung Cancer",
  "Pulmonary Fibrosis",
  "Pulmonary Hypertension",
  "Pulmonary Embolism",
  "Pneumothorax",
  "Sarcoidosis",
  "Tuberculosis",
  "Pneumonia",
  "Bronchitis",
  "Emphysema",
  "Cystic Fibrosis",
  "Chronic Obstructive Pulmonary Disease",
  "Asthma",
  "Chronic Bronchitis",
  "Lung Cancer",
  "Pulmonary Fibrosis",
  "Pulmonary Hypertension",
  "Pulmonary Embolism",
  "Pneumothorax",
  "Sarcoidosis",
  "Tuberculosis",
];
const medications: string[] = [
  "Paracetamol",
  "Ibuprofen",
  "Aspirin",
  "Morphine",
  "Codeine",
  "Insulin",
  "Amoxicillin",
  "Penicillin",
  "Ciprofloxacin",
  "Azithromycin",
  "Clarithromycin",
  "Erythromycin",
  "Ceftriaxone",
  "Cefotaxime",
  "Cefixime",
  "Cefuroxime",
  "Cefpodoxime",
  "Cefdinir",
  "Cefprozil",
  "Cefaclor",
  "Cefadroxil",
  "Cephalexin",
  "Cefazolin",
  "Cefuroxime",
  "Cefoxitin",
  "Cefotetan",
  "Cefepime",
  "Ceftazidime",
  "Ceftriaxone",
  "Cefotaxime",
  "Cefixime",
  "Cefuroxime",
  "Cefpodoxime",
  "Cefdinir",
  "Cefprozil",
  "Cefaclor",
  "Cefadroxil",
  "Cephalexin",
  "Cefazolin",
  "Cefuroxime",
  "Cefoxitin",
  "Cefotetan",
  "Cefepime",
  "Ceftazidime",
  "Ceftriaxone",
  "Cefotaxime",
  "Cefixime",
  "Cefuroxime",
  "Cefpodoxime",
  "Cefdinir",
  "Cefprozil",
  "Cefaclor",
  "Cefadroxil",
  "Cephalexin",
  "Cefazolin",
  "Cefuroxime",
  "Cefoxitin",
  "Cefotetan",
  "Cefepime",
  "Ceftazidime",
  "Ceftriaxone",
  "Cefotaxime",
  "Cefixime",
  "Cefuroxime",
  "Cefpodoxime",
  "Cefdinir",
  "Cefprozil",
  "Cefaclor",
  "Cefadroxil",
  "Cephalexin",
  "Cefazolin",
  "Cefuroxime",
  "Cefoxitin",
  "Cefotetan",
  "Cefepime",
  "Ceftazidime",
  "Ceftriaxone",
  "Cefotaxime",
  "Cefixime",
  "Cefuroxime",
  "Cefpodoxime",
  "Cefdinir",
];

const PersonalInfo = ({ handleSubmit, profileType }: PersonalInfoProps) => {
  const t = useTranslations("register");
  const [conditions, setConditions] = useState<string[]>([]);
  const [meds, setMeds] = useState<string[]>([]);

  console.log(profileType);

  const genders: string[] = [
    t("about.form.gender.female"),
    t("about.form.gender.male"),
    t("about.form.gender.notSay"),
  ];

  const deleteCondition = (index: number) =>
    setConditions((prev) => prev.filter((_, i) => i !== index));
  const deleteMed = (index: number) =>
    setMeds((prev) => prev.filter((_, i) => i !== index));

  return (
    <>
      <div className="flex flex-col items-center m-6 text-center">
        <Text>{t("about.title")}</Text>
        <p>{t("about.subtitle")}</p>
      </div>
      <Card className="m-4 w-[80%] max-w-[600px]" shadow="lg">
        <form
          className="flex flex-col [&>*]:my-3 p-10"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
            handleSubmit(e, conditions, meds)
          }
        >
          <Input label="First Name" name="firstName" isRequired />
          {profileType !== "Proffesional" && (
            <>
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
                onInputChange={(e) => {
                  setConditions((prev) => [...prev, e]);
                }}
              >
                {healthConditions.map((condition, i) => (
                  <AutocompleteItem key={i}>{condition}</AutocompleteItem>
                ))}
              </Autocomplete>
              <div className="flex items-center flex-wrap ">
                {conditions.length > 0 &&
                  conditions.map((con, i) => (
                    <Button
                      className="flex justify-between mr-2 my-1"
                      variant="ghost"
                      endContent={<IconX onClick={() => deleteCondition(i)} />}
                    >
                      {con}
                    </Button>
                  ))}
              </div>
              <Autocomplete
                name="existingMedications"
                label={t("about.form.existingMedications.label")}
                placeholder={t("about.form.existingMedications.placeholder")}
                endContent={<IconSearch />}
                onInputChange={(e) => setMeds((prev) => [...prev, e])}
              >
                {medications.map((medication, i) => (
                  <AutocompleteItem key={i}>{medication}</AutocompleteItem>
                ))}
              </Autocomplete>
            </>
          )}
          <div className="flex items-center flex-wrap ">
            {meds.length > 0 &&
              meds.map((med, i) => (
                <Button
                  className="flex justify-between mr-2 my-1"
                  variant="ghost"
                  endContent={<IconX onClick={() => deleteMed(i)} />}
                >
                  {med}
                </Button>
              ))}
          </div>
          <CardFooterComponent />
        </form>
      </Card>
    </>
  );
};

export default PersonalInfo;
