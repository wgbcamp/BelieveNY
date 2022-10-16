import React, {useState} from 'react'
import PhotoTextBox from '../components/photoTextBox'
import PhotoTextBoxNoLogo from '../components/photoTextBoxNoLogo'
import Lilfrankies from '../../images/LilFrankies.webp'
import HavanaCentral from '../../images/havana-central-logo-v3.webp'
import CutlerSalons from '../../images/Cutler-Salons.webp'
import CutlerLogo from '../../images/cutlerLogo.png'

const eventSponsors = () => {

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

    function refreshFields(){
        setBName("");
        setPhone("");
        setEmail("");
        setCName("");
        setText("");
        alert("Your form has been submitted, thank you.");
    }

    function submitEmail(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            type: "eventSponsor",
            contactName: contactName,
            businessName: businessName,
            email: email,
            phone: phone,
            text: text
        }));
        refreshFields();
    }

    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
                <div className='padTop80'></div>
                <div className="simpleFlex verticalAlign sT lightPurple">
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
                            <li>Tax Deductions for All Donations</li>
                            <ul></ul>
                            <li>Increase in Foot Traffic for Your Business</li>
                            <ul></ul>
                            <li>Increase in Social Media Engagement</li>
                            <ul></ul>
                            <li>Build Relationships in Your Community</li>
                            <ul></ul>
                            <li>Your Neighborhood Will See You Care</li>
                        </div>
                    </div>
                    <div className="padTop20 size18Font lineHeight25 instructions">
                    Fill out the form and a Believe New York representative will get in touch within 48 hours.
                    </div>
                        <div className="superSponsorContainer">
                            <div className="sponsorContainer">
                            <div className="sponsorBoxTitleFlex lightPurple">
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
                <div className="simpleFlex verticalAlign sT lightPurple">
                    <div className="size36Font">Past Sponsors</div>  
                </div>
                <PhotoTextBox content={{description: "Summer 2021, stylists from Cutler Salon joined us in Washington Square Park to give free haircuts to persons living with poverty. From the event itself, Cutler Salon reported back a 30% increase in bookings, and spike in social media engagements. And come tax season, the stylists and the business will get a sizable tax deduction for their services.", image: CutlerLogo, series: "Top", version: "Left"}}/>
                <PhotoTextBox content={{description: "For Labor Day Weekend 2021, Havana Central graciously donated meals for our Meal Handout in the Upper West. Havana Central also saw an increase in social media engagements leading up to the event. They will also enjoy a sizable tax deduction for the 2021 tax year, as well as earning a charitable reputation in their neighborhood.", image: HavanaCentral, series: "", version: "Right"}}/>
                <PhotoTextBox content={{description: "Our Thanksgiving Hot Meal and Warm Clothes handout was a huge success in no small part to Lil' Frankies and Supper. They'll be noticing that tax-deduction come April! They've also now received some well earned attention from their community. ", image: Lilfrankies, series: "Bottom", version: "Left"}}/>
                
            </div>
        </div>
    )
}

export default eventSponsors;