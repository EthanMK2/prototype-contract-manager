import contact from "../../models/job/contact";
import Contact from "../Contact";

type contactModal = {
  contactArray: Array<contact>;
  onCloseContacts: () => void;
};

const ContactModal = ({ contactArray, onCloseContacts }: contactModal) => {
  return (
    <div>
      <h1>Contacts</h1>
      {contactArray.map((contact) => {
        return (
          <ul>
            <Contact
              firstName={contact.firstName}
              lastName={contact.lastName}
              phone={contact.phone}
            />
          </ul>
        );
      })}
      <button onClick={onCloseContacts}>Close</button>
    </div>
  );
};

export default ContactModal;
