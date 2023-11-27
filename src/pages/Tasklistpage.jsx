import React, { useEffect, useRef, useState } from "react";
import { getTaskList } from "../api/taskservice";
import Groupheader from "../componenets/Groupheader";
import TaskCard from "../componenets/TaskCard";
import AddTaskPage from "./AddTaskPage";
import cls from "./Tasklistpage.module.css";

function Tasklistpage() {
  const [tasks, setTasks] = useState([{}]);
  const addFormRef = useRef(null);
  const [addWorkgroupDefault, setAddWorkgroupDefault] = useState(0);

  useEffect(() => {
    getTaskList().then((data) => setTasks(data));
  }, []);

  const scrollHandler = (id) => {
    setAddWorkgroupDefault(id);
    addFormRef.current.scrollIntoView();
  };

  const addNewTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <>
      <h3>Tasklistpage</h3>
      <div className={cls.taskListWrapper}>
        {tasks.map((task, indx, arr) => (
          <>
            {indx === 0 ||
            arr[indx - 1].workgroup_name !== task.workgroup_name ? (
              <Groupheader
                workgroup_name={task.workgroup_name}
                workgroup_id={task.workgroup_id}
                clickHandler={scrollHandler}
              />
            ) : (
              ""
            )}
            <>
              <TaskCard task={task} key={task.id} />
            </>
          </>
        ))}
      </div>
      <div ref={addFormRef} className={cls.addTaskWrapper}>
        <AddTaskPage callback={addNewTask} sel={addWorkgroupDefault} />
      </div>
    </>
  );
}

export default Tasklistpage;
