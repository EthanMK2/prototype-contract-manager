import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/Estimate.module.scss";

const EstimatePage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Estimate (specific, resumed or finished)" />
      </main>
    </>
  );
};

export default EstimatePage; // specific estimate being created
