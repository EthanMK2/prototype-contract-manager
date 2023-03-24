import styles from "./App.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Home from "./pages/Home";
import Job from "./pages/Job";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        { index: true, element: <Home /> },
        { path: "/:jobId", element: <Job /> },
        // { path: "/createJob", element: <CreateJobMenu /> },
        // { path: "/createJob/:jobId", element: <CreateJob /> },
        // { path: "/estimate", element: <EstimateMenu /> },
        // { path: "/estimate/:estimateId", element: <Estimate /> },
        // { path: "/calculate", element: <Calculator /> },
        // { path: "/sourcing", element: <Sourcing /> },
        // { path: "/inspectionMenu", element: <InspectionMenu /> },
        // { path: "/inspectionMenu/new", element: <NewInspection /> },
        // { path: "/inspectionMenu/:inspectionId", element: <Inspection /> },
        // { path: "/history/contracts", element: <JobHistory /> },
        // { path: "/history/contracts/:jobId", element: <OldJob /> },
        // { path: "/history/estimates", element: <EstimateHistory /> },
        // { path: "/history/estimates/estimateId", element: <OldEstimate /> },
        // { path: "/history/inspections", element: <InspectionHistory /> },
        // { path: "/history/inspections/:inspectionId", element: <OldInspection /> },
      ],
    },
  ]);

  return (
    <div className={styles.App}>
      <h1>Vite + React</h1>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
