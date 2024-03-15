import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Header from "@/app/containers/Header";
import Chatbot from "@/app/components/Chatbot";
import { Providers } from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "@/navigation";
import BackToTop from "@/app/components/BackToTop";
import { unstable_setRequestLocale } from "next-intl/server";
import MobileNavbar from "@/app/containers/MobileNavbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "../containers/Footer";
import AuthComponent from "../containers/AuthComponent";

const dm_sans = DM_Sans({
  subsets: ["latin"],

  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "MediGuide",
  description: "Generated by create next app",
  generator: "Next.js",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
};

//function to get the translations
async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

//function to generate the routes for all the locales
export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages(locale);

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={dm_sans.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header locale={locale} />
            {children}
            <Chatbot />
            <BackToTop />
            <Footer locale={locale} />
            <MobileNavbar locale={locale} />
            <Toaster />
            <AuthComponent />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
