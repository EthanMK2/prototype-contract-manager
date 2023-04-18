import PageTitle from "../components/PageTitle";
import { useParams } from "react-router-dom";
import Job from "../components/Job";

import styles from "../sass/pages/Job.module.scss";
import job from "../models/job/job";

type jobPageProp = {
  job: job;
};
// NOTE: THE JOB PAGE WILL LOAD DATA, NOT TAKE A PROP
// load specific job from id in params, through a loader
const JobPage = ({ job }: jobPageProp) => {
  //const params = useParams();
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Manage Jobs" />
        <Job
          checklist={job.checklist}
          contacts={job.contacts}
          notes={job.notes}
          title={job.title}
          shortDescription={job.shortDescription}
          address={job.address}
          completionStatus={job.completionStatus}
          createdDate={job.createdDate}
          finishDate={job.finishDate}
          inspectionSuccessful={job.inspectionSuccessful}
          priority={job.priority}
          timeLeft={job.timeLeft}
          expectedPay={job.expectedPay}
        />
      </main>
    </>
  );
};

export default JobPage;
