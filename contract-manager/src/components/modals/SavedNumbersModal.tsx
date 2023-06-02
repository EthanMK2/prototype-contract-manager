import numbers from "../../models/numbers";

type savedNumbersModal = {
  savedNumArray: numbers;
  onCloseSavedNumbers: () => void;
  onDeleteSavedNumber: (id: string) => void;
};

const SavedNumbersModal = ({
  savedNumArray,
  onCloseSavedNumbers,
  onDeleteSavedNumber,
}: savedNumbersModal) => {
  return (
    <div>
      <ul>
        {savedNumArray.map((num) => {
          return (
            <li key={num.id}>
              <p>{num.name}</p>
              <p>{num.value}</p>
              <button
                onClick={() => {
                  onDeleteSavedNumber(num.id);
                }}
              >
                Delete
              </button>
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
