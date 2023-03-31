import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const CreateJobMenuPage = () => {
    return <>
    <PageTitle title="Create Job (Menu)" />
    <Link to="new">Create New Job</Link>

    {/* THIS LINK WILL BE IN A SPECIFIC JOB (COMPONENT)*/}
    <Link to=":jobId">Resume</Link>
</>
}

export default CreateJobMenuPage; // menu showing jobs in progress of creation.