import { useState } from "react";
import PageTitle from "../components/PageTitle";
import numbers from "../models/numbers";

import styles from "../sass/pages/Calculator.module.scss";
import { Value } from "sass";

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
  const [savedNumbers, setSavedNumbers] = useState<numbers>(DUMMY_LIST);

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
      <button onClick={() => {setListOpen(true)}}>View Saved Numbers</button>
    </ul>
  ) : null;

  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Calculator Page" />

        {listPreview}
        {listOpen ? (
          <div>
            <ul>
              {savedNumbers.map((num) => {
                return (
                  <li>
                    <p>{num.name}</p>
                    <p>{num.value}</p>
                  </li>
                );
              })}
            </ul>
            <button onClick={() => {setListOpen(false)}}>Close</button>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default CalculatorPage; // calculator page
