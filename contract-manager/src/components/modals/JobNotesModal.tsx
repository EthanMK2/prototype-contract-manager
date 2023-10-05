type jobNotesModal = {
  currentNotes: string;
  onCloseJobNotes: () => void;
  onChangeNotes: (newNotes: string) => void;
};

const JobNotesModal = ({
  currentNotes,
  onCloseJobNotes,
  onChangeNotes,
}: jobNotesModal) => {
  return (
    <form>
      <textarea
        name="notes"
        id="notes"
        cols={30}
        rows={10}
        value={currentNotes}
        onChange={(e) => {
          onChangeNotes(e.target.value);
        }}
      />
      <button onClick={onCloseJobNotes}>Done</button>
    </form>
  );
};

export default JobNotesModal;
