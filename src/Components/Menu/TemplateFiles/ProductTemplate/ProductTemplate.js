import React from "react";
import styles from "./ProductTemplate.module.css"

const ProductTemplate = (props) => {
    let isOldPrice;
    if(props.oldprice === ''){
        isOldPrice= false;
    }else{
        isOldPrice= true;
    }
    // console.log(props.oldprice)
    // console.log(isOldPrice)
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