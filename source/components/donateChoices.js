import React from 'react'
import paypalLogo from "../images/general/paypal-wordmark-color.png";
import venmoLogo from "../images/general/venmo.svg";
import cashapp from "../images/general/cashapp.png"

const donateChoices = (props) => {

    function revertFixation(){
        document.body.style.position = "static";
        props.updateDim(false);
    }

    return(
        <div>
            <div className={`${props.dim2 === true ? "dChoicesGrid" : "hideCB"}`}>
                    <div className='simpleFlex'>
                        <div className="dChoicesWidth fixed paypalHeight">
                            <a href="https://www.paypal.com/donate/?hosted_button_id=GJ7HV5PUBAMQS" className="fixed2">
                            <img src={paypalLogo} height="26px"></img>
                            </a>
                        </div>
                    </div>
                    <div className='simpleFlex'>
                        <div className="dChoicesWidth">
                            <a href="https://account.venmo.com/u/believeny" className="venmoButton">
                            <img src={venmoLogo}></img>
                            </a>
                        </div>
                    </div>
                    <div className='simpleFlex'>
                        <div className="dChoicesWidth">
                            <a href="https://cash.app/$believeny" className="cashappButton">
                            <img src={cashapp}></img>
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default donateChoices;