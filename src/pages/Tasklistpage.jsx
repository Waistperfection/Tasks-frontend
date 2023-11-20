import React, { useEffect, useState } from "react";
import { getTaskList } from "../api/taskservice";
import { Link } from "react-router-dom";

function Tasklistpage() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    getTaskList().then(data => setTasks(data));
  },[]);
  return (
    <>
      <div>Tasklistpage</div>
     <div className="tasks">
        {tasks.map(task => (
          <div className="task" key={task.id}>
            <h3>{task.title}</h3>
            <p style={{paddingLeft: "10px"}}>{task.content} <Link to={`${task.id}`}>подробнее</Link></p>            
          </div>
        ))}
     </div>
    </>
  );
}

export default Tasklistpage;
