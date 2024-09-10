import React from "react";
import styles from "./Trees.module.css"

const Trees = (props) => {
    //const products = props.product;
    return (
        <div className={styles.container_ProductCard}>
            <div className={styles.img_quickView_ProductCard}>
                <img src={props.img} alt=""  fetchPriority="high"/>
                {/*<img*/}
                {/*    src="https://static.wixstatic.com/media/84770f_b0aad5af51b54bda937415b47907945f~mv2_d_1500_1500_s_2.jpg/v1/fill/w_850,h_850,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_b0aad5af51b54bda937415b47907945f~mv2_d_1500_1500_s_2.jpg"*/}
                {/*    alt="" style="width: 850px; height: 850px; object-fit: cover; object-position: 50% 50%;"*/}
                {/*    fetchPriority="high"/>*/}
                <div  className={styles.quickView_ProductCard}>
                    <button  className={styles.quickView_ProductCard_text}>Quick View</button>
                </div>
            </div>
            <div className={styles.productAction_ProductCard}>
                <a href="" className={styles.goToProductPage_ProductCard}>
                    <div className={styles.productName_ProductCard}>{props.name}</div>
                    <div className={styles.redLine_ProductCard}></div>
                    <div className={styles.productPrice_ProductCard}>{props.price}</div>
                </a>
                <button className={styles.addToCart_Button_ProductCard}>Add to Cart</button>
            </div>
        </div>
    )
}
export default Trees;