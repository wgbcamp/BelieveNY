import React, {useState} from 'react'
import PhotoTextBox from '../items/photoTextBox'
import Lilfrankies from '../../images/eventSponsors/LilFrankies.webp'
import HavanaCentral from '../../images/eventSponsors/havana-central-logo-v3.webp'
import CutlerLogo from '../../images/eventSponsors/cutlerLogo.png'

const eventSponsors = (props) => {

    const [businessName, setBName] = useState('');
    const [contactName, setCName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [text, setText] = useState('');

    const updateBName = event => {
        setBName(event.target.value);
    }
    const updatePhone = event => {
        setPhone(event.target.value);
    }
    const updateEmail = event => {
        setEmail(event.target.value);
    }
    const updateCName = event => {
        setCName(event.target.value);
    }
    const updateText = event => {
        setText(event.target.value);
    }

    function submitEmail(){
        if(businessName !== "" && email !== "" && email.includes("@") && email.includes(".") && phone !== "" && phone.split(/[-\s]/).join("").length === 10 && text !== "" && contactName !== ""){
            props.updateDim(true);
            props.updatePayload({email: email, phone: phone, path: "", type: "eventSponsor", name: contactName, specific0: text, specific1: businessName});
        }else{
            if (phone.split(/[-\s]/).join("").length !== 10){
                alert("Please make sure your phone number consists of 10 digits.");
            }else if (!(email.includes("@") && email.includes("."))){
                alert("Please make sure to include a valid email address.");
            }else{
                alert("Please fill out every field below before booking your appointment.");
            }
        }
    }

    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
                <div className='padTop80'></div>
                <div className="simpleFlex verticalAlign sT ">
                    <div className="size36Font">Sponsor An Event With Believe New York</div>  
                </div>
                <div className="perkAndFormGrid">
                    <div className="">
                        <div className="size18Font lineHeight25">We're looking to partner with more locally run businesses to help ensure every New Yorker is getting the help they need.
                        </div>
                    </div>
                    <div className='perks verticalAlign'>
                        <div className="size18Font">Perks:
                            <div className="padTop20"></div>
                            <li className="textIndent">Tax Deductions for All Donations</li>
                            <ul></ul>
                            <li className="textIndent">Increase in Foot Traffic for Your Business</li>
                            <ul></ul>
                            <li className="textIndent">Increase in Social Media Engagement</li>
                            <ul></ul>
                            <li className="textIndent">Build Relationships in Your Community</li>
                            <ul></ul>
                            <li className="textIndent">Your Neighborhood Will See You Care</li>
                        </div>
                    </div>
                    <div className="padTop20 size18Font lineHeight25 instructions">
                    Fill out the form and a Believe New York representative will get in touch within 48 hours.
                    </div>
                        <div className="superSponsorContainer">
                            <div className="sponsorContainer">
                            <div className="sponsorBoxTitleFlex ">
                                <div className="sponsorBoxTitle">Become An Event Sponsor</div>
                            </div>
                            <div className="fieldContainer">
                            <input placeholder="Business Name" type="text" className="b1" onChange={updateBName} value={businessName}/>
                            <input placeholder="Contact Name" type="text" className="b2" onChange={updateCName} value={contactName}/>
                            <input placeholder="Email" type="text" className="b3" onChange={updateEmail} value={email}/>
                            <input placeholder="Phone" type="text" className="b4" onChange={updatePhone} value={phone}/>
                            <textarea placeholder="Type your message here..." type="text" className="" onChange={updateText} value={text}/>
                            </div>
                            <div className="verticalAlign">
                                {/* <div className="captcha simpleFlex verticalAlign">Placeholder Captcha</div> */}
                            </div>
                            <div className="verticalAlign horizontalEnd">
                                <div className="formButton simpleFlex verticalAlign" onClick={() => submitEmail()}>Submit</div>
                            </div>
                            
                            </div>
                        </div>
                </div>
                <div className="padTop80"></div>
                <div className="simpleFlex verticalAlign sT">
                    <div className="size36Font">Past Sponsors</div>  
                </div>
                <PhotoTextBox content={{description: "Our Thanksgiving Hot Meal and Warm Clothes handouts are a huge success in no small part to Lil' Frankies and Supper who have donated each year since we started in 2020. With each donation, they notice a tax-deduction come April! They've also seen some well earned attention from their community because of their ongoing support of our events.", image: Lilfrankies, series: "Bottom", version: "Left"}}/>
                <PhotoTextBox content={{description: "Summer 2021, stylists from Cutler Salon joined us in Washington Square Park to give free haircuts to persons living with poverty. From the event itself, Cutler Salon reported back a 30% increase in bookings, and spike in social media engagements. And come tax season, the stylists and the business will get a sizable tax deduction for their services.", image: CutlerLogo, series: "Top", version: "Left"}}/>
                <PhotoTextBox content={{description: "For Labor Day Weekend 2021, Havana Central graciously donated meals for our Meal Handout in the Upper West. Havana Central also saw an increase in social media engagements leading up to the event. They will also enjoy a sizable tax deduction for the 2021 tax year, as well as earning a charitable reputation in their neighborhood.", image: HavanaCentral, series: "", version: "Right"}}/>
                
            </div>
        </div>
    )
}

export default eventSponsors;