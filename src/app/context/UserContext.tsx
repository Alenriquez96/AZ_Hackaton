import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

interface user {
  firstName: string;
  age: number;
  gender: string;
  existingHealthCondition: string[];
  existingMedications: string[];
}

const UserContext = createContext<any>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<user | {}>({});

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (Object.keys(storedUser).length > 0) {
      setUser(storedUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  return useContext(UserContext);
};
