import React from "react";
import styles from "./ProductPageSwitcher.module.css";
import {Link} from "react-router-dom";
import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import products from "../../../../Products";
import ProductPage from "../Product_Page/ProductPage";
import { useLocation } from 'react-router-dom';
import {useState} from "react";


const ProductPageSwitcher = (props)=>{

    const location = useLocation();
    const dataToPass = location.state?.dataToPass;                                                                      //витягування даних переданих
    const { state } = location;                                                                                         // з батьківської компоненти
    // Використовуйте optional chaining, щоб уникнути помилки, якщо dataToPass не визначено
    let prodId = dataToPass?.id;                                                                                        //id продукту
    let productsArray = dataToPass?.productsArray;                                                                      //масив, в якому знаходиться продукт
    let isShopAll = dataToPass?.isShopAll;                                                                              //булеве значення(чи масив ShopAll, чи ні)
    let prod;                                                                                                           //поточний продукт(об'єкт)
    for(let obj in products){                                                                                           //пошук продукту, за заданим id
        for(let inObj of products[obj]){
            if(inObj.id === prodId){
                if (prod === undefined) {
                    prod = inObj;
                }
            }
        }
    }
    //console.log(props.productId)
    const [productToSend, setProductToSend] = useState(prod);                                                           //State для оновлення продукту,для відправки дочірній компоненті
    let nameParentPage = '';                                                                                            //назва батьківської сторінки(категорії товарів)
    let link = '';                                                                                                      //посилання на сторінку категорії товарів
    let isProductsChristmasTrees = false;                                                                               //булеве значення для перевірки категорії товарів
    let isProductsUniqueOrnaments = false;
    let isProductsHolidayLights = false;
    let currentProductArrayName = '';                                                                                   //назва категорії товарів(ключ в об'єкті products)
    if(isShopAll){                                                                                                      //якщо масив продуктів ShopAll, то...
        nameParentPage = 'Shop All';                                                                                    //'Shop All' - назва батьківської сторінки(категорії товарів)
        link = '/shopAll';                                                                                              //адреса для переходу на сторінку 'Shop All'
    }else{                                                                                                              //масив продуктів НЕ ShopAll...
        for(let obj in products){                                                                                       //перебір масивів продуктів в products
            for(let inObj of products[obj]){                                                                            //перебір продуктів в масиві
                if(inObj.id === prodId){                                                                                //перевірка,чи id продукту = id обраного продукту
                    if(obj === 'productsChristmasTrees'){                                                               //якщо назва продукту = 'productsChristmasTrees',тощо
                        isProductsChristmasTrees = true;                                                                //булева змінна для цієї категорії = true
                        currentProductArrayName = 'productsChristmasTrees';                                             //назва категорії товарів = 'productsChristmasTrees',тощо
                        nameParentPage = 'Christmas Trees';                                                             //назва батьківської сторінки(категорії товарів)
                        link = '/christmasTrees';                                                                       //адреса для переходу на сторінку категорії товарів
                    }else if(obj === 'productsUniqueOrnaments'){
                        isProductsUniqueOrnaments = true;
                        currentProductArrayName = 'productsUniqueOrnaments';
                        nameParentPage = 'Unique Ornaments';
                        link = '/uniqueOrnaments';
                    }else if(obj === 'productsHolidayLights'){
                        isProductsHolidayLights = true;
                        currentProductArrayName = 'productsHolidayLights';
                        nameParentPage = 'Holiday Lights';
                        link = '/holidayLights';
                    }
                }
            }
        }
    }

    const nextProductPage=()=>{                                                                                         //перехід на сторінку наступного товару
        let currentProductArray;
        if(isShopAll){                                                                                                  //якщо масив продуктів ShopAll, то...
            currentProductArray = productsArray;                                                                //новий масив=масиву,який прийшов від батьк. комп.(в даному вип. ShopAll)
        }else{
            currentProductArray = products[currentProductArrayName];                                                   //новий масив=масиву,з products,під іменем currentProductArrayName
        }
        for(let i = 0; i < currentProductArray.length; i++){                                                            //цикл по масиву currentProductArray
            if(currentProductArray[i].id === productToSend.id){                                                         //пошук продукту по id,який зараз відмальовується
                if(i+1 < currentProductArray.length){                                                                   //якщо наступний продукт не останній в масиві
                    let nextProduct = currentProductArray[i+1];                                                         //nextProduct = наступному продукту, відносно поточного
                    prod = nextProduct;                                                                                 //поточний продукт = наступному
                    prodId = nextProduct.id;                                                                            //поточний id = id наступного продукту
                    setProductToSend(prod);                                                              //(оновлення поточного продукту)відправлення нового продукту дочірньому елементу
                    break;                                                                                              //вихід з циклу(завершення змін)
                }
            }
        }
    }
    const previousProductPage=()=>{                                                                                     //перехід на сторінку попереднього товару
        let currentProductArray;
        if(isShopAll){                                                                                                  //якщо масив продуктів ShopAll, то...
            currentProductArray = productsArray;                                                                //новий масив=масиву,який прийшов від батьк. комп.(в даному вип. ShopAll)
        }else{
            currentProductArray = products[currentProductArrayName];                                                   //новий масив=масиву,з products,під іменем currentProductArrayName
        }
        for(let i = 0; i < currentProductArray.length; i++){                                                            //цикл по масиву currentProductArray
            if(currentProductArray[i].id === productToSend.id){                                                         //пошук продукту по id,який зараз відмальовується
                if(i-1 >= 0){                                                                                           //якщо поточний продукт не перший в масиві
                    let previousProduct = currentProductArray[i-1];                                                     //previousProduct = попередньому продукту, відносно поточного
                    prod = previousProduct;                                                                             //поточний продукт = попередньому
                    prodId = previousProduct.id;                                                                        //поточний id = id попереднього продукту
                    setProductToSend(prod);                                                             //(оновлення поточного продукту)відправлення нового продукту дочірньому елементу
                    break;                                                                                              //вихід з циклу(завершення змін)
                }
            }
        }
    }

    return(
        <div className={styles.marginContainer_ProductPage}>
            <div className={styles.container_ProductPage}>
                <div className={styles.navBlock_ProductPage}>
                    <div className={styles.wayFrom_ProductPage}>                                                        {/*шлях до продукту*/}
                        <Link to="/" className={styles.path_links}>Home</Link> /                                        {/*домашня сторінка*/}
                        <Link to={link} className={styles.path_links}> {nameParentPage}</Link> /                        {/*категорія товару*/}
                        <div className={styles.path_name}> {productToSend.name}</div>                                   {/*назва поточного продукту*/}
                    </div>
                    <div className={styles.turnPages_ProductPage}>                                                      {/*навігація в категорії товарів*/}
                        <button className={styles.btn_navBlock} onClick={previousProductPage}> <GoChevronLeft /> Prev </button>                    {/*попередній товар*/}
                        <div>|</div>
                        <button className={styles.btn_navBlock}  onClick={nextProductPage}> Next <GoChevronRight /> </button>                      {/*наступний товар*/}
                    </div>
                </div>
                <div className={styles.productOnThePage}>
                    <ProductPage prod={productToSend}/>                                                                 {/*сторінка продукту / передача потрібного об'єкту продукту*/}
                </div>
            </div>
        </div>
    )
}
export default ProductPageSwitcher;