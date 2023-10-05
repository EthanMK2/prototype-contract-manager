import contact from "../models/job/contact";

type contactProps = {
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
  id: string;
  onDeleteContact: (id: string) => void;
  showDelete: boolean;
};

const Contact = ({
  firstName,
  lastName,
  phone,
  id,
  onDeleteContact,
  showDelete,
}: contactProps) => {
  return (
    <article>
      <h1>
        {firstName} {lastName}
      </h1>
      <a href={phone}>Phone: {phone}</a>
      {showDelete && (
        <button
          onClick={() => {
            onDeleteContact(id);
          }}
        >
          Delete
        </button>
      )}
    </article>
  );
};

export default Contact;
