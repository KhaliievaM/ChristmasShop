import React from "react";
import styles from "./ProductTemplate.module.css"

const ProductTemplate = (props) => {
    return (
        <div className={styles.container_ProductCard}>
            <div className={styles.img_quickView_ProductCard}>
                <img src={props.img} alt=""  fetchPriority="high"/>
                <div  className={styles.quickView_ProductCard}>
                    <button  className={styles.quickView_ProductCard_text}>Quick View</button>
                </div>
            </div>
            <div className={styles.productAction_ProductCard}>
                <a href="src/Components/Menu/TemplateFiles/ProductTemplate/ProductTemplate" className={styles.goToProductPage_ProductCard}>
                    <div className={styles.productName_ProductCard}>{props.name}</div>
                    <div className={styles.redLine_ProductCard}></div>
                    <div className={styles.productPrice_ProductCard}>{props.price}</div>
                </a>
                <button className={styles.addToCart_Button_ProductCard}>Add to Cart</button>
            </div>
        </div>
    )
}
export default ProductTemplate;