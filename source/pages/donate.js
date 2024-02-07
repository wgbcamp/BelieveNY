import React from 'react'
import clothing from "../images/general/clothing.webp";
import BNYLogoFull from "../images/general/BNYLogoFull-02.png";
import paypalLogo from "../images/general/paypal-wordmark-color.png";
import venmoLogo from "../images/general/venmo.svg";

const donate = (props) => {
    return(
        <div className="simpleFlex padTop40">
            <div className='maxWidth donateBox  simpleFlex'>
                <div className="financialPlan">
                <div className="padLeft30 padRight30">
                    <div className="simpleFlex">
                        <img src={BNYLogoFull} className="downsizeLogo padTop20"></img>
                    </div>
                    <div className="supportGrid padTop20">
                        <div className="donateFont centerText">Your support goes a long way </div>
                        <div className="supportFont centerText">Donate today to support New Yorkers in Need</div>
                    </div>
                    <div className="giveGrid">
                        <div></div>
                        <div className='giveBig' onClick={() => props.showDonateChoices()}>Give Once <i class="fa-solid fa-arrow-right moveArrow"></i></div>  
                        <div>End the cycle of poverty, violence, and injustice, in NYC with Believe New York!</div>
                        <div></div>
                        <a href="/donationform" className='giveBig'>Give Ongoing <i class="fa-solid fa-arrow-right moveArrow"></i></a>
                        <div>Your ongoing support will ensure our small organization can grow and save more lives. Give ongoing today!</div>

                    </div>
                    <div className="giveNote">
                        <b>Note from Believe New York</b>
                        <p>
                        For the past three years, our grassroots 501(c)(3) nonprofit has been dedicated to serving those in need and making a lasting difference in their lives. Since our founding, we have tirelessly worked to support individuals facing extreme poverty, domestic violence, mental illness, and various other hardships. Through our personalized approach, we create individualized plans and meet our clients where they are, fighting to break the cycle of poverty, violence, and inequality.
                        </p>
                        <p>
                        Our results speak for themselves! Over two-thirds of our clients have experienced significant improvements in their hardships thanks to our commitment and hard work. And we don't stop there! We also organize regular community events to directly impact and uplift those in need. To date we have severed hundreds of hot meals, warm clothing, and essential items to individuals and families who need it the most. We do all this with your generous support and contributions. 
                        </p>
                        <p>
                        We are not a large organization. Your donation WILL help us continue our vital work and make an even greater impact on the lives of those who need it most. We aim to create a brighter future for all. Donate today and be a part of this change! Thank you from all of us at Believe New York. 
                        </p>
                    </div>
                    {/* <div className="supportGrid">
                        <div className="donateFont centerText">Your support goes a long way </div>
                        <div className="supportFont centerText">Donate today to support New Yorkers in Need</div>
                        <div className="simpleFlex donateElement">
                            <div className="donateGrid padBottom20">
                                <div className=" fixed paypalHeight">
                                    <a href="https://www.paypal.com/donate/?hosted_button_id=GJ7HV5PUBAMQS" className="fixed2">
                                    <img src={paypalLogo} height="26px"></img>
                                    </a>
                                </div>
                                <div className="flexColCenter">
                                    <a href="https://account.venmo.com/u/believeny" className="venmoButton">
                                        <img src={venmoLogo}>
                                        </img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    {/* <div className='fpText padTop40'>We cannot explain in words how much we appreciate every single one of you. Thank you so much for taking the time to read this page and donate to our organization. 
                    </div>
                    <br></br>
                    <div className='fpText'>
                    We cannot keep doing this work without people supporting us. We are so grateful for the support and it is only motivation to keep going. Thank you for believing in New York and allowing us to continue and help as many people as possible! 
                    </div> */}
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