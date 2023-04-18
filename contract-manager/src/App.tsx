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
// import contact from "./models/job/contact";
// import task from "./models/job/task";
// import notes from "./models/job/notes";

const DUMMY_JOB: job = {
  checklist: [
    {
      completed: false,
      description: "Do this task!",
      note: "This task note says that something came up...",
      cost: "200.00",
    },
    {
      completed: true,
      description: "Do other task that is listed here!",
      note: "This task note says something else...",
      cost: "300.00",
    },
  ],
  contacts: [
    { firstName: "Joe", lastName: "Smith", phone: "+1234567890" },
    { firstName: "Jane", lastName: "Smith", phone: "+9999999999" },
  ],
  notes: { description: "Description of job details in depth." },
  title: "Job Component/Page Test 1",
  shortDescription: "Quick description only on the list on home page.",
  address: "0000 Testing Place, Nowhere, NW",
  completionStatus: "in-progress",
  createdDate: new Date(),
  finishDate: new Date(),
  inspectionSuccessful: false,
  priority: "HIGH",
  timeLeft: "5 days",
  expectedPay: "329.00",
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainNavigation />,
      children: [
        { index: true, element: <Home /> },
        { path: "/:jobId", element: <JobPage job={DUMMY_JOB} /> },
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
    <div className={styles.App}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
