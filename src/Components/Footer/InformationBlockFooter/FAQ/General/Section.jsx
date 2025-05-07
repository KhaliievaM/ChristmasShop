import React from "react";
import downArrow from "../../../../../Multimedia/down_arrow_icon.png";
import facebookImg from "../../../../../Multimedia/logo_facebook_icon_greyd.png";
import twitterImg from "../../../../../Multimedia/logo_twitter_icon_grey.png";
import linkedinImg from "../../../../../Multimedia/logo_linkedin_icon_grey.png";
import linkIcon from "../../../../../Multimedia/link_icon_grey.png";
import styles from './Section.module.css'
import {useState} from "react";

const Section = (props) => {

    let index = props.index;                                                                                            //індекс об'єкта масиву питань FAQ
    const [isBlockActive, setFirstBlockActive] = useState(false);                                              //статус блока відкритий/закритий

    return(
        <section className={styles.section}>
            <div className={styles.h3_Arrow} onClick={()=>setFirstBlockActive(!isBlockActive)}>
                <h3>{props.question}</h3>
                <img src={downArrow} alt=""  className={`${styles.arrow} ${isBlockActive ? styles.upArrow  : ''}`}/>
            </div>
            {/*якщо isBlockActive або індекс об'єкта не undefined і = 0(тобто перший виведений на сторінці об'єкт)*/}
            <div className={`${styles.main_Block_Section} ${isBlockActive || (index !== undefined && index === 0) ? styles.active : ''}`} >
                <p>
                    {props.answer}
                </p>
                <div className={styles.link_ToSocialNetworks}>
                    <div className={styles.social_Networks}>
                        <a href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3D847ca3f0-5b64-474e-b5f3-411365f893b6&app_id=966242223397117&source_surface=external_reshare&display&hashtag"
                           target="_blank" rel="noopener">
                            <img src={facebookImg} alt=""/>
                        </a>
                        <a href="https://x.com/intent/post?url=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&appDefId=14c92d28-031e-7910-c9a8-a670011e062d"
                           target="_blank" rel="noopener">
                            <img src={twitterImg} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312%26appDefId%3D14c92d28-031e-7910-c9a8-a670011e062d"
                           target="_blank" rel="noopener">
                            <img src={linkedinImg} alt=""/>
                        </a>
                    </div>
                    <div className={styles.copy_link}>
                        <img src={linkIcon} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Section;