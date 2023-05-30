import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import numbers from "../models/numbers";

import {
  Firestore,
  collection,
  doc,
  query,
  setDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../main";

import styles from "../sass/pages/Calculator.module.scss";
import { Value } from "sass";
import SavedNumbersModal from "../components/modals/SavedNumbersModal";

let DUMMY_LIST: numbers = [
  {
    name: "My number1",
    value: 200,
  },
  {
    name: "numbertwo",
    value: 900,
  },
  {
    name: "thirdnum",
    value: 600,
  },
  {
    name: "fourth num",
    value: 7330,
  },
  {
    name: "fifth",
    value: "$1.23",
  },
];

const CalculatorPage = () => {
  const [listOpen, setListOpen] = useState(false);
  const [savedNumbers, setSavedNumbers] = useState<numbers>([]);

  const data: any = useLoaderData();

  useEffect(() => {
    console.log("FETCHED DATA")
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
  const q = query(collection(db, "users/testUser/savedNumbers"));

  let savedNumbers: numbers = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => {
    savedNumbers.push(doc.data());
    console.log(doc.data());
  });

  console.log(savedNumbers);
  return savedNumbers;
};
