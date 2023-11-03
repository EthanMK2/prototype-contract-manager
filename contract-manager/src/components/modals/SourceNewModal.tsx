import { useState } from "react";
import Source from "../Source";

type sourceNewModal = {
  onClose: () => void;
  onSubmitSource: (newSource: source) => void;
};

const SourceNewModal = ({ onClose, onSubmitSource }: sourceNewModal) => {
  const [currentSource, setCurrentSource] = useState<source>({
    title: "",
    description: "",
    phoneNumbers: [],
    emails: [],
    id: "id" + Math.random().toString(16).slice(2),
  });
  const [phoneInput, setPhoneInput] = useState<string>("");
  const [emailInput, setEmailInput] = useState<string>("");

  return (
    <div>
      <h2>Add Source</h2>
      <Source
        source={currentSource}
        onDelete={() => {
          setCurrentSource((prevSource) => {
            return {
              title: "",
              description: "",
              phoneNumbers: [],
              emails: [],
              id: prevSource.id,
            };
          });
          setPhoneInput("");
          setEmailInput("");
        }}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (phoneInput === "" && emailInput === "") {
            onSubmitSource(currentSource);
          } else if (phoneInput === "") {
            onSubmitSource({
              ...currentSource,
              emails: currentSource.emails.concat(emailInput),
            });
          } else if (emailInput === "") {
            onSubmitSource({
              ...currentSource,
              phoneNumbers: currentSource.phoneNumbers.concat(phoneInput),
            });
          } else {
            onSubmitSource({
              ...currentSource,
              phoneNumbers: currentSource.phoneNumbers.concat(phoneInput),
              emails: currentSource.emails.concat(emailInput),
            });
          }
          onClose();
        }}
      >
        <input
          onChange={(e) => {
            setCurrentSource((prevSource) => {
              return { ...prevSource, title: e.target.value };
            });
          }}
          type="text"
          placeholder="Title"
          value={currentSource.title}
          required
        />
        <input
          onChange={(e) => {
            setCurrentSource((prevSource) => {
              return { ...prevSource, description: e.target.value };
            });
          }}
          type="text"
          placeholder="Description"
          value={currentSource.description}
        />
        <section>
          <input
            type="text"
            placeholder="Phone"
            value={phoneInput}
            onChange={(e) => {
              setPhoneInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (phoneInput === "") {
                return;
              }
              setCurrentSource((prevSource) => {
                return {
                  ...prevSource,
                  phoneNumbers: [...prevSource.phoneNumbers, phoneInput],
                };
              });
              setPhoneInput("");
            }}
            type="button"
          >
            Add
          </button>
        </section>
        <section>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmailInput(e.target.value);
            }}
            value={emailInput}
          />
          <button
            onClick={() => {
              if (emailInput === "") {
                return;
              }
              setCurrentSource((prevSource) => {
                return {
                  ...prevSource,
                  emails: [...prevSource.emails, emailInput],
                };
              });
              setEmailInput("");
            }}
            type="button"
          >
            Add
          </button>
        </section>
        <button onClick={onClose}>Cancel</button>
        <button type="submit">Save Source</button>
      </form>
    </div>
  );
};

export default SourceNewModal;
