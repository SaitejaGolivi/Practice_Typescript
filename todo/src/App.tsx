import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [list, setList] = useState<string>("");

  const handleChange = () => {};

  return (
    <div className="App">
      <div className="header">
        <div className="inputContent">
          <input type="text" placeholder="Task" onChange={handleChange} />
          <input type="number" placeholder="Deadline in Days....." />
        </div>
        <button className="button">Add Task</button>
      </div>
      <div className="todolist"></div>
    </div>
  );
}

export default App;
