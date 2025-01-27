import React from "react";
import styles from "./ProductPageSwitcher.module.css";
import {Link} from "react-router-dom";
import {GoChevronLeft, GoChevronRight} from "react-icons/go";
import products from "../../../../Products";
import ProductPage from "../Product_Page/ProductPage";
import { useLocation } from 'react-router-dom';
import {useState} from "react";


const ProductPageSwitcher = ()=>{
    const location = useLocation();
    const { state } = location;
    let prodId = state.dataToPass.id;
    let productsArray = state.dataToPass.productsArray;
    let isShopAll = state.dataToPass.isShopAll;
    let prod;
    for(let obj in products){
        for(let inObj of products[obj]){
            if(inObj.id === prodId){
                if (prod === undefined) {
                    prod = inObj;
                }
            }
        }
    }
    const [productToSend, setProductToSend] = useState(prod);
    let nameParentPage = '';
    let link = '';
    let isProductsChristmasTrees = false;
    let isProductsUniqueOrnaments = false;
    let isProductsHolidayLights = false;
    let currentProductArrayName = '';
    if(isShopAll){
        nameParentPage = 'Shop All';
        link = '/shopAll';
    }else{
        for(let obj in products){
            for(let inObj of products[obj]){
                if(inObj.id === prodId){
                    if(obj === 'productsChristmasTrees'){
                        isProductsChristmasTrees = true;
                        currentProductArrayName = 'productsChristmasTrees';
                        nameParentPage = 'Christmas Trees';
                        link = '/christmasTrees';
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

    const nextProductPage=()=>{
        // if(isShopAll){
        //     for(let i = 0; i < productsArray.length; i++){
        //         if(productsArray[i].id === productToSend.id){
        //             if(i+1 < productsArray.length){
        //                 let nextProduct = productsArray[i+1];
        //                 prod = nextProduct;
        //                 prodId = nextProduct.id;
        //                 setProductToSend(prod);
        //                 break;
        //             }
        //         }
        //     }
        // }else{
        //     let currentProductArray = products[currentProductArrayName];
        //     for(let i = 0; i < currentProductArray.length; i++){
        //         if(currentProductArray[i].id === productToSend.id){
        //             if(i+1 < currentProductArray.length){
        //                 let nextProduct = currentProductArray[i+1];
        //                 prod = nextProduct;
        //                 prodId = nextProduct.id;
        //                 setProductToSend(prod);
        //                 break;
        //             }
        //         }
        //     }
        // }
        let currentProductArray;
        if(isShopAll){
            currentProductArray = productsArray;
        }else{
            currentProductArray = products[currentProductArrayName];
        }
        for(let i = 0; i < currentProductArray.length; i++){
            if(currentProductArray[i].id === productToSend.id){
                if(i+1 < currentProductArray.length){
                    let nextProduct = currentProductArray[i+1];
                    prod = nextProduct;
                    prodId = nextProduct.id;
                    setProductToSend(prod);
                    break;
                }
            }
        }
    }
    const previousProductPage=()=>{
        let currentProductArray;
        if(isShopAll){
            currentProductArray = productsArray;
        }else{
            currentProductArray = products[currentProductArrayName];
        }
        for(let i = 0; i < currentProductArray.length; i++){
            if(currentProductArray[i].id === productToSend.id){
                if(i-1 >= 0){
                    let previousProduct = currentProductArray[i-1];
                    prod = previousProduct;
                    prodId = previousProduct.id;
                    setProductToSend(prod);
                    break;
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
                    <ProductPage prod={productToSend}/>
                </div>
            </div>
        </div>
    )
}
export default ProductPageSwitcher;