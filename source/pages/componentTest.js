import React, {useState, useEffect, createRef} from 'react'
import SiteLogo from '../images/general/BNYLogoFull-02.png'
import wwaImage from '../images/summerHairCuts/IMG_4346.JPG'
import oiImage from '../images/summerHairCuts/IMG_4405.jpeg'
import daiImage from '../images/communityCleanUp/IMG_3367.JPG'
import fsImage from '../images/general/BNYCity.png'

const keyframes = {
        colorChange: {
        '0%': {
            transform: 'translateX(-100%)',
        },
        '100%': {
            transform: 'translateX(0)',
        }
    }
}

const style = {
    headerGrid: {
        color: "black",
        height: "69px",
        backgroundColor: "white",
        display: "grid",
        gridTemplateColumns: "250px auto auto auto 1fr auto auto auto",
        paddingLeft: "20px",
        paddingRight: "20px",
        columnGap: "20px", 
        maxWidth: "1620px"
    },
    flexboxJustifyCenter:{
        display: "flex",
        justifyContent: "center"
    },
    flexboxAllCenter:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center" 
    },
    flexRightJustifyCenterAlign:{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
    },
    pillButton:{
        backgroundColor: "rgb(231, 231, 231)",
        fontWeight: "600",
        borderRadius: "25px",
        height: "25px",
        padding: "3px",
        paddingLeft: "3px",
        paddingRight: "15px",
        marginRight: "15px",
        display: "grid",
        gridTemplateColumns: "25px auto",
        columnGap: "20px",
    },
    pillIcon:{
        backgroundColor: "white",
        borderRadius: "50%",
        height: "100%"
    },
    pillLinkOutlined:{
        borderRadius: "25px",
        height: "25px",
        border: "2px solid rgb(180, 180, 180)",
        padding: "3px",
        paddingLeft: "15px",
        paddingRight: "15px",
        fontWeight: "600",
        color: "rgb(50, 50, 50)",
    },
    pillLinkFilled:{
        borderRadius: "25px",
        height: "25px",
        padding: "3px",
        paddingLeft: "15px",
        paddingRight: "15px",
        fontWeight: "600",
        color: "whiteblack",
        backgroundColor: "#fd9f95",
    },
    cursorPointer:{
        cursor: "pointer"
    },
    floatingDropdown:{
        backgroundColor: "white",
        boxShadow: "2px 7px 20px 2px rgb(210, 210, 210)",
        height: "300px",
        borderRadius: "20px",
        paddingBottom: "35px",
        paddingTop: "35px",
        paddingLeft: "20px",
        paddingRight: "20px",
        marginTop: "10px",
        width: "1000px",
        marginLeft: "50%",
        marginBottom: "500px",
        display: "grid",
        gridTemplateColumns: "55% 45%"
    },
    quadItem:{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridTemplateRows: "1fr 1fr",
        gap: "12px",
        rowGap: "15px",
        marginTop: "12px",
        marginBottom: "12px",
        marginLeft: "10px"
    },
    dropdownBackground:{
        backgroundColor: "white",
        borderRadius: "9px",
        color: "black",
        fontWeight: "600",
    },
    dropdownBackgroundSelect:{
        animation: "1s ease-in-out colorChange",
        backgroundColor: "#282828",
        borderRadius: "9px",
        color: "white",
        fontWeight: "600",
        boxShadow: "2px 10px 20px 1px rgb(160, 160, 160)"
    },
    dropdownItemParentGrid:{
        display: "grid",
        gridTemplateColumns: "7% 86% 7%",
        gridTemplateRows: "100%",
        height: "100%",
        paddingLeft: "5%",
        paddingRight: "5%",
        columnGap: "12px"
    },
    dropdownItemChildGrid:{
        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: "45% 55%",
        rowGap: "4px",
    },
    elementTitle:{
        fontSize: "20px",
        display: "flex",
        alignItems: "center"
    },
    elementDesc:{
        fontSize: "13px",
        display: "flex",
        alignItems: "flex-start"
    },
    elementIcon:{
        marginTop: "110%",
    },
    pictureGridParent:{
        display: "grid",
        gridTemplateColumns: "5% 90% 5%",
        marginTop: "12px",
        marginBottom: "12px",
    },
    pictureGridChild:{
        gridRow: "2",
        gridColumn: "2",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        columnGap: "12px",
        gridTemplateRows: "1fr",
        backgroundColor: "#282828",
        borderRadius: "9px",
        paddingLeft: "20px",
        paddingRight: "30px",
        paddingBottom: "20px",
        paddingTop: "20px",
        boxShadow: "2px 5px 15px 2px rgb(180, 180, 180)",
        height: "240px"
    },
    pictureText:{
        fontSize: "24px",
        color: "white",
        fontWeight: "700",
    },
    pictureContainer:{
        overflow: "hidden",
        borderRadius: "9px",
        borderRadius: "9px",
    },
    pictureStyling:{
        objectFit: "cover",
        objectPosition: "-130px -50px",
        width: "400px",
        height: "240px",
    },
}

