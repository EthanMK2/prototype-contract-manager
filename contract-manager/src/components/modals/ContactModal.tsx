import contact from "../../models/job/contact";
import Contact from "../Contact";
import ContactNew from "../ContactNew";

type contactModal = {
  contactArray: Array<contact>;
  onCloseContacts: () => void;
  onSubmitContact: (
    firstName: string | undefined,
    lastName: string | undefined,
    phone: string | undefined
  ) => void;
  onDeleteContact: (id: string) => void;
};

const ContactModal = ({
  contactArray,
  onCloseContacts,
  onSubmitContact,
  onDeleteContact,
}: contactModal) => {
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
              id={contact.id}
              onDeleteContact={onDeleteContact}
              showDelete={true}
            />
          </ul>
        );
      })}
      <ContactNew onSubmitContact={onSubmitContact} />
      <button onClick={onCloseContacts}>Close</button>
    </div>
  );
};

export default ContactModal;
