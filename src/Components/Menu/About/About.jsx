import React from 'react';
import styles from "./About.module.css";
import redZigzag from "../../../Multimedia/12997-20010.png";

const About = () => {
    return(
        <section className={styles.containerOfAboutPage}>
            <h2 className={styles.h2_AboutPage}>About</h2>
            <img src={redZigzag} alt="" className={styles.zigzag_AboutPage}/>
            <img
                src="https://static.wixstatic.com/media/84770f_2c07b0bcb1374a05a3cef0a792b0aee3~mv2_d_1920_1281_s_2.jpg/v1/fill/w_980,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_2c07b0bcb1374a05a3cef0a792b0aee3~mv2_d_1920_1281_s_2.jpg"
                className={styles.image_AboutPage}/>
            <article className={styles.article_AboutPage}>
                <div className={styles.container_article_AboutPage}>
                    <h3 className={styles.article_h3_AboutPage}>I'm a paragraph. Click here to add your own text and edit me. It's easy.</h3>
                    {/*<hr/>*/}
                    <div className={styles.redLine_AboutPage}></div>
                    <p className={styles.article_p_AboutPage}>
                        <span>
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                            Feel free to drag and drop me anywhere you like on your page.
                            I’m a great place for you to tell a story and let your users know a little more about you.
                        </span>
                        <br/><br/>
                        <span>
                            This is a great space to write long text about your company and your services.
                            You can use this space to go into a little more detail about your company.
                            Talk about your team and what services you provide.
                            Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
                            Make your company stand out and show your visitors who you are.
                        </span>
                    </p>
                </div>
            </article>
        </section>
    )
}
export default About;