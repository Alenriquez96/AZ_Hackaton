"use client";
import { Card, CardBody, Button, CardFooter } from "@nextui-org/react";
import UnderConstructionImage from "../assets/underConstruction.svg";
import Image from "next/image";
import { Title } from "../components/Title";
import { useRouter } from "next/navigation";

const UnderConstruction = () => {
  const router = useRouter();

  return (
    <div className="bg-[url('../assets/world.svg')] w-full h-screen grid place-content-center">
      <Card shadow="lg" className="px-6 py-unit-16">
        <CardBody className="flex flex-col items-center [&>*]:my-2">
          <Image src={UnderConstructionImage} alt="under construction" />
          <Title>Uh oh!</Title>
          <Title>This page is under construction</Title>
        </CardBody>
        <CardFooter className="grid place-content-center">
          <Button onClick={() => router.back()} color="primary" radius="full">
            Go back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UnderConstruction;
