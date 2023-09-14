import React, {useState, useEffect} from 'react';
import StripeLogo from "../images/general/poweredByStripe.svg";
import PaypalLogo from "../images/general/paypalLogo.jpg";
import VisaLogo from "../images/general/visaLogo.png";
import MastercardLogo from "../images/general/MastercardLogo.png";
import AMEXLogo from "../images/general/amexLogo.svg";
import DiscoverLogo from "../images/general/discoverLogo.png";


const donateForm = () => {

    useEffect(() => {
        }, [])

    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
                <div className="donationParametersGrid">
                  <div className="dFbigTitle">Your Donation</div>
                  <div className="dFtitle">Frequency</div>
                  <div className="simpleFlex">
                    <div className="dFbuttonGrid">
                      <div className="dFbutton">One Time</div>
                      <div className="dFbutton">Monthly</div>
                    </div>
                  </div>
                  <div className="dFtitle">Amount</div>
                  <div className="simpleFlex">
                    <div className="dFbuttonGridNumbers">
                      <div className="dFbutton">$5</div>
                      <div className="dFbutton">$10</div>
                      <div className="dFbutton">$20</div>
                      <div className="dFbutton">$50</div>
                      <div className="dFbutton">$100</div>
                    </div>
                  </div>
                </div>
                <div className="donationFormGrid">
                  <div className='dFbigTitle'>Payment Methods</div>
                  <div className="simpleFlex">
                    <div className="dFbuttonPayMethodGrid">
                      <div className='dFbuttonPayMethod'>
                        <div className="ccAndStripeGrid">
                          <div className="ccGrid">
                            <div className='ccFlex'>
                              <img className="logoResize3" src={VisaLogo}></img>
                            </div>
                            <div className='ccFlex'>
                              <img className="logoResize3" src={MastercardLogo}></img>
                            </div>
                            <div className='ccFlex'>
                              <img className="logoResize3" src={AMEXLogo}></img>
                            </div>
                            <div className='ccFlex'>
                              <img className="logoResize3" src={DiscoverLogo}></img>
                            </div>
                          </div>
                          <div className="logoFit">
                            <img className="logoResize4" src={StripeLogo}></img>
                          </div>
                        </div>
                          <div className="dFbuttonPayMethodDesc">Credit Card</div>
                        </div>
                      <div className='dFbuttonPayMethod'>
                          <div className="logoFit">
                            <img className="logoResize2" src={PaypalLogo}></img>
                          </div>
                          <div className="dFbuttonPayMethodDesc">Paypal</div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default donateForm;