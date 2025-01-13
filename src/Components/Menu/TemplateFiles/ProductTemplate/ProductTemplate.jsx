import React, {useState} from "react";
import styles from "./ProductTemplate.module.css";
import QuickView from "./QuickView/QuickView";

const ProductTemplate = (props) => {
    let isOldPrice;
    if(props.oldprice === ''){                                                                   //перевірка чи існує стара ціна
        isOldPrice= false;
    }else{
        isOldPrice= true;
    }

    const [isProductQuickView,setProductQuickView] = useState(false);                    //стан(відкритий\закритий) сторінки QuickView
    let arrayOfProducts = props.productsArray;                                                    //масив продуктів(масив ялинок,прикрас,освітлення,тощо)
    let prodId = props.id;                                                                        //id продукту
    let shopAllProducts = props.cloneOfProducts;                                                  //весь масив продуктів(об'єктів) shopAll
    let addProductToCart = () =>{                                                                 //додавання продуктів в кошик
        if(shopAllProducts !== undefined){                                                        //перевірка чи масив є масивом об'єктів shopAll
            for(let prod of shopAllProducts){                                                     //перебір об'єктів масиву
                for(let item in prod){                                                            //перебір елементів об'єкта
                    if (item === 'id' && prod[item] === prodId) {                                 //перевірка чи елемент = id і чи цей id = id продукту,на кнопку якого було натиснуто
                        localStorage.setItem("product" + prodId, JSON.stringify(prod));           //додавання продукту в  localStorage
                        window.location.reload();                                                 //оновлення сторінки
                    }
                }
            }
        }else {
            for (let i of arrayOfProducts) {                                                      //перебір об'єктів масиву
                for (let item in i) {                                                             //перебір елементів об'єкта
                    if (item === 'id' && i[item] === prodId) {                                    //перевірка чи елемент = id і чи цей id = id продукту,на кнопку якого було натиснуто
                        localStorage.setItem("product" + prodId, JSON.stringify(i));              //додавання продукту в  localStorage
                        window.location.reload();                                                 //оновлення сторінки
                    }
                }
            }
        }
    }

    return (
        <div className={styles.container_ProductCard}>
            <div className={styles.img_quickView_ProductCard}>
                <a href={'/product/' + props.id}><img src={props.img} alt=""  fetchPriority="high"/></a>                         {/*зображення продукту\перехід на сторінку продукту*/}
                <div  className={styles.quickView_ProductCard}>
                    <button  className={styles.quickView_ProductCard_text} onClick={()=>{setProductQuickView(true)}}>Quick View</button>   {/*швидкий огляд*/}
                </div>
            </div>
            <div className={styles.productAction_ProductCard}>
                    <a href={'/product/' + props.id} className={styles.goToProductPage_ProductCard}>                                     {/*перехід на сторінку продукту\назва\ціна*/}
                    <div className={styles.productName_ProductCard}>{props.name}</div>
                    <div className={styles.redLine_ProductCard}></div>
                    <div className={styles.productPrice_ProductCard}>
                        <span className={`${styles.oldProductPrice_ProductCard} ${isOldPrice ? '' : styles.noActive}`}>${props.oldprice}</span>
                        <span className={styles.newProductPrice_ProductCard}>${props.price}</span>
                    </div>
                    </a>
                <button className={styles.addToCart_Button_ProductCard} onClick={()=>addProductToCart()}>Add to Cart</button>                  {/*додати в кошик*/}
            </div>

           <QuickView name={props.name} img={props.img} price={props.price}
                      oldprice={props.oldprice} quantity={props.quantity} SKU={props.SKU} totalPrice={props.totalPrice} id={props.id} isOpen={isProductQuickView} arrayOfProducts={arrayOfProducts}
                      shopAllProducts={shopAllProducts} onClose={()=>setProductQuickView(false)}/>                                       {/*передача сторінці QuickView props*/}

        </div>
    )
}
export default ProductTemplate;