import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
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

function App(){

    const location = useLocation();
    
    return(

            <div className='pageContainer'>
            <Construction/>
                <Header/>
                    <TransitionGroup component={null}>
                        <CSSTransition key={location.key} classNames="fade" timeout={2000}>
                            <Routes location={location}>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/aboutUs/" element={<AboutUs/>}/>
                                <Route path="/diversityAndInclusion/" element={<DiversityInclusion/>}/>
                                <Route path="/foundingSupporters/" element={<FoundingSupporters/>}/>
                                <Route path="/getHelp" element={<GetHelp/>}/>
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
                        </CSSTransition>
                    </TransitionGroup>
                <div className="contentWrapper"></div> 
                <Footer/>
            </div>
    )
}
export default App;