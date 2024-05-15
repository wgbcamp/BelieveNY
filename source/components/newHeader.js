import React, {useState, useEffect, createRef} from 'react'
import styles from '../css/header.module.css'
import SiteLogo from '../images/general/BNYLogoFull-02.png'

const newHeader = () => {

    //redirect to paths based on links
    function redirect(value){
        location.href = value;
    }

    //arrays for header category content and paths for links
    const aboutUsContent = [["Who We Are", "aboutUs"],["Our Impact", "impactReport"],["Diversity and Inclusion", "diversityAndInclusion"],["Founding Supporters", "foundingSupporters"]];

    const ourWorkContent = [["The Open Space", "theOpenSpace"],["Food First", "foodFirst"],["Environmental projects", "environmentalProjects"],["Pathways for Emerging Leaders", "pathways"]];

    const eventsContent = [["Upcoming Events", "upcomingEvents"],["Past Events", "pastEvents"],["Event Sponsors", "eventSponsors"],["Donate to Our Events", "donate"]];

    //state holding dropdown states and arrays for sub categories on smaller viewports
    var [widthState, updateWS] = useState(false);
    var [open2ndDropdown, update02D] = useState(false);
    var [zapMenu, updateZM] = useState(false);
    var [subLinks, updateSL] = useState([""]);
    var [subLinkTitles, updateSLT] = useState([""]);

    //arrays holding titles and functions for redirects on link clicks and state values for categories that contain subcategories on smaller viewports
    const smallWidthGridContent = [
    ["ABOUT US", "fa-solid fa-arrow-right", aboutUsContent, () => {updateSL(aboutUsContent); updateSLT("ABOUT US"); update02D(true); updateZM(true)}], 
    ["OUR WORK", "fa-solid fa-arrow-right", ourWorkContent, () => {updateSL(ourWorkContent); updateSLT("OUR WORK"); update02D(true); updateZM(true)}],
    ["EVENTS", "fa-solid fa-arrow-right", eventsContent, () => {updateSL(eventsContent); updateSLT("EVENTS"); update02D(true); updateZM(true)}],
    ["JOIN US", "", [""], "/joinus"], 
    ["DONATE", "", [""], "/donate"],
    ["TAKE A SURVEY", "", [""],"/survey"]];

    //manipulates state values for present dropdown menus on smaller viewports
    function changeState(){
        updateWS(!widthState);
        update02D(false);
        if(widthState === false){
            updateZM(false);
        }
    }

    //arrays holding titles, links, and values for categories on larger displays (title, arrow, array content, redirect)
    const largeWidthGridContent = [["ABOUT US", "fa-solid fa-arrow-right", aboutUsContent], ["OUR WORK", "fa-solid fa-arrow-right", ourWorkContent], ["EVENTS", "fa-solid fa-arrow-right", eventsContent], ["JOIN US", "", [""], () => redirect("/joinus")], ["TAKE A SURVEY", "", [""], () => redirect("/survey")]];

    //popup state values for larger displays
    var [currentPopup, updateCP] = useState("");

    var [blockScrolling, updateBS] = useState(false);

    return(
        <div className={styles.hide}>
            <div className={styles.centerLargeGrid}>
            {/*grid for header bar */}
                <div className={styles.headerGrid} id="headerGrid">
                    <img src={SiteLogo} width="145" className={styles.cursorPointer} onClick={() => redirect("/")}></img>
                    {/*above 1000px, large width menu appears */}
                    <div className={styles.largeWidthGrid}>
                        {largeWidthGridContent.map((value, index) => ( 
                            <div id={value[0]} className={`${styles.flexboxAllCenter} ${styles.animatePopup}`} onMouseEnter={() => updateCP(value[0])}>
                                <div key={index} id="gridRow">
                                    <div className={value[2].length > 1 ? styles.lwTitle : styles.lwLink} onClick={value[3] ? value[3] : () => null}>{value[0]}</div> 
                                </div>
                            </div>
                            
                        ))}
                        {/*links, and dropdowns for larger displays */}
                        {largeWidthGridContent.map((value, index) => (
                            
                                <div id={value[0]} className={styles.popupRowsSeparator} onMouseEnter={() => updateCP(value[0])}>
                                    <div className={currentPopup === value[0] && value[2].length > 1 ? styles.popupRows : styles.hidePopupRows}>
                                        {value[2].map((innerValue, innerIndex) => (
                                            <div className={`${styles.flexboxAllCenter} ${styles.popupPointer}`} onClick={() => redirect(innerValue[1])}>
                                                <div className={styles.popupStyle}>{innerValue[0]}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                        ))}
                    </div>
                    {/*this button opens small width menu, 1000px and below*/}
                    <i className={`fa-solid fa-bars fa-xl ${styles.burger}`} onClick={() => changeState()}></i>
                    <div className={styles.donateOuterGrid}>
                        <div className={styles.donateButton}>
                            <div className={styles.donate} onClick={() => redirect("/donate")}>DONATE</div>
                        </div>
                    </div>
                </div>

                {/*small width menu*/}
                <div className={styles.relativeBlock}>
                    <div className={`${styles.smallWidthGrid} ${widthState ? styles.expand : zapMenu ? styles.zap : styles.condense} ${styles.hideOver1000}`} id="smallgrid">
                        {smallWidthGridContent.map((value, index) => (
                            <div className={styles.swTitleGrid} key={index} onClick={typeof value[3] === 'string' ? () => redirect(value[3]) : value[3]} id="gridRow">
                                <a href={value[3]} className={styles.swTitle}>{value[0]}</a>
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