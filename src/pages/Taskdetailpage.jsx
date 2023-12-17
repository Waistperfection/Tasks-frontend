import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { addComment, getTaskDetail } from "../api/taskservice";
import Comments from "../componenets/Comments/Comments";
import cls from "./Taskdetailpage.module.css";

function Taskdetailpage() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const [task, setTask] = useState({});
  const [newComment, setNewComment] = useState("");
  const [update, setUpdate] = useState(false);
  useEffect(() => {
    getTaskDetail(id).then((data) => setTask(data));
    setUpdate(false);
  }, [id, update]);
  return (
    <>
      <div className={cls.flexColumnWrapper}>
        <h2>Taskdetailpage</h2>
        <div className={cls.task}>
          <div className={cls.taskHeaderContainer}>
            <h3>{task.title}</h3>
          </div>
          <div className={cls.contentContainer}>
            <h4>Содержание:</h4>
            <p>{task.content}</p>
          </div>
          <div className={cls.workersContainer}>
            <h3>workers</h3>
            {task.workers?.map((worker) => (
              <>
                <div>
                  <div className={cls.worker}>
                    <div className={cls.workerImg}></div>
                    <h4 className={cls.workerName}>{worker.username}</h4>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className={cls.commentsContainer}>
            <h3>comments</h3>
            <div className={cls.addComment}>
              <input
                type="text"
                name=""
                id=""
                className={cls.textInput}
                placeholder="Add comment"
                value={newComment}
                onInput={(e) => setNewComment(e.target.value)}
              />
              <div
                className={cls.addCommentBtn}
                onClick={(e) =>
                  addComment(task.id, newComment).then((data) =>
                    setUpdate(true)
                  )
                }
              >
                reply
              </div>
            </div>
            <div style={{ fontSize: ".8em" }}>
              {task?.comments?.length > 0 ? (
                <Comments comments={task.comments} workers={task.workers} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Taskdetailpage;
