import React from "react";
import styles from "./QuickView.module.css";
import { IoClose } from "react-icons/io5";


const QuickView = (props,{isOpen, onClose}) => {
    // console.log(props.onClose)
    // console.log(props.isOpen)
    let doesOldPriceExist;
    if(props.oldprice === ''){
        doesOldPriceExist= false;
    }else{
        doesOldPriceExist= true;
    }
    return(
         <>
            {
                props.isOpen && (
                <div className={styles.container}>
                    <div className={styles.block_ProductCard_Quick_View}>
                        <div className={styles.content_ProductCard_Quick_View}>
                            <div className={styles.imgBlock_Quick_View}><img src={props.img} alt=""/></div>
                            <div className={styles.infoBlock_Quick_View}>
                                <div className={styles.name_Quick_View}>{props.name}</div>
                                <div className={styles.price_Quick_View}>
                                    <span className={`${styles.oldPrice_Quick_View} ${doesOldPriceExist ? '' : styles.noActive}`}>${props.oldprice}</span>
                                    <span className={styles.newPrice_Quick_View}>${props.price}</span>
                                </div>
                                <div className={styles.SKU_Quick_View}>SKU: {props.SKU}</div>
                                <div className={styles.quantity_Quick_View}></div>
                                <button className={styles.button_Quick_View}>Add to Cart</button>
                                <a href={'/product/' + props.id} className={styles.viewMoreDetails_Quick_View}>View More Details</a>
                            </div>
                            <button className={styles.close_btn_Quick_View} onClick={()=>props.onClose()}><IoClose /></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default QuickView;