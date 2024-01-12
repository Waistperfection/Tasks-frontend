import React, { useEffect, useState } from "react";
import { getFreeWorkers, getWorkgroupList } from "../../api/taskservice";

import cls from "./AddNewInviteForm.module.css";

const setData = async() => {};

function AddNewInviteForm() {
  const [groups, setGroups] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    const fetchData = async() => {
      setGroups(await getWorkgroupList());
      setWorkers(await getFreeWorkers());
    }
    fetchData().then(()=>setLoading(false))
  }, [])
  // setLoading(false)
  return (
    <div style={{background: "rgb(200, 200,200)", padding: "20px"}}>
      <h6>AddNewInviteForm</h6>
      {loading?
      <div className={cls.loading}>loading</div>
      :
      <form>
        <label htmlFor="users">users</label>
        <select name="users" id="">
          <option value="0" selected dasabled></option>
          {workers.map(worker => <option value="">worker.name</option>)}
        </select>
        <label htmlFor="users">users</label>
        <select name="workgroup" id="">
          <option value="1">pepe</option>
          <option value="1">pepe</option>
          <option value="1">pepe</option>
          <option value="1">pepe</option>
        </select>
      </form>
      }
    </div>
  );
}

export default AddNewInviteForm;
