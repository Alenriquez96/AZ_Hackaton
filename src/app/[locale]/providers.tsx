"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserProvider } from "@/app/context/UserContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <UserProvider>{children}</UserProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
