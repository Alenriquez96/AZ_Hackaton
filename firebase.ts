"use client";

import { initializeApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { firebaseConfig } from "@/config/firebase";

//Initialize app
// Initialize Firebase
let app: any =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Analytics and get a reference to the service
let analytics: any;
isSupported()
  .then((_) => {
    typeof window !== "undefined"
      ? (analytics = getAnalytics(app))
      : new Error("window undefined");
  })
  .catch((e) =>
    console.warn("Analytics is not supported in this environment.", e.message)
  );

export { app, analytics };
