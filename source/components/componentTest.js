import React, {useState, useEffect, createRef} from 'react'
import styles from '../css/header.module.css'
import SiteLogo from '../images/general/BNYLogoFull-02.png'

const aboutUsContent = [["Who We Are", "wwa description"],["Our Impact", "oi description"],["Diversity and Inclusion", "dai description"],["Founding Supporters", "fs description"]];

const ourWorkContent = [["Need Help?", ""],["The Open Space", ""],["Food First", ""],["Environmental projects", ""],["Pathways for Emerging Leaders", ""]];

const eventsContent = [["Upcoming Events", ""],["Past Events", ""],["Event Sponsors", ""],["Donate to Our Events", ""]];

const buttonContent = [["About us", "fa-solid fa-people-group", aboutUsContent], ["Our work", "fa-solid fa-clipboard-check", ourWorkContent], ["Events", "fa-solid fa-calendar-days", eventsContent]];

const linkContent = [["Join us", styles.pillLinkOutlined], ["Take a survey & improve NYC!", styles.pillLinkOutlined], ["Donate", styles.pillLinkFilled]];

const smallWidthGridContent = [["ABOUT US", "fa-solid fa-arrow-right", aboutUsContent], ["OUR WORK", "fa-solid fa-arrow-right", ourWorkContent], ["EVENTS", "fa-solid fa-arrow-right", eventsContent], ["JOIN US", "", [""]], ["DONATE", "", [""]], ["TAKE A SURVEY & IMPROVE NYC", "", [""]]];

const largeWidthGridContent = [["ABOUT US", "fa-solid fa-arrow-right", aboutUsContent], ["OUR WORK", "fa-solid fa-arrow-right", ourWorkContent], ["EVENTS", "fa-solid fa-arrow-right", eventsContent], ["JOIN US", "", [""]], ["TAKE A SURVEY & IMPROVE NYC", "", [""]]];

const newHeader = () => {
    var [widthState, updateWS] = useState(false);
    var [open2ndDropdown, update02D] = useState(false);
    var [zapMenu, updateZM] = useState(false);
    var [subLinks, updateSL] = useState([""]);
    var [subLinkTitles, updateSLT] = useState([""]);


    var [blockScrolling, updateBS] = useState(false);

    function changeState(){
               updateWS(!widthState);
               update02D(false);
               if(widthState === false){
                    updateZM(false);
               }
            //    if (document.body.style.overflow === ''){
            //     document.body.style.paddingRight = `${window.innerWidth - document.body.clientWidth}px`;
            //     document.body.style.overflow = 'hidden';
            //    }else{
            //     document.body.style.overflow = '';
            //     document.body.style.paddingRight = "0px";
            //    }

    }

    return(
        <div className={styles.hide}>
            <div>
            {/*grid for header bar */}
                <div className={styles.headerGrid} id="headerGrid">
                    <img src={SiteLogo} width="145" className={styles.cursorPointer}></img>
                    {/*above 1000px, these options appear */}
                    <div className={styles.largeWidthGrid}>
                        {largeWidthGridContent.map((value, index) => (
                                <div className={styles.flexboxAllCenter} key={index} id="gridRow">
                                    <div className={styles.lwTitle}>{value[0]}</div>
                                </div>
                            ))}
                    </div>
                    {/*below 1000px, this button opens small width menu */}
                    
                    <i className={`fa-solid fa-bars fa-xl ${styles.burger}`} onClick={() => changeState()}></i>
                    <div className={styles.donateOuterGrid}>
                        <div className={styles.donateButton}>
                            <div className={styles.donate}>DONATE</div>
                        </div>
                    </div>
                    </div>
                {/*small width menu*/}
                <div className={styles.test}>
                    <div className={`${styles.smallWidthGrid} ${widthState ? styles.expand : zapMenu ? styles.zap : styles.condense} ${styles.hideOver1000}`} id="smallgrid">
                        {smallWidthGridContent.map((value, index) => (
                            <div className={styles.swTitleGrid} key={index} onClick={() => {updateSL(value[2]); updateSLT(value[0]); update02D(true); updateZM(true)}} id="gridRow">
                                <div className={styles.swTitle}>{value[0]}</div>
                                <div className={`${value[1]} ${styles.flexboxAllCenter} ${styles.arrow}`}></div>
                            </div>
                        ))}
                    </div>
                    {/*menu appears after clicking a link with extra options */}
                    <div className={`${open2ndDropdown ? styles.slideIn : styles.slideOut} ${styles.hideOver1000}`}> 
                        <div className={styles.subLinkTitleGrid}>
                        {/*arrow button returns to previous menu */}
                            <div className={styles.flexboxAllCenter}>
                                <div className={`${styles.arrowLeft} fa-solid fa-arrow-left fa-xl`} onClick={() => {update02D(false); updateZM(false);}}></div>
                            </div>
                            <div className={`${styles.subLinkTitle} ${styles.flexboxJustStartAlignCent}`}>{subLinkTitles}</div>
                        </div>
                        {subLinks.map((value, index) => (
                                <div className={styles.swTitleGrid} key={index} onClick={() => updateSL(value[2])} id="gridRow">
                                    <div className={styles.swTitle}>{value[0]}</div>
                                </div>
                            ))}    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newHeader;