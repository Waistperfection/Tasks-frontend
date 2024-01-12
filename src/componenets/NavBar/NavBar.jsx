import { React, useContext } from "react";
import { NavLink } from "react-router-dom";
import cls from "./NavBar.module.css";
import { AuthContext } from "../../hoc/AuthProvider";
import OnlyMaster from "../OnlyMaster";
import OnlyWorkers from "../OnlyWorkers";

function NavBar() {
  const { user, signOut } = useContext(AuthContext);
  console.log(user?.workgroup_id);
  return (
    <>
      <header className={cls.navbar}>
        <div className={cls.logo}>orimi</div>
        <div className={cls.navbarMenu}>
          {user ? (
            <>
            <NavLink onClick={() => signOut()}>Logout</NavLink>
            {/* <NavLink>{user.username}</NavLink> */}
            </>
          ) : (
            <>
            <NavLink to={"/auth/"}>Login</NavLink>
            {/* <NavLink to={"/login/"}>Login</NavLink> */}
            <NavLink to={"/auth/registration/"}>Register</NavLink>
            {/* <NavLink to={"registration/"}>Register</NavLink> */}
            </>
          )}
          <OnlyMaster>
          <NavLink to={"workgroups/"}>Workgroups</NavLink>
          <NavLink to={"invites/"}>Invite</NavLink>
          <NavLink to={"task/"}>Tasks</NavLink>

          </OnlyMaster>
          <OnlyWorkers>
            {(user && user.workgroup_id) ?
            <>
            <NavLink to={"/workgroups/"+user.workgroup_id}>Workgroup</NavLink>
            <NavLink to={"task/"}>Tasks</NavLink>
            </>
            :
            <NavLink to={"/join/"}>Join</NavLink>
          }
          </OnlyWorkers>          
        </div>
      </header>
    </>
  );
}

export default NavBar;
