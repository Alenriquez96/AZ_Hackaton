"use client";
import Link from "next/link";
import Text from "./components/Text";
import { Button } from "@nextui-org/react";

export default function NotFound() {
  return (
    <div className="min-h-screen grid place-content-center text-center [&>*]:my-3">
      <Text>Not Found</Text>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button variant="shadow" color="primary">
          Return Home
        </Button>
      </Link>{" "}
    </div>
  );
}
