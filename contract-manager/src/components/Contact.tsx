import contact from "../models/job/contact";

const Contact = ({firstName, lastName, phone}: contact) => {
  return <>
    <article>
        <h1>{firstName} {lastName}</h1>
        <a href={phone}>Phone: {phone}</a>
    </article>
  </>;
};

export default Contact;
