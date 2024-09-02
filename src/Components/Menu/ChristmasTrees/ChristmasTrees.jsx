import React from 'react';
import styles from "./ChristmasTrees.module.css";
import {Link} from "react-router-dom";

const ChristmasTrees = () => {
    return (
        <div className={styles.marginContainer}>
        <div className={styles.container_ChristmasTrees}>
            <div className={styles.navBlock_ChristmasTrees}>
                <Link to="/" className={styles.linkHome}>Home</Link>
                &#10095;
                <div>Christmas Trees</div>
            </div>
            <div className={styles.headBlock_ChristmasTrees}>
                <img
                    src="https://static.wixstatic.com/media/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg/v1/fill/w_2216,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg"
                    alt="" fetchPriority="high"  className={styles.backImage}/>
                <h2 className={styles.h2_ChristmasTrees}>Christmas Trees</h2>
            </div>
        </div>
        </div>
    )
}
export default ChristmasTrees;