import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const Home = () => {
    return <>
        <PageTitle title="Manage Jobs" />

        <Link to="/jobIdHERE">View</Link>
    </>
}

export default Home;