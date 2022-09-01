import React from 'react'
import '../css/getHelp.css'

const getHelp = () => {
    return(
        
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                    <div className="simpleTitle centerText">NEED HELP?</div>
                    <div className="size18Font lineHeight30">We are here for you. Email us below and we will respond back via e-mail or phone ASAP or within 24-48 hours for next steps and resources that will help you and your family. Stay close to your phone and check e-mails often. Call for immediate assistance. If it's an emergency please call 911 first.</div>

                    <div className="padding50"></div>
                    <div className="contactGrid">
                        <div className="ghEmail centerText">gethelp@believeny.org</div>
                        <div className='ghPhone centerText'>347-NYC-0011</div>
                        <div className="flexFix">
                            <div className="cgColumnGrid">
                                <i className="fa-brands fa-square-twitter fa-2xl iconPad"></i>
                                <i className="fa-brands fa-square-instagram fa-2xl iconPad"></i>
                                <i className="fa-brands fa-square-youtube fa-2xl iconPad"></i>
                            </div>
                        </div>
                    </div>
                    <div className="emailGrid">
                        <input placeholder="Name" className=""/>
                        <input placeholder="Phone #" className=""/>
                        <input placeholder="Email" className=""/>
                        <input placeholder="Subject" className=""/>
                        <textarea placeholder="Tell us what's going on..." type="big" className=""/>
                        <input placeholder="Best callback time" className=""/>
                        <div className="placeholderCaptcha">PLACEHOLDER CAPTCHA</div>
                        <div className="simpleFlex">
                            <div className="submitButton2">Get Help</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default getHelp;