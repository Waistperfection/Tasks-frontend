import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../hoc/AuthProvider";
import cls from './Layoutpage.module.css'
function Layout() {
  const {user, signOut} = useContext(AuthContext)
  return (
    <>
      <header className={cls.navbar}>
        <div className={cls.logo}>orimi</div>
        <div className={cls.navbarMenu}>
          {user?
          <NavLink onClick={()=>signOut()}>Logout</NavLink>
          :
          <NavLink to={'/login/'}>Login</NavLink>
          }
          <NavLink to={'registration/'}>Register</NavLink>
          <NavLink to={'task/'}>Tasks</NavLink>

        </div>
      </header>
      <main className={cls.mainPage}>
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
