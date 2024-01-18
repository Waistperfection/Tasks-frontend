import Button from "../Button/Button";
import cls from "./WorkgroupCard.module.css";
import { Link } from "react-router-dom";
import OnlyMaster from "../OnlyMaster";

function WorkgroupCard({ workgroup, join = false }) {
  return (
    <div className={cls.workgroupCard}>
      <div className={cls.workgroupHeaderContainer}>{workgroup.name}</div>
      <div className={cls.contentContainer}>
        <p>Мастер - {workgroup.owner?.username}</p>
        <ul>
          {workgroup.workers.length || <h3>No workers yet</h3>}
          {workgroup.workers?.map((worker) => (
            <li style={{ listStyle: "none" }}>
              {worker.first_name + " " + worker.last_name}
            </li>
          ))}
        </ul>
        <OnlyMaster>
        <div><Link to={`/workgroups/${workgroup.id}/`}>подробнее</Link></div>
        </OnlyMaster>
        {join ? <Button>join to {workgroup.id}</Button> : ""}
      </div>
    </div>
  );
}

export default WorkgroupCard;
