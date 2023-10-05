import task from "../../models/job/task";

type taskNotesModal = {
  task: task;
  onCloseTaskNotes: () => void;
  onChangeNotes: (newNotes: string, id: string) => void;
};

const TaskNotesModal = ({
  task,
  onCloseTaskNotes,
  onChangeNotes,
}: taskNotesModal) => {
  return (
    <form>
      <textarea
        name="task-notes"
        id="task-notes"
        cols={30}
        rows={10}
        value={task.note}
        onChange={(e) => {
          onChangeNotes(e.target.value, task.id);
        }}
      />
      <button onClick={onCloseTaskNotes}>Done</button>
    </form>
  );
};

export default TaskNotesModal;
