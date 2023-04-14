// type task = {
//     completed: boolean,
//     description: string,
//     note: string,
//     cost: number | string
// }
import { useState } from "react";
import task from "../models/job/task";

const Task = ({ completed, description, note, cost }: task) => {
  const [noteOpen, setNoteOpen] = useState(false);

  const onOpenNote = () => {
    setNoteOpen(true);
  };

  const onCloseNote = () => {
    setNoteOpen(false)
  }

  return (
    <li>
      <div
        style={{
          width: 10,
          height: 10,
          backgroundColor: completed ? "green" : "gray",
        }}
      ></div>
      <p>{description}</p>
      {noteOpen && (
        <div>
          <p>{note}</p>
          <button onClick={onCloseNote}>Close</button>
        </div>
      )}
      {!noteOpen && <button onClick={onOpenNote}>Note</button>}
      {/* NOTE COMPONENT (open modal on click) */}
      <p>${cost}</p>
    </li>
  );
};

export default Task;
