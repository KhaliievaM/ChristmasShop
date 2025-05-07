import React,{useState} from "react";
import styles from "./ProductBlockCartHeader.module.css";
import { IoClose } from "react-icons/io5";
import products from "../../../Products";
import {Link} from "react-router-dom";

const ProductBlockCartHeader = (props) => {
    let minValue = 1;
    let maxValue = 20;
    let prodId = props.id;                                                                                              //id продукту
    let productKey = "product"+ prodId;                                                                                 //ключ в localStorage за яким буде визначатись продукт
    let productObj;
    let totalPrice;
    let totalSumKey = "totalSum";
    let isOldPrice;

        if(props.oldprice === ''){                                                                                          //перевірка чи існує стара ціна
            isOldPrice= false;
        }else{
            isOldPrice= true;
        }

    let productString = localStorage[productKey];                                                                       //продукт(рядок,ще не об'єкт) в localStorage
        if(productString !== null && productString !== ''){                                                             //якщо продукт !== null і !== порожньому рядку
            productObj = JSON.parse(productString);                                                                     //переведення рядка в об'єкт
            totalPrice = productObj.totalPrice;                                                                       //загальна ціна(totalPrice) = загальній ціні продукту в localStorage
        }
    const [quantity, setQuantity] = useState(productObj != null ? productObj.quantity : 1);                    //якщо об'єкт != null,то кількість продукту(quantity)
    // беремо з localStorage, else quantity = 1

    let deleteProduct = () =>{                                                                                          //видалення продукту з localStorage
        localStorage.removeItem(productKey);
        window.location.reload();
    }
    const IncrementCounter = () => {                                                                                    //Increment
        let totalSum = Number(localStorage.getItem("totalSum"));                                                    //отримання даних totalSum з localStorage
        let incrementedQuantity = quantity + 1;                                                                         //додавання одиниці до quantity продукту
        if (incrementedQuantity <= maxValue) {                                                                          //якщо оновлена кількість менша за максимальну кількість
            setQuantity(incrementedQuantity);                                                                           //оновлення стану(збільшення кількості)
            totalPrice = Number(props.price) * incrementedQuantity;                                                     //розрахунок оновленого totalPrice
            totalSum = totalSum + Number(props.price);                                                                  //оновлення загальної суми при збільшенні кількості товару
            props.onChange(totalSum);                                                                                   //оновлення(передача) зміни загальної до батьківського компонента
            productObj['totalPrice'] = String(totalPrice);                                                       //присвоєння властивості об'єкту totalPrice нового розрахованого значення
            productObj['quantity'] = incrementedQuantity;                                                          //присвоєння властивості об'єкту quantity нового розрахованого значення
            localStorage.setItem(productKey, JSON.stringify(productObj));                                               //передача оновлених даних в localStorage
            localStorage.setItem(totalSumKey, JSON.stringify(totalSum));                                                //передача оновленої загальної суми в localStorage
        }
    };
    const DecrementItems = () => {
        let totalSum = Number(localStorage.getItem("totalSum"));                                                    //отримання даних totalSum з localStorage
        let decrementQuantity = quantity - 1;                                                                           //віднімання одиниці від quantity продукту
        if (decrementQuantity >= minValue) {                                                                            //якщо оновлена кількість більша за мінімальну кількість
            setQuantity(decrementQuantity);                                                                             //оновлення стану(зменшення кількості)
            totalPrice = Number(props.price) * decrementQuantity;                                                       //розрахунок оновленого totalPrice
            totalSum = totalSum - Number(props.price);                                                                  //оновлення загальної суми при зменшенні кількості товару
            props.onChange(totalSum);                                                                                   //оновлення(передача) зміни загальної до батьківського компонента
            productObj['totalPrice'] = String(totalPrice);                                                       //присвоєння властивості об'єкту totalPrice нового розрахованого значення
            productObj['quantity'] = decrementQuantity;                                                          //присвоєння властивості об'єкту quantity нового розрахованого значення
            localStorage.setItem(productKey, JSON.stringify(productObj))                                                //передача оновлених даних в localStorage
            localStorage.setItem(totalSumKey, JSON.stringify(totalSum));                                                //передача оновленої загальної суми в localStorage
        }
    };

    return (
        <div className={styles.container_product_Cart}>                                                                 {/*блок одного товару в "швидкому" кошику*/}
            <div className={styles.infoBlock_product_Cart}>                                                             {/*блок із зображенням і інформацією про товар*/}
                <img src={props.img} alt="" className={styles.img_product_Cart}/>                                       {/*зображення товару*/}
                <div className={styles.name_price_Cart}>                                                                {/*блок ім'я, ціна, стара ціна? товару*/}
                    <div>
                    {props.name}                                                                            {/*ім'я товару*/}
                    </div>
                    <div className={styles.price_product_Cart}>                                                         {/*блок ціна і стара ціна? товару*/}
                        <div className={styles.new_price_product_Cart}>$ {props.price}</div>                            {/*ціна товару*/}
                        <div className={`${styles.old_price_product_Cart} ${isOldPrice ? '' : styles.noActive}`}>$ {props.oldprice}</div>{/*перевірка і вивід? старої ціни*/}
                    </div>
                    <div className={styles.quantity_product_Cart}>                                                      {/*quantity_product блок*/}
                        <button className={styles.quantity_btn_Cart} onClick={DecrementItems}> - </button>               {/*інкремент кількості товару*/}
                        <input type="text" className={styles.quantity_input_Cart} value={quantity}/>                    {/*кількість товару*/}
                        <button className={styles.quantity_btn_Cart} onClick={IncrementCounter}> + </button>            {/*декремент кількості товару*/}
                    </div>
                </div>
            </div>
            <button className={styles.delete_product_Cart} onClick={()=>deleteProduct()}><IoClose /></button>           {/*кнопка видалення товару*/}
        </div>
    )
}
export default ProductBlockCartHeader;