import React from "react";
import { useState } from "react";
import Comments from "./Comments";
import { addComment } from "../api/taskservice";
import cls from "./Comment.module.css";

function Comment({ children, workers }) {
  const [comment, setComment] = useState(children);
  const [visible, setVisible] = useState(true);
  const [input, setInput] = useState("");
  const date = new Date(comment.added);

  const handleAdd = (task, body, id) => {
    addComment(task, body, id).then((data) => {
      console.log(data);
      let newComment = { ...comment };
      let subcomments = comment.subcomments
        ? [...comment.subcomments, data]
        : [data];
      newComment.subcomments = subcomments;
      setComment(newComment);
      setVisible(!visible);
      setInput("");
    });
  };
  return (
    <li
      style={{
        margin: "10px 5px 5px 0",
        paddingLeft: "20px",
        borderLeft: "1px solid black",
        listStyle: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div className={cls.senderContainer}>
          <div className={cls.workerImg}></div>
          <div>
            <h4 className={cls.senderName}>

            sender:{" "}
            {
              workers?.filter((worker) => worker.id == comment.sender)[0]
              ?.username
            }{" "}
            </h4>
            added: {`${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
          </div>
        </div>
        <div>
          <p>{comment.body}</p>
        </div>
        <div>
          <button onClick={() => setVisible(!visible)}>reply</button>
          <p hidden={visible}>
            <input
              type="text"
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={() => handleAdd(comment.task, input, comment.id)}>
              reply
            </button>
          </p>
        </div>
      </div>
      {comment.subcomments ? (
        <Comments comments={comment.subcomments} workers={workers} />
      ) : null}
    </li>
  );
}

export default Comment;
