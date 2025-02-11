import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState, useEffect, createRef} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './css/main.css';
import Header from './components/items/header.js';
import Footer from './components/items/footer.js';
import Homepage from './components/pages/homePage.js';
import WhoWeAre from './components/pages/whoWeAre.js';
import DiversityInclusion from './components/pages/diversityInclusion';
import FoundingSupporters from './components/pages/foundingSupporters';
import GetHelp from './components/pages/getHelp';
import TheOpenSpace from './components/pages/theOpenSpace';
import EnvironmentalProjects from './components/pages/environmentalProjects';
import ScheduleBooking from './components/pages/scheduleBooking';
import UpcomingEvents from './components/pages/upcomingEvents';
import PastEvents from './components/pages/pastEvents';
import SpecialEventsFund from './components/pages/SpecialEventsFund';
import Donate from './components/pages/donate';
import EventSponsors from './components/pages/eventSponsors';
import JoinUs from './components/pages/joinUs.js';
import CancelSession from './components/pages/cancelSession';
import FormHandler from './components/items/formHandler.js';
import Faq from './components/pages/faq';
import ImpactReport from './components/pages/impactReport';
import DonationFormQR from './components/pages/donationFormQR';
import DonateChoices from './components/items/donateChoices.js';
import CollegeResources from './components/pages/collegeresources.js';
import OperationCommunitySuccess from './components/pages/operationCommunitySuccess.js';



function App(){

    //user identification
    if(!localStorage.getItem("userID")) {
        localStorage.setItem("userID", Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10))
    }

    //overlay for capturing form payload
    var [dim, updateDim] = useState(false);
    var [dim2, updateDim2] = useState(false);
    var [payload, updatePL] = useState({});
    
    //dimming value is passed down to child components, payload information is fed upwards into formHandler
    function updatePayload(data) {
        document.body.style.position = "fixed";
        updatePL(data);
        console.log(data);
        updateDim(true);
    }

    function showDonateChoices() {
        document.body.style.overflow = "hidden"
        updateDim2(true);
    }

    //set schedule booking to getHelp or OpenSpace
    var [bookingCategory, updateBC] = useState("The Open Space");
    function updateBookingCategory(value) {
        updateBC(value);
    }

    //tracking path changes
    const location = useLocation();



    return(

        <div id="topLevel">
            <FormHandler payload={{name: payload.name, email: payload.email, phone: payload.phone, path: payload.path, type: payload.type, specific0: payload.specific0, specific1: payload.specific1, specific2: payload.specific2, specific3: payload.specific3, specific4: payload.specific4, specific5: payload.specific5, label: payload.label}} dim={dim} updateDim={updateDim}/>
            <DonateChoices dim2={dim2} updateDim2={updateDim2}/>
            <div className={`${dim === true || dim2 === true ? "dim" : ""}`}>
                <Header location={location}/>
                <div className='accomodateHeader'>      
                        <Routes>
                            <Route path="*" element={<Homepage/>}/>
                            <Route path="/faq" element={<Faq/>}/>
                            <Route path="/whoWeAre" element={<WhoWeAre/>}/>
                            <Route path="/impactReport" element={<ImpactReport/>}/>
                            <Route path="/diversityAndInclusion" element={<DiversityInclusion/>}/>
                            <Route path="/foundingSupporters" element={<FoundingSupporters/>}/>
                            <Route path="/getHelp" element={<GetHelp updateBC={updateBC}/>}/>
                            <Route path="/theOpenSpace" element={<TheOpenSpace updateBC={updateBC}/>}/>
                            <Route path="/environmentalProjects" element={<EnvironmentalProjects/>}/>
                            <Route path="/scheduleBooking" element={<ScheduleBooking updateDim={updateDim} updatePayload={updatePayload} bookingCategory={bookingCategory}/>}/>
                            <Route path="/upcomingEvents" element={<UpcomingEvents/>}/>
                            <Route path="/pastEvents" element={<PastEvents/>}/>
                            <Route path="/eventSponsors" element={<EventSponsors updateDim={updateDim} updatePayload={updatePayload}/>}/>
                            <Route path="/SpecialEventsFund" element={<SpecialEventsFund/>}/>
                            <Route path="/joinus" element={<JoinUs/>}/>
                            <Route path="/donate" element={<Donate showDonateChoices={showDonateChoices}/>}/>
                            <Route path="/cancelSession/*" element={<CancelSession/>}/>
                            <Route path="/donationform" element={<DonationForm/>}/>
                            <Route path="/donationformQR" element={<DonationFormQR/>}/>
                            <Route path="/survey" element={<Survey/>}/>
                            <Route path="/collegeresources" element={<CollegeResources/>}/>
                            <Route path="/mentalhealthfair" element={<MentalHealthFair/>}/>
                            <Route path="/operationCommunitySuccess" element={<OperationCommunitySuccess/>}/>
                        </Routes>  
                </div>                      
                <Footer updateDim={updateDim} updatePayload={updatePayload}/>
            </div>
        </div>
    )
}
export default App;