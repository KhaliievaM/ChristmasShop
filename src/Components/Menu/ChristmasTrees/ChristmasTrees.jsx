import React from 'react';
import styles from "./ChristmasTrees.module.css";
import {Link} from "react-router-dom";
import Trees from "./Trees/Trees";

const ChristmasTrees = () => {
    let products = [
        {
            id: 1,
            img: "https://static.wixstatic.com/media/84770f_87ce07af00b54500899015d9de6f0c69~mv2_d_1500_1500_s_2.jpg/v1/fill/w_428,h_428,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_87ce07af00b54500899015d9de6f0c69~mv2_d_1500_1500_s_2.jpg",
            name: 'I`m a product',
            oldprice: "",
            price: "$400",
            about: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
            info: '12\' Deluxe Frasier Christmas tree approximately 84 inches in diameter.',
            SKU: '0001',
        },
        {
            id: 2,
            img: "https://static.wixstatic.com/media/84770f_b0aad5af51b54bda937415b47907945f~mv2_d_1500_1500_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_b0aad5af51b54bda937415b47907945f~mv2_d_1500_1500_s_2.jpg",
            name: 'I`m a product',
            oldprice: "$500",
            price: "$425",
            about: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
            info: '12\' Deluxe Frasier Christmas tree approximately 84 inches in diameter.',
            SKU: '0002',
        },
        {
            id: 3,
            img: "https://static.wixstatic.com/media/84770f_54f0ae285e01488684756fb3a72246c6~mv2_d_1500_1500_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_54f0ae285e01488684756fb3a72246c6~mv2_d_1500_1500_s_2.jpg",
            name: 'I`m a product',
            oldprice: "",
            price: "$300",
            about: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
            info: '12\' Deluxe Frasier Christmas tree approximately 84 inches in diameter.',
            SKU: '0003',
        },
        {
            id: 4,
            img: "https://static.wixstatic.com/media/84770f_71f71914ad3446c2af6bfb8cd40900c0~mv2_d_1500_1500_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_71f71914ad3446c2af6bfb8cd40900c0~mv2_d_1500_1500_s_2.jpg",
            name: 'I`m a product',
            oldprice: "",
            price: "$150",
            about: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
            info: '12\' Deluxe Frasier Christmas tree approximately 84 inches in diameter.',
            SKU: '0004',
        },
        {
            id: 5,
            img: "https://static.wixstatic.com/media/84770f_a67ae9b05c6345b69cbaa49b1867fe0e~mv2_d_1500_1500_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_a67ae9b05c6345b69cbaa49b1867fe0e~mv2_d_1500_1500_s_2.jpg",
            name: 'I`m a product',
            oldprice: "$100",
            price: "$85",
            about: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
            info: '12\' Deluxe Frasier Christmas tree approximately 84 inches in diameter.',
            SKU: '0005',
        },
        {
            id: 6,
            img: "https://static.wixstatic.com/media/84770f_b7be9d76dbeb41359b3bd46d47817a61~mv2_d_1500_1500_s_2.jpg/v1/fill/w_500,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_b7be9d76dbeb41359b3bd46d47817a61~mv2_d_1500_1500_s_2.jpg",
            name: 'I`m a product',
            oldprice: "",
            price: "$500",
            about: "I'm a product description. I'm a great place to add more details about your product such as sizing, material, care instructions and cleaning instructions.",
            info: '12\' Deluxe Frasier Christmas tree approximately 84 inches in diameter.',
            SKU: '0006',
        },



    ];
    let productsContainer = products.map(p => <Trees name={p.name} img={p.img} oldprice={p.about} price={p.price} about={p.about} info={p.info} SKU={p.SKU} key={p.id}/>);
    return (
        <div className={styles.marginContainer}>
            <div className={styles.container_ChristmasTrees}>
                <div className={styles.navBlock_ChristmasTrees}>
                    <Link to="/" className={styles.linkHome}>Home</Link>
                    &#10095;
                    <div>Christmas Trees</div>
                </div>
                <div className={styles.headBlock_ChristmasTrees}>
                    <img
                        src="https://static.wixstatic.com/media/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg/v1/fill/w_2216,h_514,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_6d0037f45bd74136b384b5cff2f0344d~mv2.jpg"
                        alt="" fetchPriority="high" className={styles.backImage}/>
                    <h2 className={styles.h2_ChristmasTrees}>Christmas Trees</h2>
                </div>
            </div>
            <div className={styles.mainBlock_products}>
                <div className={styles.quantityAndSort_products}>
                    <div>{products.length} products</div>
                    <div>Sort by:</div>
                </div>
                <div className={styles.container_products}>
                    {productsContainer}
                </div>
            </div>
        </div>
    )
}
export default ChristmasTrees;