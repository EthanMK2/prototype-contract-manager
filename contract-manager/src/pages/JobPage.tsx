import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";
import Job from "../components/Job";

import styles from "../sass/pages/Job.module.scss";
import job from "../models/job/job";

// !!!!!!!!!!!! NOTE: THE JOB COMPONENT WILL LOAD DATA, NOT TAKE A PROP !!!!!!!!!
// load specific job from id in params, through a loader IN JOB COMPONENT
const JobPage = () => {
  //const params = useParams();
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Manage Jobs" />
        <Job />
      </main>
    </>
  );
};

export default JobPage;
