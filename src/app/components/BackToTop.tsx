"use client";
import { Button } from "@nextui-org/react";
import { IconArrowNarrowUp } from "@tabler/icons-react";
import { useScroll } from "../hooks";

function BackToTop() {
  const { y } = useScroll();

  const handleScrollTo: () => void = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Button
      radius="md"
      variant="faded"
      onClick={handleScrollTo}
      className={`
      ${y > 900 ? "visible" : "invisible"}
      flex flex-col items-center z-50 fixed bottom-60 right-6  animate-bounce-short transition-all hover:-translate-y-0.5 h-[45px] w-[45px]`}
    >
      <IconArrowNarrowUp height={24} width={24} />
    </Button>
  );
}

export default BackToTop;
