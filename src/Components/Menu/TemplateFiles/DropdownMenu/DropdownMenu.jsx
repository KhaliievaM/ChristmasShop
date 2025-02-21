import React, {useState} from "react";
import styles from "./DropdownMenu.module.css";
import {AiOutlineCaretDown,AiOutlineCaretUp} from "react-icons/ai";

const DropdownMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);                                                               // стан dropDown меню(відкритий/закритий)
    const [typeOfSort, setTypeOfSort] = useState('Recommended');                                               // змінний тип сортування, за замовчуванням - 'Recommended'
    let sortList = ["Recommended","Newest","Price (low to high)","Price (high to low)","Name A-Z","Name Z-A"];          // типи сортування
    let funcSort = (item) =>{
        setTypeOfSort(item);                                                                                            // зміна типу сортування
        props.onChange(item);                                                                                           //передача батьківському компоненту актуального типу сортування
        setIsOpen(false);                                                                                         // закриття dropDown меню
    }

    return(
        <div className={styles.sortBy_DropdownMenu}><div>Sort by:</div>                                                 {/*сортування */}
            <div className={styles.typeOfSort}>{typeOfSort}</div>                                                       {/*тип сортування */}
            <div className={styles.container}>
                <button onClick={()=>setIsOpen((prev) => !prev)}  className={styles.mainButton}>          {/*кнопка відкриття/закриття меню*/}
                    {!isOpen ? (<AiOutlineCaretDown/>):(<AiOutlineCaretUp/>)}
                </button>
                {isOpen && (<div className={styles.dropDown_menu}>{sortList.map((item,i) => (
                    <div className={styles.con_dropDown_menu} key={i}>                                                  {/*список типів сортування */}
                        <h3 className={styles.position_dropDown} onClick={() => funcSort(item)}>{item}</h3>
                    </div>))}</div>)}
            </div>
        </div>
    );
}
export default DropdownMenu;