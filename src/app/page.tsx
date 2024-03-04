import { redirect } from "next/navigation";

//This page is just to redirect user in case no locale is provided
export default function RootPage() {
  redirect("/en");
}
