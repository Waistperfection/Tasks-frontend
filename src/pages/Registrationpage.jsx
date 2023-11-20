import React, { useEffect, useState } from "react";
import { serviceRegistration } from "../api/authservice";

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
      <form onSubmit={handleSubmit} className="auth-form">
        <p>{formErrors}</p>
        <label htmlFor="username">
          username
          <input
            autoFocus
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="confirmPassword">
          confirmPassword
          <input
            type="text"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          password
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default Registrationpage;
