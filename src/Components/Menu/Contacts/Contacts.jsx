import React from 'react';
import styles from "./Contacts.module.css";
import redZigzag from "../../../Multimedia/12997-20010.png";
//import {Link} from "react-router-dom";

const Contacts = () => {
    return(
        <div className={styles.container_size}>
            <div className={styles.bottomOfHomePage_containerFeedbackFormContacts}>
                <div className={styles.feedbackForm}>

                    <div className={styles.feedbackForm_sendAMess}>
                        <span>FOR ANY QUESTIONS, PLEASE SEND US A MESSAGE</span>
                        <img src={redZigzag} alt=""/>
                    </div>

                    <form action="src/Components/Menu/Home/Home" className={styles.feedbackForm_form}>
                        <div className={styles.form_block}>
                            <div className={styles.form_nameEmail}>
                                <input type="text" id="name" name="name" placeholder="Name"
                                       className={styles.form_element}/>
                                <input type="email" id="email" name="email" placeholder="Email"
                                       className={styles.form_element}/>
                            </div>
                            <input type="text" id="subject" name="subject" placeholder="Subject"
                                   className={styles.form_element}/>
                            <textarea name="message" rows="10" cols="30" placeholder="Message"
                                      className={styles.form_element}></textarea>
                        </div>
                        <input type="submit" value="Submit" className={styles.form_button}/>
                    </form>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.contacts_contactUs}>
                        <span>CONTACT US</span>
                        <img src={redZigzag} alt=""/>
                    </div>
                    <div className={styles.contacts_numEmail}>
                        <div>123-456-7890</div>
                        <div className={styles.contacts_numEmail_line}></div>
                        <a href="src/Components/Menu/Home/Home">info@my-domain.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contacts;