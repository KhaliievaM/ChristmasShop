import React from "react";
import styles from "./ProductsInCart.module.css";
import {GoDash, GoPlus} from "react-icons/go";
import trashDelete from "../../../../Multimedia/delete_icon_trash.png";
import {useState} from "react";

const ProductsInCart = (props) => {

    const [reloadKey, setReloadKey] = useState(0);
    const reloadComponent = () => {
        setReloadKey(prevKey => prevKey + 1);                                                                      // змінюємо ключ продукту
    };
    let minValue = 1;
    let maxValue = 20;
    let prodId = props.id;
    let productKey = "product"+ prodId;
    let productObj;
    let totalPrice;
    let totalSumKey = "totalSum";

    let productString = localStorage[productKey];                                                                       //продукт(рядок,ще не об'єкт) в localStorage
    if(productString !== null && productString !== ''){                                                                 //якщо продукт !== null і !== порожньому рядку
        productObj = JSON.parse(productString);                                                                         //переведення рядка в об'єкт
        totalPrice = productObj.totalPrice;                                                                       //загальна ціна(totalPrice) = загальній ціні продукту в localStorage
    }
    const [quantity, setQuantity] = useState(productObj != null ? productObj.quantity : 1);                    //якщо об'єкт != null,то кількість
    // продукту(quantity) беремо з localStorage, else quantity = 1

    let deleteProduct = () =>{                                                                                          //видалення продукту з localStorage
        localStorage.removeItem(productKey);
        window.location.reload();
    }
    let totalSum = Number(localStorage.getItem("totalSum"));                                                        //отримання даних totalSum з localStorage

    let dataUpdateLocalStorage = (quantity) => {
        props.onChange(totalSum);                                                                                 //оновлення(передача) зміни загальної до батьківського компонента
        productObj['totalPrice'] = String(totalPrice);                                                    //присвоєння властивості об'єкту totalPrice нового розрахованого значення
        productObj['quantity'] = quantity;                                                                  //присвоєння властивості об'єкту quantity нового розрахованого значення
        localStorage.setItem(productKey, JSON.stringify(productObj));                                                   //передача оновлених даних в localStorage
        localStorage.setItem(totalSumKey, JSON.stringify(totalSum));                                                    //передача оновленої загальної суми в localStorage
        reloadComponent();                                                                                              //оновлення даних в компоненті

    }
    const IncrementCounter = () => {                                                                                    //Increment
        let incrementedQuantity = quantity + 1;                                                                         //додавання одиниці до quantity продукту
        if (incrementedQuantity <= maxValue) {                                                                          //якщо оновлена кількість менша за максимальну кількість
            setQuantity(incrementedQuantity);                                                                           //оновлення стану(збільшення кількості)
            totalPrice = Number(props.price) * incrementedQuantity;                                                     //розрахунок оновленого totalPrice
            totalSum = totalSum + Number(props.price);                                                                  //оновлення загальної суми при збільшенні кількості товару
            dataUpdateLocalStorage(incrementedQuantity);
        }
    };
    const DecrementItems = () => {
        let decrementQuantity = quantity - 1;                                                                           //віднімання одиниці від quantity продукту
        if (decrementQuantity >= minValue) {                                                                            //якщо оновлена кількість більша за мінімальну кількість
            setQuantity(decrementQuantity);                                                                             //оновлення стану(зменшення кількості)
            totalPrice = Number(props.price) * decrementQuantity;                                                       //розрахунок оновленого totalPrice
            totalSum = totalSum - Number(props.price);                                                                  //оновлення загальної суми при зменшенні кількості товару
            dataUpdateLocalStorage(decrementQuantity);
        }
    };

    return (
        <div className={styles.products_Section_Cart} key={reloadKey}>
            <a href={'/product/' + productObj.id}>
                <img src={productObj.img} alt="" className={styles.img_product_Section_Cart}/>
            </a>
            <div className={styles.name_price_product_Section_Cart}>
                <a href={'/product/' + productObj.id}>
                    <div className={styles.name_product_Cart}>{productObj.name}</div>
                </a>
                <div className={styles.price_product_Cart}>$ {productObj.price}</div>
            </div>
            <div className={styles.quantity_product_Section}>
                <button className={styles.quantity_btn_Cart} onClick={DecrementItems}><GoDash/></button>
                <input type="text" className={styles.quantity_input_Cart} value={productObj.quantity}/>
                <button className={styles.quantity_btn_Cart} onClick={IncrementCounter}><GoPlus/></button>
            </div>
            <div className={styles.price_Sum_product_Section}>$ {productObj.totalPrice}</div>
            <button className={styles.delete_product_Section} onClick={()=>deleteProduct()}><img src={trashDelete} alt=""/></button>
        </div>
    )
}
export default ProductsInCart;