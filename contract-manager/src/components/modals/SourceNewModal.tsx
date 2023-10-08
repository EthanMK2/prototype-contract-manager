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
      <Source source={currentSource} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitSource(currentSource);
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
