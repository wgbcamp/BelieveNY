import React from 'react'
import clothing from "../images/general/clothing.webp";
import BNYLogoFull from "../images/general/BNYLogoFull-02.png";
import paypalLogo from "../images/general/paypal-wordmark-color.png";
import venmoLogo from "../images/general/venmo.svg";

const donate = () => {
    return(
        <div className="simpleFlex padTop80">
            <div className='maxWidth width80Per simpleFlex'>
                <div className="financialPlan">
                <img src={clothing} className="donatePhoto"></img>
                <div className="padLeft30 padRight30">
                    <div className="simpleFlex">
                        <img src={BNYLogoFull} className="downsizeLogo"></img>
                    </div>
                    <div className="donateFont centerText">Your support goes a long way </div>
                    <div className="supportFont centerText">Donate today to support New Yorkers in Need</div>
                    <div className="simpleFlex">
                        <div className="donateGrid padBottom20">
                            <div className="flexColCenter">
                                <a href="https://account.venmo.com/u/believeny" className="venmoButton">
                                    <img src={venmoLogo}>
                                    </img>
                                </a>
                            </div>

                                <div className=" fixed paypalHeight">
                                    <a href="https://www.paypal.com/donate/?hosted_button_id=GJ7HV5PUBAMQS" className="fixed2">
                                    <img src={paypalLogo} height="26px"></img>
                                    </a>
                                </div>

                        </div>
                    </div>
                    <div className='fpText padTop40'>We cannot explain in words how much we appreciate every single one of you. Thank you so much for taking the time to read this page and donate to our organization. 
                    </div>
                    <br></br>
                    <div className='fpText'>
                    We cannot keep doing this work without people supporting us. We are so grateful for the support and it is only motivation to keep going. Thank you for believing in New York and allowing us to continue and help as many people as possible! 
                    </div>
                    <div className="padBottom80"></div>
                    <div className='fpLink'>
                    <a href="mailto:believenewyork@gmail.com" className="fpLinkText">Question? Click here to email our staff!</a>
                    </div>
                </div>

                    <div className="padBottom40"></div>
                </div>
                
            </div>
        </div>
    )
}

export default donate;