"use client";
import Logo from "@/app/components/Logo";
import LanguageSelector from "@/app/components/LanguageSelector";
import UserContainer from "@/app/containers/UserContainer";
import CountrySelector from "@/app/components/CountrySelector";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Header = () => {
  const [isLogged, setIsLogged] = useState(
    () =>
      typeof window !== "undefined" &&
      localStorage.getItem("isLogged") === "true" // Get the isLogged from the local storage
  );
  const [loggedUser, setlLoggedUser] = useState<object | null>(() => {
    if (typeof window !== "undefined")
      return JSON.parse(localStorage.getItem("user") || "{}"); // Get the user from the local storage
  });
  let pathName = usePathname(); // Get the current path
  const router = useRouter(); // Get the router object
  const [mounted, setMounted] = useState(false);
  // useEffect(() => {
  //   setMounted(true);
  // }, []);

  // if (!mounted) return <></>; // Return null if the component is not mounted yet

  const handleSetIsLogged = () => {
    setIsLogged(true);
    setlLoggedUser(user);
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isLogged", JSON.stringify(true));
    }
  };

  const user = {
    img: "",
    name: "Olivia Smith",
  };

  const navigation: { title: string; path: string }[] = [
    { title: "Home", path: isLogged ? "/dashboard" : "/" },
    { title: "My Medications", path: "/my-medications" },
    { title: "Calendar", path: "/calendar" },
    { title: "Communities", path: "/communities" },
  ];

  return (
    <header className="h-24 flex justify-between content-center items-center border-b-[1px] border-b-[#DEE5ED] p-10">
      <div className="flex justify-start content-center">
        <Logo loggedUser={isLogged} />
      </div>
      <div className="flex justify-around items-center  sm:[&>*]:mx-5">
        {isLogged &&
          navigation.map((navItem) => (
            <Link key={navItem.title} href={`${navItem.path}`}>
              <Button
                variant={navItem.path === pathName ? "solid" : "light"}
                color={navItem.path === pathName ? "secondary" : "default"}
                radius="full"
              >
                {navItem.title}
              </Button>
            </Link>
          ))}
        <CountrySelector />
        <LanguageSelector />
        <UserContainer
          loggedUser={loggedUser}
          isLogged={isLogged}
          handleSetIsLogged={handleSetIsLogged}
        />
      </div>
    </header>
  );
};

export default Header;
