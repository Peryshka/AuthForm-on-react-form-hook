import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import styles from "../layout/styles.module.scss";

const Layout = () => {
  return (
    <div className={styles.wrap}>
      <header>
        <nav>
         <ul className={styles.menu}>
           <li>
             <NavLink to="/">Home</NavLink>
           </li>
           <li>
             <NavLink to="/sign-in">Login</NavLink>
           </li>
           <li>
             <NavLink to="/sign-up">Sign Up</NavLink>
           </li>
         </ul>
        </nav>
      </header>
      <div className={styles.container}>
        <div className={styles.mainFormWrap}>
          <Outlet/>
        </div>

      </div>
    </div>
  )
}

export default Layout;



