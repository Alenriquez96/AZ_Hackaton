"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const AuthComponent = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const localStorageToken = localStorage.getItem("access_token");

      if (searchParams.get("access_token")) {
        localStorage.setItem(
          "access_token",
          searchParams.get("access_token") || ""
        );
      }
      fetchToken();
    }
  }, []);

  const fetchToken = async () => {
    try {
      const res = await fetch(
        "https://ec2-18-134-96-73.eu-west-2.compute.amazonaws.com/v1/me",
        {
          cache: "no-cache",
          headers: {
            authorization: `Bearer ${searchParams.get("access_token")}`,
          },
        }
      );
      if (res.status === 401) {
        router.push(
          "https://ec2-18-134-96-73.eu-west-2.compute.amazonaws.com/v1/login?state=" +
            location.href
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return <></>;
};

export default AuthComponent;
