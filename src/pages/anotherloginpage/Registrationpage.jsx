import React, { useEffect, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { serviceRegistration } from "../../api/authservice";
import cls from "./Registrationpage.module.css";
import Button from "../../componenets/Button/Button";
import Input from "./Input";

function AnotherRegistrationpage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState("");
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (confirmPassword && confirmPassword !== password) {
      setFormErrors("Passwords do not match");
    } else {
      setFormErrors("");
    }
  }, [password, confirmPassword]);

  const handleFormErrors = (error) => {
    const errData = [];
    for (const key in error.response.data) {
      errData.push(error.response.data[key]);
    }
    return ( <>
    {errData.map(err => <p>{err}</p>)} 
    </>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // preventDefault()

    if (username && password && confirmPassword && !formErrors) {
      serviceRegistration(username, password)
      .then(data => data && setRedirect(true))
      .catch(error=>setFormErrors(handleFormErrors(error)));
    //   .catch(error=>console.log('pipec'));
    } 
  };
  if (redirect) {
    return <Navigate to={"/auth/"} replace={true} />;
  }
  return (
    <>
      <div className={cls.registrationCard}>
        <div className={cls.registrationHeader}>
          Регистрация нового пользователя
        </div>
        <form onSubmit={handleSubmit} className={cls.registrationForm}>
          <p style={{ padding: "10px 0 0 0" }}>{formErrors}</p>
          <Input
            label="Имя пользователя"
            autoFocus
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            label="Пароль"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            label="Повтлрите пароль"
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button>Регистрация</Button>
          <NavLink to={"/auth/"}>Войи с помощью логина</NavLink>
        </form>
      </div>
    </>
  );
}

export default AnotherRegistrationpage;
