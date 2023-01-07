import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SlideShowBox1 from '../components/slideshowBox'
import SlideShowBox2 from '../components/slideshowBox'
import SlideShowBox3 from '../components/slideshowBox'
import clothes1 from '../images/clothesMealHandOuts/3jKvhFY.jpeg'
import clothes2 from '../images/clothesMealHandOuts/cyyijEC.jpeg'
import clothes3 from '../images/clothesMealHandOuts/DuTbJYr.jpeg'
import clothes4 from '../images/clothesMealHandOuts/DVdcHmg.jpeg'
import clothes5 from '../images/clothesMealHandOuts/h0N8Pap.jpeg'
import clothes6 from '../images/clothesMealHandOuts/iaWr1P9.jpeg'
import clothes7 from '../images/clothesMealHandOuts/J2l4uLI.jpeg'
import clothes8 from '../images/clothesMealHandOuts/zfdFae1.jpeg'
import cleanup1 from '../images/communityCleanUp/0FA38BB4-11FC-4AB3-AC12-7192030C39D4.jpg'
import cleanup2 from '../images/communityCleanUp/IMG_0126.jpeg'
import cleanup3 from '../images/communityCleanUp/IMG_3323.JPG'
import cleanup4 from '../images/communityCleanUp/IMG_3333.JPG'
import cleanup5 from '../images/communityCleanUp/IMG_3346.JPG'
import cleanup6 from '../images/communityCleanUp/IMG_3365.JPG'
import cleanup7 from '../images/communityCleanUp/IMG_3367.JPG'
import cleanup8 from '../images/communityCleanUp/IMG_5422.jpeg'
import summer1 from '../images/summerHairCuts/326CC3C6-82D5-4253-8910-18E4C386DAC5.jpg'
import summer2 from '../images/summerHairCuts/C19B1BAF-0ABE-4C42-8838-3E6305BBA168.jpg'
import summer3 from '../images/summerHairCuts/IMG_4336.JPG'
import summer4 from '../images/summerHairCuts/IMG_4337.JPG'
import summer5 from '../images/summerHairCuts/IMG_4340.JPG'
import summer6 from '../images/summerHairCuts/IMG_4342.JPG'
import summer7 from '../images/summerHairCuts/IMG_4346.JPG'
import summer8 from '../images/summerHairCuts/IMG_4349.JPG'
import summer9 from '../images/summerHairCuts/IMG_4352.JPG'
import summer10 from '../images/summerHairCuts/IMG_4353.JPG'
import summer11 from '../images/summerHairCuts/IMG_4354.JPG'
import summer12 from '../images/summerHairCuts/IMG_4356.JPG'
import summer13 from '../images/summerHairCuts/IMG_4405.jpeg'

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
                <SlideShowBox1 content={{series: "Top", v: 1, title: "Clothes and Meal Hand Outs", description: "We started handing out hot meals on Thanksgiving 2020 in Herbert Von King Park in Brooklyn. Since then we've been holding regular food hand outs in public spaces across the city, including the Upper West, Alphabet City, Washington Square Park, and Bedstuy. We've fed over 1,000 food insecure New Yorkers and handed out more than 300 items of clothing at our events alone!", email: "Meal Events Volunteer", images: [clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, clothes7, clothes8]}}/>

                <SlideShowBox2 content={{series: "", v: 2, title: "Community Clean Up", description: "Believe New York Volunteers care about your community, and believe that everyone should live in a safe and clean environment. We've held clean up events in Bushwick, Harlem, the Bronx, LES, and Astoria. We're looking to expand on our clean up events, so click Get Involved to help your neighborhood!", email: "Clean Up Volunteer", images: [cleanup1, cleanup2, cleanup3, cleanup4, cleanup5, cleanup6, cleanup7, cleanup8]}}/>

                <SlideShowBox3 content={{series: "Bottom", v: 3, title: "Free Summer Hair Cuts and Clothes", description: "Like with our Hot Meals and Warm Clothes events, we aspire to make sure that everyone in NYC has access to basic hygiene, clothing, and safety. This past summer we partnered with local stylists at Cutler Salon to give free hair cuts to over 100 people in Washington Square Park, while also handing summer clothes and cool meals.", email: "Meal Events Volunteer", images: [summer1, summer2, summer3, summer4, summer5, summer6, summer7, summer8, summer9, summer10, summer11, summer12, summer13]}}/>
            </div>  
        </div>
    )
}

export default pastEvents;