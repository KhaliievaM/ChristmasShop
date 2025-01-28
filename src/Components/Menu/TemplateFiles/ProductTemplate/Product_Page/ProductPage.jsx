import React from "react";
import styles from "./ProductPage.module.css";
import {GoDash, GoPlus} from "react-icons/go";
import InformSection from "./InformSection_ProductPage";
import {useState, useEffect} from "react";

const ProductPage = (props) =>{
    let minValue = 1;                                                                                                   //мінімальна кількість продукту
    let maxValue = 20;                                                                                                  //максимальна кількість продукту
    let totalPrice;
    let incrementedQuantity;
    let decrementQuantity;
    let thisProd = props.prod;
    const [quantity, setQuantity] = useState(minValue);
    // const [data, setData] = useState(props.data);
    //
    // useEffect( () => {
    //     setData(props.data);
    // }, [props.data]);

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

    let infoSections = thisProd.infoSection.map(d => <InformSection info={d.info} name={d.name}/>)

    let addProductToCart = () =>{                                                                                       //функція додавання продукту в кошик(та в localStorage)
        if(thisProd.id !== null && thisProd.id !== undefined){                                      //перевірка чи 'id'!== null і чи id цього продукту = продукту,який ми додаємо в кошик
            totalPrice = Number(thisProd.price) * quantity;                                                             //обчислення totalPrice продукту
            thisProd.totalPrice = String(totalPrice);                                                                   //оновлення totalPrice продукту
            thisProd.quantity = quantity;                                                                               //оновлення quantity продукту
            localStorage.setItem("product"+thisProd.id, JSON.stringify(thisProd));                         //додавання продукту в localStorage (ключ(напр."product5") і значення(об'єкт))
            window.location.reload();                                                                                   //оновлення сторінки
        }
    }

    return(
        <div className={styles.product_Card} >
            <div className={styles.imgBlock_Product}>
                <img src={thisProd.img} alt="Product image"  fetchPriority="high"/>                                     {/*зображення продукту*/}
                <div>{thisProd.about}</div>                                                                             {/*про товар*/}
            </div>
            <div className={styles.infoBlock_Product}>
                <div className={styles.name_Product}>{thisProd.name}</div>                                              {/*назва товару*/}
                <div className={styles.SKU_Product}>SKU: {thisProd.SKU}</div>                                           {/*SKU товару*/}
                <div className={styles.price_Product}>${thisProd.price}</div>                                           {/*price товару*/}
                <div className={styles.Quantity_Product}>
                    <div className={styles.quantity_Name}>Quantity</div>
                    <div className={styles.quantity_Block}>
                        <button className={styles.quantity_btn_Block} onClick={DecrementItems}><GoDash/></button>       {/*зменшення кількості товару*/}
                        <input type="text" className={styles.quantity_input_Block} value={quantity}/>                   {/*кількість товару*/}
                        <button className={styles.quantity_btn_Block} onClick={IncrementCounter}><GoPlus/></button>     {/*збільшення кількості товару*/}
                    </div>
                </div>
                <div className={styles.button_Product}>
                    <button className={styles.button_Add_to_Cart_Product} onClick={()=>addProductToCart()}>Add to Cart</button>{/*додати в кошик*/}
                    <button className={styles.button_Buy_Now_Product}>Buy Now</button>                                  {/*купити зараз*/}
                </div>
                <div className={styles.informSectionsBlock_Product}>                                                    {/*інформація про товар*/}
                            {infoSections}
                </div>
            </div>
        </div>
    )
}
export default ProductPage;