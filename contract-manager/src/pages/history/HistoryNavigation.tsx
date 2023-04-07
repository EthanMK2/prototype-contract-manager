import { Link, Outlet } from "react-router-dom";

import styles from "../../sass/pages/history/HistoryNavigation.module.scss";

const HistoryNavigation = () => {
  return (
    <>
      <main className={styles["main-content"]}>
        <h1>History</h1>
        <nav>
          <ul>
            <li>
              <Link to="/history/contracts">Contracts</Link>
            </li>
            <li>
              <Link to="/history/estimates">Estimates</Link>
            </li>
            <li>
              <Link to="/history/inspections">Inspections</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </main>
    </>
  );
};

export default HistoryNavigation;
