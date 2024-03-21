"use client";
import RegisterComponent from "./containers/RegisterComponent";
import { useUserContext } from "@/app/context/UserContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PersonalInfo from "./containers/PersonalInfo";
import ProfileType from "./containers/ProfileType";
import { getCountry } from "@/app/utils/getCountry";
import { user } from "@/interfaces";
import { toast } from "@/components/ui/use-toast";

const RegisterPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { user, setUser } = useUserContext();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [profileType, setProfileType] = useState<string>("");
  const [firstName, setFirstName] = useState<string>();
  const [age, setAge] = useState<number>();
  const [gender, setGender] = useState<string>();
  const [existingHealthCondition, setHealthCondition] = useState<string[]>([]);
  const [existingMedications, setExistingMedications] = useState<string[]>([]);
  const [shouldRedirect, setShouldRedirect] = useState<boolean>(false);
  const [registerCompleted, setRegisterCompleted] = useState<boolean>(false);

  const router = useRouter();

  // submit register handler
  const handleSubmitRegister = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    try {
      let email = e.target.email.value;
      let password = e.target.password.value;

      if (password.length < 8) {
        throw new Error("Password must be at least 8 characters");
      }

      if (typeof window !== "undefined") {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.some((user: user) => user.email === email)) {
          throw new Error("Email already exists");
        }
      }
      setEmail(email);
      setPassword(password);
    } catch (error: any) {
      toast({
        description: error.message,
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  // handle profile type
  const handleProfileType = (type: string) => {
    setProfileType(type);
  };

  // handle personal info
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | any,
    cons: string[],
    meds: string[]
  ) => {
    e.preventDefault();

    setFirstName(e.target.firstName.value);
    if (profileType !== "Proffesional") {
      setAge(e.target.age.value);
      setGender(e.target.gender.value);
      setExistingMedications(meds);
      setHealthCondition(cons);
    }

    setRegisterCompleted(true);
  };

  //UseEffect to handle the register completed
  useEffect(() => {
    if (registerCompleted) {
      const newUser: user = {
        email,
        password,
        profileType,
        name: firstName,
        age,
        gender,
        existingHealthCondition,
        existingMedications,
        isLogged: true,
        country: getCountry() || "United Kingdom",
      };

      if (typeof window !== "undefined") {
        let users = JSON.parse(localStorage.getItem("users") || "[]");
        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("user", JSON.stringify(newUser));

        setUser(newUser);
        setShouldRedirect(true);
      }
    }
  }, [registerCompleted]);

  //UseEffect to handle the redirect if the register has been completed
  useEffect(() => {
    if (shouldRedirect && user.isLogged && registerCompleted) {
      router.push("/" + locale + "/dashboard");
    }
  }, [shouldRedirect]);

  return (
    <main className="min-h-screen flex flex-col items-center">
      {!email && !password ? (
        <RegisterComponent handleSubmitRegister={handleSubmitRegister} />
      ) : email && password && !profileType ? (
        <ProfileType handleProfileType={handleProfileType} />
      ) : (
        <PersonalInfo handleSubmit={handleSubmit} profileType={profileType} />
      )}
      <footer className="bg-[url('../assets/spotted_footer.svg')] w-screen h-[500px] fixed z-[-1] bottom-0"></footer>
    </main>
  );
};

export default RegisterPage;
