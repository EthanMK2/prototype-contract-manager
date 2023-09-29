import styles from "./App.module.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import Home from "./pages/Home";
import JobPage from "./pages/JobPage";
import CreateJobMenuPage from "./pages/CreateJobMenu";
import CreateJobResumePage from "./pages/CreateJobResume";
import CreateJobNewPage from "./pages/CreateJobNew";
import EstimateMenuPage from "./pages/EstimateMenu";
import EstimatePage from "./pages/Estimate";
import CalculatorPage from "./pages/Calculator";
import SourcingPage from "./pages/Sourcing";
import InspectionMenuPage from "./pages/InspectionMenu";
import NewInspectionPage from "./pages/NewInspection";
import InspectionPage from "./pages/Inspection";
import JobHistory from "./pages/history/JobHistory";
import HistoryNavigation from "./pages/history/HistoryNavigation";
import EstimateHistory from "./pages/history/EstimateHistory";
import InspectionHistory from "./pages/history/InspectionHistory";
import job from "./models/job/job";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
// import contact from "./models/job/contact";
// import task from "./models/job/task";
// import notes from "./models/job/notes";

import { loader as calculatorLoader } from "./pages/Calculator";
import { Firestore } from "firebase/firestore";

// Make db a context to share between components?
function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        { index: true, element: <Home /> },
        { path: "/:jobId", element: <JobPage /> },
        { path: "/createJob", element: <CreateJobMenuPage /> },
        { path: "/createJob/:jobId", element: <CreateJobResumePage /> },
        { path: "/createJob/new", element: <CreateJobNewPage /> },
        { path: "/estimate", element: <EstimateMenuPage /> },
        { path: "/estimate/:estimateId", element: <EstimatePage /> },
        {
          path: "/calculate",
          element: <CalculatorPage />,
          loader: calculatorLoader,
        },
        { path: "/sourcing", element: <SourcingPage /> },
        { path: "/inspection", element: <InspectionMenuPage /> },
        { path: "/inspection/new", element: <NewInspectionPage /> },
        { path: "/inspection/:inspectionId", element: <InspectionPage /> },
        {
          path: "/history",
          element: <HistoryNavigation />,
          children: [
            { path: "/history/contracts", element: <JobHistory /> },
            { path: "/history/estimates", element: <EstimateHistory /> },
            { path: "/history/inspections", element: <InspectionHistory /> },
          ],
        },

        // { path: "/history/contracts/:jobId", element: <OldJob /> },
        // { path: "/history/estimates/estimateId", element: <OldEstimate /> },
        // { path: "/history/inspections/:inspectionId", element: <OldInspection /> },
      ],
    },
  ]);

  return (
    <div className={styles.App} id="app-grid">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
