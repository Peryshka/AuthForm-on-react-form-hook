import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from "../layout/styles.module.scss";

const Layout = () => {
  return(
    <div className={styles.wrap}>
      <header className={styles.header}>
        <NavLink to ="/">Home</NavLink>
        <NavLink to="/sign-in">Login</NavLink>
        <NavLink to="/sign-up">Sign Up</NavLink>
      </header>
      <div className={styles.container}>
        <div className={styles.mainFormWrap}>
          <Outlet />
        </div>

      </div>
    </div>
  )
}

export default Layout;