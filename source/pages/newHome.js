import React from 'react'
import styles from '../css/home.module.css'
import city from '../images/general/city.jpg'
import citysky from '../images/general/citysky.jpg'
import currentEvent from '../images/events/mentalHealth.png'

const newHome = () => {
    return(
        <div>
            <div className={`${styles.currentEventBG} ${styles.borderSeparator}`}>             
                <div className={styles.rotatingImage}>
                </div>
                <div className={styles.flexColumn}>
                    <div className={styles.flexColumnAlignCenter}>
                        <div className={styles.eventTitle}>Mental Health Resource Fair</div>
                    </div>
                    <div className={styles.flexCenterX}>
                        <div className={styles.eventDescription}>Whether you're looking for guidance, resources, or just want to connect with others, this fair is the perfect place to start.</div>
                    </div>
                    <a href="https://www.eventbrite.com/e/mental-health-support-fair-hosted-by-believe-new-york-tickets-882643539587?aff=oddtdtcreator" className={styles.eventLinkOuter}>
                            <div className={styles.eventLinkText}>FIND OUT MORE</div>
                    </a>
                    <a href="/joinUs" ><div className={styles.miscLink}>JOIN OUR MOVEMENT</div></a>
                    <a href="/impactReport"><div className={styles.miscLink}>SEE OUR IMPACT REPORT</div></a>
                </div>
            </div>
            <div className={styles.flexColumnAlignCenter}>
                <div className={`${styles.width90}`}> 
                    <div className={styles.learnTitle}>Advancing Our City and the lives of New Yorkers</div>
                    <div className={styles.learnSubTitle}>We serve all individuals and families in need of support regardless of their background, identity, or situation.</div>
                    <div className={styles.learnLink}><div className={styles.learnLinkTitle}><a href="/aboutUs">Who We Are</a> <i className="fa-regular fa-circle-right"></i></div> 
                        <div className={styles.learnLinkDescription}>Believe New York is committed to uplifting all individuals and families navigating the challenges of poverty, abuse, and mental health issues.</div>
                    </div>
                    <div className={styles.learnLink}><div className={styles.learnLinkTitle}><a href="/getHelp">How We Help</a> <i className="fa-regular fa-circle-right"></i></div> 
                        <div className={styles.learnLinkDescription}>We have 3 core programs, and several ongoing initiatives, that work synergistically to address the complex needs of our clients.</div>
                    </div>
                    <div className={styles.learnLink}><div className={styles.learnLinkTitle}><a href="/joinUs">Ways To Get Involved</a> <i className="fa-regular fa-circle-right"></i></div> 
                        <div className={styles.learnLinkDescription}>Our organization is powered by a dedicated team of over 60 volunteers from diverse backgrounds, all committed to making a difference and serving the community. We cannot do this without you!</div>
                    </div>
                    <div className={`${styles.learnLink} ${styles.removeBorder}`}><div className={styles.learnLinkTitle}><a href="/diversityAndInclusion">Diversity & Inclusion</a> <i className="fa-regular fa-circle-right"></i></div> 
                        <div className={styles.learnLinkDescriptionEnd}>Our programs do not exclude any person in need of help, regardless of their background, identity, or situation. We also accommodate non-English speaking individuals.</div>
                    </div>
                </div>
                <img src={city} className={styles.missionImage}></img>
            </div>
            <div className={`${styles.flexColumnAlignCenter} ${styles.colorBG} ${styles.borderSeparator}`}>
                <div className={styles.width90}>
                    <div className={styles.missionTitle}>OUR VISION</div>
                    <div className={styles.missionSubTitle}>Break the cycle of poverty, interpersonal violence, and health inequity in New York City and beyond.</div>
                    <div className={styles.missionButton}>DONATE TODAY</div>
                </div>
                <img src={citysky} className={styles.missionImage}></img>
                    <div className={styles.width90}>
                        <div className={styles.missionTitle}>OUR PHILOSOPHY</div>
                        <div className={styles.missionSubTitle}>No one should feel excluded and alone. We believe in fostering an inclusive, supportive, and healthy community for all.</div>
                        <div className={styles.subDescription}>Become a Believer and keep in touch with our progress</div>
                        <div className={styles.subTextBox}>
                            <div className={styles.subTextBoxFlex}>
                                <div className={styles.subTextText}>
                                    <input className={styles.subInputField} placeholder='Email Address'></input>
                                </div>
                                <div className={styles.subTextPad}></div>        
                            </div>
                            <div className={styles.subTextLineBorder}></div>
                        </div>
                        <div className={styles.missionButton}>SUBSCRIBE</div>
                    </div>
            </div>
            <div className={`${styles.flexColumnAlignCenter} ${styles.accomplishmentBG}`}>
                <div className={styles.width90}>
                    <div className={styles.accomplishmentTitle}>Our Annual Achievements</div>
                    <div className={styles.accomplishmentCategory}>23 clients</div>
                    <div className={styles.accomplishmentDescription}>Secured safe and comfortable housing for 23 clients by connecting them to shelters, transitional homes, and long-term housing solutions.</div>
                    <div className={styles.accomplishmentCategory}>23 clients</div>
                    <div className={styles.accomplishmentDescription}>Secured safe and comfortable housing for 23 clients by connecting them to shelters, transitional homes, and long-term housing solutions.</div>
                </div>
            </div>
        </div>
    )
}

export default newHome;