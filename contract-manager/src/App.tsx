import styles from "./App.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Home from "./pages/Home";
import Job from "./pages/Job";
import CreateJobMenuPage from "./pages/CreateJobMenu";
import CreateJobResumePage from "./pages/CreateJobResume";
import CreateJobNewPage from "./pages/CreateJobNewPage";
import EstimateMenuPage from "./pages/EstimateMenu";
import EstimatePage from "./pages/Estimate";
import CalculatorPage from "./pages/Calculator";
import SourcingPage from "./pages/Sourcing";
import InspectionMenuPage from "./pages/InspectionMenu";
import NewInspectionPage from "./pages/NewInspection";
import InspectionPage from "./pages/Inspection";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        { index: true, element: <Home /> },
        { path: "/:jobId", element: <Job /> },
        { path: "/createJob", element: <CreateJobMenuPage /> },
        { path: "/createJob/:jobId", element: <CreateJobResumePage /> },
        { path: "/createJob/new", element: <CreateJobNewPage /> },
        { path: "/estimate", element: <EstimateMenuPage /> },
        { path: "/estimate/:estimateId", element: <EstimatePage /> },
        { path: "/calculate", element: <CalculatorPage /> },
        { path: "/sourcing", element: <SourcingPage /> },
        { path: "/inspection", element: <InspectionMenuPage /> },
        { path: "/inspection/new", element: <NewInspectionPage /> },
        { path: "/inspection/:inspectionId", element: <InspectionPage /> },
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
