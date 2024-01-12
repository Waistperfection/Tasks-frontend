import React, { useEffect, useState } from "react";
import { getWorkgroupList } from "../api/taskservice";

function JoinWorkgroupPage() {
  const [loading, setLoading] = useState(true);
  const [workgroups, setWorkgroups] = useState([]);
  useEffect(() => {
    getWorkgroupList().then(data=>setWorkgroups(data)).then(()=>setLoading(false))
  })
  if (loading) return <h1>LOADING</h1>
  return ;
}

export default JoinWorkgroupPage;
