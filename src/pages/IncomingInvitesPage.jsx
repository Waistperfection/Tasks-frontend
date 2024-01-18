import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { serviceMe } from "../api/authservice";
import { acceptInvite, getInvites } from "../api/taskservice";
import cls from "./IncomingInvitesPage.module.css";
import { AuthContext } from "../hoc/AuthProvider";
import { useContext } from "react";

function IncomingInvitesPage() {
  const { refetchUser } = useContext(AuthContext);
  const [invites, setInvites] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getInvites()
      .then((invites) => setInvites(invites))
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);
  const handleAcceptInvite = (code) => {
    acceptInvite(code)
      .then((data) => console.log(data))
      .then(() => refetchUser());
  };
  if (loading) return <h3>loading</h3>;
  else
    return (
      <>
        <div className={cls.container}>
          <div>IncomingInvitesPage</div>
          <p>be carefull when you accept one of invites, other will be deleted</p>
          <ul>
            {invites.map((inv) => (
              <li>
                {inv.workgroup}-{inv.code}-
                <button onClick={(e) => handleAcceptInvite(inv.code)}>
                  вступить
                </button>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
}

export default IncomingInvitesPage;
