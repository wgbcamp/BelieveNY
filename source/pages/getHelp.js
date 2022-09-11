import React, {useEffect} from 'react'
import '../css/getHelp.css'

const getHelp = () => {

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    return(
        
        <div>
            <div className="simpleFlex down">
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
                        <input placeholder="Name" type="email" className="fName styleEmGrid"/>
                        <input placeholder="Phone #" className="fPhone styleEmGrid"/>
                        <input placeholder="Email" className="fEmail styleEmGrid"/>
                        <input placeholder="Subject" className="fSubject styleEmGrid"/>
                        <input placeholder="Best callback time" className="callback styleEmGrid"/>
                        <textarea placeholder="Tell us what's going on..." type="big" className="bigTextArea"/>
                        
                        <div className="placeholderCaptcha">PLACEHOLDER CAPTCHA</div>
                        <div className="simpleFlex getHelpButton">
                            <div className="submitButton2">Get Help</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default getHelp;