import React from "react";
import styles from "./QuickView.module.css";
import { IoClose } from "react-icons/io5";
import {GoDash, GoPlus} from "react-icons/go";
import {useState} from "react";


const QuickView = (props,{isOpen, onClose}) => {
    let doesOldPriceExist;
    if(props.oldprice === ''){                                                                                          //перевірка чи існує стара ціна
        doesOldPriceExist= false;
    }else{
        doesOldPriceExist= true;
    }
    let minValue = 1;                                                                                                   //мінімальна кількість продукту
    let maxValue = 20;                                                                                                  //максимальна кількість продукту
    const [quantity, setQuantity] = useState(minValue);
    const IncrementCounter = () => {if(quantity < maxValue){setQuantity((prevState) => prevState + 1);}}  //збільшення кількості продукту

    const DecreaseItems = () => {if(quantity > minValue) {setQuantity((prevState) => prevState - 1);}};   //зменшення кількості продукту

    let addProductToCart = () =>{                                                                                       //функція додавання продукту в кошик(та в localStorage)
        if(props.shopAllProducts !== undefined){                                                   //перевірка чи масив продуктів shopAll(загальна сторінка продуктів) не є undefined
            for(let prod of props.shopAllProducts){        //перебір об'єктів(продуктів) в масиві shopAll(загальна сторінка продуктів),пошук продукту, який ми хочемо додати в кошик
                for(let item in prod){                                                                                  //перебір ключів в об'єкті(продукті)
                    if (item === 'id' && prod[item] === props.id) {                   //перевірка чи ключ є 'id' і чи id цього продукту = продукту,який ми намагаємось додати в кошик
                        localStorage.setItem("product" + props.id, JSON.stringify(prod));                //додавання продукту в localStorage (ключ(напр."product5") і значення(об'єкт))
                        window.location.reload();                                                                       //оновлення сторінки
                    }
                }
            }
        }else {
            for (let i of props.arrayOfProducts) {                //перебір об'єктів(продуктів) в масиві сторінки(сторінка з ялинками, тощо) пошук продукту, який ми хочемо додати в кошик
                for (let item in i) {                                                                                   //перебір ключів в об'єкті(продукті)
                    if (item === 'id' && i[item] === props.id) {                           //перевірка чи ключ є 'id' і чи id цього продукту = продукту,який ми намагаємось додати в кошик
                        localStorage.setItem("product" + props.id, JSON.stringify(i));                      //додавання продукту в localStorage (ключ(напр."product5") і значення(об'єкт))
                        window.location.reload();                                                                       //оновлення сторінки
                    }
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
                                        <button className={styles.quantity_btn_Block_Quick_View} onClick={DecreaseItems}><GoDash/></button>    {/*зменшення кількості продукту*/}
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