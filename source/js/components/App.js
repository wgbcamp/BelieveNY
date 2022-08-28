import React, { useState, useRef } from 'react'
import "./main.css";
import House from "../../images/House.webp";
import atRiskHelp from "../../images/AtRiskHelp.webp";
import recoveryIcon from "../../images/RecoveryIcon.webp";
import environmentalImpact from "../../images/EnviromentalImpact.webp";
import foodFirstGirl from "../../images/food first girl.webp";
import openSpaceLogo from "../../images/OpenSpaceLogoProfilePic.webp";
import folksAndFood from "../../images/folksAndFood.webp";
import Header from './header';
import Footer from './footer';
import VolunteerBox from './volunteerBox';



const App = () => {

    var [burgerStatus, toggleBurgerStatus] = useState("");

    function toggleBurger(){
        toggleBurgerStatus(!burgerStatus);
    }

    var [aboutArrow, toggleAboutArrow] = useState(false);
    var [serviceArrow, toggleServiceArrow] = useState(false);
    var [eventArrow, toggleEventArrow] = useState(false);

    function toggleArrow(data){
        
        if(data === 'about'){
            toggleAboutArrow(!aboutArrow);
            toggleServiceArrow(false);
            toggleEventArrow(false);
        }
        if(data === 'service'){
            toggleServiceArrow(!serviceArrow);
            toggleAboutArrow(false);
            toggleEventArrow(false);
        }
        if(data === 'event'){
            toggleEventArrow(!eventArrow);
            toggleAboutArrow(false);
            toggleServiceArrow(false);
        }
    }

    var boxContent = [
        {title: "Housing Insecurity", image: House, description: "Our volunteers work to find temporary and long-term housing for individuals and families who are facing housing insecurities.", category: 1},
        {title: "At-Risk Assistance", image: atRiskHelp, description: "Believe New York Philanthropies is one of the few organizations specializing in helping those at risk for extreme poverty and loss of resources.", category: 1},
        {title: "Domestic and Sexual Violence Relocation & Recovery", image: recoveryIcon, description: "No one should feel unsafe in their own home. We are dedicated to discreetly helping anyone in need of long-term or temporary relocation due to any form of violence or harassment.", category: 3},
        {title: "Environmental Impact Projects", image: environmentalImpact, description: "Climate Change effects us all, and we at Believe New York are working on innovative ways at improving our environment through community-focused interventions and strategies.", category: 2},
        {title: "Access to Food and Essentials", subtitle: "(Food First)", image: foodFirstGirl, description: "Countless New Yorkers go to bed hungry and are without basic items such as food, toiletries and clean clothing; we do what we can to ensure that donating and receiving food and essential items is as easy as possible.", category: 2},
        {title: "Mental Health Support", subtitle: "(The Open Space)", image: openSpaceLogo, description: "Are you feeling sad? Unmotivated? Stressed? We are available to listen and help you through your mental health concerns. 100% free and confidential. Regular sessions available!", subDescription: "Follow us on Instagram (@OpenSpaceTalk) for tips on self-care and mental health!", category: 4},
                        ];

    var siteMapContent = [
                            {cssClass: "whoWeAre", title: "Who We Are", cat1: "About Us", cat2: "Finances", cat3: "Founding Supporters", cat4: " How we help FAQ"},
                            {cssClass: "whatWeDo", title: "What We Do", cat1: "Get Help", cat2: "The Open Space", cat3: "Food First Program", cat4: "Community Events"},
                            {cssClass: "waysToHelp", title: "Ways to Help", cat1: "Donate to our programs", cat2: "Donate to our Events Fund", cat3: "Join Us", cat4: ""},
                            {cssClass: "generalContactInfo", title: "General Contact Info", cat1: "BelieveNewYork@gmail.com", cat2: "(347) NYC-0011", cat3: "", cat4: ""},
                            {cssClass: "followUsOn", title: "Follow Us On...", cat1: "", cat2: "", cat3: "", cat4: "", cat6: ""}, 
                            {cssClass: "doYouNeedHelp", catTitleBold: "Do you need help?", cat1: "GetHelp@BelieveNY.org", cat2: "(347) NYC-0011", cat3: "", cat4: "or click ", catBold: "here", catPunctuation: ".", },
                        ];

    const padBottom = {
        paddingBottom: '15px'
    }

    function removeMenu(){

    }

    return(
        
        <div id="root">
            <Header/>
            <div className="mainContainer">  
            <div className='touchBarrier' onTouchStart={() => removeMenu()}>
                <div className="titleBackground">
                    <div className="tbAlpha">
                        <div className="tbText">
                        Now is the time to advance our city, and the lives of New Yorkers.
                        </div>
                    </div>
                </div>
                <div className='bigStatement'>     
                    <p>
                    Believe New York is on a mission—to improve the lives of all individuals and families in New York City.
                    </p>
                </div>
                <div className='subStatement'>
                    <p>
                    Join our movement, because we believe in all of us.
                    </p>
                </div>
                <div className='catBoxContainer'>
                    
                        <div className='catBox'>
                            <div className='catGrid'> 
                            <div className="gridTitle">The Open Space</div>
                                <div className="catText"> A safe place to speak anonymously.</div>
                            </div>
                        </div>
                        <div className='catBox'>
                            <div className='catGrid'>
                            <div className="gridTitle">Contact Us</div>
                                <div className="catText">Email or by phone for immediate assistance.</div>
                            </div>
                        </div>
                        <div className='catBox'>
                            <div className='catGrid'>
                            <div className="gridTitle">Food First</div> 
                                <div className="catText">Donate your essential items on your own schedule.</div>
                            </div>
                        </div>
                        <div className='catBox'>
                            <div className='catGrid'> 
                            <div className="gridTitle">Get Involved</div>
                                <div className="catText">Join community clean-up events and build sustainable solutions.</div>
                            </div>
                        </div>  
                </div>


                <div className="mScontainer shiftLeft borderTop">
                <img src={folksAndFood} className="slideshow1"></img>
                <div className="textGrid1">
                    <div className='padText' id="text1">
                    Domestic violence, homelessness, drug abuse, lack of physical and mental wellness, and malnutrition have been at devastatingly high rates in our city for far too long. It's heartbreaking, we all deserve better. 
                    </div>
                    <div className='padText' id="text2">
                    Now is the time to advance our city, and the lives of New Yorkers. Believe New York was founded by a native New Yorker who has seen hardship, struggle and loss around every corner of the five boroughs.
                    </div>
                </div>
                </div>
                <div className="mScontainer shiftRight">
                <img src={folksAndFood} className="slideshow2"></img>
                <div className="textGrid2">                    
                    <div className='padText' id="text3">
                    We started with the goal to make New York City a home where we all can be safe, thrive, and live with our family in peace, prosperity and justice. Together, we will fulfill that goal, and make our city the safest and happiest place in the world for all to live, achieve and grow. 
                    </div>
                    <div className='padText' id="text4">
                    Join our movement, because we believe in all of us.
                    </div>
                </div>
                </div>
                <VolunteerBox app={{folksAndFood}}/>
                


            </div>
            </div>
            <Footer/>
            </div>
    )
}

export default App;