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
                <div className={styles.footer_headBlock}>                                                               {/*ГОЛОВНИЙ БЛОК*/}
                    <div className={styles.footer_headBlock_deer}></div>                                                {/*картинка оленя*/}
                    <h2 className={styles.footer_headBlock_h2}>The Christmas Boutique</h2>                              {/*назва магазину*/}
                    <nav className={styles.footer_headBlock_nav}>                                                       {/*перелік категорій/відділів*/}
                        <ul className={styles.menu}>
                            <Link to="/">HOME</Link>
                            <span>&#10072;</span>
                            <Link to="/shopAll">SHOP ALL</Link>
                            <span>&#10072;</span>
                            <Link to="/christmasTrees">CHRISTMAS TREES</Link>
                            <span>&#10072;</span>
                            <Link to="/uniqueOrnaments">UNIQUE ORNAMENTS</Link>
                            <span>&#10072;</span>
                            <Link to="/holidayLights">HOLIDAY LIGHTS</Link>
                            <span>&#10072;</span>
                            <Link to="/about">ABOUT</Link>
                            <span>&#10072;</span>
                            <Link to="/contacts">CONTACTS</Link>
                        </ul>
                    </nav>
                </div>
                <div className={styles.footer_mediumBlock}>                                                             {/*ЦЕНТРАЛЬНИЙ БЛОК/інформація+соц.мережі*/}
                    <div>Follow us and have a Merry Christmas</div>
                    <div className={styles.footer_mediumBlock_socialMediaButton}>                                       {/*facebook/instagram/pinterest*/}
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
                    <div className={styles.footer_mediumBlock_a}>                                                       {/*інформація доставка,повернення,питання*/}
                        <Link to="/shippingAndReturns" className={styles.informLink}>Shipping & Returns</Link>
                        <Link to="/privacyPolicy" className={styles.informLink}>Privacy Policy</Link>
                        <Link to="/FAQ" className={styles.informLink}>FAQ</Link>
                    </div>
                </div>
                <div className={styles.footer_footBlock}>&#169; 2035 by The Christmas Boutique . Powered and secured by
                    <a href="https://uk.wix.com/?utm_campaign=vir_created_with" target="_blank" rel="noopener"> Wix </a>{/*НИЖНІЙ БЛОК*/}
                </div>
            </div>
        </footer>
    );
}
export default Footer;