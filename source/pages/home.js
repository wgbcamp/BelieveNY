import React, { useState, useRef } from 'react'
import "../css/home.css";
import folksAndFood from "../images/folksAndFood.webp";
import VolunteerBox from '../components/volunteerBox';



const Home = () => {

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

    function removeMenu(){

    }

    return(
        
        <div id="root">
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
                            <div className="gridTitle">Need Help?</div>
                                <div className="catText">Call, text, or email for immediate assistance.</div>
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

                <div className="simpleFlex">
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
                </div>
                <div className="simpleFlex">
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
                </div>
                <div className="simpleFlex">
                    <VolunteerBox app={{folksAndFood}}/>
                </div>


            </div>
            </div>
            </div>
    )
}

export default Home;