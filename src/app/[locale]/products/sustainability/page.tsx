"use client";

import Text from "@/app/components/Text";
import { Product, Section } from "@/interfaces";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@nextui-org/react";
import {
  IconMail,
  IconMessageCircle,
  IconPrinter,
  IconShare,
} from "@tabler/icons-react";
import { JumpToSection } from "../[product]/containers/JumpToSection";

interface SustainabilityPageProps {
  searchParams: {
    product: string;
  };
}

const accordionItems: Section[] = [
  {
    title: "CO2 Production",
    section: "CO2 Production",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at, laboriosam temporibus sint esse quibusdam? Molestias cupiditate, minima error molestiae praesentium id a incidunt, quasi maiores repudiandae inventore architecto expedita!",
  },
  {
    title: "H2O Re-use",
    section: "H2O Re-use",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at, laboriosam temporibus sint esse quibusdam? Molestias cupiditate, minima error molestiae praesentium id a incidunt, quasi maiores repudiandae inventore architecto expedita!",
  },
  {
    title: "% Renewable Energy",
    section: "% Renewable Energy",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at, laboriosam temporibus sint esse quibusdam? Molestias cupiditate, minima error molestiae praesentium id a incidunt, quasi maiores repudiandae inventore architecto expedita!",
  },
  {
    title: "% Packaging Recycled",
    section: "% Packaging Recycled",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur at, laboriosam temporibus sint esse quibusdam? Molestias cupiditate, minima error molestiae praesentium id a incidunt, quasi maiores repudiandae inventore architecto expedita!",
  },
];

const SustainabilityPage = async ({
  searchParams: { product },
}: SustainabilityPageProps) => {
  const [medication, setMedication] = useState<Product>();

  useEffect(() => {
    getProduct(product);
  }, []);

  const getProduct = async (productName: string) => {
    try {
      const res = await fetch(
        `http://ec2-18-134-96-73.eu-west-2.compute.amazonaws.com:8080/v1/products/search?name=` +
          productName,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            authorization:
              "Bearer " + localStorage.getItem("access_token") || "",
          },
        }
      );
      const product = await res.json();
      setMedication(product);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <main className={`p-11 flex justify-evenly flex-wrap min-h-screen`}>
      <section className="flex flex-col ">
        {medication && <Text>{medication?.name}</Text>}
        <p className=" font-[24px] ">{medication?.activeIngredient}</p>
        <p className=" font-[24px] ">Manufactured by: {medication?.company}</p>
        <Text>Sustainability Information</Text>
        <Accordion>
          {accordionItems.map((item, i) => {
            return (
              <AccordionItem
                key={i}
                title={item.title}
                className="lg:w-[600px] lg:max-w-[600px] max-w-[390px]"
              >
                <p
                  className={`rounded-[8px] bg-[#E8E8E8]  leading-[32px] text-black my-5 p-5 lg:max-w-[600px] max-w-[390px]`}
                >
                  {item.content}
                </p>
              </AccordionItem>
            );
          })}
        </Accordion>
      </section>
      <section className="flex-col lg:flex hidden [&>div]:my-8">
        <Button
          variant="shadow"
          radius="full"
          className="bg-[#D80027] text-white   h-[48px]"
        >
          Report an adverse evetn
        </Button>
        <div>
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="mr-2 h-[50px] "
                startContent={<IconShare />}
                radius="full"
                variant="bordered"
              >
                Share
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
              <DropdownSection showDivider>
                <DropdownItem startContent={<IconMail />} key="new">
                  Send via Email
                </DropdownItem>
              </DropdownSection>

              <DropdownItem startContent={<IconMessageCircle />} key="copy">
                Send via Text
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Button
            className="ml-2 h-[50px] "
            startContent={<IconPrinter />}
            radius="full"
            variant="bordered"
          >
            Print
          </Button>
        </div>
        <JumpToSection sectionHeadings={accordionItems} />
      </section>
      <footer className="bg-[url('../assets/spotted_footer.svg')] w-screen h-[500px] fixed z-[-1] bottom-0"></footer>
    </main>
  );
};

export default SustainabilityPage;
