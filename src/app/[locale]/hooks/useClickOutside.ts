import { useEffect } from "react";

const useOutsideClick = (ref: any, callback: () => void) => {
  const handleClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

// Usage
//useOutsideClick(outerElement, () => setIsOpen(false));

export default useOutsideClick;
