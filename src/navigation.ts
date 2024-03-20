import { createSharedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["en", "es", "pt", "fr", "ro"];

export const localePrefix = "always"; // Default

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
