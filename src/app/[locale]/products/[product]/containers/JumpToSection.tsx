"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Section } from "@/interfaces";

const sectionsToShow: string[] = [
  "description",
  "prerequisites.warningsAndPrecautions",
  "instructions.instruction",
  "sideEffects.possibleSideEffects",
  "storage",
  "disposalAndHandling",
];

export const JumpToSection = ({
  sectionHeadings,
}: {
  sectionHeadings: Section[];
}) => {
  const handleJumpToSection = (section: string) => {
    console.log(section);

    document.getElementById(section)?.click();
  };
  const t = useTranslations("product");

  return (
    <Card
      radius="md"
      shadow="lg"
      className="w-[360px] rounded-[16px] bg-primary opacity-75 text-white [&>*]:p-4  shadow-2xl"
    >
      <CardHeader className="text-[24px]">{t("jumpTo")}</CardHeader>

      <CardBody>
        <Listbox>
          {sectionHeadings
            .filter((section) => sectionsToShow.includes(section.section))
            .map((sectionName, i) => (
              <ListboxItem
                key={i}
                style={{
                  padding: "16px 24px 16px 16px",
                  borderRadius: "100px",
                }}
                onClick={() =>
                  handleJumpToSection(
                    sectionName.title.replaceAll(" ", "").toLowerCase()
                  )
                }
                aria-label="Jump to section"
              >
                {sectionName.title}
              </ListboxItem>
            ))}
        </Listbox>
      </CardBody>
    </Card>
  );
};
