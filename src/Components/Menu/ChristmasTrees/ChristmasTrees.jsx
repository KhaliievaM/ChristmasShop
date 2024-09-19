import React from 'react';
import products from "../../Products";
import ProductItems from "../TemplateFiles/ProductItems";

const ChristmasTrees = () => {
    return(
        <ProductItems  pageName={'Christmas ProductTemplate'}
                       bgImg={'https://static.wixstatic.com/media/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg/v1/fill/w_2216,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg'}
                       productsArray={products.productsChristmasTrees}
        />
    )

}
export default ChristmasTrees;
// const ChristmasTrees = () => {
//     let productsContainer = products.productsChristmasTrees.map(p => <ProductTemplate name={p.name} img={p.img} oldprice={p.about} price={p.price} about={p.about} info={p.info} SKU={p.SKU} key={p.id}/>);
//     return (
//         <div className={styles.marginContainer}>
//             <div className={styles.container_ChristmasTrees}>
//                 <div className={styles.navBlock_ChristmasTrees}>
//                     <Link to="/" className={styles.linkHome}>Home</Link>
//                     &#10095;
//                     <div>Christmas ProductTemplate</div>
//                 </div>
//                 <div className={styles.headBlock_ChristmasTrees}>
//                     <img
//                         src="https://static.wixstatic.com/media/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg/v1/fill/w_2216,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg"
//                         alt="" fetchPriority="high" className={styles.backImage}/>
//                     <h2 className={styles.h2_ChristmasTrees}>Christmas ProductTemplate</h2>
//                 </div>
//             </div>
//             <div className={styles.mainBlock_products}>
//                 <div className={styles.quantityAndSort_products}>
//                     <div>{products.productsChristmasTrees.length} products</div>
//                     <div>Sort by:
//                         <select name="sort" id="type" className={styles.select}>
//                             <option value="Recommended">Recommended</option>
//                             <option value="Newest">Newest</option>
//                             <option value="Price (low to high)">Price (low to high)</option>
//                             <option value="Price (high to low)">Price (high to low)</option>
//                             <option value="Name A-Z">Name A-Z</option>
//                             <option value="Name Z-A">Name Z-A</option>
//                         </select>
//                     </div>
//                 </div>
//                 <div className={styles.container_products}>
//                     {productsContainer}
//                 </div>
//             </div>
//         </div>
//     )
// }
//p1.render();