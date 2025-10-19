import React, {useState} from 'react'


const supportUs = (props) => {

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
                        <div className="text-[18px] text-left">Perks:
                            <div className="pt-20 pb-20">Tax Deductions for All Donations</div>
                            <div className="pb-20">Increase in Foot Traffic for Your Business</div>
                            <div className="pb-20">Increase in Social Media Engagement</div>
                            <div className="pb-20">Build Relationships in Your Community</div>
                            <div className="pb-20">Your Neighborhood Will See You Care</div>
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
            </div>
        </div>
    )
}

export default supportUs;