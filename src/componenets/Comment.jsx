import React from "react";
import { useState } from "react";
import Comments from "./Comments";
import { addComment } from "../api/taskservice";

function Comment({ children }) {
  const [comment, setComment] = useState(children);
  const [visible, setVisible] = useState(true);
  const [input, setInput] = useState("");

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
        paddingLeft: "10px",
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
        <div>
          id: {comment.id}, sender: {comment.sender},
        </div>
        <div>
          <p>body: {comment.body}</p>
          <p>added: {comment.added}</p>
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
      {comment.subcomments ? <Comments comments={comment.subcomments} /> : null}
    </li>
  );
}

export default Comment;
