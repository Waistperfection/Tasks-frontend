import React, { useEffect, useState } from "react";
import {
  createNewInvite,
  getFreeWorkers,
  getWorkgroupList,
} from "../../api/taskservice";
import Button from "../Button/Button"

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
    createNewInvite({ user: userId, workgroup: groupId })
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  return (
    <div className={cls.inviteFormContainer}>
      <h4>AddNewInviteForm</h4>
      <div>
        {loading ? (
          <div className={cls.loading}>loading</div>
        ) : (
          <form id="selectForm" className={cls.selectForm} onSubmit={handleForm}>
            <div>
              <label htmlFor="users">users</label>
              <select
                name="users"
                id="userSelector"
                value={userId}
                onChange={(e) => setUserId(+e.target.value)}
              >
                <option value={0} selected dasabled hidden>
                  select your user
                </option>
                {workers.map((worker) => (
                  <option value={worker.id}>{worker.username}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="users">users</label>
              <select
                name="workgroup"
                id="workgroupSelector"
                value={groupId}
                onChange={(e) => setGroupId(+e.target.value)}
              >
                <option value={0} selected dasabled hidden>
                  select workgroup
                </option>
                {groups.map((group) => (
                  <option value={group.id}>{group.name}</option>
                ))}
              </select>
            </div>
            <Button className={cls.submitButton}>submit</Button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddNewInviteForm;
