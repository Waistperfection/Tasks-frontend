import cls from "./WorkgroupCard.module.css"

function WorkgroupCard({workgroup}) {
  return (
    <div className={cls.workgroupCard}>
        <div className={cls.workgroupHeaderContainer}>
        {workgroup.name}
        </div>
        <div className={cls.contentContainer}>
            <ul>
                {workgroup.workers?.map(worker=>(<li style={{listStyle: "none"}}>{worker.first_name+" "+worker.last_name}</li>))}
            </ul>
        </div>
    </div>
  )
}

export default WorkgroupCard