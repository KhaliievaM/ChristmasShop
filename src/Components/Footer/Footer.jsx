import React from 'react';
import styles from './Footer.module.css';

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
                            <li>HOME</li>
                            <span>&#10072;</span>
                            <li>SHOP ALL</li>
                            <span>&#10072;</span>
                            <li>CHRISTMAS TREES</li>
                            <span>&#10072;</span>
                            <li>UNIQUE ORNAMENTS</li>
                            <span>&#10072;</span>
                            <li>HOLIDAY LIGHTS</li>
                            <span>&#10072;</span>
                            <li>ABOUT</li>
                            <span>&#10072;</span>
                            <li>CONTACTS</li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.footer_mediumBlock}>
                    <div>Follow us and have a Merry Christmas</div>
                    <div className={styles.footer_mediumBlock_socialMediaButton}>
                        <button className={styles.footer_mediumBlock_socialMediaButton_facebookButton}></button>
                        <button className={styles.footer_mediumBlock_socialMediaButton_instagramButton}></button>
                        <button className={styles.footer_mediumBlock_socialMediaButton_pinterestButton}></button>
                    </div>
                    <div className={styles.footer_mediumBlock_a}>
                        <a href="src/Components/Footer/Footer">Shipping & Returns</a>
                        <a href="src/Components/Footer/Footer">Privacy Policy</a>
                        <div>FAQ</div>
                    </div>
                </div>
                <div className={styles.footer_footBlock}>&#169; 2035 by The Christmas Boutique . Powered and secured by <a href="src/Components/Footer/Footer"> Wix </a></div>
            </div>
        </footer>
    );
}
export default Footer;