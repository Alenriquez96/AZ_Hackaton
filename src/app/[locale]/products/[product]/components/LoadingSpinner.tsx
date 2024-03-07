import { CircularProgress } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const LoadingSpinner = () => {
  const t = useTranslations("loading");
  return <CircularProgress label={t("loadingText")} />;
};

export default LoadingSpinner;
