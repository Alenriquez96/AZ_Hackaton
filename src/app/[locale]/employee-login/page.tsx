"use client";
import {
  Card,
  CardHeader,
  Input,
  Button,
  Link,
  CardBody,
} from "@nextui-org/react";
import Text from "@/app/components/Text";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";
import { useUserContext } from "@/app/context/UserContext";

const EmployeeLogin = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      router.push("/" + locale + "/dashboard");
    }
  }, [user]);

  const handleEmployeeLogin = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (typeof window !== "undefined") {
      try {
        const users = JSON.parse(localStorage.getItem("users") || "[]");

        const user = users.find(
          (user: { email: string; password: string; profileType: string }) =>
            user.email === email &&
            user.password === password &&
            user.profileType === "Proffesional"
        );

        if (!user) {
          throw new Error("Wrong email or password :(");
        }

        localStorage.setItem("user", JSON.stringify(user));
        location.reload();
      } catch (error: any) {
        toast({
          description: error.message,
          duration: 2000,
          variant: "destructive",
        });
      }
    }
  };

  return (
    <main className="min-h-screen  ">
      <form
        className="flex flex-col items-center"
        onSubmit={handleEmployeeLogin}
      >
        <Card className="flex flex-col my-14 p-5">
          <CardHeader className="flex flex-col">
            <Text>Employee Log In</Text>
            <Link href={`/` + locale + "/register"}>New Here? Register</Link>
            <CardBody className="flex flex-col [&>*]:my-2">
              <Input
                isRequired
                variant="bordered"
                placeholder="Company Email"
                type="email"
                name="email"
              />
              <Input
                isRequired
                variant="bordered"
                placeholder="Password"
                type="password"
                name="password"
              />
              <Button type="submit" radius="full" color="primary">
                Log In
              </Button>
              <Button
                onClick={() => router.back()}
                radius="full"
                variant="bordered"
              >
                Cancel
              </Button>
            </CardBody>
          </CardHeader>
        </Card>
      </form>
    </main>
  );
};

export default EmployeeLogin;
