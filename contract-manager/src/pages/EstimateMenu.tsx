import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/EstimateMenu.module.scss";

const EstimateMenuPage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Estimate (menu)" />

        {/* WRAP IN ESTIMATE COMPONENT */}
        <Link to=":estimateId">Resume</Link>
      </main>
    </>
  );
};

export default EstimateMenuPage; // menu page for create or continue
