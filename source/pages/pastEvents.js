import React from 'react'
import {Link} from 'react-router-dom'
import SlideShowBox from '../components/slideshowBox'

const pastEvents = () => {
    return(
        <div className="simpleFlex padTop80">
            <div className='maxWidth width80Per'>
                <div className="doubleGrid padBottom80">
                    <div className="centerText size36Font verticalAlign simpleFlex">Our Events Help Your Community</div>
                    <div className="simpleFlex">
                        <Link to="/donate" className="centerText size24Font submitButton2">Donate to Events Fund</Link>
                    </div>
                </div>
                <SlideShowBox content={{version: "Left", series: "Top", title: "Clothes and Meal Hand Outs", description: "We started handing out hot meals on Thanksgiving 2020 in Herbert Von King Park in Brooklyn. Since then we've been holding regular food hand outs in public spaces across the city, including the Upper West, Alphabet City, Washington Square Park, and Bedstuy. We've fed over 1,000 food insecure New Yorkers and handed out more than 300 items of clothing at our events alone!", email: "Meal Events Volunteer"}}/>
                <SlideShowBox content={{version: "Right", series: "", title: "Community Clean Up", description: "Believe New York Volunteers care about your community, and believe that everyone should live in a safe and clean environment. We've held clean up events in Bushwick, Harlem, the Bronx, LES, and Astoria. We're looking to expand on our clean up events, so click Get Involved to help your neighborhood!", email: "Clean Up Volunteer"}}/>
                <SlideShowBox content={{version: "Left", series: "Bottom", title: "Free Summer Hair Cuts and Clothes", description: "Like with our Hot Meals and Warm Clothes events, we aspire to make sure that everyone in NYC has access to basic hygiene, clothing, and safety. This past summer we partnered with local stylists at Cutler Salon to give free hair cuts to over 100 people in Washington Square Park, while also handing summer clothes and cool meals.", email: "Meal Events Volunteer"}}/>
            </div>  
        </div>
    )
}

export default pastEvents;