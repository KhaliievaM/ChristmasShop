import React from 'react';
import styles from "./ProductItems.module.css";
import {Link} from "react-router-dom";
import ProductTemplate from "./ProductTemplate/ProductTemplate";
import products from "../../Products";

class ProductItems extends React.Component {

    pageName;
    bgImg;
    productsArray;

    constructor(props) {
        super(props);
        this.pageName = props.pageName;
        this.bgImg = props.bgImg;
        this.productsArray = props.productsArray;
    }

    render() {
        let productsContainer = "";
        let cloneOfProducts = [];
        let counterElements;
        if (Array.isArray(this.productsArray)) {
            counterElements = this.productsArray.length;
            productsContainer = this.productsArray.map(p =>
                <ProductTemplate name={p.name} img={p.img} oldprice={p.oldprice} price={p.price}  about={p.about}
                                 info={p.info} SKU={p.SKU} key={p.id}/>);

        } else {
            let newArrayforShopAll = [];
            for (let i in this.productsArray) {
                newArrayforShopAll[i] = this.productsArray[i];
                for (let key in newArrayforShopAll[i]) {
                    cloneOfProducts.push(newArrayforShopAll[i][key]);
                }
                counterElements = cloneOfProducts.length;
                productsContainer = cloneOfProducts.map(p =>
                    <ProductTemplate name={p.name} img={p.img} oldprice={p.about} price={p.price} about={p.about}
                                     info={p.info} SKU={p.SKU} key={p.id}/>);
            }

        }
        ;

        return (
            <div className={styles.marginContainer}>
                <div className={styles.container_ChristmasTrees}>

                    <div className={styles.navBlock_ChristmasTrees}>

                        <Link to="/" className={styles.linkHome}>Home</Link>
                        &#10095;
                        <div>{this.pageName}</div>

                    </div>

                    <div className={styles.headBlock_ChristmasTrees}>

                        <img src={this.bgImg} alt="" fetchPriority="high" className={styles.backImage}/>
                        <h2 className={styles.h2_ChristmasTrees}>{this.pageName}</h2>   {/*//Christmas ProductTemplate*/}

                    </div>

                </div>
                <div className={styles.mainBlock_products}>
                    <div className={styles.quantityAndSort_products}>
                        <div>{counterElements} products</div>
                        <div>Sort by:
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
                        {productsContainer}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductItems;
// const ChristmasTrees = () => {
//     //
//     // let productsContainer = products.map(p => <ProductTemplate name={p.name} img={p.img} oldprice={p.about} price={p.price} about={p.about} info={p.info} SKU={p.SKU} key={p.id}/>);
//     // return (
//     //     <div className={styles.marginContainer}>
//     //         <div className={styles.container_ChristmasTrees}>
//     //             <div className={styles.navBlock_ChristmasTrees}>
//     //                 <Link to="/" className={styles.linkHome}>Home</Link>
//     //                 &#10095;
//     //                 <div>Christmas ProductTemplate</div>
//     //             </div>
//     //             <div className={styles.headBlock_ChristmasTrees}>
//     //                 <img
//     //                     src="https://static.wixstatic.com/media/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg/v1/fill/w_2216,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg"
//     //                     alt="" fetchPriority="high" className={styles.backImage}/>
//     //                 <h2 className={styles.h2_ChristmasTrees}>Christmas ProductTemplate</h2>
//     //             </div>
//     //         </div>
//     //         <div className={styles.mainBlock_products}>
//     //             <div className={styles.quantityAndSort_products}>
//     //                 <div>{products.length} products</div>
//     //                 <div>Sort by:
//     //                     <select name="sort" id="type" className={styles.select}>
//     //                         <option value="Recommended">Recommended</option>
//     //                         <option value="Newest">Newest</option>
//     //                         <option value="Price (low to high)">Price (low to high)</option>
//     //                         <option value="Price (high to low)">Price (high to low)</option>
//     //                         <option value="Name A-Z">Name A-Z</option>
//     //                         <option value="Name Z-A">Name Z-A</option>
//     //                     </select>
//     //                 </div>
//     //             </div>
//     //             <div className={styles.container_products}>
//     //                 {productsContainer}
//     //             </div>
//     //         </div>
//     //     </div>
//     // )
// }
// let productsContainer = "";
// if (Array.isArray(this.productsArray)) {
//     productsContainer = this.productsArray.map(p =>
//             <ProductTemplate name={p.name} img={p.img} oldprice={p.about} price={p.price} about={p.about} info={p.info} SKU={p.SKU} key={p.id}/>);
// } else {
//     for (let arrName in this.productsArray) {
//         productsContainer = this.productsArray[arrName].map(p =>
//             <ProductTemplate name={p.name} img={p.img} oldprice={p.about} price={p.price} about={p.about} info={p.info} SKU={p.SKU} key={p.id}/>);
//     }
// };