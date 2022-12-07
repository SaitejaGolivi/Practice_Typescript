import React, { useState } from "react";
import { ITask } from "../Model/Interface";
import Task from "./Task";

const Tasklist: React.FC = () => {
  // This Usestate for the single task which is get it from input field
  const [task, setTask] = useState<string>("");
  // this Usestate for the deadline of the respected task get it from the input field.
  const [deadline, setDeadline] = useState<number>(0);
  //This is for adding all tasks in the list array.
  const [list, setList] = useState<ITask[]>([]);

  //handle function getting the input value

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): string | number | any => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };
  const addTask = (): string | number | any => {
    const newTask = { TaskName: task, TimeLine: deadline };
    setList([...list, newTask]);
    setDeadline(0);
    setTask("");
    console.log(list);
  };
  return (
    <>
      <div className="header">
        <div className="inputContent">
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Enter Task here..."
            onChange={handleChange}
          ></input>
          <input
            name="deadline"
            value={deadline}
            placeholder="Deadline in days..."
            onChange={handleChange}
          ></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="tasklist">
        {list.map((task: ITask, key: number) => {
          return <Task key={key} task={task} />;
        })}
      </div>
    </>
  );
};

export default Tasklist;
