import React, {useEffect, useRef, useState} from "react";
import styles from "./FAQ.module.css";
import redZigzag from "../../../../Multimedia/12997-20010.png";
import faq from "../../../FAQ_store";
import Section from "./General/Section";
import { BsSearch } from "react-icons/bs";
import { FiX } from "react-icons/fi";

const FAQ = () => {
    const [isInputActive, setInputActive] = useState(false);                                                   //стан Input відкритий/закритий
    const [value, setValue] = useState('');
    const clearStr = useRef(null);
    const [generalBlock, setGeneralBlock] = useState([]);                                                      //оновлення/зміна масиву елементів для виведення

    // Створюємо один масив з усіх питань
    let newFaq = [];
    let counter = 0;
    for (let elem in faq) {
        for (let i of faq[elem]) {
            i.id = ++counter;
            newFaq.push(i);
        }
    }

    // Функція фільтрації та оновлення
        const updateFAQList = (searchValue) => {
            const filtered = newFaq.filter(item =>                                                                      //фільтрування питань і відповідей по запиту в input
                item.question.toLowerCase().includes(searchValue.toLowerCase()) ||
                item.answer.toLowerCase().includes(searchValue.toLowerCase())
            );

            const blocks = filtered.map((d, i) => (                                                             //формування оновленого масиву
                <Section question={d.question} index={i} key={d.id} answer={d.answer} />                                //i - індекс об'єкта масиву питань FAQ
            ));

            setGeneralBlock(blocks);
        };

    // Оновлюємо при кожній зміні value/ useEffect виконує функцію updateFAQList при кожній зміні value
        useEffect(() => {
            updateFAQList(value);
        }, [value]);

    // Очищення поля input та показ всіх варіантів по запиту
        const handleClear = () => {
            if (clearStr.current) {
                clearStr.current.value = '';
            }
            setValue('');                                                                                         //Очищення поля input
            setInputActive(false);                                                                                //Закриття поля input
        };
    // Фокусування. При натисканні на кнопку пошуку з'являється фокус на input
        const focus = () =>{
            clearStr.current.focus();
        }

    return (
        <div className={styles.container_FAQ}>
            <div className={styles.head_FAQ}>
                <h2>FAQ</h2>
                <img src={redZigzag} alt="" className={styles.zigzag_FAQ}/>
            </div>

            <div className={styles.search_FAQ}>
                <h3>Frequently asked questions</h3>

                <div className={styles.container_search}>
                    <div className={isInputActive ? styles.container_search_form_Active : styles.container_search_form}>
                        <button type="submit"
                                className={isInputActive ? styles.search_button_Active : styles.search_button}
                                onClick={() => { setInputActive(true); focus();}}>
                            <BsSearch />
                        </button>
                        <input
                            type="text"
                            placeholder="Looking for something?"
                            className={isInputActive ? styles.search_input_Active : styles.search_input}
                            onChange={(event) => setValue(event.target.value)}
                            ref={clearStr}
                        />
                        <button
                            type="reset"
                            className={isInputActive ? styles.exit_button_Active : styles.exit_button}
                            onClick={handleClear}
                        ><FiX /></button>
                    </div>
                </div>
            </div>

            <div className={styles.main_Block_FAQ}>
                <div className={styles.general_Block}>
                    <div className={styles.general}>{generalBlock}</div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;
