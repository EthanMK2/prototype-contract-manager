import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";

import styles from "../sass/pages/Job.module.scss";

const Job = () => {
  const params = useParams();
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Manage Jobs" />
        <h2>{params.jobId}</h2>
      </main>
    </>
  );
};

export default Job;
