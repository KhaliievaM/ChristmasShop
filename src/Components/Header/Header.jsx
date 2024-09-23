import React, {useState} from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import Home from "../Menu/Home/Home";

const Header = (props) => {
     const handleClick = props.handleClick;
     const ref = props.contacts;
    // console.log("from header")
    // console.log(handleClick)
    // console.log(ref)

    const [menuActive, setMenuActive] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.redHead}>ORDER ONLINE today</div>    {/*<div>free shipping on orders over $50</div>*/}
            <div className={styles.whiteHead}>
                <div className={styles.whiteHead_container}>
                    <div className={styles.whiteHead_header_title_burger}>
                        <h1 className={styles.whiteHead_header_title_h1}>THE CHRISTMAS BOUTIQUE</h1>
                        <div className={styles.header_burger_container}>
                            <div className={`${styles.header_burger} ${menuActive ? styles.active : ''}`} onClick={()=>setMenuActive(!menuActive)}>   {/*className={styles.header_burger}{styles[menuActive ? `${class1} ${class2}` : 'header_burger']}>{styles[`header_burger ${menuActive ? 'active' : ''}`]}*/}
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.whiteHead_menu}>
                    <div className={styles.whiteHead_menu_socialMediaButton}>
                        <button className={styles.facebookButton}></button>
                        <button className={styles.instagramButton}></button>
                        <button className={styles.pinterestButton}></button>
                    </div>
                    <nav className={styles[menuActive ? 'open' : 'navigation']}>
                        <ul>
                            <li><button className={styles.logIn}><div className={styles.logInImage}></div>Log In</button></li>
                            <Link to="/" className={styles.menu}>HOME</Link>
                            <Link to="/shopAll" className={styles.menu}>SHOP ALL</Link>
                            <Link to="/christmasTrees" className={styles.menu}>CHRISTMAS TREES</Link>
                            <Link to="/uniqueOrnaments" className={styles.menu}>UNIQUE ORNAMENTS</Link>
                            <Link to="/holidayLights" className={styles.menu}>HOLIDAY LIGHTS</Link>
                            <Link to="/about" className={styles.menu}>ABOUT</Link>
                            {/*<Link to="/contacts" className={styles.menu}>CONTACTS</Link>*/}
                            <li onClick={()=>handleClick(ref)}>CONTACTS</li>
                        </ul>
                    </nav>
                    <div className={styles.whiteHead_menu_logAndCart}>
                        <button className={styles.logIn}>
                            <div className={styles.logInImage}></div>
                            Log In
                        </button>
                        <button className={styles.cart}>CART <div className={styles.cartCounter}>26</div></button>
                    </div>
                </div>
                </div>
            </div>

        </header>
    )
}
export default Header;