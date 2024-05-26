import React from 'react'
import styles from '../css/footer.module.css'
import SiteLogo from '../images/general/BNYLogoFull-02.png'
import '../css/main.css';

const unused = () => {
    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width100Per">
                        <div className={styles.test}>
                            <div className={styles.footerGrid}>
                                {/* Logo and copyright flexbox */}
                                <div className={styles.logoCopyrightFlex}>
                                    <div className={styles.logoGrid}>
                                        <img src={SiteLogo} className={styles.logoStyle}></img>
                                    </div>
                                    <div className={styles.copyright}>
                                        <div className={styles.copyrightText}>© 2023 by Believe New York Philanthropies, Inc.</div>
                                        <div className={styles.email}><i class="fa-solid fa-envelope"></i> GetHelp@BelieveNY.org</div>
                                        <div><i class="fa-solid fa-comment-dots"></i> (347) NYC-0011</div>
                                    </div>
                                </div>
                                <div className={styles.chuck}>
                                    <div className={styles.chuckGrid}>
                                        {/* Sitemap flexbox */}
                                        <div className={styles.categoriesFlex}>
                                            <div className={styles.categoriesGrid}>
                                                <div className={styles.categoriesTitle}>Who We Are</div>
                                                <div className={styles.categoriesLinks}><a>About Us</a></div>
                                                <div className={styles.categoriesLinks}>Our Impact</div>
                                                <div className={styles.categoriesLinks}>Diversity and Inclusion</div>
                                                <div className={styles.categoriesLinks}>Founding Supporters</div>
                                            </div>
                                            <div className={styles.categoriesGrid}>
                                                <div className={styles.categoriesTitle}>What We Do</div>
                                                <div className={styles.categoriesLinks}>Get Help</div>
                                                <div className={styles.categoriesLinks}>The Open Space</div>
                                                <div className={styles.categoriesLinks}>Food First</div>
                                                <div className={styles.categoriesLinks}>Community Events</div>
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
                                                    <a href="https://www.twitter.com/Believe_NewYork" className={styles.linkToWhite}><i className="fa-brands fa-twitter fa-xl iconPad"></i></a>
                                                    <a href="https://www.instagram.com/believeny" className={styles.linkToWhite}><i className="fa-brands fa-instagram fa-xl iconPad"></i></a>
                                                    <a href="https://www.youtube.com/channel/UCbz9owENALBUb8O6NrFv7oQ" className={styles.linkToWhite}><i className="fa-brands fa-youtube fa-xl iconPad"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Newsletter flexbox */}
                                        <div className={styles.newsletterFlex}>
                                                <div className={styles.newsletterTitle}>Become a Believer and keep in touch with our progress</div>
                                                <div className={styles.newsletterBox}>
                                                    <div className={styles.newsletterBoxFlex}>
                                                        <input className={styles.newsletterText} placeholder="Email address"></input>
                                                        <div className={styles.newsletterSubmitBox}>Subscribe</div>        
                                                    </div>
                                                    <div className={styles.newsletterLineBorder}></div>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Donation flexbox */}
                                <div className={styles.donateFlexboxRow}>
                                    <div className={styles.donateFlexboxCol}>
                                        <div className={styles.donateTitle}>Support Believe New York</div>
                                        <div className={styles.donateText}>Give a donation to support New Yorkers in need.</div>
                                    </div>
                                    <div className={styles.donateFlexCenter}>
                                        <i className="fa-solid fa-2xl fa-right-long"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default unused;