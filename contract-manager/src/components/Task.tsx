import { useState } from "react";
import ReactDOM from "react-dom";
import task from "../models/job/task";

type taskProp = {
  task: task;
};
// a task cost defined as an empty string means there is no cost defined yet or is free
// a task note defined as an empty string means there is no note defined yet
const Task = ({ task }: taskProp) => {
  const [noteOpen, setNoteOpen] = useState(false);

  const onOpenNote = () => {
    setNoteOpen(true);
  };

  const onCloseNote = () => {
    setNoteOpen(false);
  };

  return (
    <li>
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: task.completed ? "green" : "gray",
        }}
      ></div>
      <p>{task.description}</p>
      {noteOpen &&
        ReactDOM.createPortal(
          <div>
            <p>{task.note}</p>
            <button onClick={onCloseNote}>Close</button>
          </div>,
          document.getElementById("overlay-root")!
        )}
      {!noteOpen && task.note != "" && <button onClick={onOpenNote}>Note</button>}
      {task.cost != "" && <p>${task.cost}</p>}
    </li>
  );
};

export default Task;
