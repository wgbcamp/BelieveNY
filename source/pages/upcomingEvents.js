import React from 'react'
import { Link } from 'react-router-dom'

const upcomingEvents = () => {

    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
            <div className="size36Font padTop80 padBottom40 centerText">Clothing and Food Handout Events on Temporary Hiatus</div>
            <div className="centerText size32Font weight700 padBottom20">Upcoming Events TBA</div>
            <ol>
                <li className="upcomingEventsTBAitem">Meal and clothing hand out - October or November 2023</li>
                <li className="upcomingEventsTBAitem">Holiday Gift Drive - December 2023</li>
                <li className="upcomingEventsTBAitem">Resource Fair - Spring 2024</li>
            </ol>
            <p className='size18Font lineHeight30'>We love doing our events. The opportunity to address immediate needs in NYC communities is an extremely rewarding experience for our volunteers and leadership. At our events we generally find at least a few new clients, increased social media presence, and make new connections with local organizations.
            </p>
            <p className='size18Font lineHeight30 padBottom40'>
            Our events are not our core services, and unfortunately we currently do not have an Event Coordinator. Members of Believe New York Leadership are not currently paid, and either are working, attending university/graduate school, or both. Because of this, we do not have the bandwidth to dedicate the time necessary to put together events every month as we did at the beginning.
            </p>
            <div className="centerText size32Font weight700 ">Event Coordinators Needed</div>
            <div className="size18Font lineHeight30 padTop40">The Event Coordinator is responsible for organizing and hosting the event, recruiting, and managing volunteers, contacting potential sponsors, and organizing materials and plans for events.</div>
            <p className='size18Font lineHeight30'>Ideally we're looking for 2-3 people to split responsibilities for putting together our Community and Outreach Events. This would be about 2-5 hour weekly commitment, with weekly meetings to discuss updates with leadership. Are you interested in this position? Please email our Executive Director Nicole at <span className="bold">nicole@believeny.org</span>. 
            </p>
        </div>
        </div>

    )
}
export default upcomingEvents;