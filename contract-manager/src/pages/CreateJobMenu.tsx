import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/CreateJobMenu.module.scss"

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
