import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { user } from "../../interfaces";
import { useSearchParams, useRouter } from "next/navigation";

const UserContext = createContext<any>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<user | {}>({});
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.keys(storedUser).length > 0) {
      setUser(storedUser);
    }

    if (typeof window !== "undefined") {
      const localStorageToken = localStorage.getItem("access_token");

      if (searchParams.get("access_token") && !localStorageToken) {
        localStorage.setItem(
          "access_token",
          searchParams.get("access_token") || ""
        );
      } else if (localStorageToken) {
        return;
      } else {
        fetchToken();
      }
    }
  }, []);

  const fetchToken = async () => {
    try {
      const res = await fetch(
        "https://mediguide-api-latest.onrender.com/v1/me",
        {
          cache: "no-cache",
          headers: {
            authorization: `Bearer ${searchParams.get("access_token")}`,
          },
        }
      );
      if (res.status === 401) {
        router.push(
          "https://mediguide-api-latest.onrender.com/v1/login?state=" +
            location.href
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(UserContext);
};
