import React from "react";
import styles from "./ProductPage.module.css";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import {useParams} from "react-router-dom";
import products from "../../../../Products";
import InformSection from "./InformSection_ProductPage";

let getState = (id)=>{
    for(let obj in products){
        for(let inObj of products[obj]){
            if(inObj.id === id){
                return inObj;
            }
        }
    }
}

const ProductPage = (props) =>{
    const params = useParams();
    let state = {};
    if (params.id !== undefined) {
        let number = parseInt(params.id);
        state = getState(number);
    }
    let infoSections = state.infoSection.map(d => <InformSection info={d.info} name={d.name}/>)
    return(
        <div className={styles.marginContainer_ProductPage}>
            <div className={styles.container_ProductPage}>
                <div className={styles.navBlock_ProductPage}>
                    <div className={styles.wayFrom_ProductPage}></div>
                    <div className={styles.turnPages_ProductPage}>
                        <button className={styles.btn_navBlock}> <GoChevronLeft /> Prev </button>
                        <div>|</div>
                        <button className={styles.btn_navBlock}> Next <GoChevronRight /> </button>
                    </div>
                </div>
                <div className={styles.product_Card}>
                    <div className={styles.imgBlock_Product}>
                        <img src={state.img} alt=""  fetchPriority="high"/>
                        <div>{state.about}</div>
                    </div>
                    <div className={styles.infoBlock_Product}>
                        <div className={styles.name_Product}>{state.name}</div>
                        <div className={styles.SKU_Product}>SKU: {state.SKU}</div>
                        <div className={styles.price_Product}>${state.price}</div>
                        <div className={styles.Quantity_Product}>Quantity</div>
                        <div className={styles.button_Product}>
                            <button className={styles.button_Add_to_Cart_Product}>Add to Cart</button>
                            <button className={styles.button_Buy_Now_Product}>Buy Now</button>
                        </div>
                        <div className={styles.informSectionsBlock_Product}>
                            {infoSections}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage;