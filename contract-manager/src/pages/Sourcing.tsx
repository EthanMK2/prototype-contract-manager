import { useState } from "react";
import PageTitle from "../components/PageTitle";
import Source from "../components/Source";

import styles from "../sass/pages/Sourcing.module.scss";
import SourceNewModal from "../components/modals/SourceNewModal";

const DUMMY_SOURCES: source[] = [
  {
    title: "Source 1",
    description: "various items for the job",
    phoneNumbers: ["3033030000", "4444444444"],
    emails: ["someemail@gmail.com", "anotheremail@yahoo.com"],
    id: "id" + Math.random().toString(16).slice(2),
  },
  {
    title: "Source 2",
    description: "various items for the job lorem ipsum dolor",
    phoneNumbers: ["3033030000", "4444444444"],
    emails: [
      "someemail@gmail.com",
      "anotheremail@yahoo.com",
      "athirdemail@msn.com",
    ],
    id: "id" + Math.random().toString(16).slice(2),
  },
];

const SourcingPage = () => {
  // loader should return the list of sources to display
  const [sources, setSources] = useState<source[]>(DUMMY_SOURCES);
  const [openSourceNew, setOpenSourceNew] = useState<boolean>(false);

  return (
    <>
      <main className={styles["main-content"]}>
        <PageTitle title="Sourcing (menu)" />
        <button
          onClick={() => {
            setOpenSourceNew(true);
          }}
        >
          + Create New
        </button>
        {openSourceNew && (
          <SourceNewModal
            onClose={() => {
              setOpenSourceNew(false);
            }}
            onSubmitSource={(newSource: source) => {
              setSources((prevSources) => {
                return [...prevSources, newSource]
              })
            }}
          />
        )}
        {sources.map((source) => {
          return <Source source={source} key={source.id} />;
        })}
      </main>
    </>
  );
};
export default SourcingPage; // source page (sources will simply bring up a modal instead of a new page)
