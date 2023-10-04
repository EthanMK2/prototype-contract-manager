import { useState } from "react";
import task from "../../models/job/task";

type taskEditModal = {
  task: task;
  onSaveEditTask: (task: task) => void;
  onClose: () => void;
  onDeleteTask: (id: string) => void;
};

const TaskEditModal = ({ task, onClose, onSaveEditTask, onDeleteTask }: taskEditModal) => {
  const [currentTask, setCurrentTask] = useState<task>(task);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSaveEditTask(currentTask);
        onClose();
      }}
    >
      <input
        type="text"
        value={currentTask.description}
        placeholder="Task"
        onChange={(e) => {
          setCurrentTask((prevTask) => {
            return { ...prevTask, description: e.target.value };
          });
        }}
      />
      <input
        type="number"
        value={currentTask.cost}
        placeholder="Cost"
        onChange={(e) => {
          setCurrentTask((prevTask) => {
            return { ...prevTask, cost: e.target.value };
          });
        }}
      />
      <button onClick={onClose}>Cancel</button>
      <button type="submit">Save Changes</button>
      <button onClick={() => {
        onDeleteTask(currentTask.id)
      }}>Delete Task</button>
    </form>
  );
};

export default TaskEditModal;
