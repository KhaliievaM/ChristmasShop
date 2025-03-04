import React, {useState,useEffect} from 'react';
import styles from './Header.module.css';
import {Link} from "react-router-dom";
import facebookBlack from "../../Multimedia/104498_facebook_icon.png";
import instagramBlack from "../../Multimedia/7156617_instagram_social_media_icon.png";
import pinterestBlack from "../../Multimedia/7156612_pinterest_social_media_icon.png";
import Cart_Menu_In_Header from "../Menu/Cart_Menu_In_Header/Cart_Menu_In_Header";
import Burger_menu_Header from "./Burger_menu_Header/Burger_menu_Header";
 const Header = (props) => {
        const [cartMenuActive, setCartMenuActive] = useState(false);
        const [menuActive, setMenuActive] = useState(false);
        const [showFirstText, setShowFirstText] = useState(true);                                       //useState для зберігання стану, який визначає, який текст відображати
        useEffect(() => {                                                                             //useEffect для створення інтервалу, який буде змінювати стан кожну секунду
            const interval = setInterval(() => {
                setShowFirstText(prev => !prev);                                                                  //рендеримо текст в залежності від значення showFirstText
            }, 5000);
            return () => clearInterval(interval);                                                                       // Очищення інтервалу при демонтажі компонента
        }, []);
        return (
            <header className={styles.header}>
                <div className={styles.redHead}>
                    {showFirstText ? (
                        <h1>ORDER ONLINE today</h1>
                    ) : (
                        <h1>Free shipping on orders over $50</h1>
                    )}
                </div>
                <div className={styles.whiteHead}>
                    <div className={styles.whiteHead_container}>
                        <div className={styles.whiteHead_header_title_burger}>
                            <h1 className={styles.whiteHead_header_title_h1}>THE CHRISTMAS BOUTIQUE</h1>
                            <div className={styles.header_burger_container}>
                                <Burger_menu_Header menuActive={menuActive} setMenuActive={setMenuActive}/>
                                <div className={`${styles.header_burger} ${menuActive ? styles.active : ''}`}
                                     onClick={() => setMenuActive(!menuActive)}>   {/*className={styles.header_burger}{styles[menuActive ? `${class1} ${class2}` : 'header_burger']}>{styles[`header_burger ${menuActive ? 'active' : ''}`]}*/}
                                    <span></span>

                                </div>
                            </div>
                        </div>
                        <div className={styles.whiteHead_menu}>
                            <div className={styles.whiteHead_menu_socialMediaButton}>
                                <a href="https://www.facebook.com/wix" target="_blank" rel="noopener">
                                    <img src={facebookBlack} alt=""/>
                                </a>
                                <a href="https://www.instagram.com/wix/" target="_blank" rel="noopener">
                                    <img src={instagramBlack} alt=""/>
                                </a>
                                <a href="https://www.pinterest.com/wixcom/" target="_blank" rel="noopener">
                                    <img src={pinterestBlack} alt=""/>
                                </a>
                            </div>
                            <nav className={styles.navigation}>
                                <ul className={styles.menu}>
                                    <Link to="/">HOME</Link>
                                    <Link to="/shopAll">SHOP ALL</Link>
                                    <Link to="/christmasTrees">CHRISTMAS TREES</Link>
                                    <Link to="/uniqueOrnaments">UNIQUE ORNAMENTS</Link>
                                    <Link to="/holidayLights">HOLIDAY LIGHTS</Link>
                                    <Link to="/about">ABOUT</Link>
                                    <Link to="/contacts" >CONTACTS</Link>
                                </ul>
                            </nav>
                            <div className={styles.whiteHead_menu_logAndCart}>
                                <div className={styles.container_logAndCart}>
                                <button className={styles.logIn}>
                                    <div className={styles.logInImage}></div>
                                    <div>Log In</div>
                                </button>
                                <button className={styles.cart}>   {/* onClick={() => {setCartMenuActive(true)}}*/}
                                    <Cart_Menu_In_Header onClose={()=>setCartMenuActive(false)} isActiveCart={cartMenuActive}/>
                                </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </header>
        )
    }

export default Header;