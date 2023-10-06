import { useRef, useState } from "react";

type taskNew = {
  submitForm: (description: string, cost: string | number) => void;
};

const TaskNew = ({ submitForm }: taskNew) => {
  const [desc, setDesc] = useState<string>("");
  const [cost, setCost] = useState<string | number>("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitForm(desc, cost);
        setDesc("");
        setCost("");
      }}
    >
      <input
        type="text"
        id="new-task"
        placeholder="Task"
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        value={desc}
        required
      />
      <input
        type="number"
        id="new-task-cost"
        placeholder="Cost"
        onChange={(e) => {
          setCost(e.target.value);
        }}
        value={cost}
      />
      <button type="submit">+ Add Task</button>
    </form>
  );
};

export default TaskNew;
