import React from 'react';
import styles from "./ShopAll.module.css";
import {Link} from "react-router-dom";

const ShopAll = () => {
    return(
        <div className={styles.marginContainer}>
        <div className={styles.container_ShopAll}>
            <div className={styles.navBlock_ShopAll}>
                <Link to="/" className={styles.linkHome}>Home</Link>
                &#10095;
                <div>All Products</div>
            </div>
            <div className={styles.headBlock_ShopAll}>
                <img
                    src="https://static.wixstatic.com/media/11062b_24409e13fc004ed1acf25161830fc9e6~mv2.jpg/v1/fill/w_1522,h_411,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_24409e13fc004ed1acf25161830fc9e6~mv2.jpg"
                    alt="" fetchPriority="high" className={styles.backImage}/>
                <h2 className={styles.h2_ShopAll}>All Products</h2>
            </div>
        </div>
        </div>
    )
}
export default ShopAll;
