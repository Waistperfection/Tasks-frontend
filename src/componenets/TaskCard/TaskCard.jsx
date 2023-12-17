import React from "react";
import { Link } from "react-router-dom";
import cls from "./TaskCard.module.css";

function TaskCard({ task }) {
  let date = new Date(task.created_at);

  return (
    <>
      <div className={cls.task}>
        <div className={cls.headerContainer}>
          <h3 className={cls.header}>{task.title}</h3>
          <div className={cls.headerButton} />
        </div>
        <div className={cls.dateCreated}>добавлена: {date.toLocaleDateString()}</div>
        <div className={cls.contentContainer}>
          <h4>Подробнее:</h4>
          <p className={cls.content}>{task.content}</p>
        </div>
        <div className={cls.workersContainer}>
          {task.workers?.map((worker) => (
            <div key={(worker?.id || worker)*Math.random()}className={cls.worker}><p>{worker?.id || worker}</p></div>
          ))}
        </div>
        <div className={cls.btnGroupContainer}>
          <Link to={`${task.id}`} className={cls.btn}>открыть</Link>
        </div>
      </div>
    </>
  );
}

export default TaskCard;
