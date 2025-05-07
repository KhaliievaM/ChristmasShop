import React from 'react';
import styles from "./ProductItems.module.css";
import {Link} from "react-router-dom";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import ProductTemplate from "./ProductTemplate/ProductTemplate";

class ProductItems extends React.Component {                                       //класовий компонент

    pageName;
    bgImg;
    productsArray;
    sortingType = 'Recommended';

    constructor(props) {
        super(props);
        this.pageName = props.pageName;                                                                                 //назва цієї сторінки
        this.bgImg = props.bgImg;                                                                                       //фон для цієї сторінки
        this.productsArray = props.productsArray;                                                                       //масив, або об'єкт продуктів для сторінки
        this.state = {typeOfSorting: 'Recommended'};                                                                    // state для сортування замість useState
    }
    changeSort = (type) => {                                                                                // callback для оновлення типу сортування/взаємодія з дочірнім компонентом
        this.setState({ typeOfSorting: type });                                                                    //зміна типу сортування на обраний
        this.sortingType = type;                                                                                        //зміна НАЗВИ типу сортування
    };

    render() {
        let productsContainer = "";
        let cloneOfProducts=[];
        let counterElements;

        let productsArrayWithSorting;                                                                                   //оновлений(сортований) масив продуктів
        let sortFunction = (arr) =>{                                                                                    //сортування продуктів
            if(this.sortingType === 'Recommended'){
                productsArrayWithSorting = arr;
            }else if(this.sortingType === "Newest"){
                productsArrayWithSorting = arr;
            }else if(this.sortingType === "Price (low to high)"){
                productsArrayWithSorting = arr.sort((a, b) => a.price - b.price);
            }else if(this.sortingType === "Price (high to low)"){
                productsArrayWithSorting = arr.sort((a, b) => b.price - a.price);
            }else if(this.sortingType === "Name A-Z"){
                productsArrayWithSorting = arr.sort((a, b) => a.name.localeCompare(b.name));
            }else if(this.sortingType === "Name Z-A"){
                productsArrayWithSorting = arr.sort((a, b) => b.name.localeCompare(a.name));
            }
        }

        if (!Array.isArray(this.productsArray)){                                                                        //перевірка, чи це об'єкт ShopAll
            let newArrayForShopAll = [];
            for (let i in this.productsArray) {                                                                         //перебирає елементи(масиви) об'єкта
                newArrayForShopAll[i] = this.productsArray[i];                                                          //копіювання масивів об'єкта в новий масив newArrayForShopAll
                for (let key in newArrayForShopAll[i]) {                                                                //перебирає елементи масиву newArrayForShopAll
                    cloneOfProducts.push(newArrayForShopAll[i][key]);                                                   //додає елементи(об'єкти) в новостворений масив
                }
            }
            counterElements = cloneOfProducts.length;                                                                   //довжина об'єкта
            sortFunction(cloneOfProducts);
            productsContainer = productsArrayWithSorting.map(p =>                         //викликає функцію для кожного елемента масиву, повертає масив результатів із заданими значеннями
                <ProductTemplate name={p.name} img={p.img} oldprice={p.oldprice} price={p.price} totalPrice={p.totalPrice} about={p.about}
                                 info={p.info} SKU={p.SKU} quantity={p.quantity} id={p.id} cloneOfProducts={cloneOfProducts}/>);

        }else{
            counterElements = this.productsArray.length;                                                                //довжина масиву
            sortFunction(this.productsArray);
            productsContainer = productsArrayWithSorting.map(p =>                    //викликає функцію для кожного елемента масиву, повертає масив результатів із заданими значеннями
                <ProductTemplate name={p.name} img={p.img} oldprice={p.oldprice} price={p.price} totalPrice={p.totalPrice} about={p.about}
                                 info={p.info} SKU={p.SKU} quantity={p.quantity} id={p.id} productsArray={this.productsArray}/>);
        }
        return (
            <div className={styles.mainContainerBlock}>
                <div className={styles.marginContainer}>
                    <div className={styles.container_ChristmasTrees}>
                        <div className={styles.navBlock_DepartmentStore}>                                                   {/*навігаційний рядок*/}
                            <Link to="/">Home</Link>
                            &#10095;
                            <div>{this.pageName}</div>
                        </div>
                        <div className={styles.headBlock_DepartmentStore}>
                            <img src={this.bgImg} alt="" fetchPriority="high" className={styles.backImage}/>                {/*фон сторінки*/}
                            <h2 className={styles.h2_DepartmentStoreName}>{this.pageName}</h2>                              {/*назва сторінки*/}
                        </div>
                    </div>
                    <div className={styles.mainBlock_products}>
                        <div className={styles.quantityAndSort_products}>
                            <div>{counterElements} products</div>                                                           {/*кількість продуктів на сторінці*/}
                                <DropdownMenu onChange={this.changeSort}/>                                                  {/*сортувальне меню*/}
                        </div>
                        <div className={styles.products}>
                            <div className={styles.container_products}>
                                {productsContainer}                                                                             {/*блок продуктів сторінки*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItems;
