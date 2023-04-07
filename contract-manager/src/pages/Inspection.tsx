import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/Inspection.module.scss";

const InspectionPage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Inspection (specific)" />
      </main>
    </>
  );
};

export default InspectionPage; // active inspection, whether from resume or new start
