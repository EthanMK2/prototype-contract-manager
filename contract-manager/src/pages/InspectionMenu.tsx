import { Link } from "react-router-dom";

import PageTitle from "../components/PageTitle";

const InspectionMenuPage = () => {
    return <>
    <PageTitle title="Inspection (menu)" />

    <Link to="/inspection/new">New Inspection</Link>
    <Link to="/inspection/:inspectionId">Resume</Link>
</>
}

export default InspectionMenuPage; // create template, resume active inspection, or start inspection from template
