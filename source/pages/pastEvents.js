import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SlideShowBox1 from '../components/slideshowBox'
import SlideShowBox2 from '../components/slideshowBox'
import SlideShowBox3 from '../components/slideshowBox'


const pastEvents = () => {

    var [leftIndex, updateLeftIndex] = useState(0);
    var [rightIndex, updateRightIndex] = useState(0);
    var [leftCSS, updateLeftCSS] = useState("hold");
    var [rightCSS, updateRightCSS] = useState("centerToRight");
    var [currentSelection, updateSelection] = useState("");
    var [preventChange, updatePC] = useState(false);

    return(
        <div className="simpleFlex padTop80">
            <div className='maxWidth width80Per'>
                <div className="doubleGrid padBottom80">
                    <div className="centerText size36Font verticalAlign simpleFlex">Our Events Help Your Community</div>
                    <div className="simpleFlex">
                        <Link to="/donate" className="centerText size24Font submitButton2">Donate to Events Fund</Link>
                    </div>
                </div>
                <SlideShowBox1 content={{version: "Left", series: "Top", title: "Clothes and Meal Hand Outs", description: "We started handing out hot meals on Thanksgiving 2020 in Herbert Von King Park in Brooklyn. Since then we've been holding regular food hand outs in public spaces across the city, including the Upper West, Alphabet City, Washington Square Park, and Bedstuy. We've fed over 1,000 food insecure New Yorkers and handed out more than 300 items of clothing at our events alone!", email: "Meal Events Volunteer", images: ["https://i.imgur.com/3jKvhFY.jpeg", "https://i.imgur.com/J2l4uLI.jpeg", "https://i.imgur.com/iaWr1P9.jpeg", "https://i.imgur.com/DuTbJYr.jpeg", "https://i.imgur.com/zfdFae1.jpeg", "https://i.imgur.com/cyyijEC.jpeg", "https://i.imgur.com/h0N8Pap.jpeg", "https://i.imgur.com/DVdcHmg.jpeg"]}}/>

                <SlideShowBox2 content={{version: "Right", series: "", title: "Community Clean Up", description: "Believe New York Volunteers care about your community, and believe that everyone should live in a safe and clean environment. We've held clean up events in Bushwick, Harlem, the Bronx, LES, and Astoria. We're looking to expand on our clean up events, so click Get Involved to help your neighborhood!", email: "Clean Up Volunteer", images: ["https://i.imgur.com/3jKvhFY.jpeg", "https://i.imgur.com/J2l4uLI.jpeg", "https://i.imgur.com/iaWr1P9.jpeg", "https://i.imgur.com/DuTbJYr.jpeg", "https://i.imgur.com/zfdFae1.jpeg", "https://i.imgur.com/cyyijEC.jpeg", "https://i.imgur.com/h0N8Pap.jpeg", "https://i.imgur.com/DVdcHmg.jpeg"]}}/>
                <SlideShowBox3 content={{version: "Left", series: "Bottom", title: "Free Summer Hair Cuts and Clothes", description: "Like with our Hot Meals and Warm Clothes events, we aspire to make sure that everyone in NYC has access to basic hygiene, clothing, and safety. This past summer we partnered with local stylists at Cutler Salon to give free hair cuts to over 100 people in Washington Square Park, while also handing summer clothes and cool meals.", email: "Meal Events Volunteer", images: ["https://i.imgur.com/3jKvhFY.jpeg", "https://i.imgur.com/J2l4uLI.jpeg", "https://i.imgur.com/iaWr1P9.jpeg", "https://i.imgur.com/DuTbJYr.jpeg", "https://i.imgur.com/zfdFae1.jpeg", "https://i.imgur.com/cyyijEC.jpeg", "https://i.imgur.com/h0N8Pap.jpeg", "https://i.imgur.com/DVdcHmg.jpeg"]}}/>
            </div>  
        </div>
    )
}

export default pastEvents;