import React from 'react'
import {Link} from 'react-router-dom'
import "../css/footer.css"
import BNYLogoFull from "../images/BNYLogoFull-02.png"
const Footer = () => {

    return(
        <div className="bg">
            <div className="upperFlex">
            <div className="upperContainer">
                <div className="footerImageContainer">
                <img src={BNYLogoFull} className="footerImage"></img>
                </div>
                <div className="footerStatement">
                <div>We are committed to a better world</div>
                <div><b>100% of public contributions go towards our mission.</b></div>
                </div>
                <div className="footerBorderOut">
                    <div className="footerBorder"></div>
                </div>
                
                
                <div className="rightColumn">
                    <div className="rightRow1">
                        <div className="innerCol1">
                            <b>Who We Are</b>
                            <div>About Us</div>
                            <div>Finances</div>
                            <div>Founding Supporters</div>
                            <div>How we help FAQ</div>
                        </div>
                        <div className="innerCol2">
                            <b>What We Do</b>
                            <div>Get Help</div>
                            <div>The Open Space</div>
                            <div>Food First Program</div>
                            <div>Community Events</div>
                        </div>
                        <div className="innerCol3">
                            <b>Ways to Help</b>
                            <div>Donate to our programs</div>
                            <div>Donate to our Events Fund</div>
                            <div>Join Us</div>
                            <div className="blank">blank</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="lowerContainer">
                <div className="phone">
                    <div>Text: (347) NYC-0011</div>
                </div>
                <div className="email">
                    <div>Email: GetHelp@BelieveNY.org</div>
                </div>
            
            
            <div></div>
            <div className="socialMedia">
                
                <a href="https://www.facebook.com/believeny" className="fixLinkColor"><i className="fa-brands fa-square-facebook fa-2xl"></i></a>
                <a href="https://www.twitter.com/Believe_NewYork" className="fixLinkColor"><i className="fa-brands fa-square-twitter fa-2xl iconPad"></i></a>
                <a href="https://www.instagram.com/believeny" className='fixLinkColor'><i className="fa-brands fa-square-instagram fa-2xl iconPad"></i></a>
                <a href="https://www.youtube.com/channel/UCbz9owENALBUb8O6NrFv7oQ" className='fixLinkColor'><i className="fa-brands fa-square-youtube fa-2xl iconPad"></i></a>
            </div>
            <div className="copyright">©2021 by Believe New York Philanthropies, Inc.</div>
            </div>
        </div>
    )
}

export default Footer;