import React from 'react'
import PathwaysImage from '../images/general/pathways.png' 

const pathways = () => {
    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
            <div className="size36Font padTop80 padBottom40 centerText weight700">Pathways for Emerging Leaders</div>
            {/* <div className="centerText size32Font weight700 padBottom20">Upcoming Events TBA</div> */}
            <div className="simpleFlex padBottom20 padTop20">
                <img src={PathwaysImage} className="upcomingImgResize"></img>
            </div>
            <div className='weight500'>
                <p className='size18Font lineHeight30 weight700 padBottom40 centerText'>RSVP here by March 18: <a href="https://docs.google.com/forms/d/e/1FAIpQLScDroZeOcnUM_9TY2x-Cf8hTOmdAIPJf0Bg8kLLBhtgGA9iwg/viewform" className='breakWord'>https://docs.google.com/forms/d/e/1FAIpQLScDroZeOcnUM_9TY2x-Cf8hTOmdAIPJf0Bg8kLLBhtgGA9iwg/viewform</a> </p>
                <p className='size18Font lineHeight30'>Pathways for Emerging Leaders stems from the collaborative efforts of Believe New York (BNY) and Young Women Emerge (YWE), building upon the success of YWE's mentorship program designed for high school women. 
                </p>
                <p className='size18Font lineHeight30'>
                At its core, Pathways is an extension of YWE's noble mission to empower women with essential college preparation and support. By uniting forces with BNY, the program takes on a broader perspective, aligning with Believe New York's overarching goal of improving resource accessibility to ensure the health and happiness of all NYC residents.
                </p>
                <div className="size18Font lineHeight30 padTop20">Pathways for Emerging Leaders, or Pathways for short, specifically targets underserved individuals in New York who aspire to embark on or resume their college journeys through unconventional routes. The program recognizes that age and diverse life experiences should not serve as obstacles but rather as stepping stones toward realizing educational and employment aspirations. By fostering a supportive environment, Pathways aims to break down barriers and create a pathway for emerging leaders to achieve their academic and professional dreams.</div>
                <p className='size18Font lineHeight30'>Following the inaugural workshop on March 30, here's a glimpse into the diverse support services that Pathways will seek to offer support with: College Admissions, General Educational Development (GED), Vocational Programs, and Employment.  
                </p>
                <p className='size18Font lineHeight30'>Pathways for Emerging Leaders is not just workshops; it's a dynamic and evolving initiative committed to fostering personal and professional empowerment. After our workshops, our Client Advocates will continue to work with you to break down barriers and support your goals. Our goal is to create to a more educated and economically stable community. 
                </p>
                <p className='size18Font lineHeight30'>This innovative program is a testament to Believe New York's commitment to inclusivity, resource accessibility, and the belief that everyone, regardless of their background, deserves the opportunity to pursue fulfillment in their chosen careers. Pathways for Emerging Leaders signifies a bold step towards a brighter and more equitable future for all New Yorkers.
                </p>
            </div>
        </div>
        </div>
    )
}

export default pathways;