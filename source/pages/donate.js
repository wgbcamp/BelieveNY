import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import folksAndFood from "../../images/folksAndFood.webp";

const donate = () => {

    return(
        <div className="simpleFlex padTop80">
            <div className='maxWidth width80Per'>
                
                <div className="financialPlan centerText">
                <div className='simpleFlex'>
                    <div className="maxWidth width80Per">
                        <div className="donatePhoto">
                            
                            <div className="donateAlpha">
                                <div className="alphaGrid">
                                            <div className="alphaFlexStart">
                                                <div className="donateFont">Your support goes a long way</div>
                                            </div>
                                        <PayPalScriptProvider options={{ "client-id": "AYM37NMZprF4qeHi95IYmuYlcbiUKrZUKuDw5ilfXcgAdeRzXNzyJ0cyzgtp0J45PrXVWjGoqXaxwIlG", currency: "USD", components: "buttons,funding-eligibility", "enable-funding": "card", "enable-funding": "venmo"}}>
                                            <div className="width80Per autoMargin">
                                                <PayPalButtons style={{ layout: "horizontal", height: 55 }} fundingSource="paypal" onApprove={function (data, actions){
                                                    return actions.order.capture().then(function (){
                                                        alert("Thank you for your donation!");
                                                    })
                                                }} className="deelevate"/>
                                            </div>
                                            <div className="width80Per autoMargin">
                                            <PayPalButtons style={{ layout: "horizontal", height: 55 }} fundingSource="venmo" onApprove={function (data, actions){
                                                return actions.order.capture().then(function (){
                                                    alert("Thank you for your donation!");
                                                })
                                            }} className="deelevate"/>
                                            </div>
                                        </PayPalScriptProvider>

                                    <div className="alphaFlexEnd">
                                    <div className="donateFont"></div> 
                                    </div>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="padBottom20"></div>
                    <div className="simpleFlex padTop40 size24Font padBottom40 lineHeight35">
                        <div className="width80Per">
                            <div>We cannot explain in words how much we appreciate every single one of you. Thank you so much for taking the time to read this page and donate to our organization. 
                            </div>
                            <br></br>
                            We cannot keep doing this work without people supporting us. We are so grateful for the support and it is only motivation to keep going. Thank you for believing in New York and allowing us to continue and help as many people as possible! 
                        </div>
                    </div>
                    <div className="padBottom20"></div>
                    <div className="donateButtonContainer">
                    </div>
                    <div className="padBottom40"></div>
                    <a href="mailto:believenewyork@gmail.com" className="styleLink size26Font">Question? Click here to email our staff!</a>
                    <div className="padBottom40"></div>
                </div>
                
            </div>
        </div>
    )
}

export default donate;