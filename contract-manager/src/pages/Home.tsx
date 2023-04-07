import { Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

import styles from "../sass/pages/Home.module.scss"

// REPLACE INLINE STYLES
const Home = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Manage Jobs" />

        <Link to="/jobIdHERE">View</Link>
      </main>
    </>
  );
};

export default Home;
