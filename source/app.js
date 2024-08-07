import React, {useState, useEffect, createRef} from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './css/main.css';
import Header from './components/newHeader.js';
import Footer from './components/newFooter.js';
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
import ImpactReport from './pages/impactReport';
import DonateForm1 from './pages/donateFormZeffy';
import DonateForm2 from './pages/donateFormStripe';
import DonationFormQR from './pages/donationFormQR';
import Survey from './pages/survey.js';
import DonateChoices from './components/donateChoices.js';
import UpdateContent from './pages/updateContent.js';
import Home2 from './pages/home2.js';
import CollegeResources from './pages/collegeresources.js';
import MentalHealthFair from './pages/mentalhealthfair.js';
import CrudAssets from './pages/crudAssets.js';
import NewHome from './pages/newHome2.js';
import NewHomeOld from './pages/newHome.js';


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
    var [bookingCategory, updateBC] = useState(false);
    function updateBookingCategory(value) {
        updateBC(value);
    }

    //tracking path changes
    const location = useLocation();

    useEffect(() => {
        console.log("new location", location.pathname);
    }, [location]);

    return(

        <div>
            <FormHandler payload={{name: payload.name, email: payload.email, phone: payload.phone, path: payload.path, type: payload.type, specific0: payload.specific0, specific1: payload.specific1, specific2: payload.specific2, specific3: payload.specific3, specific4: payload.specific4, specific5: payload.specific5, label: payload.label}} dim={dim} updateDim={updateDim}/>
            <DonateChoices dim2={dim2} updateDim2={updateDim2}/>
            <div className={`${dim === true || dim2 === true ? "dim" : ""}`}>
                <Header location={location}/>
                <div className='accomodateHeader'>
                    <Routes>
                        <Route path="*" element={<Home/>}/>
                        <Route path="/faq" element={<Faq/>}/>
                        <Route path="/aboutUs/" element={<AboutUs/>}/>
                        <Route path="/impactReport" element={<ImpactReport/>}/>
                        <Route path="/diversityAndInclusion" element={<DiversityInclusion/>}/>
                        <Route path="/foundingSupporters" element={<FoundingSupporters/>}/>
                        <Route path="/getHelp" element={<GetHelp updateBC={updateBC}/>}/>
                        <Route path="/foodFirst" element={<FoodFirst/>}/>
                        <Route path="/theOpenSpace" element={<TheOpenSpace updateBC={updateBC}/>}/>
                        <Route path="/environmentalProjects" element={<EnvironmentalProjects/>}/>
                        <Route path="/scheduleBooking" element={<ScheduleBooking updateDim={updateDim} updatePayload={updatePayload} bookingCategory={bookingCategory}/>}/>
                        <Route path="/upcomingEvents" element={<UpcomingEvents/>}/>
                        <Route path="/pastEvents" element={<PastEvents/>}/>
                        <Route path="/eventSponsors" element={<EventSponsors updateDim={updateDim} updatePayload={updatePayload}/>}/>
                        <Route path="/SpecialEventsFund" element={<SpecialEventsFund/>}/>
                        <Route path="/joinus" element={<Volunteer/>}/>
                        <Route path="/donate" element={<Donate showDonateChoices={showDonateChoices}/>}/>
                        <Route path="/cancelSession/*" element={<CancelSession/>}/>
                        <Route path="/donationform" element={<DonateForm1/>}/>
                        <Route path="/donationform2" element={<DonateForm2/>}/>
                        <Route path="/donationformQR" element={<DonationFormQR/>}/>
                        <Route path="/survey" element={<Survey/>}/>
                        <Route path="/updateContent" element={<UpdateContent/>}/>
                        <Route path="/home2" element={<Home2/>}/>
                        <Route path="/collegeresources" element={<CollegeResources/>}/>
                        <Route path="/mentalhealthfair" element={<MentalHealthFair/>}/>
                        <Route path="/crudAssets" element={<CrudAssets/>}/>
                        <Route path="/newHome" element={<NewHome/>}/>
                        <Route path="/newHomeOld" element={<NewHomeOld/>}/>
                    </Routes>  
                </div>                      
                <Footer updateDim={updateDim} updatePayload={updatePayload}/>
                {/* <BottomContact/> */}
            </div>
        </div>
    )
}
export default App;