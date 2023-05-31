import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import numbers from "../models/numbers";

import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";
import { db} from "../main";

import styles from "../sass/pages/Calculator.module.scss";
import SavedNumbersModal from "../components/modals/SavedNumbersModal";

const CalculatorPage = () => {
  const [listOpen, setListOpen] = useState(false);
  const [savedNumbers, setSavedNumbers] = useState<numbers>([]);

  const data: any = useLoaderData();

  useEffect(() => {
    console.log("FETCHED DATA");
    setSavedNumbers(data);
  }, []);

  // display the first two numbers, or just the one that exists, or nothing if none
  const listPreview = savedNumbers?.at(0) ? (
    <ul>
      <li>
        <p>{savedNumbers?.at(0)?.name}</p>
        <p>{savedNumbers?.at(0)?.value}</p>
      </li>
      {savedNumbers.at(1) ? (
        <li>
          <p>{savedNumbers?.at(1)?.name}</p>
          <p>{savedNumbers?.at(1)?.value}</p>
        </li>
      ) : null}
      <button
        onClick={() => {
          setListOpen(true);
        }}
      >
        View Saved Numbers
      </button>
    </ul>
  ) : null;

  const onCloseSavedNumbersModal = () => {
    setListOpen(false);
  };

  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Calculator Page" />

        {listPreview}
        {listOpen ? (
          <SavedNumbersModal
            onCloseSavedNumbers={onCloseSavedNumbersModal}
            savedNumArray={savedNumbers}
          />
        ) : null}
      </main>
    </>
  );
};

export default CalculatorPage; // calculator page

export const loader = async () => {
  let userId: any = localStorage.getItem("uid");

  const q = query(collection(db, `users/${userId}/savedNumbers`));

  let savedNumbers: numbers = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => {
    savedNumbers.push(doc.data());
    console.log(doc.data());
  });

  console.log(savedNumbers);
  return savedNumbers;
};
