"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { sectionHeadings as sections } from "./Accordions";

export const JumpToSection = () => {
  const handleJumpToSection = (section: string) => {
    document.getElementById(section)?.click();
  };

  return (
    <Card
      radius="md"
      shadow="lg"
      className="w-[360px] rounded-[16px] bg-primary opacity-75 text-white [&>*]:p-4 max-h-[482px] shadow-2xl"
    >
      <CardHeader className="text-[24px]">Jump to section</CardHeader>

      <CardBody>
        <Listbox>
          {sections.map((sectionName, i) => (
            <ListboxItem
              key={i}
              style={{ padding: "16px 24px 16px 16px", borderRadius: "100px" }}
              onClick={() => handleJumpToSection(sectionName.title)}
            >
              {sectionName.title}
            </ListboxItem>
          ))}
        </Listbox>
      </CardBody>
    </Card>
  );
};
