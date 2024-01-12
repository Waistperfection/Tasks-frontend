import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../hoc/AuthProvider";
import { createWorkgroup, getWorkgroupList } from "../api/taskservice";
import cls from "./WorkgroupPage.module.css";
import WorkgroupCard from "../componenets/WorkgroupCard/WorkgroupCard";
import OnlyMaster from "../componenets/OnlyMaster";
import AddWorkgroupForm from "../componenets/AddWorkgroupForm/AddWorkgroupForm";

function WorkgroupPage({join=false}) {
  const user = useContext(AuthContext);
  const [workgroups, setWorkgroups] = useState([]);
  useEffect(() => {
    getWorkgroupList().then((data) => setWorkgroups([...data]));
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    createWorkgroup(e.target.elements.name.value).then((data) =>
      setWorkgroups([...workgroups, data])
    );
    e.target.elements.name.value = "";
  };

  return (
    <>
      <div className={cls.workgroupWrapper}>
        <OnlyMaster>
          <AddWorkgroupForm addFunction={submitHandler} />
        </OnlyMaster>
        {workgroups.map((workgroup) => (
          <WorkgroupCard workgroup={workgroup} join={join}/>
        ))}
      </div>
    </>
  );
}

export default WorkgroupPage;
