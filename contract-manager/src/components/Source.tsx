type sourceProps = {
  source: source;
  onDelete: (id: string) => void;
};

const Source = ({ source, onDelete }: sourceProps) => {
  return (
    <article>
      <h1>{source.title}</h1>
      {source.description != "" && <p>{source.description}</p>}
      {source.phoneNumbers.length > 0 && (
        <ul>
          Phone:
          {source.phoneNumbers.map((number) => {
            return (
              <li>
                <a href={"tel+" + number}>{number}</a>
              </li>
            );
          })}
        </ul>
      )}
      {source.emails.length > 0 && (
        <ul>
          Email:
          {source.emails.map((email) => {
            return (
              <li>
                <a href={"mailto:" + email}>{email}</a>
              </li>
            );
          })}
        </ul>
      )}
      <button onClick={() => {
        onDelete(source.id)
      }}>Delete</button>
    </article>
  );
};

export default Source;
