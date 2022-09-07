import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/main.css';
import './css/home.css';
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

function App(){
    return(
        <BrowserRouter>
            <div className='pageContainer'>
                <Header/>
                <Construction/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/aboutUs/" element={<AboutUs/>}/>
                        <Route path="/diversityAndInclusion/" element={<DiversityInclusion/>}/>
                        <Route path="/foundingSupporters/" element={<FoundingSupporters/>}/>
                        <Route path="/getHelp" element={<GetHelp/>}/>
                        <Route path="/foodFirst" element={<FoodFirst/>}/>
                        <Route path="/theOpenSpace" element={<TheOpenSpace/>}/>
                        <Route path="/environmentalProjects" element={<EnvironmentalProjects/>}/>
                        <Route path="/scheduleBooking" element={<ScheduleBooking/>}/>
                        <Route path="/upcomingEvents"/>
                        <Route path="/pastEvents"/>
                        <Route path="/eventSponsors"/>
                        <Route path="/donateToSpecialEventsFund"/>
                        <Route path="/volunteer"/>
                        <Route path="/donate"/>
                        <Route path="*"/>
                    </Routes>
                <div className="contentWrapper"></div> 
                <Footer/>
            </div>
        </BrowserRouter>
    )
}
export default App;