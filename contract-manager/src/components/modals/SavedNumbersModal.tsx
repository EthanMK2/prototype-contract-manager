import numbers from "../../models/numbers";

type savedNumbersModal = {
  savedNumArray: numbers;
  onCloseSavedNumbers: () => void;
};

const SavedNumbersModal = ({
  savedNumArray,
  onCloseSavedNumbers,
}: savedNumbersModal) => {
  return (
    <div>
      <ul>
        {savedNumArray.map((num) => {
          return (
            <li>
              <p>{num.name}</p>
              <p>{num.value}</p>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => {
          onCloseSavedNumbers();
        }}
      >
        Close
      </button>
    </div>
  );
};

export default SavedNumbersModal;
