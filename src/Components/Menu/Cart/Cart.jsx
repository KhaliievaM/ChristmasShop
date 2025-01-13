import React from "react";
import styles from "./Cart.module.css"
import { PiNotePencil, PiTag } from "react-icons/pi";
import { RiLock2Fill } from "react-icons/ri";
import {useState} from "react";
import ProductsInCart from "./ProductsInCart/ProductsInCart"

const Cart = () => {
    const [isActiveAddPromo, setActivePromo] = useState(false);
    const [isActiveNote, setActiveNote] = useState(false);
    const [reloadTotalSum, setReloadTotalSum] = useState(0);
    const reloadComponent = (newTotalSum) => {                                                                          // функція оновлення загальної суми
        setReloadTotalSum(newTotalSum);
    };


    let productsInCart = [];
    let totalSum = 0;                                                                                                   //загальна сума
    for (let a in localStorage) {
        if (!localStorage.hasOwnProperty(a)) continue;
        if (a.startsWith('product')) {
            let prodObj = JSON.parse(localStorage[a]);

            totalSum += Number(prodObj.totalPrice);                                                                     //розрахунок(додавання) загальної суми
            productsInCart.push(<ProductsInCart onChange={reloadComponent} name={prodObj.name} img={prodObj.img} id={prodObj.id} quantity={prodObj.quantity} oldprice={prodObj.oldprice} totalPrice={prodObj.totalPrice} price={prodObj.price}/>)
        }

    }

    return(
        <div className={styles.container_Cart}>
            <div className={styles.margin_container_Cart}>
                <div className={styles.product_Block_Cart}>
                    <div className={styles.name_Column_Block_Cart}>
                        <h3 className={styles.h3_nameCart_Cart}>My cart</h3>
                    </div>
                    {productsInCart}
                    <div className={styles.additional_opportunities_Section_Cart}>
                        <div className={styles.add_Promo_Code_Cart}>
                            <button className={styles.btn_add_Promo_Code_Cart} onClick={()=>setActivePromo(!isActiveAddPromo)}><PiTag />  Enter a promo code</button>
                            <div className={`${styles.hidden_Block_Promo_Code_Cart} ${isActiveAddPromo ? styles.active : ''}`}>
                                <input type="text" placeholder="Enter a promo code" className={styles.input_add_Promo}/>
                                <input type="button" value="Apply" className={styles.btn_add_Promo}/>
                            </div>
                        </div>
                        <div className={styles.add_a_Note_Cart}>
                            <button className={styles.btn_add_a_Note_Cart} onClick={()=>setActiveNote(!isActiveNote)}><PiNotePencil />  Add a note</button>
                            <div  className={`${styles.hidden_Block_Note_Cart} ${isActiveNote ? styles.active : ''}`}>
                                <textarea name="note" id="" cols="50" rows="6" placeholder="Instructions? Special requests? Add them here." className={styles.txtArea_add_Note}></textarea>
                                <button className={styles.btn_add_Note}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.inform_Block_Cart}>
                    <div className={styles.name_Column_Block_Cart}>
                        <h3  className={styles.h3_nameCart_Cart}>Order summary</h3>
                    </div>
                    <div className={styles.price_delivery_Block_Cart}>
                        <div className={styles.price_Block_Cart}>
                            <div>Subtotal</div>
                            <div>$ {totalSum}</div>
                        </div>
                        <a href="" className={styles.choose_delivery_Cart}>Estimate Delivery</a>
                    </div>
                    <div className={styles.total_price_Block_Cart}>
                        <div className={styles.total_price_Cart}>
                            <div>Total</div>
                            <div>$ {totalSum}</div>
                        </div>
                        <div className={styles.checkout_Block_Cart}>
                            <button className={styles.btn_Checkout_Cart}>Checkout</button>
                            <div className={styles.secure_Checkout_Cart}><RiLock2Fill />  Secure Checkout</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart;