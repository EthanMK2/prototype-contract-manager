import { useState } from "react";

type contactNew = {
  onSubmitContact: (
    firstName: string | undefined,
    lastName: string | undefined,
    phone: string | undefined
  ) => void;
};

const ContactNew = ({ onSubmitContact }: contactNew) => {
  const [first, setFirst] = useState<string>("");
  const [last, setLast] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitContact(first, last, phone);
          setFirst("");
          setLast("");
          setPhone("");
        }}
      >
        <label htmlFor="firstname" />
        <input
          type="text"
          id="firstname"
          placeholder="First Name"
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
        />
        <label htmlFor="lastname" />
        <input
          type="text"
          id="lastname"
          placeholder="Last Name"
          value={last}
          onChange={(e) => {
            setLast(e.target.value);
          }}
        />
        <label htmlFor="phone" />
        <input
          type="tel"
          id="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          required
        />
        <button type="submit">Save New Contact</button>
      </form>
    </>
  );
};

export default ContactNew;
