import React from 'react';
import styles from './Footer.module.css';
import {Link} from "react-router-dom";
import facebookWhite from "../../Multimedia/facebook_white_icon.png";
import instagramWhite from "../../Multimedia/instagram_white_icon.png";
import pinterestWhite from "../../Multimedia/pinterest_white_icon.png";

const Footer = (props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_headBlock}>
                    <div className={styles.footer_headBlock_deer}></div>
                    <h2 className={styles.footer_headBlock_h2}>The Christmas Boutique</h2>
                    <nav className={styles.footer_headBlock_nav}>
                        <ul>
                            {/*<li><button className={styles.logIn}><div className={styles.logInImage}></div>Log In</button></li>*/}
                            <Link to="/" className={styles.menu}>HOME</Link>
                            <span>&#10072;</span>
                            <Link to="/shopAll" className={styles.menu}>SHOP ALL</Link>
                            <span>&#10072;</span>
                            <Link to="/christmasTrees" className={styles.menu}>CHRISTMAS TREES</Link>
                            <span>&#10072;</span>
                            <Link to="/uniqueOrnaments" className={styles.menu}>UNIQUE ORNAMENTS</Link>
                            <span>&#10072;</span>
                            <Link to="/holidayLights" className={styles.menu}>HOLIDAY LIGHTS</Link>
                            <span>&#10072;</span>
                            <Link to="/about" className={styles.menu}>ABOUT</Link>
                            <span>&#10072;</span>
                            <Link to="/contacts" className={styles.menu}>CONTACTS</Link>
                            {/*<li onClick={()=>handleClick(ref)}>CONTACTS</li>*/}
                        </ul>
                    </nav>
                </div>
                <div className={styles.footer_mediumBlock}>
                    <div>Follow us and have a Merry Christmas</div>
                    <div className={styles.footer_mediumBlock_socialMediaButton}>
                        <a href="https://www.facebook.com/wix"  target="_blank" rel="noopener">
                            <img src={facebookWhite} alt=""/>
                        </a>
                        <a href="https://www.instagram.com/wix/"  target="_blank" rel="noopener">
                            <img src={instagramWhite} alt=""/>
                        </a>
                        <a href="https://www.pinterest.com/wixcom/"  target="_blank" rel="noopener">
                            <img src={pinterestWhite} alt=""/>
                        </a>
                    </div>
                    <div className={styles.footer_mediumBlock_a}>
                        <Link to="/shippingAndReturns" className={styles.informLink}>Shipping & Returns</Link>
                        <Link to="/privacyPolicy" className={styles.informLink}>Privacy Policy</Link>
                        <Link to="/FAQ" className={styles.informLink}>FAQ</Link>
                    </div>
                </div>
                <div className={styles.footer_footBlock}>&#169; 2035 by The Christmas Boutique . Powered and secured by <a href="src/Components/Footer/Footer"> Wix </a></div>
            </div>
        </footer>
    );
}
export default Footer;