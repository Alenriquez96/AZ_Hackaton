"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/react";

const navigation: { title: string; path: string }[] = [
  {
    title: "Product Analytics",
    path: "/product-analytics",
  },
  {
    title: "Portfolio Analytics",
    path: "/portfolio-analytics",
  },
];

const EmployeeNavbar = ({ locale }: { locale: string }) => {
  const pathName = usePathname();
  return (
    <>
      {navigation.map((navItem) => (
        <Link key={navItem.title} href={`/${locale || "en"}/${navItem.path}`}>
          <Button
            variant={pathName.includes(navItem.path) ? "solid" : "light"}
            color={pathName.includes(navItem.path) ? "secondary" : "default"}
            radius="full"
            className="hidden lg:block"
          >
            {navItem.title}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default EmployeeNavbar;
