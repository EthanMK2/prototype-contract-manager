import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import numbers from "../models/numbers";

import {
  collection,
  query,
  getDocs,
  doc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../main";

import styles from "../sass/pages/Calculator.module.scss";
import SavedNumbersModal from "../components/modals/SavedNumbersModal";

const CalculatorPage = () => {
  const [listOpen, setListOpen] = useState(false);
  const [savedNumbers, setSavedNumbers] = useState<numbers>([]);

  const userId: any = localStorage.getItem("uid");

  const data: any = useLoaderData();

  useEffect(() => {
    setSavedNumbers(data);
  }, []);

  const numNameRef: any = useRef<any>();
  const numValueRef: any = useRef<any>();

  const saveCustomNumber = async (e: any) => {
    e.preventDefault();

    if (!numNameRef.current.value || !numValueRef.current.value) {
      // display error
      console.log("ERROR: No values");
      return;
    }

    console.log(
      "saving number: ",
      numNameRef.current.value,
      numValueRef.current.value
    );

    await addDoc(collection(db, "users", `${userId}/savedNumbers`), {
      name: numNameRef.current.value,
      value: numValueRef.current.value,
    }).then(
      (returnedDoc) => {
        // resolved, add item locally with new id from response
        setSavedNumbers((curList: numbers) => {
          return curList.concat({
            name: numNameRef.current.value,
            value: numValueRef.current.value,
            id: returnedDoc.id,
          });
        });
      },
      () => {
        // rejected, simply notify and return
        return;
      }
    );
  };

  const deleteCustomNumber = (id: string) => {
    deleteDoc(doc(db, "users", `${userId}/savedNumbers/${id}`)).then(
      () => {
        // resolved, remove item locally
        setSavedNumbers((curList: numbers) => {
          return curList.filter((num) => num.id != id);
        });
      },
      () => {
        // rejected, simply notify and return
        return;
      }
    );
  };

  // display the first two numbers, or just the one that exists, or nothing
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

  // ============ CALCULATOR PAGE JSX ==============
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Calculator Page" />

        {listPreview}
        <form id="save-number-form" onSubmit={saveCustomNumber}>
          <input type="text" placeholder="Name" ref={numNameRef}></input>
          <input
            type="number"
            placeholder="Number"
            ref={numValueRef}
            step={0.01}
          ></input>
          <button>Save Number</button>
        </form>
        {listOpen ? (
          <SavedNumbersModal
            onCloseSavedNumbers={onCloseSavedNumbersModal}
            savedNumArray={savedNumbers}
            onDeleteSavedNumber={deleteCustomNumber}
          />
        ) : null}
      </main>
    </>
  );
};

export default CalculatorPage; // calculator page

export const loader = async () => {
  const userId: any = localStorage.getItem("uid");

  const q = query(collection(db, `users/${userId}/savedNumbers`));

  let savedNumbers: numbers = [];

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc: any) => {
    savedNumbers.push({
      name: doc.data().name,
      value: doc.data().value,
      id: doc.id,
    });
  });
  return savedNumbers;
};
