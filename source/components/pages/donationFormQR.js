import React from 'react';
import QRcode from "../../images/general/DonationQR.jpg";

const donationFormQR = () => {

    return(
        <div>
            <div className="simpleFlex pt-5 mt-5">
                <div className="maxWidth width80Per">
                    <h2 className='centerText mb-4 mt-4'>Zeffy Donation Form</h2>
                    <div className='simpleFlex'>
                        <img src={QRcode} width="300"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default donationFormQR;