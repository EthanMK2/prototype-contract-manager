import { useState } from "react";
import job from "../models/job/job";
import Contact from "./Contact";
import ContactModal from "./modals/ContactModal";

import ReactDOM from "react-dom";
import Task from "./Task";
import Note from "./Note";
// !!!!!!!!!!!! NOTE: THE JOB COMPONENT WILL LOAD DATA, NOT TAKE A PROP !!!!!!!!!
// load specific job from id in PROPS, through a loader IN JOB COMPONENT
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
    { firstName: "Joe", lastName: "Smith", phone: "+1234567890", id: "3232" },
    { firstName: "Jane", lastName: "Smith", phone: "+9999999999", id: "d32" },
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

const Job = () => {
  const [job, setJob] = useState<job>(DUMMY_JOB);
  const {
    checklist,
    contacts,
    notes,
    title,
    shortDescription,
    address,
    completionStatus,
    createdDate,
    finishDate,
    inspectionSuccessful,
    priority,
    timeLeft,
    expectedPay,
  } = job;

  const [contactsOpen, setContactsOpen] = useState(false);

  const onOpenContacts = () => {
    setContactsOpen(true);
  };

  const onCloseContacts = () => {
    setContactsOpen(false);
  };

  const onSubmitContact = (
    firstName: string | undefined,
    lastName: string | undefined,
    phone: string | undefined
  ) => {
    setJob((prevJob) => {
      return {
        ...prevJob,
        contacts: [
          ...prevJob.contacts,
          {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            id: "id" + Math.random().toString(16).slice(2),
          },
        ],
      };
    });
  };

  const onDeleteContact = (id: string) => {
    setJob((prevJob) => {
      return {
        ...prevJob,
        contacts: prevJob.contacts.filter((contact) => {
          return contact.id != id;
        }),
      };
    });
  };

  return (
    <article>
      <h1>{title}</h1>
      <button>BACK TO MENU</button>
      <button>Cancel Job</button>
      <ul>
        {checklist.map((task) => {
          return <Task task={task} />;
        })}
        <Task
          task={{
            completed: inspectionSuccessful,
            description: "Inspection and Payment Collected?",
            note: "",
            cost: "",
          }}
        />
      </ul>
      <div>
        {contacts.at(0) ? (
          <Contact
            firstName={contacts?.at(0)?.firstName}
            lastName={contacts?.at(0)?.lastName}
            phone={contacts.at(0)?.phone}
            id={contacts.at(0)!.id}
            showDelete={false}
            onDeleteContact={() => {}}
          />
        ) : null}
        <button onClick={onOpenContacts}>View Contacts</button>
        {contactsOpen &&
          ReactDOM.createPortal(
            <ContactModal
              contactArray={contacts}
              onCloseContacts={onCloseContacts}
              onSubmitContact={onSubmitContact}
              onDeleteContact={onDeleteContact}
            />,
            document.getElementById("overlay-root")!
          )}
      </div>
      <section>
        <h1>Notes</h1>
        <Note description={notes.description} />
      </section>
      <p>
        Expected Total Charge: ${expectedPay} <button>Edit</button>
      </p>
      <button>Complete Job</button>
      <section>
        <h1>Weather Forecast</h1>
      </section>
      <section>
        <h1>Location</h1>
      </section>
    </article>
  );
};

export default Job;
