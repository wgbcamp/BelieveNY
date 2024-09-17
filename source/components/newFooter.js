import React, { useState, useEffect, useRef } from 'react'
import styles from '../css/footer.module.css'
import SiteLogo from '../images/general/BNYLogoFull-02.png'
import '../css/main.css';
import candidPlatinum from '../images/awards/profile-platinum2024-seal.svg'

const newFooter = (props) => {

    const [email, setEmail] = useState("");

    const updateEmail = event => {
        setEmail(event.target.value);
    }
    
    function signup(emailAddress){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `https://whale-app-e9it4.ondigitalocean.app/newsletter`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        console.log(emailAddress);
        xhr.send(JSON.stringify({
            first: "", 
            last: "",
            email: emailAddress
        }));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.status)
                alert(xhr.responseText);
            }
        }
    }

    return(

            <div className={`${styles.footerContainer} pt-5`}>
                    <div className={styles.background}>
                        <div className={styles.footerGrid}>
                            {/* Logo and copyright flexbox */}
                            <div className={styles.copyrightAndAwardFlex}>
                                <div className={styles.logoCopyrightFlex}>
                                    <div className={styles.copyright}>
                                        <div className={styles.copyrightText}>© 2024 by Believe New York Philanthropies, Inc.</div>
                                        <div className="padBottom5">For prospective clients:</div>
                                        <div className={styles.email}> gethelp@believeny.org</div>
                                        <div className={styles.phone}> (347) 692-0011</div>
                                        <div className='padBottom8'></div>
                                        <div className="padBottom5">General inquiries:</div>
                                        <div className={styles.email}>admin@believeny.org</div>
                                    </div>
                                </div>
                                <img className={styles.award1} src={candidPlatinum}></img>
                            </div>
                            <div className={styles.chuck}>
                                <div className={styles.chuckGrid}>
                                    {/* Sitemap flexbox */}
                                    <div className={styles.categoriesFlex}>
                                        <div className={styles.categoriesGrid}>
                                            <div className={styles.categoriesTitle}>Who We Are</div>
                                            <div className={styles.categoriesLinks}><a href="/aboutUs">About Us</a></div>
                                            <div className={styles.categoriesLinks}><a href="/impactReport">Our Impact</a></div>
                                            <div className={styles.categoriesLinks}><a href="/diversityAndInclusion">Diversity and Inclusion</a></div>
                                            <div className={styles.categoriesLinks}><a href="/foundingSupporters">Founding Supporters</a></div>
                                        </div>
                                        <div className={styles.categoriesGrid}>
                                            <div className={styles.categoriesTitle}>What We Do</div>
                                            <div className={styles.categoriesLinks}><a href="/getHelp">Get Help</a></div>
                                            <div className={styles.categoriesLinks}><a href="/theOpenSpace">The Open Space</a></div>
                                            <div className={styles.categoriesLinks}><a href="/pastEvents">Community Events</a></div>
                                        </div>
                                    </div>
                                    {/* Social media links flexbox */}
                                    <div className={styles.socialMediaOuterFlex}>
                                        <div className={styles.socialMediaFlex}>
                                            <div className={styles.socialMediaTitleFlex}>
                                                <div className={styles.socialMediaTitle}>Follow Believe New York</div>
                                            </div>
                                            <div className={styles.socialMediaLinksFlex}>
                                                <a href="https://www.facebook.com/believeny" className={styles.linkToWhiteLeftmost}><i className="fa-brands fa-facebook-f fa-xl"></i></a>
                                                <a href="https://www.instagram.com/believeny" className={styles.linkToWhite}><i className="fa-brands fa-instagram fa-xl iconPad"></i></a>
                                                <a href="https://www.linkedin.com/company/believeny" className={styles.linkToWhite}><i className="fa-brands fa-linkedin fa-xl iconPad"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Newsletter flexbox */}
                                    <div className={styles.newsletterFlex}>
                                            <div className={styles.newsletterTitle}>Become a Believer and keep in touch with our progress</div>
                                            <div className={styles.newsletterBox}>
                                                <div className={styles.newsletterBoxFlex}>
                                                    <input className={styles.newsletterText} placeholder="Email address" value={email} onChange={updateEmail}></input>
                                                    <input type="submit" value="Subscribe" className={styles.newsletterSubmitBox} onClick={() => signup(email)}></input>        
                                                </div>
                                                <div className={styles.newsletterLineBorder}></div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.award2Flex}>
                                <img className={styles.award2} src={candidPlatinum}></img>
                            </div>
                            {/* Donation flexbox */}
                            <a href="/donate" className={styles.donateFlexboxRow}>
                                <div className={styles.donateFlexboxCol}>
                                    <div className={styles.donateTitle}>Support Believe New York</div>
                                    <div className={styles.donateText}>Give a donation to support New Yorkers in need.</div>
                                </div>
                                <div className={styles.donateFlexCenter}>
                                    <i className="fa-solid fa-2xl fa-right-long"></i>
                                </div>
                            </a>
                        </div>
                    </div>
            </div>
    )
}

export default newFooter;