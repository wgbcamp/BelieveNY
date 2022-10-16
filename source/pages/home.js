import React, { useState} from 'react'
import folksAndFood from "../../images/folksAndFood.webp";
import VolunteerBox from '../components/volunteerBox';
import { Link } from 'react-router-dom';

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

    function restoreTop(){
        window.scrollTo(0,0);
    }   

    return(
        
        <div>
            <div className="simpleFlex">  
            <div className='maxWidth' onTouchStart={() => removeMenu()}>
                <div className="titleBackground">
                    <div className="tbAlpha">
                    </div>
                </div>
                <div className='evenBiggerStatement'>
                    <div className="centerText">NOW IS THE TIME TO ADVANCE OUR CITY</div>
                    <div className="centerText">AND THE LIVES OF NEW YORKERS.</div>
                </div>
                <div className='bigStatement'>     
                    <span className='bold'>Believe New York </span>is on a mission—to improve the <span className="bold">lives of all individuals and families in New York City.</span>
              
                </div>
                <div className='subStatement'>
                    <p className="bold">
                    Join our movement, because we believe in all of us.
                    </p>
                </div>
           
                    <div className='catBoxContainer'>
                            
                                <Link to="/theOpenSpace" className='catBox styleLink' onClick={() => restoreTop()}>
                                    <div className='catGrid'>
                                    <i className="fa-solid fa-comment-dots fa-2xl iconColor"></i>
                                    <div className="gridTitle">
                                        <div>The Open Space</div>
                                    </div>
                                    <div className="catText"> A safe place to speak anonymously.
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
                                    <div className="catText">Donate your essential items on your own schedule.</div>
                                </div>
                            </Link>
                            <Link to="upcomingEvents" className='catBox styleLink' onClick={() => restoreTop()}>
                                <div className='catGrid'> 
                                <i class="fa-solid fa-user-plus iconColor fa-2xl"></i>
                                <div className="gridTitle">
                                        <div>Get Involved</div>
                                </div>
                                    <div className="catText">Join community clean-up events and build sustainable solutions.</div>
                                </div>
                            </Link>  
                    </div>
          
                <div className="simpleFlex">
                    <div className="mScontainer msContainerMain shiftLeft borderTop">
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
                    <div className="mScontainer msContainerMain shiftRight">
                    <img src={folksAndFood} className="slideshow2"></img>
                    <div className="textGrid2">                    
                        <div className='padText' id="text3">
                        We started with the goal to make New York City a home where we all can be safe, thrive, and live with our family in peace, prosperity and justice. Together, we will fulfill that goal, and make our city the safest and happiest place in the world for all to live, achieve and grow. 
                        </div>
                        <div className='padText' id="text4">
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