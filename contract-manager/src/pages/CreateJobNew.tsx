import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/CreateJobNew.module.scss";

const CreateJobNewPage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Create Job (NEW)" />
      </main>
    </>
  );
};

export default CreateJobNewPage;
