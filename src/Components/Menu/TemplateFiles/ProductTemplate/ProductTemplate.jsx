import React, {useState} from "react";
import styles from "./ProductTemplate.module.css";
import QuickView from "./QuickView/QuickView";
import { Link } from 'react-router-dom';

const ProductTemplate = (props) => {
    let isOldPrice;
    if(props.oldprice === ''){                                                                                          //перевірка чи існує стара ціна
        isOldPrice= false;
    }else{
        isOldPrice= true;
    }

    const [isProductQuickView,setProductQuickView] = useState(false);                                          //стан(відкритий\закритий) сторінки QuickView
    let prodId = props.id;                                                                                              //id продукту
    let arrayOfProducts = props.productsArray;                                                                          //масив продуктів(масив ялинок,прикрас,освітлення,тощо)
    let shopAllProducts = props.cloneOfProducts;                                                                        //весь масив продуктів(об'єктів) shopAll
    let actualArray = [];                                                                                               //актуальний масив продуктів
    let isShopAll = false;
    if(shopAllProducts !== undefined){                                                                                  //перевірка чи масив є масивом об'єктів shopAll
        actualArray = shopAllProducts.slice();                                                                          //копіювання елементів масиву shopAll в новий масив
        isShopAll = true;
    }else{
        actualArray = arrayOfProducts;                                                                                  //копіювання елементів масиву в новий масив
    }

    let addProductToCart = () =>{                                                                                       //додавання продуктів в кошик
        for(let prod of actualArray){                                                                                   //перебір елементів масиву
            for(let item in prod){                                                                                      //перебір елементів об'єкта
                if (item === 'id' && prod[item] === prodId) {                                      //перевірка чи елемент = id і чи цей id = id продукту,на кнопку якого було натиснуто
                    localStorage.setItem("product" + prodId, JSON.stringify(prod));                                     //додавання продукту в  localStorage
                    window.location.reload();                                                                           //оновлення сторінки
                }
            }
        }
    }
    const dataToPass = { id: prodId, productsArray: actualArray, isShopAll: isShopAll };
    //дані для передачі дочірній компоненті(id продукту, масив, в якому знаходиться продукт, масивShopAll?)

    return (
        <div className={styles.container_ProductCard}>
            <div className={styles.img_quickView_ProductCard}>
                <Link to='/productPageSwitcher' state= {{dataToPass}}>
                    <img src={props.img} alt="Product image" />
                </Link>                                                                                                     {/*зображення продукту\перехід на сторінку продукту*/}
                <div  className={styles.quickView_ProductCard}>
                    <button  className={styles.quickView_ProductCard_text} onClick={()=>{setProductQuickView(true)}}>Quick View</button>   {/*швидкий огляд*/}
                </div>
            </div>
            <div className={styles.productAction_ProductCard}>
                    <Link to='/productPageSwitcher' state= {{dataToPass}} className={styles.goToProductPage_ProductCard}>      {/*перехід на сторінку продукту\назва\ціна*/}
                    <div className={styles.productName_ProductCard}>{props.name}</div>
                    <div className={styles.redLine_ProductCard}></div>
                    <div className={styles.productPrice_ProductCard}>
                        <span className={`${styles.oldProductPrice_ProductCard} ${isOldPrice ? '' : styles.noActive}`}>${props.oldprice}</span>
                        <span className={styles.newProductPrice_ProductCard}>${props.price}</span>
                    </div>
                    </Link>
                <button className={styles.addToCart_Button_ProductCard} onClick={()=>addProductToCart()}>Add to Cart</button>  {/*додати в кошик*/}
            </div>

           <QuickView name={props.name} img={props.img} price={props.price}
                      oldprice={props.oldprice} quantity={props.quantity} SKU={props.SKU} totalPrice={props.totalPrice} id={props.id}
                      isOpen={isProductQuickView} arrayOfProducts={arrayOfProducts} shopAllProducts={shopAllProducts}
                       onClose={()=>setProductQuickView(false)}/>                                                       {/*передача сторінці QuickView props*/}
        </div>
    )
}
export default ProductTemplate;