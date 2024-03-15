"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UserProvider } from "@/app/context/UserContext";
import { Suspense } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="light">
        <Suspense>
          <UserProvider>{children}</UserProvider>
        </Suspense>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
