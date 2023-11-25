import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../hoc/AuthProvider";

function Layout() {
  const {user, signOut} = useContext(AuthContext)
  return (
    <>
      <header className="navbar">
        <div className="logo">orimi</div>
        <div className="navbar-menu">
          <NavLink to={'/login/'}>Login</NavLink>
          <NavLink onClick={()=>signOut()}>Logout</NavLink>
          <NavLink to={'registration/'}>Register</NavLink>
          <NavLink to={'task/'}>Tasks</NavLink>

        </div>
      </header>
      <main className="main-page">
        <div>
      <h3>{user?.username || 'Davai zahodi'}</h3>
      <Outlet />
        </div>
      </main>
      <footer>hello footer</footer>
    </>
  );
}

export default Layout;
