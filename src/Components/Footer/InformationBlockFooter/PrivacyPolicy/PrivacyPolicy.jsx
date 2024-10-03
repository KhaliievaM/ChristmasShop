import React from "react";
import styles from "./PrivacyPolicy.module.css"

const PrivacyPolicy = () =>{
    return(
        <article className={styles.containerPrivacyPolicy}>
            <div>
                <h2>PRIVACY POLICY</h2>
                <hr width="6%;" color="red" size="3" className={styles.redLine}/>
                <p>I’m a privacy policy section. I’m a great place to inform your customers about how you use, store, and protect their personal information.
                    Add details such as how you use third-party banking to verify payment,
                    the way you collect data or when will you contact users after their purchase was completed successfully.
                    <br/>
                    Your user’s privacy is of the highest importance to your business, so take the time to write an accurate and detailed policy.
                    Use straightforward language to gain their trust and make sure they keep coming back to your site!</p>
            </div>
            <div>
                <h2>SAFETY SECURITY</h2>
                <hr width="6%;" color="red" size="3" className={styles.redLine}/>
                <p>I’m a safety and security section. I’m a great place to inform your customers about how you use, store, and protect their personal information.
                    Add details such as how you use third-party banking to verify payment,
                    the way you collect data or when will you contact users after their purchase was completed successfully.
                    <br/>
                    Your user’s security is of the highest importance to your business, so take the time to write an accurate and detailed policy.
                    Use straightforward language to gain their trust and make sure they keep coming back to your site!</p>
            </div>
        </article>
    )
}
export default PrivacyPolicy;