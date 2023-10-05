import { useState } from "react";
import task from "../models/job/task";
import Task from "./Task";
import TaskEditModal from "./modals/TaskEditModal";
import ReactDOM from "react-dom";
import TaskNotesModal from "./modals/TaskNotesModal";

type editableTask = {
  task: task;
  onSaveEditTask: (task: task) => void;
  onDeleteTask: (id: string) => void;
  onCompleteTask: (isCompleted: boolean, id: string) => void;
  onChangeTaskNotes: (newNotes: string, id: string) => void;
};

const EditableTask = ({
  task,
  onSaveEditTask,
  onDeleteTask,
  onCompleteTask,
  onChangeTaskNotes,
}: editableTask) => {
  const [editTaskOpen, setEditTaskOpen] = useState<boolean>();
  const [taskNotesOpen, setTaskNotesOpen] = useState<boolean>();

  const onOpenEditTask = () => {
    setEditTaskOpen(true);
  };
  const onCloseEditTask = () => {
    setEditTaskOpen(false);
  };

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
      <button onClick={onOpenEditTask}>Edit</button>
      {editTaskOpen &&
        ReactDOM.createPortal(
          <TaskEditModal
            task={task}
            onClose={onCloseEditTask}
            onSaveEditTask={onSaveEditTask}
            onDeleteTask={onDeleteTask}
          />,
          document.getElementById("overlay-root")!
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

export default EditableTask;
