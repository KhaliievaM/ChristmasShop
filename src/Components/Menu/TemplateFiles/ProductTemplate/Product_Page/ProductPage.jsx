import React from "react";
import styles from "./ProductPage.module.css";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import { GoPlus } from "react-icons/go";
import { GoDash } from "react-icons/go";
import {useParams} from "react-router-dom";
import products from "../../../../Products";

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
                            <section className={styles.informSection_Product}>
                                <div className={styles.informSection_head}>
                                    <h3 className={styles.informSection_head_h3}>Product Info</h3>
                                    <div className={styles.informSection_head_btn}>
                                    <GoPlus  className={styles.informSection_head_btnPlus}/>
                                    <GoDash  className={styles.informSection_head_btnMinus}/>
                                    </div>
                                </div>
                                    <p className={styles.informSection_body}>{state.info}</p>
                            </section>
                            <section className={styles.informSection_Product}>
                                <div className={styles.informSection_head}>
                                    <h3 className={styles.informSection_head_h3}>RETURN & REFUND POLICY</h3>
                                    <div className={styles.informSection_head_btn}>
                                    <GoPlus  className={styles.informSection_head_btnPlus}/>
                                    <GoDash  className={styles.informSection_head_btnMinus}/>
                                    </div>
                                </div>
                                    <p className={styles.informSection_body}>
                                        I’m a Return and Refund policy. I’m a great place to let your customers know what to do in case they are dissatisfied with their purchase.
                                        Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
                                    </p>
                            </section>
                             <section className={styles.informSection_Product}>
                                 <div className={styles.informSection_head}>
                                     <h3 className={styles.informSection_head_h3}>SHIPPING INFO</h3>
                                     <div className={styles.informSection_head_btn}>
                                     <GoPlus  className={styles.informSection_head_btnPlus}/>
                                     <GoDash  className={styles.informSection_head_btnMinus}/>
                                     </div>
                                 </div>
                                     <p className={styles.informSection_body}>
                                         I'm a shipping policy. I'm a great place to add more information about your shipping methods, packaging and cost.
                                         Providing straightforward information about your shipping policy is a great way to build trust and reassure your customers
                                         that they can buy from you with confidence.
                                     </p>
                        </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductPage;