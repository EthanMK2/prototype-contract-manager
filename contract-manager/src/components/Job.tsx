import { useState } from "react";
import job from "../models/job/job";
import Contact from "./Contact";
import ContactModal from "./modals/ContactModal";

import ReactDOM from "react-dom";
import Task from "./Task";
import Note from "./Note";

const Job = ({
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
}: job) => {
  const [contactsOpen, setContactsOpen] = useState(false);

  const onOpenContacts = () => {
    setContactsOpen(true);
  };

  const onCloseContacts = () => {
    setContactsOpen(false);
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
        <Contact
          firstName={contacts?.at(0)?.firstName}
          lastName={contacts?.at(0)?.lastName}
          phone={contacts.at(0)?.phone}
        />
        <button onClick={onOpenContacts}>View Contacts</button>
        {contactsOpen &&
          ReactDOM.createPortal(
            <ContactModal
              contactArray={contacts}
              onCloseContacts={onCloseContacts}
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
