import React from "react";
import styles from "./ProductTemplate.module.css"
import {Link} from "react-router-dom";
import ProductPage from "./Product_Page/ProductPage";

const ProductTemplate = (props) => {
    let isOldPrice;
    if(props.oldprice === ''){
        isOldPrice= false;
    }else{
        isOldPrice= true;
    }

    return (
        <div className={styles.container_ProductCard}>
            <div className={styles.img_quickView_ProductCard}>
                <img src={props.img} alt=""  fetchPriority="high"/>
                <div  className={styles.quickView_ProductCard}>
                    <button  className={styles.quickView_ProductCard_text}>Quick View</button>
                </div>
            </div>
            <div className={styles.productAction_ProductCard}>
                    <a href={'/product/' + props.id} className={styles.goToProductPage_ProductCard}>
                    <div className={styles.productName_ProductCard}>{props.name}</div>
                    <div className={styles.redLine_ProductCard}></div>
                    <div className={styles.productPrice_ProductCard}>
                        <span className={`${styles.oldProductPrice_ProductCard} ${isOldPrice ? '' : styles.noActive}`}>${props.oldprice}</span>
                        <span className={styles.newProductPrice_ProductCard}>${props.price}</span>
                    </div>
                    </a>
                <button className={styles.addToCart_Button_ProductCard}>Add to Cart</button>
            </div>
        </div>
    )
}
export default ProductTemplate;