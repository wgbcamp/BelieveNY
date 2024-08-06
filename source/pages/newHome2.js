import React from 'react'
import styles from '../css/home2.module.css'
import '../css/main.css'
import CategoryBox from '../components/categoryBox'
import clothingHandout from '../images/clothesMealHandOuts/clothing.webp'
import stand from '../images/summerHairCuts/IMG_4354.JPG'
import communityCleanup from '../images/communityCleanUp/IMG_3367.JPG'
import mentalhealthfair from '../images/events/MentalHealthFair_Events.jpg'

var whoWeAre = ["Who We Are","Believe New York is committed to uplifting all individuals and families navigating the challenges of poverty, abuse, and mental health issues."];
var howWeHelp = ["How We Help","We have 3 core programs, and several ongoing initiatives, that work synergistically to address the complex needs of our clients."];
var waysToGetInvolved = ["Ways To Get Involved","Our organization is powered by a dedicated team of over 60 volunteers from diverse backgrounds, all committed to making a difference and serving the community. We cannot do this without you!"];
var diversityAndInclusion = ["Diversity & Inclusion","Our programs do not exclude any person in need of help, regardless of their background, identity, or situation. We also accommodate non-English speaking individuals."];

var accomplishments = ["Connected 23 clients to shelters, transitional homes, and long-term housing solutions",
  "Secured food assistance for 18 clients through local food pantries and governmental programs.",
  "Supported 14 clients experiencing domestic abuse by connecting them to mental health care, legal services, and safe housing solutions.",
  "Secured affordable mental health care for 22 clients and aided in obtaining affordable health insurance.",
  "Delivered greater than 7,000 hours of supportive mental health talk session, primarily reoccurring sessions with our active clients."];

const newHome2 = () => {
    return(
        <div className={styles.parentFont}>
          <div className={styles.firstBG}></div>
          <div className={styles.titleBlock}>
            <div className={styles.tinyTitle}>Believe New York Philanthropies</div>
            <div className={styles.title}>Advancing our city & the lives of new yorkers</div>
            <div className={styles.barrier}>
              <div className={styles.barrierLineFlex}>
                <div className={styles.barrierBall}></div>
                <div className={styles.barrierLineInnerFlex}>
                  <div className={styles.barrierLine}></div>
                </div>
              </div>
            </div>
            <div className={styles.phraseBlock}>Believe New York is on a mission—to improve the lives of all individuals and families in New York City, but we need your help, Donate Now to support our mission!
            </div>
            <div className={styles.linkButtonFlex}>
              <div className={styles.linkButton}>Learn more</div>
            </div>
          </div> 
          <div className={styles.separator}></div>
          <div className={styles.subBlock}>
            <div className={styles.smallTitle}>The Open Space</div>
            <div className={styles.phraseBlock}>A safe place to vent anonymously about any stress or mental health concerns you have.</div>
            <div className={styles.phraseBlockMinor}>100% free of charge and confidential, the Open Space offers a safe and nonjudgemental place to talk about what you are going through while remaining anonymous.
            </div>
            <div className={styles.linkButtonFlex}>
              <div className={styles.linkButton}>Request a session</div>
            </div>
            <div className={styles.smallTitle}>A year of progress</div>
            <div className={styles.groupPhoto}></div>
            <div className={styles.listFlex}>
                {accomplishments.map((value) => (
                  <div className={styles.listElementFlex} key={value}>
                    <div className={styles.fontawesomeFlex}>
                      <i className="fa-solid fa-sm fa-check"></i>
                    </div>
                    <div>{value}</div>
                  </div>
                ))}  
            </div>
            <div className={styles.linkButtonFlexWide}>
              <div className={styles.linkButton}>See how we're making a difference</div>
            </div>
            <div className={styles.imageCarousel}></div>
          </div>
        </div>
        
    )
}

export default newHome2;