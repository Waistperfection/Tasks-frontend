import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getTaskDetail } from '../api/taskservice';
import Comments from '../componenets/Comments';

function Taskdetailpage() {
    const {id} = useParams();
    const [task, setTask] = useState({});
    useEffect(() => {
        getTaskDetail(id).then(data=>setTask(data));
    }, [])
  return (
    <>
    <div>Taskdetailpage</div>
    <p>{id}</p>
    <p>{task.title}</p>
    <p>{task.content}</p>
    <h3>comments</h3>
    <div style={{fontSize:'.8em'}}>
    {task?.comments?.length > 0? <Comments comments={task.comments} /> : null}
    </div>
    </>
  )
}

export default Taskdetailpage