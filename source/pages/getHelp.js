import React, {useEffect} from 'react'
import '../css/getHelp.css'
import facebook from '../images/facebook-square-brands.png'
import twitter from '../images/twitter-square-brands.png'
import instagram from '../images/instagram-square-brands.png'

const getHelp = () => {

    // const constraints = {
    //     name: {
    //         presence: { allowEmpty: false }
    //     },
    //     email: {
    //         presence: { allowEmpty: false },
    //         email: true
    //     },
    //     message: {
    //         presence: { allowEmpty: false }
    //     }
    // };

    // useEffect(() => {

    //     const form = document.getElementById('contact-form');

    //     form.addEventListener('submit', function (event) {
    //         const formValues = {
    //             name: form.elements.name.value,
    //             email: form.elements.email.value,
    //             message: form.elements.message.value
    //         };
    //         const errors = validate(formValues, constraints);
    //         if (errors) {
    //           e.preventDefault();
    //           const errorMessage = Object
    //               .values(errors)
    //               .map(function (fieldValues) { return fieldValues.join(', ')})
    //               .join("\n");
    //           alert(errorMessage);
    //         }
    //       }, false);
    // }, []);

    function test(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            value: "value"
        }));
    }

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
                            <div className="submitButton2" onClick={() => test()}>Get Help</div>
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