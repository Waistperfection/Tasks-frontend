import { useState, useEffect } from "react";
import { createNewTask, getWorkgroupList } from "../api/taskservice";
import cls from "./AddTaskPage.module.css";

function AddTaskPage({ callback, sel }) {
  const [workgroups, setWorkgroups] = useState([{}]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [workgroup, setWorkgroup] = useState(0);
  const [workers, setWorkers] = useState([]);
  const [optionWorkers, setOptionWorkers] = useState([{}]);
  useEffect(() => {
    getWorkgroupList().then((data) => setWorkgroups(data));
  }, []);

  useEffect(
    () =>
      setOptionWorkers(
        workgroups.filter((wg) => wg["id"] == workgroup)[0]?.workers || []
      ),
    [workgroups, workgroup]
  );

  return (
    <>
      <div className={cls.addTaskContainer}>
        <div className={cls.headerContainer}>
          <h3>AddTaskPage</h3>
        </div>
        <div className={cls.formContainer}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              createNewTask({ title, content, workgroup, workers }).then(
                (data) => callback(data)
              );
            }}
          >
            <div className={cls.formInput}>
              <label htmlFor="title">заголовок</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className={cls.formInput}>
              <label htmlFor="content">содержание</label>
              <textarea
                name=""
                id="content"
                cols="30"
                rows="10"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
            <div className={cls.formRow}>
              <div className={cls.formInput}>
                <label htmlFor="workers">группа</label>
                <select
                  name="workgroup"
                  id="workgroup"
                  style={{ width: "100px" }}
                  onChange={(e) => setWorkgroup(parseInt(e.target.value))}
                >
                  <option
                    key={100000000}
                    value={0}
                    selected={sel === 0}
                    disabled
                  >
                    default
                  </option>
                  {workgroups.map((workgroup) => (
                    <option
                      key={workgroup.id}
                      value={workgroup.id}
                      selected={sel === workgroup.id}
                    >
                      {workgroup.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className={cls.formInput}>
                <label htmlFor="workers">работники</label>
                <select
                  name="workers"
                  id="workers"
                  placeholder="работники"
                  multiple
                  style={{ width: "100px" }}
                  onChange={(e) => {
                    setWorkers((o) =>
                      [...e.target.options]
                        .map((opt) =>
                          !!opt.selected ? parseInt(opt.value) : null
                        )
                        .filter((worker) => !!worker)
                    );
                  }}
                >
                  {optionWorkers?.map((worker) => (
                    <option key={worker.username} value={worker.id}>
                      {worker.username}
                    </option>
                  )) || (
                    <option selected disbled>
                      choose you fighter
                    </option>
                  )}
                </select>
              </div>
            </div>

            <div>
              <input type="submit" value="отправить" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddTaskPage;
