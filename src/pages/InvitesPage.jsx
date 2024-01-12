import cls from "./InvitesPage.module.css";

import { useState, useEffect } from "react";
import { deleteInvite, getInvites } from "../api/taskservice";
import AddNewInviteForm from "../componenets/AddNewInviteForm/AddNewInviteForm";

function InvitesPage() {
  const [invites, setInvites] = useState([]);
  useEffect(() => {
    getInvites().then((data) => setInvites([...data]));
  }, []);
  const handleDelete = async (code) => {
    const res = await deleteInvite(code);
    console.log(res);

    if (res) {
      console.log();
      setInvites([...invites].filter((inv) => inv.code !== code));
    }
  };
  return (
    <>
      <div className={cls.InvitesContainer}>
        <h3>InvitesPage</h3>
        <ul>
          {invites.map((item) => (
            <li key={item.code}>
              {item.user.username}-{item.workgroup}{" "}
              <button onClick={(e) => handleDelete(item.code)}>del</button>
            </li>
          ))}
        </ul>
        <AddNewInviteForm />
      </div>
    </>
  );
}

export default InvitesPage;
