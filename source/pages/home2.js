import React, { useState, useEffect } from 'react'
import CircleBox from '../components/circleBox';
import MailingList from '../components/mailingList';
import { Link } from 'react-router-dom';
import background1 from "../images/general/clothing.webp";
import background2 from "../images/general/IMG_1938.JPG";
import background3 from "../images/summerHairCuts/IMG_4340.JPG";

const Home2 = () => {

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

    function restoreTop(){
        window.scrollTo(0,0);
    }  

    return(
        
        <div>
            <div className="simpleFlex">  
            <div className='maxWidth' onTouchStart={() => removeMenu()}>
                <div className="backgroundFadingImage">
                    <img className='third' src={background1}></img>
                    <img className='second' src={background2}></img>
                    <img className='first' src={background3}></img>
                    <div className="filterOnImg">
                        <div className="filterTextGrid">
                            <div className="filterText1">Progress starts with you</div>
                            <div className="filterText2">To <u className='filterTextUnderline'>Advance</u> Our City</div>
                            <div className="filterText3"><b>Believe New York</b> is on a mission—to improve the lives of all individuals and families in New York City, but we need your help, <b><u className='purpleQuote'>Donate Now to support our mission!</u></b></div>
                            <div className="whoWeAreGrid">
                                <div className="whoWeAre">
                                    <div className="whoWeAreText">WHO WE ARE</div>
                                    <div className="whoWeAreArrow"><i className='fa-solid fa-arrow-right'></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className='subStatement'>
                        <p className="bold">
                        Join our movement, because we believe in all of us.
                        </p>
                    </div>
                </div>
                    <div className='catBoxContainer'>
                            
                                <Link to="/theOpenSpace" className='catBox styleLink' onClick={() => restoreTop()}>
                                    <div className='catGrid'>
                                    <i className="fa-solid fa-comment-dots fa-2xl iconColor"></i>
                                    <div className="gridTitle">
                                        <div>The Open Space</div>
                                    </div>
                                    <div className="catText"> A safe place to vent anonymously about any stress or mental health concerns you have.
                                    </div>
                                    </div>
                                </Link>
                            
                            <Link to="/getHelp" className='catBox styleLink' onClick={() => restoreTop()}>
                                <div className='catGrid'>
                                <i class="fa-solid fa-circle-question iconColor fa-2xl"></i>
                                <div className="gridTitle">
                                        <div>Need Help?</div>
                                </div>
                                    <div className="catText">Call, text, or email for immediate assistance.</div>
                                </div>
                            </Link>
                            <Link to="/foodFirst" className='catBox styleLink' onClick={() => restoreTop()}>
                                <div className='catGrid'>
                                <i class="fa-solid fa-clipboard iconColor fa-2xl"></i>
                                <div className="gridTitle">
                                        <div>Food First</div>
                                </div>
                                    <div className="catText">Donate and receive essential items and groceries.</div>
                                </div>
                            </Link>
                            <Link to="upcomingEvents" className='catBox styleLink' onClick={() => restoreTop()}>
                                <div className='catGrid'> 
                                <i class="fa-solid fa-user-plus iconColor fa-2xl"></i>
                                <div className="gridTitle">
                                        <div>Get Involved</div>
                                </div>
                                    <div className="catText">Join our efforts to end the cycle of poverty and violence in NYC.</div>
                                </div>
                            </Link>  
                    </div>
                <div className="circleCol">
                <CircleBox info={{photo: "photo1", title: "Community Events", description: "Believe New York was founded by a native New Yorker who has seen hardship, struggle and loss around every corner of the five boroughs.", buttonText: "See our past events", link: "/pastEvents"}}/>
                <CircleBox info={{photo: "photo2", title: "Volunteer", description: "Work directly with people in need, creative social media posts, and help with new fundraising efforts. If you think you'd be a great fit don't hesitate to apply!", buttonText: "Become a Volunteer", link: "/joinus"}}/>
                <CircleBox info={{photo: "photo3", title: "Donate", description: "Your support allows our organization to continue and assisting as many people as possible.", buttonText: "Place a Donation", link: "/donate"}}/>
                </div>
                <MailingList/>
            </div>
            </div>
            </div>
    )
}

export default Home2;