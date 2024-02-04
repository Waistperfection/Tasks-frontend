import React from "react";
import cls from "./Groupheader.module.css";
import OnlyMaster from "../OnlyMaster";

function Groupheader({ workgroup_name, workgroup_id, clickHandler }) {
  return (
    <div className={cls.groupheader}>
      <span>{workgroup_name}</span>
      <OnlyMaster>
        <div
          className={cls.addbutton}
          onClick={(e) => clickHandler(workgroup_id)}
        >
          ADD
        </div>
      </OnlyMaster>
    </div>
  );
}

export default Groupheader;
