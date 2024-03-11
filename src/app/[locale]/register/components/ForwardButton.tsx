import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const ForwardButton = ({ href }: { href: string }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <Button type="submit" radius="full" color="primary" className="my-4">
      Next
    </Button>
  );
};

export default ForwardButton;
