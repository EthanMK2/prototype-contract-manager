import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/NewInspection.module.scss";

const NewInspectionPage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Inspection (create new)" />
      </main>
    </>
  );
};

export default NewInspectionPage; // new inspection TEMPLATE, specifically.
