import React, {useState, useEffect, createRef} from 'react'
import styles from '../../css/header.module.css'
import SiteLogo from '../../images/general/BNYLogoFull-02.png'
import womenOwnedBusinesses from '../pages/womenOwnedBusinesses';

const newHeader = () => {

    //redirect to paths based on links
    function redirect(value){
        location.href = value;
    }

    //arrays for header category content and paths for links
    const aboutUsContent = [
        ["Who We Are", "whoWeAre"],
        ["Our Impact", "impactReport"],
        ["Diversity and Inclusion", "diversityAndInclusion"],
        ["Founding Supporters", "foundingSupporters"]
    ];

    const ourWorkContent = [
        ["Get Help", "getHelp"],
        ["The Open Space", "theOpenSpace"], 
        ["Operation Community Success", "operationCommunitySuccess"]
    ];

    const eventsContent = [
        ["Upcoming Events", "upcomingEvents"], 
        ["Past Events", "pastEvents"],
        ["Donate to Our Events", "https://www.zeffy.com/en-US/donation-form/00f36686-7c94-4536-9b01-f6705c56e289"]
    ];

    const bwbContent = [
        ["Women-Owned Businesses", "womenOwnedBusinesses"], 
        ["Past Sponsorship", "pastSponsors"], 
        ["Support Us!", "supportUs"]
    ];

    //state holding dropdown states and arrays for sub categories on smaller viewports
    var [widthState, updateWS] = useState(false);
    var [open2ndDropdown, update02D] = useState(false);
    var [zapMenu, updateZM] = useState(false);
    var [subLinks, updateSL] = useState([""]);
    var [subLinkTitles, updateSLT] = useState([""]);

    //arrays holding titles and functions for redirects on link clicks and state values for categories that contain subcategories on smaller viewports
    const smallWidthGridContent = [
    ["About Us", "fa-solid fa-arrow-right", aboutUsContent, () => {updateSL(aboutUsContent); updateSLT("ABOUT US"); update02D(true); updateZM(true)}], 
    ["Our Work", "fa-solid fa-arrow-right", ourWorkContent, () => {updateSL(ourWorkContent); updateSLT("OUR WORK"); update02D(true); updateZM(true)}],
    ["Events", "fa-solid fa-arrow-right", eventsContent, () => {updateSL(eventsContent); updateSLT("EVENTS"); update02D(true); updateZM(true)}],
    ["Businesses who Believe", "fa-solid fa-arrow-right", bwbContent, () => {updateSL(bwbContent); updateSLT("BUSINESSES WHO BELIEVE"); update02D(true); updateZM(true)}],
    ["Join Us", "", [""], "/joinus"], 
    ["Donate", "", [""], "https://www.zeffy.com/en-US/donation-form/00f36686-7c94-4536-9b01-f6705c56e289"]];

    //manipulates state values for present dropdown menus on smaller viewports
    function changeState(){
        updateWS(!widthState);
        update02D(false);
        if(widthState === false){
            updateZM(false);
        }
    }

    //arrays holding titles, links, and values for categories on larger displays (title, arrow, array content, redirect)
    const largeWidthGridContent = [["About Us", "fa-solid fa-arrow-right", aboutUsContent], ["Our Work", "fa-solid fa-arrow-right", ourWorkContent], ["Events", "fa-solid fa-arrow-right", eventsContent], ["Businesses Who Believe", "fa-solid fa-arrow-right", bwbContent], ["Join Us", "", [""], () => redirect("/joinus")]];

    //popup state values for larger displays
    var [currentPopup, updateCP] = useState("");

    return(
        <div className={`${styles.hide} ${styles.accomodateHeader}`}>
            <div className={styles.centerAllGrid}>
            {/*grid for header bar */}
                <div className={styles.headerGrid} id="headerGrid">
                    <img src={SiteLogo} width="130" className={`${styles.cursorPointer} ${styles.siteLogo}`} onClick={() => redirect("/")}></img>
                    <div className={styles.centerLargeGrid}>
                        {/*above 1000px, large width menu appears */}
                        <div className={styles.largeWidthGrid}>
                            {largeWidthGridContent.map((value, index) => ( 
                                <div key={index} id={value[0]} className={`${styles.flexboxAllCenter} ${styles.animatePopup}`} onMouseEnter={() => updateCP(value[0])}>
                                    <div id="gridRow">
                                        <div className={value[2].length > 1 ? styles.lwTitle : styles.lwLink} onClick={value[3] ? value[3] : () => null}>{value[0]}</div> 
                                    </div>
                                </div>
                                
                            ))}
                            {/*links, and dropdowns for larger displays */}
                            {largeWidthGridContent.map((value, index) => (
                                
                                    <div key={index} id={value[0]} className={styles.popupRowsSeparator} onMouseEnter={() => updateCP(value[0])}>
                                        <div className={currentPopup === value[0] && value[2].length > 1 ? styles.popupRows : styles.hidePopupRows}>
                                            {value[2].map((innerValue, innerIndex) => (
                                                <div key={innerIndex} className={`${styles.flexboxAllCenter} ${styles.popupPointer}`} onClick={() => redirect(innerValue[1])}>
                                                    <div className={styles.popupStyle}>{innerValue[0]}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                            ))}
                        </div>
                    </div>
                    {/*this button opens small width menu, 1000px and below*/}
                    <i className={`fa-solid fa-bars fa-xl ${styles.burger}`} onClick={() => changeState()}></i>
                    <div className={styles.donateOuterGrid}>
                        <div className={styles.donateButton}>
                            <div className={styles.donate} onClick={() => redirect("https://www.zeffy.com/en-US/donation-form/00f36686-7c94-4536-9b01-f6705c56e289")}>DONATE</div>
                        </div>
                    </div>
                </div>

                {/*small width menu*/}
                <div className={styles.relativeBlock}>
                    <div className={`${styles.smallWidthGrid} ${widthState ? styles.expand : zapMenu ? styles.zap : styles.condense} ${styles.hideOver1000}`} id="smallgrid">
                        {smallWidthGridContent.map((value, index) => (
                            <div className={styles.swTitleGrid} key={index} onClick={typeof value[3] === 'string' ? () => redirect(value[3]) : value[3]} id="gridRow">
                                <a href={typeof value[3] === 'string' ? value[3] : null} className={styles.swTitle}>{value[0]}</a>
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
                        {/*These menus appear after clicking a non-link button */}
                        {subLinks.map((value, index) => (
                                <a href={value[1]} className={styles.swTitleGrid} key={index} id="gridRow">
                                    <div className={styles.swTitle}>{value[0]}</div>
                                </a>
                        ))}    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default newHeader;