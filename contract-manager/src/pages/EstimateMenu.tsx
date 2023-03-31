import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const EstimateMenuPage = () => {
    return <>
    <PageTitle title="Estimate (menu)" />

    {/* WRAP IN ESTIMATE COMPONENT */}
    <Link to=":estimateId">Resume</Link>
</>
}

export default EstimateMenuPage; // menu page for create or continue