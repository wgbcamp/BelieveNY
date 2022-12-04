import React, {useState, createRef} from 'react'
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
import EmailFormHandle from './components/emailFormHandle';

function App(){

    var [dim, updateDim] = useState(false);
    var [payload, updatePL] = useState({});
    
    function updatePayload(data){
        document.body.style.position = "fixed";
        updatePL(data);
        updateDim(true);
    }

    return(

        <div>
            <EmailFormHandle payload={{name: payload.name, email: payload.email, phone: payload.phone, subject: payload.subject, text: payload.text, time: payload.time}} dim={dim} updateDim={updateDim}/>
            <div className={`${dim === true ? "dim" : ""}`}>
                <Construction/>
                <Header location={location}/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/aboutUs/" element={<AboutUs/>}/>
                        <Route path="/diversityAndInclusion/" element={<DiversityInclusion/>}/>
                        <Route path="/foundingSupporters/" element={<FoundingSupporters/>}/>
                        <Route path="/getHelp" element={<GetHelp updateDim={updateDim} updatePayload={updatePayload}/>}/>
                        <Route path="/foodFirst" element={<FoodFirst/>}/>
                        <Route path="/theOpenSpace" element={<TheOpenSpace/>}/>
                        <Route path="/environmentalProjects" element={<EnvironmentalProjects/>}/>
                        <Route path="/scheduleBooking" element={<ScheduleBooking/>}/>
                        <Route path="/upcomingEvents" element={<UpcomingEvents/>}/>
                        <Route path="/pastEvents" element={<PastEvents/>}/>
                        <Route path="/eventSponsors" element={<EventSponsors/>}/>
                        <Route path="/SpecialEventsFund" element={<SpecialEventsFund/>}/>
                        <Route path="/volunteer" element={<Volunteer/>}/>
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