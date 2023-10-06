import { useState } from "react";
import task from "../../models/job/task";
import Task from "./Task";
import TaskEditModal from "../modals/TaskEditModal";
import ReactDOM from "react-dom";
import TaskNotesModal from "../modals/TaskNotesModal";

type taskReadOnly = {
  task: task;
  onChangeTaskNotes: (newNotes: string, id: string) => void;
  onCompleteTask: (isCompleted: boolean, id: string) => void;
};

const TaskReadOnly = ({
  task,
  onChangeTaskNotes,
  onCompleteTask
}: taskReadOnly) => {
  const [taskNotesOpen, setTaskNotesOpen] = useState<boolean>();

  const onOpenTaskNotes = () => {
    setTaskNotesOpen(true);
  };
  const onCloseTaskNotes = () => {
    setTaskNotesOpen(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => {
          onCompleteTask(e.target.checked, task.id);
        }}
      />
      <Task task={task} />
      {task.note === "" && (
        <button onClick={onOpenTaskNotes}>+ Add Note</button>
      )}
      {task.note !== "" && (
        <button onClick={onOpenTaskNotes}>View Notes</button>
      )}

      {taskNotesOpen &&
        ReactDOM.createPortal(
          <TaskNotesModal
            task={task}
            onCloseTaskNotes={onCloseTaskNotes}
            onChangeNotes={onChangeTaskNotes}
          />,
          document.getElementById("overlay-root")!
        )}
    </div>
  );
};

export default TaskReadOnly;