import { CardFooter } from "@nextui-org/react";
import BackButton from "../components/BackButton";
import ForwardButton from "../components/ForwardButton";

const CardFooterComponent = () => {
  return (
    <CardFooter className="flex justify-between">
      <BackButton />
      <ForwardButton href="" />
    </CardFooter>
  );
};

export default CardFooterComponent;
