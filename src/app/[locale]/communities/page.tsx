// import { useTranslations } from "next-intl";
import UnderConstruction from "@/app/containers/UnderConstruction";
import { Suspense } from "react";

const Communities = () => {
  // const t = useTranslations("communities");

  return (
    <main className="min-h-screen">
      <Suspense fallback={<p>Loading...</p>}>
        <UnderConstruction />
      </Suspense>
    </main>
  );
};

export default Communities;
