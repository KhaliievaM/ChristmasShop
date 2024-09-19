import React from 'react';
import products from "../../Products";
import ProductItems from "../TemplateFiles/ProductItems";

const UniqueOrnaments = () => {

    return(
        <ProductItems pageName={'Unique Ornaments'}
                      bgImg={'https://static.wixstatic.com/media/84770f_6d3cbb8d2eee4cecb35fa530aa6a3a1d~mv2.jpeg/v1/fill/w_2216,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6d3cbb8d2eee4cecb35fa530aa6a3a1d~mv2.jpeg'}
                      productsArray={products.productsUniqueOrnaments}
        />
    )
}
export default UniqueOrnaments;
// let productsContainer = products.productsUniqueOrnaments.map(p => <Ornaments name={p.name} img={p.img} oldprice={p.about} price={p.price} about={p.about} info={p.info} SKU={p.SKU} key={p.id}/>);
// return (
//     <div className={styles.marginContainer}>
//         <div className={styles.container_UniqueOrnaments}>
//             <div className={styles.navBlock_UniqueOrnaments}>
//                 <Link to="/" className={styles.linkHome}>Home</Link>
//                 &#10095;
//                 <div>Unique Ornaments</div>
//             </div>
//             <div className={styles.headBlock_UniqueOrnaments}>
//                 <img
//                     src="https://static.wixstatic.com/media/84770f_6d3cbb8d2eee4cecb35fa530aa6a3a1d~mv2.jpeg/v1/fill/w_2216,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_6d3cbb8d2eee4cecb35fa530aa6a3a1d~mv2.jpeg"
//                     alt="" fetchPriority="high"  className={styles.backImage}/>
//                 <h2 className={styles.h2_UniqueOrnaments}>Unique Ornaments</h2>
//             </div>
//         </div>
//         <div className={styles.mainBlock_products}>
//             <div className={styles.quantityAndSort_products}>
//                 <div>{products.productsUniqueOrnaments.length} products</div>
//                 <div>Sort by:
//                     <select name="sort" id="type" className={styles.select}>
//                         <option value="Recommended">Recommended</option>
//                         <option value="Newest">Newest</option>
//                         <option value="Price (low to high)">Price (low to high)</option>
//                         <option value="Price (high to low)">Price (high to low)</option>
//                         <option value="Name A-Z">Name A-Z</option>
//                         <option value="Name Z-A">Name Z-A</option>
//                     </select>
//                 </div>
//             </div>
//             <div className={styles.container_products}>
//                 {productsContainer}
//             </div>
//         </div>
//     </div>