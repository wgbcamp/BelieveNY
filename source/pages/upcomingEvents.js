import React from 'react'
import { Link } from 'react-router-dom'
import holidayGiftDrive from '../images/general/holidayGiftDrive.jpg';
import VirtualGedWorkshop from '../images/events/virtualGEDworkshop.jpg';

const upcomingEvents = () => {

    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
            <div className="centerText size32Font weight700 padTop60">Event Coordinators Needed</div>
            <div className="size18Font lineHeight30 padTop40">The Event Coordinator is responsible for organizing and hosting the event, recruiting, and managing volunteers, contacting potential sponsors, and organizing materials and plans for events.</div>
            <p className='size18Font lineHeight30'>Ideally we're looking for 2-3 people to split responsibilities for putting together our Community and Outreach Events. This would be about 2-5 hour weekly commitment, with weekly meetings to discuss updates with leadership. Are you interested in this position? Please email our Executive Director Nicole at <span className="bold">nicole@believeny.org</span>. 
            </p>
            <div className="size18Font">
                <div className="centerText size32Font weight700 padTop40 padBottom40">General Education Diploma (GED) Workshop</div>
                <b>Thursday, August 15th 6-8pm ET</b>
                <div>VIRTUAL on Zoom!</div>
                <a className='linkColorThinner' href="https://www.eventbrite.com/e/general-education-diploma-ged-workshop-by-believe-new-york-tickets-947484350197?aff=oddtdtcreator">GED.eventbrite.com</a>
                    <ul className='ulLineHeight'>
                        <li>An online General Education Diploma Workshop </li>
                        <li>Perfect for those aspiring for a GED</li>
                        <li>Join us for an introduction to the test and resources to help you move forward with the next steps towards earning your GED</li>
                        <li>After the workshop, you will be set up with FREE GED tutoring through Columbia Community Impact to prepare you for the test!</li>
                    </ul>
                    <div className="simpleFlex padBottom40 padTop20">
                    <img src={VirtualGedWorkshop} className="upcomingImgResize"></img>
                </div>
            </div>
            </div>
        </div>

        

    )
}
export default upcomingEvents;