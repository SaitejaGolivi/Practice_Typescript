import React, { useState } from "react";
import "./App.css";
import Tasklist from "./Components/Tasklist";

function App() {
  // const [task, setTask] = useState<string>("");
  // const [deadline, setDeadline] = useState<number>(0);
  // const [list, setList] = useState<ITask[]>([]);

  // const handleChange = (event: any) => {
  //   if (event.target.name === "Task") {
  //     setTask(event.target.value);
  //   } else {
  //     setTask(event.target.value);
  //   }
  // };
  // const addTask = (): void => {
  //   console.log("hello");
  //   const newTask = { TaskName: task, TimeLine: deadline };
  //   setList([...list, newTask]);
  //   setTask("");
  //   setDeadline(0);
  // };

  return (
    <div className="App">
      <Tasklist />
    </div>
  );
}

export default App;
