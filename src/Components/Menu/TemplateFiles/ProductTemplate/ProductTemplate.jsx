import React, {useState} from "react";
import styles from "./ProductTemplate.module.css"
import {Link} from "react-router-dom";
import ProductPage from "./Product_Page/ProductPage";
import QuickView from "./QuickView/QuickView";

const ProductTemplate = (props) => {
    let isOldPrice;
    if(props.oldprice === ''){
        isOldPrice= false;
    }else{
        isOldPrice= true;
    }

    const [isProductQuickView,setProductQuickView] = useState(false);


    return (
        <div className={styles.container_ProductCard}>
            <div className={styles.img_quickView_ProductCard}>
                <a href={'/product/' + props.id}><img src={props.img} alt=""  fetchPriority="high"/></a>
                <div  className={styles.quickView_ProductCard}>
                    <button  className={styles.quickView_ProductCard_text} onClick={()=>{setProductQuickView(true)}}>Quick View</button>
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

           <QuickView name={props.name} img={props.img} price={props.price}
                      oldprice={props.oldprice} SKU={props.SKU} id={props.id} isOpen={isProductQuickView} onClose={()=>setProductQuickView(false)}/>

        </div>
    )
}
export default ProductTemplate;