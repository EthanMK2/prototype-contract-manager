import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/Calculator.module.scss";

const CalculatorPage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Calculator Page" />
      </main>
    </>
  );
};

export default CalculatorPage; // calculator page
