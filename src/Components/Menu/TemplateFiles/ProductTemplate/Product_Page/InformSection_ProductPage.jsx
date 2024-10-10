import React from "react";
import styles from "./InformSection_ProductPage.module.css";
import {GoDash, GoPlus} from "react-icons/go";
import {useState} from "react";

const InformSection = (props) =>{
    const [isSectionActive, setSectionActive] = useState(false);
    return(
        <section className={styles.informSection_Product}>
            <div className={styles.informSection_head} onClick={()=>setSectionActive(!isSectionActive)}>
                <h3 className={styles.informSection_head_h3}>{props.name}</h3>
                <div className={styles.informSection_head_btn}>
                    <GoPlus className={`${styles.informSection_head_btnPlus} ${isSectionActive ?  styles.displayNone : '' }`}/>
                    <GoDash  className={`${styles.informSection_head_btnMinus_none} ${isSectionActive ? styles.informSection_head_btnMinus : '' }`}/>
                </div>
            </div>
            <p className={`${styles.informSection_body_none} ${isSectionActive ? styles.informSection_body : ''}`}>
                {props.info}
            </p>
        </section>
    )
}
export default InformSection;