import React from 'react'
import { Link } from 'react-router-dom'
import holidayGiftDrive from '../images/general/holidayGiftDrive.jpg';
import VirtualGedWorkshop from '../images/events/virtualGEDworkshop.jpg';

const upcomingEvents = () => {

    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
            <div className="padTop80 centerText size32Font weight700 ">Mental Health Resource Fair</div>
            <p className='size18Font lineHeight30 padTop40'>Come join us at the <b>30th Street Studios on Sat, July 27</b> for a day filled with valuable resources and support for your mental well-being. Our event will feature various organizations and professionals offering information on free or low-cost mental health services, affordable therapy options, and self-care practices. There will also be representatives from the NYS Dept of Health to support applications for healthcare insurance. Whether you're looking for guidance, resources, or just want to connect with others, this fair is the perfect place to start. Let's break the stigma together and prioritize our mental health!
            </p>
            <a className="size18Font" href="https://www.eventbrite.com/e/mental-health-resource-fair-hosted-by-believe-new-york-tickets-882643539587?aff=oddtdtcreator">See more info about the Mental Health Resource Fair</a>
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