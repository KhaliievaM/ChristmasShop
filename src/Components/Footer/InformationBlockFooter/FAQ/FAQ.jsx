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


                    {/*<section>*/}
                    {/*    <div className={styles.h3_Arrow} onClick={()=>setFirstBlockActive(!firstBlockActive)}>*/}
                    {/*        <h3>What is an FAQ section?</h3>*/}
                    {/*        <img src={downArrow} alt="" className={`${styles.arrow} ${firstBlockActive ? styles.upArrow : ''}`} />*/}
                    {/*    </div>*/}
                    {/*    <div className={`${styles.main_Block_Section} ${firstBlockActive ? styles.active : ''}`} >*/}
                    {/*        <p>*/}
                    {/*            An FAQ section can be used to quickly answer common questions about your business like*/}
                    {/*            "Where do you ship to?",*/}
                    {/*            "What are your opening hours?", or "How can I book a service?".*/}
                    {/*        </p>*/}
                    {/*        <div className={styles.link_ToSocialNetworks}>*/}
                    {/*            <div className={styles.social_Networks}>*/}
                    {/*                <a href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&app_id=966242223397117&source_surface=external_reshare&display&hashtag">*/}
                    {/*                    <img src={facebookImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*                <a href="https://x.com/intent/post?url=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">*/}
                    {/*                    <img src={twitterImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*                <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312%26appDefId%3D14c92d28-031e-7910-c9a8-a670011e062d">*/}
                    {/*                    <img src={linkedinImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div className={styles.copy_link}>*/}
                    {/*                <img src={linkIcon} alt=""/>*/}
                    {/*            </div>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}

                    {/*<section>*/}
                    {/*    <div className={styles.h3_Arrow} onClick={()=>setSecondBlockActive(!secondBlockActive)}>*/}
                    {/*        <h3>Why do FAQs matter?</h3>*/}
                    {/*        <img src={downArrow} alt="" className={`${styles.arrow} ${secondBlockActive ? styles.upArrow : ''}`} />*/}
                    {/*    </div>*/}
                    {/*    <div className={`${styles.main_Block_Section} ${secondBlockActive ? styles.active : ''}`} >*/}
                    {/*        <p>*/}
                    {/*            FAQs are a great way to help site visitors find quick answers to common questions about*/}
                    {/*            your business and create a better navigation experience.*/}
                    {/*        </p>*/}
                    {/*        <div className={styles.link_ToSocialNetworks}>*/}
                    {/*            <div className={styles.social_Networks}>*/}
                    {/*                <a href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&app_id=966242223397117&source_surface=external_reshare&display&hashtag">*/}
                    {/*                    <img src={facebookImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*                <a href="https://x.com/intent/post?url=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">*/}
                    {/*                    <img src={twitterImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*                <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312%26appDefId%3D14c92d28-031e-7910-c9a8-a670011e062d">*/}
                    {/*                    <img src={linkedinImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div className={styles.copy_link}>*/}
                    {/*                <img src={linkIcon} alt=""/>*/}
                    {/*            </div>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                    {/*<section>*/}
                    {/*    <div className={styles.h3_Arrow} onClick={()=>setThirdBlockActive(!thirdBlockActive)}>*/}
                    {/*        <h3>Where can I add my FAQs?</h3>*/}
                    {/*        <img src={downArrow} alt="" className={`${styles.arrow} ${thirdBlockActive ? styles.upArrow : ''}`} />*/}
                    {/*    </div>*/}
                    {/*    <div className={`${styles.main_Block_Section} ${thirdBlockActive ? styles.active : ''}`} >*/}
                    {/*        <p>*/}
                    {/*            FAQs can be added to any page on your site or to your Wix mobile app, giving access to*/}
                    {/*            members on the go.*/}
                    {/*        </p>*/}
                    {/*        <div className={styles.link_ToSocialNetworks}>*/}
                    {/*            <div className={styles.social_Networks}>*/}
                    {/*                <a href="https://www.facebook.com/share_channel/?link=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&app_id=966242223397117&source_surface=external_reshare&display&hashtag">*/}
                    {/*                    <img src={facebookImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*                <a href="https://x.com/intent/post?url=https%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312&appDefId=14c92d28-031e-7910-c9a8-a670011e062d">*/}
                    {/*                    <img src={twitterImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*                <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwww.wix.com%2Fdemone2%2Fchristmas-boutique%2Ffaq%3FquestionId%3Ded199f9a-1b64-42c1-bf6d-55677d0d8312%26appDefId%3D14c92d28-031e-7910-c9a8-a670011e062d">*/}
                    {/*                    <img src={linkedinImg} alt=""/>*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div className={styles.copy_link}>*/}
                    {/*                <img src={linkIcon} alt=""/>*/}
                    {/*            </div>*/}

                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}
                </div>
            </div>
        </div>
    )
}
export default FAQ;