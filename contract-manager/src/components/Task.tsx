import task from "../models/job/task";

type taskProp = {
  task: task;
};
// a task cost defined as an empty string means there is no cost defined yet or is free
// a task note defined as an empty string means there is no note defined yet
const Task = ({ task }: taskProp) => {

  return (
    <li>
      <p>{task.description}</p>
      {task.cost != "" && <p>${task.cost}</p>}
    </li>
  );
};

export default Task;
