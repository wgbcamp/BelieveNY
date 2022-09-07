import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css";
import BNYLogoCircle from "../images/BNYLogoCircle-03.webp";

const Header = () => {

    var [maxCheck, toggleMC] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', function(event){
            if (window.innerWidth > 1200){
                toggleMC(true);
            }
            if (maxCheck === true && this.window.innerWidth < 1200){
                toggleMC(false);
            }    
        });
    });

    var [dropdownPresence, toggleDP] = useState(0);
    var [eventsPresence, toggleEP] = useState(0);
    var [servicesPresence, toggleSP] = useState(0);
    var [aboutPresence, toggleAP] = useState(0);
    var [lastMenu, toggleLM] = useState(0);

    function dropDown(data){
        
        if(data === "main"){
            toggleDP(!dropdownPresence);
        }
        if(data === "about"){
            toggleAP(!aboutPresence);
        }
        if(data === "services"){
            toggleSP(!servicesPresence);
        }
        if(data === "events"){
            toggleEP(!eventsPresence);     
        }        
        if(lastMenu === data){
            toggleLM("main");
        }else{
            toggleLM(data);
        }
    }

    var [aboutSpanPres, toggleASP] = useState(0);
    var [servicesSpanPres, toggleSSP] = useState(0);
    var [eventsSpanPres, toggleESP] = useState(0);


    return(

        <div className='sticky'> 
            <div className={`header`}>
                {/* Spanned menu */}
                <div className="spannedMenu">
                    <Link to="/" className="logo"><img src={BNYLogoCircle} className="logoInner"/>Believe New York</Link>
                    
                    <div className="category1" onMouseEnter={() => toggleASP(true)} onMouseLeave={() => toggleASP(false)} onClick={() => toggleASP(false)}>About
                        <div className={`aboutSpan ${aboutSpanPres ? "showSpanGrid" : ""}`}>
                            <Link to="/aboutUs" className="sCat1">About Us</Link>
                            <Link to="/diversityAndInclusion" className="sCat2">Diversity and Inclusion</Link>
                            <Link to="/foundingSupporters" className="sCat3">Founding Supporters</Link>
                        </div>
                    </div>
                    <div className="category2" onMouseEnter={() => toggleSSP(true)} onMouseLeave={() => toggleSSP(false)} onClick={() => toggleSSP(false)}>Our Services
                        <div className={`servicesSpan ${servicesSpanPres ? "showSpanGrid" : ""}`}>
                            <Link to="/getHelp" className="sCat1">Get Help</Link>
                            <Link to="/foodFirst" className="sCat2">Food First</Link>
                            <Link to="/theOpenSpace" className="sCat3">The Open Space</Link>
                            <Link to="/environmentalProjects" className="sCat4">Environmental Projects</Link>
                        </div>
                    </div>
                    <div className="category3" onMouseEnter={() => toggleESP(true)} onMouseLeave={() => toggleESP(false)} onClick={() => toggleESP(false)}>Events
                        <div className={`eventsSpan ${eventsSpanPres ? "showSpanGrid" : ""}`}>
                            <Link to="/upcomingEvents" className="sCat1">Upcoming Events</Link>
                            <Link to="/pastEvents" className="sCat2">Past Events</Link>
                            <Link to="/eventSponsors" className="sCat3">Event Sponsors</Link>
                            <Link to="/specialEventsFund" className="sCat4">Donate to Special Events Fund</Link>
                        </div>
                    </div>
                    <Link to="/volunteer" className="category4">Volunteer</Link>
                    <Link to="/donate" className="category5">
                        <div className='category5a'>Donate</div>
                        </Link>
                </div>

                {/* Mobile menu */}
                <Link to="/" className="logoMobile"><img src={BNYLogoCircle} className="logoInner"/>Believe New York</Link>
                <div className={`hamburger ${dropdownPresence ? "fadeOut" : dropdownPresence === 0 ? "" : "fadeIn"}`} onClick={() => dropDown("main")}>
                    <div className="fa-solid fa-bars fa-2xl">
                    </div>
                </div>

            </div>

            <div className={`cancelMenu ${dropdownPresence ? "menuIn" : dropdownPresence === 0 ? maxCheck ? "menuOut" : "" : ""}`}><i className='fa-solid fa-xmark fa-2xl xCancel' onClick={() => dropDown(lastMenu)}></i></div>

            <div className={`mobileMenu ${dropdownPresence ? "menuIn" : dropdownPresence === 0 ? maxCheck ? "menuOut" : "" : ""}`}>
                <div className="cat1" onClick={() => dropDown("about")}>About</div>
                <div className="cat2" onClick={() => dropDown("services")}>Our Services</div>
                <div className="cat3" onClick={() => dropDown("events")}>Events</div>
                <div className="cat4">Volunteer</div>
                <div className="cat5">Donate</div>
                <div className='aArrow' onClick={() => dropDown("about")}><i className='fa-solid fa-chevron-right'></i></div>
                <div className='bArrow' onClick={() => dropDown("services")}><i className='fa-solid fa-chevron-right'></i></div>
                <div className='cArrow' onClick={() => dropDown("events")}><i className='fa-solid fa-chevron-right'></i></div>
            </div>

            <div className={`aboutMenu ${aboutPresence ? "menuIn" : aboutPresence === 0 ? "" : "menuOut"}`}>
                <Link to="/aboutUs" className="cat1" onClick={() => {dropDown("about"); dropDown("main");} }>About Us</Link>
                <Link to="/diversityAndInclusion" className="cat2" onClick={() => {dropDown("about"); dropDown("main");} }>Diversity and Inclusion</Link>
                <Link to="/foundingSupporters" className="cat3" onClick={() => {dropDown("about"); dropDown("main");} }>Founding Supporters</Link>
            </div>

            <div className={`servicesMenu ${servicesPresence ? "menuIn" : servicesPresence === 0 ? "" : "menuOut"}`}>
                <Link to="/getHelp" className="cat1" onClick={() => {dropDown("services"); dropDown("main");} }>Get Help</Link>
                <Link to="/foodFirst" className="cat2" onClick={() => {dropDown("services"); dropDown("main");} }>Food First</Link>
                <Link to="/theOpenSpace" className="cat3" onClick={() => {dropDown("services"); dropDown("main");} }>The Open Space</Link>
                <Link to="/environmentalProjects" className="cat4" onClick={() => {dropDown("services"); dropDown("main");} }>Environmental Projects</Link>
            </div>

            <div className={`eventsMenu ${eventsPresence ? "menuIn" : eventsPresence === 0 ? "" : "menuOut"}`}>
                <Link to="/upcomingEvents" className="cat1" onClick={() => {dropDown("events"); dropDown("main");} }>Upcoming Events</Link>
                <Link to="/pastEvents" className="cat2" onClick={() => {dropDown("events"); dropDown("main");} }>Past Events</Link>
                <Link to="/eventSponsors" className="cat3" onClick={() => {dropDown("events"); dropDown("main");} }>Event Sponsors</Link>
                <Link to="/specialEventsFund" className="cat4" onClick={() => {dropDown("events"); dropDown("main");} }>Donate to Special Events Fund</Link>
            </div>
        </div>
    )
}

export default Header;