import React from "react";
import styles from "./QuickView.module.css";
import { IoClose } from "react-icons/io5";
import {GoDash, GoPlus} from "react-icons/go";
import {useState} from "react";


const QuickView = (props) => {                                                                                          //const QuickView = (props,{isOpen, onClose})
    let doesOldPriceExist;
    if(props.oldprice === ''){                                                                                          //перевірка чи існує стара ціна
        doesOldPriceExist= false;
    }else{
        doesOldPriceExist= true;
    }
    let minValue = 1;                                                                                                   //мінімальна кількість продукту
    let maxValue = 20;                                                                                                  //максимальна кількість продукту
    let prodId = props.id;
    let productKey = "product"+ prodId;
    let totalPrice;
    let incrementedQuantity;
    let decrementQuantity;

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

    let addProductToCart = () =>{                                                                                       //функція додавання продукту в кошик(та в localStorage)
        if(props.shopAllProducts !== undefined){                                                   //перевірка чи масив продуктів shopAll(загальна сторінка продуктів) не є undefined
            for(let prod of props.shopAllProducts){                                                        //перебір об'єктів (shopAll),пошук продукту, який ми хочемо додати в кошик
                let thisProductId = prod.id;                                                                            //id продукту
                if(thisProductId !== null && thisProductId === props.id){                        //перевірка чи 'id'!== null і чи id цього продукту = продукту,який ми додаємо в кошик
                    totalPrice = Number(props.price) * quantity;                                                        //обчислення totalPrice продукту
                    prod.totalPrice = String(totalPrice);                                                               //оновлення totalPrice продукту
                    prod.quantity = quantity;                                                                           //оновлення quantity продукту
                    localStorage.setItem(productKey, JSON.stringify(prod));                             //додавання продукту в localStorage (ключ(напр."product5") і значення(об'єкт))
                        window.location.reload();                                                                       //оновлення сторінки
                }
            }
        }else {
            for (let thisProd of props.arrayOfProducts) {       //перебір об'єктів(продуктів) в масиві сторінки(сторінка з ялинками, тощо) пошук продукту, який ми хочемо додати в кошик
                let thisProductId = thisProd.id;                                                                        //id продукту
                if(thisProductId !== null && thisProductId === props.id){                          //перевірка чи 'id'!== null і чи id цього продукту = продукту,який ми додаємо в кошик
                    totalPrice = Number(props.price) * quantity;                                                        //обчислення totalPrice продукту
                    thisProd.totalPrice = String(totalPrice);                                                           //оновлення totalPrice продукту
                    thisProd.quantity = quantity;                                                                       //оновлення quantity продукту
                    localStorage.setItem(productKey, JSON.stringify(thisProd));                //додавання продукту в localStorage (ключ(напр."product5") і значення(об'єкт))
                    window.location.reload();                                                                           //оновлення сторінки
                }
            }
        }
    }
    return(
         <>
            {
                 props.isOpen && (                                                                                      //перевірка чи вікно QuickView відкрите
                <div className={styles.container}>                                                                      {/*контейнер, що займає все вікно*/}
                    <div className={styles.block_ProductCard_Quick_View}>
                        <div className={styles.content_ProductCard_Quick_View}>                                         {/*вікно Quick View*/}
                            <div className={styles.imgBlock_Quick_View}><img src={props.img} alt=""/></div>             {/*зображення продукту*/}
                            <div className={styles.infoBlock_Quick_View}>                                               {/*інфо блок*/}
                                <div className={styles.name_Quick_View}>{props.name}</div>                              {/*назва продукту*/}
                                <div className={styles.price_Quick_View}>                                               {/*блок цін(стара, нова)*/}
                                    <span className={`${styles.oldPrice_Quick_View} ${doesOldPriceExist ? '' : styles.noActive}`}>${props.oldprice}</span>{/*перевірка чи є стара ціна*/}
                                    <span className={styles.newPrice_Quick_View}>${props.price}</span>                  {/*ціна*/}
                                </div>
                                <div className={styles.SKU_Quick_View}>SKU: {props.SKU}</div>                           {/*SKU*/}
                                <div className={styles.quantity_Quick_View}>                                            {/*блок quantity*/}
                                    <div className={styles.quantity_Name_Quick_View}>Quantity</div>
                                    <div className={styles.quantity_Block_Quick_View}>
                                        <button className={styles.quantity_btn_Block_Quick_View} onClick={DecrementItems}><GoDash/></button>    {/*зменшення кількості продукту*/}
                                        <input type="text" className={styles.quantity_input_Block_Quick_View} value={quantity}/>               {/* quantity */}
                                        <button className={styles.quantity_btn_Block_Quick_View} onClick={IncrementCounter}><GoPlus/></button> {/*збільшення кількості продукту*/}
                                    </div>
                                </div>
                                <button className={styles.button_Quick_View} onClick={()=>addProductToCart()}>Add to Cart</button>             {/* кнопка додати в кошик */}
                                <a href={'/product/' + props.id} className={styles.viewMoreDetails_Quick_View}>View More Details</a>           {/*посилання на сторінку продукту*/}
                            </div>
                            <button className={styles.close_btn_Quick_View} onClick={()=>props.onClose()}><IoClose /></button>                  {/* кнопка закрити */}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default QuickView;