const aboutUsContent = [["Who we are", "wwa description", "fa-solid fa-people-roof", wwaImage],["Our impact", "oi description", "fa-solid fa-arrow-trend-up", oiImage],["Diversity and inclusion", "dai description", "fa-solid fa-people-group", daiImage],["Founding supporters", "fs description", "fa-solid fa-hand-holding-heart", fsImage]];

const ourWorkContent = [["Need help?", "", "", ""],["The Open Space", "", "", ""],["Food First", "", "", ""],["Environmental projects", "", "", ""],["Pathways for Emerging Leaders", "", "", ""]];

const eventsContent = [["Upcoming events", "", "", ""],["Past events", "", "", ""],["Event sponsors", "", "", ""],["Donate to our events", "", "", ""]];

const buttonContent = [["About us", "fa-solid fa-people-group", aboutUsContent], ["Our work", "fa-solid fa-clipboard-check", ourWorkContent], ["Events", "fa-solid fa-calendar-days", eventsContent]];

const linkContent = [["Join us", style.pillLinkOutlined], ["Take a survey & improve NYC!", style.pillLinkOutlined], ["Donate", style.pillLinkFilled]];

const newHeader = () => {

    var [dropdownData, updateDD] = useState(["",]);
    var [picture, updatePicture] = useState("");
    var [dropdownItemStatus, updateDIS] = useState("");

    return(
        <div style={style.flexboxJustifyCenter}>
            <div style={{...style.headerGrid}}>
                {/* <div className="simpleFlex">
                    <div className="maxWidth width80Per">
                    </div>
                </div> */}
                <img src={SiteLogo} width="150" style={{...style.cursorPointer}}></img>

                {/* dropdown buttons */}
                {buttonContent.map((value, index) => (
                    <div style={{...style.flexboxAllCenter}} key={index}>
                        <div style={{...style.flexboxAllCenter, ...style.pillButton, ...style.cursorPointer}} onClick={() => updateDD(value[2])}>
                            <i style={{...style.flexboxAllCenter, ...style.pillIcon}} className={value[1]}></i>
                            <div style={{...style.flexRightJustifyCenterAlign}}>{value[0]}</div>
                        </div>
                    </div>
                ))}

                <div></div>
                {/* link buttons */}
                {linkContent.map((value, index) => (
                    <div style={{...style.flexboxAllCenter}} key={index}>
                        <div style={{...style.flexboxAllCenter, ...style.cursorPointer, ...value[1]}}>
                            {value[0]}
                        </div>
                    </div>
                ))}
                {/* dropdown grid */}
                <div style={style.floatingDropdown}>
                    <div style={style.quadItem}>
                        {dropdownData.map((value, index) => (
                            <div style={dropdownItemStatus === value[0] ? style.dropdownBackgroundSelect : style.dropdownBackground} id={dropdownData[index][0]} key={index} onMouseEnter={(e) => {updateDIS(dropdownData[index][0]); updatePicture(dropdownData[index][3])}}>
                                <div style={style.dropdownItemParentGrid}>
                                    <div style={style.elementIcon} className={dropdownData[index][2]}></div>
                                    <div style={style.dropdownItemChildGrid}>
                                        <div style={style.elementTitle}>{dropdownData[index][0]}</div>
                                        <div style={style.elementDesc}>{dropdownData[index][1]}</div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* dropdown picture grid */}
                    <div style={style.pictureGridParent}>
                        <div style={style.pictureGridChild}>
                            <div style={style.pictureText}>Placeholder text for the image</div>
                            <div style={style.pictureContainer}>
                                <img style={style.pictureStyling} src={picture}></img>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default newHeader;