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

const Login = ({ params: { locale } }: { params: { locale: string } }) => {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(user).length !== 0) {
      router.push("/" + locale + "/dashboard");
    }
  }, [user]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (typeof window !== "undefined") {
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      const user = users.find(
        (user: { email: string; password: string }) =>
          user.email === email && user.password === password
      );

      if (!user) {
        toast({
          description: "Wrong email or password",
          duration: 2000,
        });
      }

      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        location.reload();
      }
    }
  };

  return (
    <main className="min-h-screen  ">
      <form className="flex flex-col items-center " onSubmit={handleLogin}>
        <Card className="flex flex-col my-14 p-5 w-[80%] max-w-[500px]">
          <CardHeader className="flex flex-col">
            <Text>Log In</Text>
            <Link href={`/` + locale + "/register"}>New Here? Register</Link>
            <CardBody className="flex flex-col [&>*]:my-2">
              <Input
                isRequired
                variant="bordered"
                placeholder="Type your email..."
                label="Email"
                type="email"
                name="email"
              />
              <Input
                isRequired
                variant="bordered"
                placeholder="Type your password..."
                label="Password"
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

export default Login;
