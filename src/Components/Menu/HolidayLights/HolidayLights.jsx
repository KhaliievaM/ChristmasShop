
import React from 'react';
import ProductItems from "../TemplateFiles/ProductItems";
import products from "../../Products";

const HolidayLights = () => {
    return (
        <ProductItems pageName={'Holiday Lights'}
                      bgImg={'https://static.wixstatic.com/media/84770f_cf7bb02cf94645eaa6437c7dbcb7ba50~mv2.jpeg/v1/fill/w_1920,h_445,al_c,q_85,enc_auto/84770f_cf7bb02cf94645eaa6437c7dbcb7ba50~mv2.jpeg'}
                      productsArray={products.productsHolidayLights}
        />
    )
}
export default HolidayLights;
// <div className={styles.marginContainer}>
//     <div className={styles.container_HolidayLights}>
//         <div className={styles.navBlock_HolidayLights}>
//             <Link to="/" className={styles.linkHome}>Home</Link>
//             &#10095;
//             <div>Holiday Lights</div>
//         </div>
//         <div className={styles.headBlock_HolidayLights}>
//             <img
//                 src="https://static.wixstatic.com/media/84770f_cf7bb02cf94645eaa6437c7dbcb7ba50~mv2.jpeg/v1/fill/w_1920,h_445,al_c,q_85,enc_auto/84770f_cf7bb02cf94645eaa6437c7dbcb7ba50~mv2.jpeg"
//                 alt="" fetchPriority="high"  className={styles.backImage}/>
//             <h2 className={styles.h2_HolidayLights}>Holiday Lights</h2>
//         </div>
//     </div>
// </div>