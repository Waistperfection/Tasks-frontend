import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import cls from "./NavBar.module.css";
import { AuthContext } from "../../hoc/AuthProvider";

function NavBar() {
  const { user, signOut } = useContext(AuthContext);
  return (
    <>
      <header className={cls.navbar}>
        <div className={cls.logo}>orimi</div>
        <div className={cls.navbarMenu}>
          {user ? (
            <NavLink onClick={() => signOut()}>Logout</NavLink>
          ) : (
            <NavLink to={"/login/"}>Login</NavLink>
          )}
          <NavLink to={"registration/"}>Register</NavLink>
          <NavLink to={"workgroups/"}>Workgroups</NavLink>
          <NavLink to={"task/"}>Tasks</NavLink>
        </div>
      </header>
    </>
  );
}

export default NavBar;
