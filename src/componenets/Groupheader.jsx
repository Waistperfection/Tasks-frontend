import React from "react";
import useMaster from "../hooks/useMaster";
import cls from "./Groupheader.module.css";

function Groupheader({ workgroup_name, workgroup_id, clickHandler }) {
  const isMaster = useMaster();
  return (
    <div className={cls.groupheader}>
      <h3>{workgroup_name}</h3>
      {
        isMaster?
        <div className={cls.addbutton} onClick={clickHandler}></div>
        :
        ''
      }
    </div>
  );
}

export default Groupheader;
