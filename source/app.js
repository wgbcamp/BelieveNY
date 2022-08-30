import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/main.css';
import './css/home.css';
import Home from './pages/home.js';
import AboutUs from './pages/aboutUs';
import DiversityInclusion from './pages/diversityInclusion';
import FoundingSupporters from './pages/foundingSupporters';
import GetHelp from './pages/getHelp';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutUs/" element={<AboutUs/>}/>
                <Route path="/diversityAndInclusion/" element={<DiversityInclusion/>}/>
                <Route path="/foundingSupporters/" element={<FoundingSupporters/>}/>
                <Route path="/getHelp" element={<getHelp/>}/>
                <Route path="/foodFirst"/>
                <Route path="/theOpenSpace"/>
                <Route path="/environmentalProjects"/>
                <Route path="/upcomingEvents"/>
                <Route path="/pastEvents"/>
                <Route path="/eventSponsors"/>
                <Route path="/donateToSpecialEventsFund"/>
                <Route path="/volunteer"/>
                <Route path="/donate"/>
                <Route path="*"/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;