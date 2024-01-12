import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getWorkgroupDateil } from '../api/taskservice';

function WorkgroupDetailPage() {
    const {id} = useParams();
    const [workgroup, setWorkgroup] = useState({});
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getWorkgroupDateil(id).then(data=>setWorkgroup(data)).then(() => setLoading(false))
    },[])
    if (loading)
    return <h1>LOADING</h1>
    else return (
    <div style={{display:"flex", flexDirection:'column', gap:'20px'}}>
    <h1>{workgroup.name}</h1>
    <h3>Owner: </h3>
    <div>{workgroup.owner.username}</div>
    <h3>Workers:</h3>
    <ul>
        {workgroup.workers.map(worker=><li>{worker.username}</li>)}
    </ul>
    </div>
  )
}

export default WorkgroupDetailPage