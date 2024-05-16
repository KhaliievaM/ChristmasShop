import React from 'react';
import styles from './Header.module.css';

const Header = (props) =>{
    return(
        <div>
            <div><h1>THE CHRISTMAS BOUTIQUE</h1></div>
            <div  className={styles.navigation}>
                <div>
                    <button className={styles.facebookButton}></button>
                    <button className={styles.instagramButton}></button>
                    <button className={styles.pinterestButton}></button></div>
                <div  className={styles.menu}>
                    <div>HOME</div>
                    <div>SHOP ALL</div>
                    <div>CHRISTMAS TREES</div>
                    <div>UNIQUE ORNAMENTS</div>
                    <div>HOLIDAY LIGHTS</div>
                    <div>ABOUT</div>
                    <div>CONTACTS</div>
                </div>
                <div><button></button>
                    <button></button></div>
            </div>

        </div>
    )
}
export default Header;