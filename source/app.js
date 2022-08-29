import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './css/main.css';
import './css/home.css';
import Home from './pages/home.js';
import AboutUs from './pages/aboutUs';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutUs/" element={<AboutUs/>}/>
                <Route path="*"/>
            </Routes>
        </BrowserRouter>
    )
}
export default App;