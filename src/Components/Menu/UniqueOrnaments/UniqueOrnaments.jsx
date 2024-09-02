import React from 'react';
import styles from "./UniqueOrnaments.module.css";
import {Link} from "react-router-dom";

const UniqueOrnaments = () => {
    return (
        <div className={styles.marginContainer}>
            <div className={styles.container_UniqueOrnaments}>
                <div className={styles.navBlock_UniqueOrnaments}>
                    <Link to="/" className={styles.linkHome}>Home</Link>
                    &#10095;
                    <div>Unique Ornaments</div>
                </div>
                <div className={styles.headBlock_UniqueOrnaments}>
                    <img
                        src="https://static.wixstatic.com/media/84770f_6d3cbb8d2eee4cecb35fa530aa6a3a1d~mv2.jpeg/v1/fill/w_2216,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6d3cbb8d2eee4cecb35fa530aa6a3a1d~mv2.jpeg"
                        alt="" fetchPriority="high"  className={styles.backImage}/>
                    <h2 className={styles.h2_UniqueOrnaments}>Unique Ornaments</h2>
                </div>
            </div>
        </div>
    )
}
export default UniqueOrnaments;
