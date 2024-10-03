import React from "react";
import downArrow from "../../../../../Multimedia/down_arrow_icon.png";
import facebookImg from "../../../../../Multimedia/logo_facebook_icon_greyd.png";
import twitterImg from "../../../../../Multimedia/logo_twitter_icon_grey.png";
import linkedinImg from "../../../../../Multimedia/logo_linkedin_icon_grey.png";
import linkIcon from "../../../../../Multimedia/link_icon_grey.png";
import styles from './Section.module.css'
import {useState} from "react";

const Section = (props, {open}) => {
    const [isBlockActive, setFirstBlockActive] = useState(false);

    // let openedId ;
    // let isOpened = false;
    // function open (id) {
    //     openedId = id;
    //     isOpened = true;
    //     const [firstBlockActive, setFirstBlockActive] = useState(isOpened);
    // }
    // function close (id) {
    //     openedId = id;
    //     isOpened = false;
    //     document.getElementsByClassName('')
    // }
     //console.log(props.open)
    let iD = props.id;
    return(
        <section className={styles.section}>
            <div className={styles.h3_Arrow} onClick={()=>setFirstBlockActive(!isBlockActive)}>     {/*  onClick={ ()=> props.open(!props.isBlockActive, iD) }*/}
                <h3>{props.question}</h3>
                <img src={downArrow} alt=""  className={`${styles.arrow} ${isBlockActive ? styles.upArrow  : ''}`}/>  {/* className={`${styles.arrow} ${props.isBlockActive ? styles.upArrow  : ''}`}*/}
            </div>
            <div className={`${styles.main_Block_Section} ${isBlockActive ? styles.active : ''}`} >{/*className={`${styles.main_Block_Section} ${props.isBlockActive ? styles.active : ''}`} */}
                <p>
                    {props.answer}
                </p>
                <div className={styles.link_ToSocialNetworks}>
                    <div className={styles.social_Networks}>
                        <a href="src/Components/Footer/InformationBlockFooter/FAQ/General/Section?link=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&app_id=966242223397117&source_surface=external_reshare&display&hashtag">
                            <img src={facebookImg} alt=""/>
                        </a>
                        <a href="https://x.com/intent/post?url=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">
                            <img src={twitterImg} alt=""/>
                        </a>
                        <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312%26appDefId%3D14c92d28-031e-7910-c9a8-a670011e062d">
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