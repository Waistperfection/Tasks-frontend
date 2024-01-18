import React, { useEffect, useState } from "react";
import {
  createNewInvite,
  getFreeWorkers,
  getWorkgroupList,
} from "../../api/taskservice";

import cls from "./AddNewInviteForm.module.css";

function AddNewInviteForm() {
  const [groups, setGroups] = useState([]);
  const [workers, setWorkers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(0);
  const [groupId, setGroupId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setGroups(await getWorkgroupList());
      setWorkers(await getFreeWorkers());
    };
    fetchData().then(() => setLoading(false));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    createNewInvite({ user: userId, workgroup: groupId }).then(()=>setLoading(false)).catch(()=>setLoading(false));

  };

  return (
    <div style={{ background: "rgb(200, 200,200)", padding: "20px" }}>
      <h4>AddNewInviteForm</h4>
      {loading ? (
        <div className={cls.loading}>loading</div>
      ) : (
        <form id="selectForm" onSubmit={handleForm}>
          <label htmlFor="users">users</label>
          <select name="users" id="userSelector" value={userId} onChange={e=>setUserId(+e.target.value)}>
            <option value={0} selected dasabled hidden>
              select your user
            </option>
            {workers.map((worker) => (
              <option value={worker.id}>{worker.username}</option>
            ))}
          </select>
          <label htmlFor="users">users</label>
          <select name="workgroup" id="workgroupSelector" value={groupId} onChange={e=>setGroupId(+e.target.value)}>
            <option value={0} selected dasabled hidden>
              select workgroup
            </option>
            {groups.map((group) => (
              <option value={group.id}>{group.name}</option>
            ))}
          </select>
          <button>submit</button>
        </form>
      )}
    </div>
  );
}

export default AddNewInviteForm;
