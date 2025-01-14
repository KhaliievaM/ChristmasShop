import React from "react";
import styles from "./ProductPage.module.css";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
import {GoDash, GoPlus} from "react-icons/go";
import {Link, useParams} from "react-router-dom";
import products from "../../../../Products";
import InformSection from "./InformSection_ProductPage";
import {useState} from "react";

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
    let number;
    if (params.id !== undefined) {
        number = parseInt(params.id);
        state = getState(number);
    }


    let id = parseInt(params.id);
    let nameParentPage = '';
    let link = '';
    for(let obj in products){
        for(let inObj of products[obj]){
            if(inObj.id === id){
                if(obj === 'productsChristmasTrees'){
                    nameParentPage = 'Christmas Trees';
                    link = '/christmasTrees';
                }else if(obj === 'productsUniqueOrnaments'){
                    nameParentPage = 'Unique Ornaments';
                    link = '/uniqueOrnaments';
                }else if(obj === 'productsHolidayLights'){
                    nameParentPage = 'Holiday Lights';
                    link = '/holidayLights';
                }
            }
        }
    }
    let minValue = 1;                                                                                                   //мінімальна кількість продукту
    let maxValue = 20;                                                                                                  //максимальна кількість продукту
    let totalPrice;
    let incrementedQuantity;
    let decrementQuantity;
    let stateId = state.id;
    const [quantity, setQuantity] = useState(minValue);

    const IncrementCounter = () => {                                                                                    //Increment
        incrementedQuantity = quantity + 1;                                                                             //додавання одиниці до quantity продукту
        if (incrementedQuantity <= maxValue) {                                                                          //якщо оновлена кількість менша за максимальну кількість
            setQuantity(incrementedQuantity);                                                                           //оновлення стану(збільшення кількості)
        }
    };
    const DecrementItems = () => {
        decrementQuantity = quantity - 1;                                                                               //віднімання одиниці від quantity продукту
        if (decrementQuantity >= minValue) {                                                                            //якщо оновлена кількість більша за мінімальну кількість
            setQuantity(decrementQuantity);                                                                             //оновлення стану(зменшення кількості)
        }
    };

    let infoSections = state.infoSection.map(d => <InformSection info={d.info} name={d.name}/>)

    let addProductToCart = () =>{                                                                                       //функція додавання продукту в кошик(та в localStorage)
        if(stateId !== null && stateId !== undefined){                            //перевірка чи 'id'!== null і чи id цього продукту = продукту,який ми додаємо в кошик
            totalPrice = Number(state.price) * quantity;                                                                //обчислення totalPrice продукту
            state.totalPrice = String(totalPrice);                                                                      //оновлення totalPrice продукту
            state.quantity = quantity;                                                                                  //оновлення quantity продукту
            localStorage.setItem("product"+stateId, JSON.stringify(state));                                //додавання продукту в localStorage (ключ(напр."product5") і значення(об'єкт))
            window.location.reload();                                                                                   //оновлення сторінки
        }
    }

    return(
        <div className={styles.marginContainer_ProductPage}>
            <div className={styles.container_ProductPage}>
                <div className={styles.navBlock_ProductPage}>
                    <div className={styles.wayFrom_ProductPage}>
                        <Link to="/" className={styles.path_links}>Home</Link> /
                        <Link to={link} className={styles.path_links}> {nameParentPage}</Link> /
                        <div className={styles.path_name}> {state.name}</div>
                    </div>
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
                        <div className={styles.Quantity_Product}>
                            <div className={styles.quantity_Name}>Quantity</div>
                            <div className={styles.quantity_Block}>
                                <button className={styles.quantity_btn_Block} onClick={DecrementItems}><GoDash/></button>
                                <input type="text" className={styles.quantity_input_Block} value={quantity}/>
                                <button className={styles.quantity_btn_Block} onClick={IncrementCounter}><GoPlus/></button>
                            </div>
                        </div>
                        <div className={styles.button_Product}>
                            <button className={styles.button_Add_to_Cart_Product} onClick={()=>addProductToCart()}>Add to Cart</button>
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