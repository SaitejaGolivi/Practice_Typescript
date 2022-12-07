import React, { useState } from "react";
import { ITask } from "../Model/Interface";

interface Props {
  task: ITask;
}
function Task({ task }: Props) {
  return (
    <div className="task">
      <span>{task.TaskName}</span>
      <span>{task.TimeLine}</span>
    </div>
  );
}

export default Task;
