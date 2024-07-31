import React, {useState} from 'react';
import styles from './Header.module.css';
import Home from "./Menu/Home/Home";

const Header = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    return (
        <header className={styles.header}>
            <div className={styles.redHead}>ORDER ONLINE today</div>
            <div className={styles.whiteHead}>
                <div className={styles.header_title_burger}>
                    <h1 className={styles.h1Font}>THE CHRISTMAS BOUTIQUE</h1>
                    <div className={styles.header_burger_container}>
                        <div className={`${styles.header_burger} ${menuActive ? styles.active : ''}`} onClick={()=>setMenuActive(!menuActive)}>   {/*className={styles.header_burger}{styles[menuActive ? `${class1} ${class2}` : 'header_burger']}>{styles[`header_burger ${menuActive ? 'active' : ''}`]}*/}
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className={styles.menu}>
                    <div className={styles.socialMediaButton}>
                        <button className={styles.facebookButton}></button>
                        <button className={styles.instagramButton}></button>
                        <button className={styles.pinterestButton}></button>
                    </div>
                    <nav className={styles[menuActive ? 'open' : 'navigation']}>
                        <ul>
                            <li><button className={styles.logIn}><div className={styles.logInImage}></div>Log In</button></li>
                            <li>HOME</li>
                            <li>SHOP ALL</li>
                            <li>CHRISTMAS TREES</li>
                            <li>UNIQUE ORNAMENTS</li>
                            <li>HOLIDAY LIGHTS</li>
                            <li>ABOUT</li>
                            <li>CONTACTS</li>
                        </ul>
                    </nav>
                    <div className={styles.logAndCart}>
                        <button className={styles.logIn}>
                            <div className={styles.logInImage}></div>
                            Log In
                        </button>
                        <button className={styles.cart}>CART <div className={styles.cartCounter}>26</div></button>
                    </div>
                </div>
            </div>

        </header>
    )
}
export default Header;