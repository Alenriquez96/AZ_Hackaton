"use client";

import { analytics, app } from "../../../firebase";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";

const FirebaseComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (app.length) {
        logEvent(analytics, "User entered.");
      }
    }
  }, []);
  return <></>;
};

export default FirebaseComponent;
