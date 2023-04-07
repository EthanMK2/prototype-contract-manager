import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/InspectionMenu.module.scss";

const InspectionMenuPage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Inspection (menu)" />

        <Link to="/inspection/new">New Inspection</Link>
        <Link to="/inspection/:inspectionId">Resume</Link>
      </main>
    </>
  );
};

export default InspectionMenuPage; // create template, resume active inspection, or start inspection from template
