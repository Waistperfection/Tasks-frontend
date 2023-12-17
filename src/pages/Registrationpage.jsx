import React, { useEffect, useState } from "react";
import { serviceRegistration } from "../api/authservice";
import { TextInput } from "../componenets/TextInput/TextInput";
import cls from "./Registrationpage.module.css";
import Button from "../componenets/Button/Button";

function Registrationpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  useEffect(() => {
    if (confirmPassword && confirmPassword !== password) {
      setFormErrors("Passwords do not match");
    } else {
      setFormErrors("");
    }
  }, [password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // preventDefault()

    if (username && password && confirmPassword && !formErrors) {
      serviceRegistration(username, password);
    } else {
      setFormErrors(formErrors + " anything goes wrong");
    }
  };
  return (
    <>
      <div className={cls.registrationCard}>
        <div className={cls.registrationHeader}>Регистрация нового пользователя</div>
        <form onSubmit={handleSubmit} className={cls.registrationForm}>
          <p style={{padding: "10px 0 0 0"}}>{formErrors}</p>
          <TextInput
            label="Имя пользователя"
            autoFocus
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextInput
            label="Пароль"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <TextInput
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button>Регистрация</Button>
        </form>
      </div>
    </>
  );
}

export default Registrationpage;
