"use client";
import RegisterComponent from "./containers/RegisterComponent";
import { useUserContext } from "@/app/context/UserContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PersonalInfo from "./containers/PersonalInfo";
import ProfileType from "./containers/ProfileType";
import { getCountry } from "@/app/utils/getCountry";

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
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
  };

  // handle profile type
  const handleProfileType = (type: string) => {
    setProfileType(type);
  };

  // handle personal info
  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    setFirstName(e.target.firstName.value);
    setAge(e.target.age.value);
    setGender(e.target.gender.value);
    setExistingMedications((prev) => [
      ...prev,
      e.target.existingMedications.value,
    ]);
    setHealthCondition((prev) => [
      ...prev,
      e.target.existingHealthConditions.value,
    ]);

    setRegisterCompleted(true);
  };

  //UseEffect to handle the register completed
  useEffect(() => {
    if (registerCompleted) {
      const newUser = {
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
        <PersonalInfo handleSubmit={handleSubmit} />
      )}
    </main>
  );
};

export default RegisterPage;
