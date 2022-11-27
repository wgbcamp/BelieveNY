import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import clothing from "../../images/clothing.webp";
import BNYLogoFull from "../../images/BNYLogoFull-02.png";
import paypalLogo from "../../images/paypal-wordmark-color.png";

const donate = () => {

    return(
        <div className="simpleFlex padTop80">
            <div className='maxWidth width80Per simpleFlex'>
                
                <div className="financialPlan">
                <img src={clothing} className="donatePhoto"></img>
                <div className="padLeft30 padRight30">
                    <div className="flexImageLeft">
                        <img src={BNYLogoFull} className="downsizeLogo"></img>
                    </div>
                    <div className="donateFont">Your support goes a long way </div>
                    <div className="supportFont">Donate today to support New Yorkers in Need</div>
                    <div className="donateButtonWidth donateGrid padBottom20">
                        <div className="flexColCenter">
                            <PayPalScriptProvider options={{ "client-id": "AYM37NMZprF4qeHi95IYmuYlcbiUKrZUKuDw5ilfXcgAdeRzXNzyJ0cyzgtp0J45PrXVWjGoqXaxwIlG", currency: "USD", components: "buttons,funding-eligibility", "enable-funding": "card", "enable-funding": "venmo"}}>
                                <div className="width80Per">
                                <PayPalButtons style={{ layout: "horizontal", shape: "pill", height: 55}} fundingSource="venmo" onApprove={function (data, actions){
                                    return actions.order.capture().then(function (){
                                        alert("Thank you for your donation!");
                                    })
                                }} className="deelevate"/>
                                </div>
                            </PayPalScriptProvider>
                        </div>
                        <div className="flexColEnd">
                            <div className="width80Per fixed paypalHeight">
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