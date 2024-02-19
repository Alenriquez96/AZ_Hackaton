"use client";
import Logo from "@/app/components/Logo";
import LanguageSelector from "@/app/components/LanguageSelector";
import UserContainer from "@/app/containers/UserContainer";
import CountrySelector from "@/app/components/CountrySelector";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isLogged, setiIsLogged] = useState(false);
  const [loggedUser, setlLoggedUser] = useState<object | null>(null);

  const handleSetIsLogged = () => {
    setiIsLogged(true);
    setlLoggedUser(user);
  };

  const user = {
    img: "",
    name: "Olivia Smith",
  };

  const navigation: { title: string; path: string }[] = [
    { title: "Home", path: loggedUser ? "/dashboard" : "/" },
    { title: "My Medications", path: "/my-medications" },
    { title: "Calendar", path: "/" },
    { title: "Communities", path: "/" },
  ];

  return (
    <header className=" h-24 flex justify-between content-center items-center border-b-[1px] border-b-[#DEE5ED] p-10">
      <div className="flex justify-start content-center">
        <Logo loggedUser={loggedUser} />
      </div>
      <div className="flex justify-start items-center content-center sm:[&>*]:mx-5">
        {navigation.map((navItem) => (
          <Link key={navItem.title} href={`${navItem.path}`}>
            <button
              className={`rounded-[16px] py-[8px] text-[#000000] text-[14px]  px-[16px] ${
                loggedUser ? "block" : "hidden"
              }`}
            >
              {navItem.title}
            </button>
          </Link>
        ))}
        <CountrySelector />
        <LanguageSelector />
        <UserContainer
          loggedUser={loggedUser}
          handleSetIsLogged={handleSetIsLogged}
        />
      </div>
    </header>
  );
};

export default Header;
