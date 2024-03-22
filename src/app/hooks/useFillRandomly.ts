import { useEffect } from "react";

export const useFillRandomly = (arr: any[], set: any, updater?: any) => {
  useEffect(() => {
    const shuffledSample = [...arr];

    for (let i = shuffledSample.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledSample[i], shuffledSample[j]] = [
        shuffledSample[j],
        shuffledSample[i],
      ];
    }

    const randomCount = Math.floor(Math.random() * shuffledSample.length) + 1;

    const uniqueElements = shuffledSample.slice(0, randomCount);

    set(uniqueElements);
  }, [arr, set, updater]);
};
