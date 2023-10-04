import { useState } from "react";
import task from "../models/job/task";
import Task from "./Task";
import TaskEditModal from "./modals/TaskEditModal";
import ReactDOM from "react-dom";

type editableTask = {
  task: task;
  onSaveEditTask: (task: task) => void;
  onDeleteTask: (id: string) => void;
};

const EditableTask = ({ task, onSaveEditTask, onDeleteTask }: editableTask) => {
  const [editTaskOpen, setEditTaskOpen] = useState<boolean>();

  const onOpenEditTask = () => {
    setEditTaskOpen(true);
  };
  const onCloseEditTask = () => {
    setEditTaskOpen(false);
  };

  return (
    <div>
      <Task
        task={{
          note: task.note,
          description: task.description,
          completed: task.completed,
          cost: task.cost,
          date: task.date,
          id: task.id,
        }}
      />
      {task.note === "" && <button>+ Add Note</button>}
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
    </div>
  );
};

export default EditableTask;
