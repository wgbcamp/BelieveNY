import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
import PhotoTextBox from '../components/photoTextBox';
import DescriptionBox from '../components/descriptionBox';
import '../css/aboutUs.css';
import BNYLogoFull from '../images/BNYLogoFull-02.png';

const aboutUs = () => {
    return(
        <div>
            <Header/>
            <div className="mainContainer">
                <div className="touchBarrier">
                <div className="bigLogo">
                        <img className="logoResize" src={BNYLogoFull}></img>
                </div>
            <DescriptionBox/> 
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default aboutUs;