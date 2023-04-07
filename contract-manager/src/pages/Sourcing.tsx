import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/Sourcing.module.scss";

const SourcingPage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Sourcing (menu)" />
      </main>
    </>
  );
};
export default SourcingPage; // source page (sources will simply bring up a modal instead of a new page)
