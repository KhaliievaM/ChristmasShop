
import React, { useState } from 'react';
import styles from "./Cart_Menu_In_Header.module.css";
import {Link} from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import ProductBlockCartHeader from "./ProductBlock_InCart/ProductBlockCartHeader";


const Sidebar = ({ isOpen, toggleSidebar }) => {
    let totalSumKey = 'totalSum';
    let productsInCart_Header = [];
    let totalSum = 0;
    for (let a in localStorage) {
        if (!localStorage.hasOwnProperty(a)) continue;
        if (a.startsWith('product')) {
            let prodObj = JSON.parse(localStorage[a]);
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            if (localStorage.getItem(totalSumKey) !== null) {
                totalSum += Number(prodObj.totalPrice);
                localStorage.setItem(totalSumKey, String(totalSum));
            }else{
                totalSum += Number(prodObj.totalPrice)
                localStorage.setItem(totalSumKey, String(totalSum));
            }

            productsInCart_Header.push(<ProductBlockCartHeader name={prodObj.name} img={prodObj.img} id={prodObj.id} quantity={prodObj.quantity} oldprice={prodObj.oldprice} totalPrice={prodObj.totalPrice} price={prodObj.price}/>)
        }

    }
    //console.log(localStorage)
    return (
        // <div className={styles.container_sidebar_Cart}> </div>
        <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
            <div className={styles.container_Cart_Menu_block}>
                <div className={styles.header_Cart_Menu_block} >
                    <div onClick={toggleSidebar} className={styles.arrow_toClose_Cart_Menu_block_header}><IoIosArrowForward /></div>
                    <h3>Cart</h3>
                </div>
                <div className={styles.main_Cart_Prod_block}>
                    <div className={styles.center_Cart_Menu_block}>
                        <div className={styles.products_inCart_Cart_center}>
                            {productsInCart_Header}
                        </div>
                        <div className={styles.totalPrice_inCart_Cart_center}></div>
                    </div>
                </div>
                <div className={styles.footer_Cart_Menu_block}>
                    <div className={styles.footer_Subtotal}> <h3 className={styles.footer_Subtotal_h3}>Subtotal</h3> <div className={styles.footer_Subtotal_price}>$ {totalSum}</div></div>
                    <Link to="/cart" className={styles.button_to_Cart_Component_footer} onClick={toggleSidebar}>View Cart</Link>
                </div>
            </div>
        </div>
    );
};


const Cart_Menu_In_Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    let counterOfProducts = localStorage.length - 1;

    return (
        <div className={styles.app}>
            <div className={styles.cart_counter_button} onClick={toggleSidebar}>
                <button className={styles.cart_button}>CART</button>
                <div className={styles.cartCounter}>{counterOfProducts}</div>
            </div>
            <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
};

export default Cart_Menu_In_Header;