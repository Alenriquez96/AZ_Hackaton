"use client";
import { sectionHeadings as sections } from "./Accordions";

export const JumpToSection = () => {
  const handleJumpToSection = (section: string) => {
    document.getElementById(section)?.click();
  };

  return (
    <div className="w-[360px] rounded-[16px] bg-[#462255] opacity-75 text-white [&>*]:p-4 max-h-[482px] shadow-2xl">
      <h2 className="text-[20px]">Jump to section</h2>
      <ul className="[&>*]:p-4 list-disc">
        {sections.map((sectionName, i) => (
          <li
            key={i}
            onClick={() => handleJumpToSection(sectionName.title)}
            className="ml-5 cursor-pointer"
          >
            {sectionName.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
