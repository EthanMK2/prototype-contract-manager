import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/CreateJobResume.module.scss";

const CreateJobResumePage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Create Job (RESUME)" />
      </main>
    </>
  );
};

export default CreateJobResumePage; // shows the create job process page
