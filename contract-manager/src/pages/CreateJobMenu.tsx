import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/CreateJobMenu.module.scss";

/* 'Create New Job' link MUST bring up modal to enter in new job title, to create 
the job document in Firebase, return the id, then send the id to the create new 
job page */
const CreateJobMenuPage = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Create Job (Menu)" />
        <Link to="new">Create New Job</Link>

        {/* THIS LINK WILL BE IN A SPECIFIC JOB (COMPONENT)*/}
        <Link to=":jobId">Resume</Link>
      </main>
    </>
  );
};

export default CreateJobMenuPage; // menu showing jobs in progress of creation.
