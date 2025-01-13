import React from 'react';
import styles from "./ProductItems.module.css";
import {Link} from "react-router-dom";
import ProductTemplate from "./ProductTemplate/ProductTemplate";

class ProductItems extends React.Component {                                       //класовий компонент

    pageName;
    bgImg;
    productsArray;

    constructor(props) {
        super(props);
        this.pageName = props.pageName;                                             //назва цієї сторінки
        this.bgImg = props.bgImg;                                                   //фон для цієї сторінки
        this.productsArray = props.productsArray;                                   //масив, або об'єкт продуктів для сторінки
    }

    render() {
        let productsContainer = "";
        let cloneOfProducts = [];
        let counterElements;
        if (Array.isArray(this.productsArray)) {                                     //перевірка, чи це масив(сторінка з ялинками, прикрасами, тощо)
            counterElements = this.productsArray.length;                             //довжина масиву
            productsContainer = this.productsArray.map(p =>                          //викликає функцію для кожного елемента масиву, повертає масив результатів із заданами значеннями
                <ProductTemplate name={p.name} img={p.img} oldprice={p.oldprice} price={p.price} totalPrice={p.totalPrice} about={p.about}
                                 info={p.info} SKU={p.SKU} quantity={p.quantity} id={p.id} productsArray={this.productsArray}/>);

        } else {                                                                     //якщо це не масив, то це об'єкт масивів(всі сторінки продуктів - Shop All)
            let newArrayforShopAll = [];
            for (let i in this.productsArray) {                                      //перебирає елементи(масиви) об'єкта
                newArrayforShopAll[i] = this.productsArray[i];                       //копіювання масивів об'єкта в новий масив newArrayforShopAll
                for (let key in newArrayforShopAll[i]) {                             //перебирає елементи масиву newArrayforShopAll
                    cloneOfProducts.push(newArrayforShopAll[i][key]);                //додає елементи(об'єкти) в новостворений масив
                }
                counterElements = cloneOfProducts.length;                            //довжина об'єкта
                productsContainer = cloneOfProducts.map(p =>                         //викликає функцію для кожного елемента масиву, повертає масив результатів із заданами значеннями
                    <ProductTemplate name={p.name} img={p.img} oldprice={p.oldprice} price={p.price} totalPrice={p.totalPrice} about={p.about}
                                     info={p.info} SKU={p.SKU} quantity={p.quantity} id={p.id} cloneOfProducts={cloneOfProducts}/>);
            }
        }

        return (
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
                        <div>Sort by:                                                                                   {/*сортування */}
                            <select name="sort" id="type" className={styles.select}>
                                <option value="Recommended">Recommended</option>
                                <option value="Newest">Newest</option>
                                <option value="Price (low to high)">Price (low to high)</option>
                                <option value="Price (high to low)">Price (high to low)</option>
                                <option value="Name A-Z">Name A-Z</option>
                                <option value="Name Z-A">Name Z-A</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.container_products}>
                        {productsContainer}                                                                             {/*блок продуктів сторінки*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItems;
