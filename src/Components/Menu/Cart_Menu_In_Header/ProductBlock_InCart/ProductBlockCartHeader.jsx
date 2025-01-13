import React,{useState} from "react";
import styles from "./ProductBlockCartHeader.module.css";
import { IoClose } from "react-icons/io5";


const ProductBlockCartHeader = (props) => {

    let minValue = 1;                                                                          //мінімальна кількість продукту
    let maxValue = 20;                                                                         //максимальна кількість продукту
    const [quantity, setQuantity] = useState(minValue);                                        //стан даних кількості товару

    const IncrementCounter = () => {                                                           //збільшення кількості продукту
        if (quantity < maxValue) {                                                             //якщо quantity менше maxValue
            setQuantity((prevState) => prevState + 1);                            //оновлюються дані(кількість + 1)
        }
    };
    const DecreaseItems = () => {                                                               //зменшення кількості продукту
        if (quantity > minValue) {                                                              //якщо quantity більше minValue
            setQuantity((prevState) => prevState - 1);                             //оновлюються дані(кількість - 1)
        }
    };
    // let totalPrice = Number(props.price) * quantity;
    let prodId = props.id;                                                                       //id продукту
    let del = "product"+ prodId;                                                                 //ключ в localStorage за яким буде визначатись продукт

    let isOldPrice;
    if(props.oldprice === ''){                                                                   //перевірка чи існує стара ціна
        isOldPrice= false;
    }else{
        isOldPrice= true;
    }
    // let b = JSON.parse(localStorage[del]);
    // b.totalPrice= String(totalPrice);
    // localStorage.setItem(del, JSON.stringify(b));
    //console.log(b)
    let deleteProduct = () =>{                                                                   //видалення продукту
        localStorage.removeItem(del);
        window.location.reload();                                                                //оновлення вікна

    }

    return (
        <div className={styles.container_product_Cart}>                                                                 {/*блок одного товару в "швидкому" кошику*/}
            <div className={styles.infoBlock_product_Cart}>                                                             {/*блок із зображенням і інформацією про товар*/}
                <img src={props.img} alt="" className={styles.img_product_Cart}/>                                       {/*зображення товару*/}
                <div className={styles.name_price_Cart}>                                                                {/*блок ім'я, ціна, стара ціна? товару*/}
                    <div>{props.name}</div>                                                                             {/*ім'я товару*/}
                    <div className={styles.price_product_Cart}>                                                         {/*блок ціна і стара ціна? товару*/}
                        <div className={styles.new_price_product_Cart}>$ {props.price}</div>                            {/*ціна товару*/}
                        <div className={`${styles.old_price_product_Cart} ${isOldPrice ? '' : styles.noActive}`}>$ {props.oldprice}</div>{/*перевірка і вивід? старої ціни*/}
                    </div>
                    <div className={styles.quantity_product_Cart}>                                                      {/*quantity_product блок*/}
                        <button className={styles.quantity_btn_Cart} onClick={DecreaseItems}> - </button>               {/*інкремент кількості товару*/}
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