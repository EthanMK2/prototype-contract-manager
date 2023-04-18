import { useState } from "react";
import job from "../models/job/job";
import Contact from "./Contact";
import ContactModal from "./modals/ContactModal";

import ReactDOM from "react-dom";
import Task from "./Task";

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
      {checklist.map((task) => {
        return <Task task={task} />;
      })}
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
    </article>
  );
};

export default Job;
