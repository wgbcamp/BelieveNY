import React from 'react'
import { Link } from 'react-router-dom'

const upcomingEvents = () => {
    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
            <div className="size36Font padTop80 padBottom40 centerText">Clothing and Food Handout Events on Temporary Hiatus</div>
            <p className='size18Font lineHeight30'>We love doing our events. The opportunity to address immediate needs in NYC communities is an extremely rewarding experience for our volunteers and leadership. At our events we generally find at least a few new clients, increased social media presence, and make new connections with local organizations.
            </p>
            <p className='size18Font lineHeight30 padBottom40'>
            Our events are not our core services, and unfortunately we currently do not have an Event Coordinator. Members of Believe New York Leadership are not currently paid, and either are working, attending university/graduate school, or both. We do not have the bandwidth to dedicate the time necessary to put together events at the same caliber as our previous events.
            </p>
            <div className='simpleFlex'>
                <Link to="/volunteer" className='size26Font styleLink'><u>Click Here If You're Interested in an Event Coordinator Volunteer Position</u></Link>
            </div>
            <p className='size18Font lineHeight30 padTop40'>Ideally we're looking for 2-3 people to split responsibilities for putting together our Community and Outreach Events. This would be about 2-5 hour weekly commitment, with weekly meetings to discuss updates with leadership.
            </p>
            <p className='size18Font lineHeight30'>The Event Coordinator is responsible for organizing volunteers, contacting potential sponsors, and obtaining materials for events.</p>
        </div>
        </div>

    )
}
export default upcomingEvents;