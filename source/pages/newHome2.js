import React from 'react'
import styles from '../css/home2.module.css'
import '../css/main.css'
import CategoryBox from '../components/categoryBox'
import clothingHandout from '../images/clothesMealHandOuts/clothing.webp'
import stand from '../images/summerHairCuts/IMG_4354.JPG'
import communityCleanup from '../images/communityCleanUp/IMG_3367.JPG'

var whoWeAre = ["Who We Are","Believe New York is committed to uplifting all individuals and families navigating the challenges of poverty, abuse, and mental health issues."];
var howWeHelp = ["How We Help","We have 3 core programs, and several ongoing initiatives, that work synergistically to address the complex needs of our clients."];
var waysToGetInvolved = ["Ways To Get Involved","Our organization is powered by a dedicated team of over 60 volunteers from diverse backgrounds, all committed to making a difference and serving the community. We cannot do this without you!"];
var diversityAndInclusion = ["Diversity & Inclusion","Our programs do not exclude any person in need of help, regardless of their background, identity, or situation. We also accommodate non-English speaking individuals."];

const newHome2 = () => {
    return(
        <div className={styles.parentFont}>
          <div className={styles.columnFlex}>
              <div className="maxWidth width80Per">
                <div className={styles.title}>Advancing our city and the lives of New Yorkers
                </div>
                <div className={styles.subTitle}>We serve all individuals and families in need of support regardless of their background, identity, or situation.</div>
              </div>
              <CategoryBox image={clothingHandout} gradient={'rgba(0,0,0, 0.2)'} title={whoWeAre[0]} description={whoWeAre[1]}/>
              <CategoryBox image={stand} gradient={'rgba(0,0,0, 0.25)'} title={howWeHelp[0]} description={howWeHelp[1]}/>
              <CategoryBox image={communityCleanup} gradient={'rgba(0, 0, 0, 0.08)'} title={waysToGetInvolved[0]} description={waysToGetInvolved[1]}/>
              <CategoryBox image={stand} gradient={'rgba(0, 0, 0, 0.25)'} title={diversityAndInclusion[0]} description={diversityAndInclusion[1]}/>
          </div>
          <div className={styles.background}>
              <div className={styles.dots}>
              </div>
          </div>
          <div>Testimonials from our clients</div>
        </div>
        
    )
}

export default newHome2;