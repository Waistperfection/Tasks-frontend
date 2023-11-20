import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../hoc/AuthProvider";

function Loginpage() {
  const { user, signIn, signOut } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const cleanForm = () => {
    setUsername("");
    setPassword("");
  };
  if (user) {
    return <Navigate to={"/"} replace={true} />;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        signIn(username, password);
      }
    }
    className="auth-form"
    >
      <label htmlFor="">
        username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
      </label>
      <label htmlFor="">
        password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}

export default Loginpage;
