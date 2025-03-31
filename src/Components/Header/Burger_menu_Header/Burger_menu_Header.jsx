// import React from "react";
// import styles from "./Burger_menu_Header.module.css";
// import {Link} from "react-router-dom";
// import { IoPersonCircle } from "react-icons/io5";
//
// const Burger_menu_Header = (props) => {
//     let isItHome = false;
//     let isItShopAll = false;
//     let isItChristmasTrees = false;
//     let isItUniqueOrnaments = false;
//     let isItHolidayLights = false;
//     let isItAbout = false;
//     let isItContacts = false;
//     if (window.location.pathname === "/"){
//         isItHome = true;
//     }else if(window.location.pathname === "/shopAll"){
//         isItShopAll = true;
//     }else if(window.location.pathname === "/christmasTrees"){
//         isItChristmasTrees = true;
//     }else if(window.location.pathname === "/uniqueOrnaments"){
//         isItUniqueOrnaments = true;
//     }else if(window.location.pathname === "/holidayLights"){
//         isItHolidayLights = true;
//     }else if(window.location.pathname === "/about"){
//         isItAbout = true;
//     }else if(window.location.pathname === "/contacts"){
//         isItContacts = true;
//     }
//
//      return(
//          <nav className={styles[props.menuActive ? 'open' : 'none']}>
//              <div className={styles.container_Burger_menu}>
//                  <button className={styles.logIn}>
//                      <div className={styles.logInImage}><IoPersonCircle /></div>
//                      Log In
//                  </button>
//                  <ul className={styles.menu} onClick={() => props.setMenuActive(false)}>
//                      <Link to="/" className={styles[isItHome ? 'active' : '']}>HOME</Link>
//                      <Link to="/shopAll" className={styles[isItShopAll ? 'active' : '']}>SHOP ALL</Link>
//                      <Link to="/christmasTrees" className={styles[isItChristmasTrees ? 'active' : '']}>CHRISTMAS TREES</Link>
//                      <Link to="/uniqueOrnaments" className={styles[isItUniqueOrnaments ? 'active' : '']}>UNIQUE ORNAMENTS</Link>
//                      <Link to="/holidayLights" className={styles[isItHolidayLights ? 'active' : '']}>HOLIDAY LIGHTS</Link>
//                      <Link to="/about" className={styles[isItAbout ? 'active' : '']}>ABOUT</Link>
//                      <Link to="/contacts" className={styles[isItContacts ? 'active' : '']}>CONTACTS</Link>
//                  </ul>
//              </div>
//          </nav>
//
//      )
// }
// export default Burger_menu_Header;
import React from "react";
import styles from "./Burger_menu_Header.module.css";
import { Link, useLocation } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

const Burger_menu_Header = (props) => {
    const location = useLocation();

    const menuItems = [
        { path: "/", label: "HOME" },
        { path: "/shopAll", label: "SHOP ALL" },
        { path: "/christmasTrees", label: "CHRISTMAS TREES" },
        { path: "/uniqueOrnaments", label: "UNIQUE ORNAMENTS" },
        { path: "/holidayLights", label: "HOLIDAY LIGHTS" },
        { path: "/about", label: "ABOUT" },
        { path: "/contacts", label: "CONTACTS" },
    ];

    return (
        <nav className={styles[props.menuActive ? 'open' : 'none']}>
            <div className={styles.container_Burger_menu}>
                <button className={styles.logIn}>
                    <div className={styles.logInImage}><IoPersonCircle /></div>
                    Log In
                </button>
                <ul className={styles.menu} onClick={() => props.setMenuActive(false)}>
                    {menuItems.map(item => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={styles[location.pathname === item.path ? 'active' : '']}
                        >
                            {item.label}
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Burger_menu_Header;
