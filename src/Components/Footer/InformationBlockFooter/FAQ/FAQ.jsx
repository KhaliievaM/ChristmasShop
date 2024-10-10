import React, {useState} from "react";
import styles from "./FAQ.module.css";
import redZigzag from "../../../../Multimedia/12997-20010.png";
import searchIcon from "../../../../Multimedia/search_icon_grey.png"
import faq from "../../../FAQ_store";
import Section from "./General/Section";
import { BsSearch } from "react-icons/bs";
import { FiX } from "react-icons/fi";

const FAQ = () => {

    // const [firstBlockActive, setFirstBlockActive] = useState(false);
    // const [secondBlockActive, setSecondBlockActive] = useState(false);
    // const [thirdBlockActive, setThirdBlockActive] = useState(false);
    //let isOpened = false;
    // function open (id) {
    //         openedId = id;
    //         isOpened = false;
    //     }


    let openedId;
    const [isBlockActive, setBlockActive] = useState(false);
    let thisBlockActive = false;

    function open(blockActive, id) {
        setBlockActive(blockActive);
        openedId = id;
        //  console.log( blockActive)
        // console.log( openedId)
        for (let block in generalBlock) {
            let eachId = generalBlock[block].props.id;
            if (id = eachId) {
                console.log('eachId')
            }
        }
    }

    let generalBlock = faq.general.map(d => <Section question={d.question} key={d.id} answer={d.answer} open={open}
                                                     isBlockActive={isBlockActive}/>);
    let settingBlock = faq.setting.map(d => <Section question={d.question} key={d.id} answer={d.answer} open={open}
                                                     isBlockActive={isBlockActive}/>)

    const [isActive, setActive] = useState(1);
    const toggleClass = (index) => {
        setActive(index);
    };

    const [isInputActive, setInputActive] = useState(false);

    return (
        <div className={styles.container_FAQ}>

            <div className={styles.head_FAQ}>
                <h2>FAQ</h2>
                <img src={redZigzag} alt="" className={styles.zigzag_FAQ}/>
            </div>

            <div className={styles.search_FAQ}>
                <h3>Frequently asked questions</h3>

                <div className={styles.container_search}>
                    <div  className={isInputActive ? styles.container_search_form_Active : styles.container_search_form}>
                        <button type="submit" className={isInputActive ? styles.search_button_Active : styles.search_button} onClick={()=> setInputActive(!isInputActive)}><BsSearch /></button>
                        <input type="text" placeholder="Looking for something?" className={isInputActive ? styles.search_input_Active : styles.search_input}/>
                        <button type="reset" className={isInputActive ? styles.exit_button_Active : styles.exit_button}><FiX /></button>
                    </div>

                </div>
            </div>

            <div className={styles.main_Block_FAQ}>

                <div className={styles.general_Setting_FAQ}>
                    <button onClick={() => toggleClass(1)}
                            className={isActive === 1 ? styles.buttonActive : styles.button_general_Setting_FAQ}>General
                    </button>
                    <button onClick={() => toggleClass(2)}
                            className={isActive === 2 ? styles.buttonActive : styles.button_general_Setting_FAQ}>Setting
                        up FAQs
                    </button>

                </div>

                <div className={styles.general_Block}>
                    <div className={`${styles.general} ${isActive === 1 ? '' : styles.nonactive}`}>{generalBlock}</div>
                    <div className={`${styles.setting} ${isActive === 2 ? '' : styles.nonactive}`}>{settingBlock}</div>
                </div>
            </div>
        </div>
    )
}
export default FAQ;