import React, {useState, useEffect} from 'react'
import facebook from '../images/general/facebook-square-brands.png'
import twitter from '../images/general/twitter-square-brands.png'
import instagram from '../images/general/instagram-square-brands.png'

const getHelp = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [time, setTime] = useState('');
    const [text, setText] = useState('');

    const updateName = event => {
        setName(event.target.value);
    }
    const updatePhone = event => {
        setPhone(event.target.value);
    }
    const updateEmail = event => {
        setEmail(event.target.value);
    }
    const updateSubject = event => {
        setSubject(event.target.value);
    }
    const updateTime = event => {
        setTime(event.target.value);
    }
    const updateText = event => {
        setText(event.target.value);
    }

    function submitEmail(){
        if(name !== "" && email !== "" && email.includes("@") && email.includes(".") && phone !== "" && phone.split(/[-\s]/).join("").length === 10 && subject !== "" && time !== "" && text !== ""){
            props.updateDim(true);
            props.updatePayload({name: name, email: email, phone: phone, path: "", type: "contactForm", specific0: subject, specific1: text, specific2: time});
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
        
        <div>
            <div className="simpleFlex down whiten">
                <div className="maxWidth width80Per">
                    <div className="simpleTitle centerText">NEED HELP?</div>
                    <div className="size18Font lineHeight30">We are here for you. Email us below and we will respond back via e-mail or phone ASAP or within 24-48 hours for next steps and resources that will help you and your family. Stay close to your phone and check e-mails often. Call for immediate assistance. If it's an emergency please call 911 first.</div>

                    <div className="padding50"></div>
                    <div className="contactGrid">
                        <div className="ghEmail centerText">gethelp@believeny.org</div>
                        <div className='ghPhone centerText'>347-NYC-0011</div>
                        <div className="flexFix">
                            <div className="cgColumnGrid">
                                <a href="https://www.twitter.com/Believe_NewYork" className="linkToBlack"><i className="fa-brands fa-square-twitter fa-2xl iconPad"></i></a>
                                <a href="https://www.instagram.com/believeny" className="linkToBlack"><i className="fa-brands fa-square-instagram fa-2xl iconPad"></i></a>
                                <a href="https://www.youtube.com/channel/UCbz9owENALBUb8O6NrFv7oQ" className="linkToBlack"><i className="fa-brands fa-square-youtube fa-2xl iconPad"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="emailGrid">
                        <input placeholder="First and last name" type="email" className="fName styleEmGrid" onChange={updateName} value={name}/>
                        <input placeholder="Phone #" className="fPhone styleEmGrid" onChange={updatePhone} value={phone}/>
                        <input placeholder="Email" className="fEmail styleEmGrid" onChange={updateEmail} value={email}/>
                        <input placeholder="Subject" className="fSubject styleEmGrid" onChange={updateSubject} value={subject}/>
                        <input placeholder="Best callback time" className="callback styleEmGrid" onChange={updateTime} value={time}/>
                        <textarea placeholder="Tell us what's going on..." type="big" className="bigTextArea" onChange={updateText} value={text}/>
                        
                        {/* <div className="placeholderCaptcha">PLACEHOLDER CAPTCHA</div> */}
                        <div className="simpleFlex getHelpButton">
                            <div className="submitButton2" onClick={() => submitEmail()}>Get Help</div>
                        </div>
                        
                    </div>
                    <div id="fontawesomeIconStorage">
                        <img src={facebook}></img>
                        <img src={twitter}></img>
                        <img src={instagram}></img>
                    </div>
                        {/* <form method="POST" action="form.php" id="contact-form">
                        <h2>Contact us</h2>
                        <p><label>First Name:</label> <input name="name" type="text" /></p>
                        <p><label>Email Address:</label> <input name="email" type="text" /></p>
                        <p><label>Message:</label>  <textarea name="message"></textarea> </p>
                        <p><input type="submit" value="Send"/></p>
                    </form> */}

                </div>
            </div>
        </div>
    )
    
}

export default getHelp;