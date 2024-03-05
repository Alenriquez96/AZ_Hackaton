"use client";

import { useState, useEffect, useCallback } from "react";

export const useScroll = () => {
  const [y, setY] = useState<number>(0);
  const [isScrollingUp, setIsScrollingUp] = useState<boolean>(false);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setIsScrollingUp(true);
      } else if (y < window.scrollY) {
        setIsScrollingUp(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return { y, isScrollingUp };
};
