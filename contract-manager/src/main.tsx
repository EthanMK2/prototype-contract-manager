import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import firebaseInit from "./firebaseInit";

import { doc, setDoc, getFirestore, Firestore } from "firebase/firestore";
import { FirebaseApp } from "firebase/app";

export const app = firebaseInit();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);

export const db: Firestore = getFirestore(app);
