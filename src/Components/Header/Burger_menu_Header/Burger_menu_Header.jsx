import React from "react";
import styles from "./Burger_menu_Header.module.css";
import {Link} from "react-router-dom";

const Burger_menu_Header = (props) => {

     return(
         <nav className={styles[props.menuActive ? 'open' : 'none']}>
             <div className={styles.container_Burger_menu}>
                 <button className={styles.logIn}>
                     <div className={styles.logInImage}></div>
                     Log In
                 </button>
                 <ul className={styles.menu} onClick={() => props.setMenuActive(false)}>
                     <Link to="/">HOME</Link>
                     <Link to="/shopAll">SHOP ALL</Link>
                     <Link to="/christmasTrees">CHRISTMAS TREES</Link>
                     <Link to="/uniqueOrnaments">UNIQUE ORNAMENTS</Link>
                     <Link to="/holidayLights">HOLIDAY LIGHTS</Link>
                     <Link to="/about">ABOUT</Link>
                     <Link to="/contacts">CONTACTS</Link>
                 </ul>
             </div>
         </nav>

     )
}
export default Burger_menu_Header;