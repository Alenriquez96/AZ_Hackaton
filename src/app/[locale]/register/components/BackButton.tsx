import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      radius="full"
      variant="flat"
      className="my-4"
    >
      Back
    </Button>
  );
};

export default BackButton;
