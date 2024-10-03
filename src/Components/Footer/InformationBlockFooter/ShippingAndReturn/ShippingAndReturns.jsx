import React from "react";
import styles from "./ShippingAndReturns.module.css"

const ShippingAndReturns = () =>{
 return(
     <article className={styles.containerShippingAndReturns}>
         <div>
             <h2>SHIPPING POLICY</h2>
             <hr width="6%;" color="red" size="3" className={styles.redLine}/>
             <p>I’m a shipping policy section. I’m a great place to update your customers about your shipping methods, packaging and costs.
                 Use plain, straightforward language to build trust and make sure that your customers stay loyal!
             </p>
         </div>
         <div>
             <h2>RETURN POLICY</h2>
             <hr width="6%;" color="red" size="3" className={styles.redLine}/>
             <p>I’m a return policy section. I’m a great place to let your customers know what to do in case they’ve changed their mind about their purchase, or if they’re dissatisfied with a product.
                 Having a straightforward refund or exchange policy is a great way to build trust and reassure your customers that they can buy with confidence.
             </p>
         </div>
         <div>
             <h2>PAYMENT METHOD</h2>
             <hr width="6%;" color="red" size="3" className={styles.redLine}/>
             <p>I’m a payment methods section. I’m a great place to give your customers as many details as possible about how they can pay for your stunning products.
                 Make sure your use clear language so they enjoy their online shopping experience and stay loyal!
             </p>
         </div>
         <div>
             <h2>WHOLESALE INQUIRIES</h2>
             <hr width="6%;" color="red" size="3" className={styles.redLine}/>
             <p>I’m a wholesale inquiries section. I’m a great place to inform other retailers about how they can sell your stunning products.
                 Use plain language and give as much information as possible in order to promote your business and take it to the next level!
             </p>
         </div>
     </article>
 )
}
export default ShippingAndReturns;