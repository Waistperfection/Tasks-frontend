import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../hoc/AuthProvider";
import { TextInput } from "../../componenets/TextInput/TextInput";
import cls from "./Loginpage.module.css";
import Button from "../../componenets/Button/Button";
import Input from "./Input";

function AnotherLoginpage() {
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
    <div className={cls.authCard}>
      <div className={cls.authHeader}>Авторизация</div>
      <div className={cls.authContent}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn(username, password);
            cleanForm();
          }}
          className={cls.authForm}
        >
          <p style={{ padding: "5px 0 0 0" }}>{""}</p>

          <Input
            label="LOGIN"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />
          <Input
            label="PASSWORD"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button>Авторизация</Button>
        </form>
      </div>
    </div>
  );
}

export default AnotherLoginpage;
