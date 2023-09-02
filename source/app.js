import React, {useState, useEffect, createRef} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './css/main.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home.js';
import AboutUs from './pages/aboutUs';
import DiversityInclusion from './pages/diversityInclusion';
import FoundingSupporters from './pages/foundingSupporters';
import GetHelp from './pages/getHelp';
import FoodFirst from './pages/foodFirst';
import TheOpenSpace from './pages/theOpenSpace';
import EnvironmentalProjects from './pages/environmentalProjects';
import ScheduleBooking from './pages/scheduleBooking';
import Construction from './components/construction';
import UpcomingEvents from './pages/upcomingEvents';
import PastEvents from './pages/pastEvents';
import SpecialEventsFund from './pages/SpecialEventsFund';
import Donate from './pages/donate';
import EventSponsors from './pages/eventSponsors';
import Volunteer from './pages/volunteer';
import CancelSession from './pages/cancelSession';
import BottomContact from './components/bottomContact';
import FormHandler from './components/formHandler';
import Faq from './pages/faq';
import ImpactReport from './pages/impactReport'

function App(){

    //user identification
    if(!localStorage.getItem("userID")){
        localStorage.setItem("userID", Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10))
    }

    //overlay for capturing form payload
    var [dim, updateDim] = useState(false);
    var [payload, updatePL] = useState({});
    
    //dimming value is passed down to child components, payload information is fed upwards into formHandler
    function updatePayload(data){
        document.body.style.position = "fixed";
        updatePL(data);
        console.log(data);
        updateDim(true);
    }

    //tracking path changes
    const location = useLocation();

    useEffect(() => {
        console.log("new location", location.pathname);
    }, [location]);

    return(

        <div>
            <FormHandler payload={{name: payload.name, email: payload.email, phone: payload.phone, path: payload.path, type: payload.type, specific0: payload.specific0, specific1: payload.specific1, specific2: payload.specific2}} dim={dim} updateDim={updateDim}/>
            <div className={`${dim === true ? "dim" : ""}`}>
                <Header location={location}/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/faq" element={<Faq/>}/>
                        <Route path="/aboutUs/" element={<AboutUs/>}/>
                        <Route path="/impactReport" element={<ImpactReport/>}/>
                        <Route path="/diversityAndInclusion/" element={<DiversityInclusion/>}/>
                        <Route path="/foundingSupporters/" element={<FoundingSupporters/>}/>
                        <Route path="/getHelp" element={<GetHelp updateDim={updateDim} updatePayload={updatePayload}/>}/>
                        <Route path="/foodFirst" element={<FoodFirst/>}/>
                        <Route path="/theOpenSpace" element={<TheOpenSpace/>}/>
                        <Route path="/environmentalProjects" element={<EnvironmentalProjects/>}/>
                        <Route path="/scheduleBooking" element={<ScheduleBooking updateDim={updateDim} updatePayload={updatePayload}/>}/>
                        <Route path="/upcomingEvents" element={<UpcomingEvents/>}/>
                        <Route path="/pastEvents" element={<PastEvents/>}/>
                        <Route path="/eventSponsors" element={<EventSponsors updateDim={updateDim} updatePayload={updatePayload}/>}/>
                        <Route path="/SpecialEventsFund" element={<SpecialEventsFund/>}/>
                        <Route path="/joinus" element={<Volunteer/>}/>
                        <Route path="/donate" element={<Donate/>}/>
                        <Route path="/cancelSession/*" element={<CancelSession/>}/>
                        <Route path="*" element={<Home/>}/>
                    </Routes>                        
                <Footer/>
                <BottomContact/>
            </div>
        </div>
    )
}
export default App;