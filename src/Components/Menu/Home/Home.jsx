import React from 'react';
import {useState} from "react";
import styles from './Home.module.css';
import zigzag from "../../../Multimedia/12997-2001.png";
import redZigzag from "../../../Multimedia/12997-20010.png";

const Home = () => {
    // const [count, setCount] = useState(0);
    //
    // function handleClick() {
    //     setCount(count + 1);
    // }
    // return (
    //     <button onClick={handleClick}>
    //         Clicked {count} times
    //     </button>
    // );

    return (
        <div className={styles.wrapper}>
            <main className={styles.containerOfHomePage}>
                <section className={styles.topOfHomePage}>

                    <div className={styles.topOfHomePage_deer}>
                        <span>EST.</span>
                        <div className={styles.topOfHomePage_deer_image}></div>
                        <span>2035</span>
                    </div>

                    <div className={styles.topOfHomePage_title}>
                        <h1>Holiday Specials</h1>
                        <span>YOUR SOURCE FOR ALL THINGS CHRISTMAS</span>
                    </div>

                    <button className={styles.topOfHomePage_btn_startShop}>Start Shopping</button>

                </section>

                <section className={styles.middleOfHomePage}>
                    <div className={styles.middleOfHomePage_whiteBlock}>
                        <div className={styles.middleOfHomePage_whiteBlock_containerOfThreeCategories}>
                            <div className={styles.middleOfHomePage_whiteBlock_containerOfThreeCategories_threeCategories}>

                                <img
                                    src="https://static.wixstatic.com/media/84770f_3d61665c560442849e3ac2f6f7675427~mv2_d_1500_1500_s_2.jpg/v1/fill/w_303,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_3d61665c560442849e3ac2f6f7675427~mv2_d_1500_1500_s_2.jpg"
                                    alt="Christmas Trees"/>

                                <a href="src/Components/Menu/Home/Home">Christmas Trees</a>
                                <hr/>
                                <button>Shop Collection</button>

                            </div>

                            <div className={styles.middleOfHomePage_whiteBlock_containerOfThreeCategories_threeCategories}>

                                <img
                                    src="https://static.wixstatic.com/media/84770f_0a0ede78262c4c5e86861c5c598e82e6~mv2_d_1500_1500_s_2.jpg/v1/fill/w_318,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_0a0ede78262c4c5e86861c5c598e82e6~mv2_d_1500_1500_s_2.jpg"
                                    alt="Unique Ornaments"/>
                                <a href="src/Components/Menu/Home/Home">Unique Ornaments</a>
                                <hr/>
                                <button>Shop Collection</button>

                            </div>

                            <div className={styles.middleOfHomePage_whiteBlock_containerOfThreeCategories_threeCategories}>

                                <img
                                    src="https://static.wixstatic.com/media/84770f_8ef70e422ee7477b8237772b4cd69cd3~mv2_d_1500_1500_s_2.jpg/v1/fill/w_303,h_432,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/84770f_8ef70e422ee7477b8237772b4cd69cd3~mv2_d_1500_1500_s_2.jpg"
                                    alt="Holiday Lights"/>
                                <a href="src/Components/Menu/Home/Home">Holiday Lights</a>
                                <hr/>
                                <button>Shop Collection</button>

                            </div>
                        </div>
                    </div>

                    <div className={styles.middleOfHomePage_promoCodeBlock}>

                        <img
                            src='https://static.wixstatic.com/media/84770f_2d42248cf58941ffbaf7635cc5104abe~mv2_d_1920_1280_s_2.jpg/v1/fill/w_595,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_2d42248cf58941ffbaf7635cc5104abe~mv2_d_1920_1280_s_2.jpg'/>

                        <div className={styles.middleOfHomePage_promoCodeBlock_redBlock}>

                            <span className={styles.middleOfHomePage_promoCodeBlock_redBlock_text}>
                                BUY ONLINE NOW AND GET 10% OFF
                                <div>
                                    <img src={zigzag} alt="" className={styles.zigzag}/>
                                </div>
                                USE PROMO CODE HOHOHO
                            </span>

                            <button>Shop Now</button>

                        </div>
                        <img
                            src="https://static.wixstatic.com/media/84770f_7dd192db00dc4d219b7fcad2061e2fcb~mv2_d_1920_1920_s_2.jpg/v1/fill/w_595,h_650,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_7dd192db00dc4d219b7fcad2061e2fcb~mv2_d_1920_1920_s_2.jpg"/>
                    </div>
                </section>

                <div className={styles.bottomOfHomePage}>
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
            </main>
        </div>
    )
}
export default Home