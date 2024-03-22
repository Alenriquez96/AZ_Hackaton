"use client";

import { analytics, app } from "../../../firebase";
import { logEvent } from "firebase/analytics";
import { useEffect } from "react";

useEffect(() => {
  if (typeof window !== "undefined") {
    if (app.length) {
      logEvent(analytics, "User entered...");
    }
  }
}, []);

const FirebaseComponent = () => {
  return <></>;
};

export default FirebaseComponent;
