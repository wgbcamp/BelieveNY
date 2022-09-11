import React from 'react'

const donate = () => {

    return(
        <div className="simpleFlex padTop80">
            <div className='maxWidth width80Per'>
                <div className="financialPlan centerText">
                    <div className="simpleTitle">OUR FINANCIAL PLAN</div>

                    <div className='padBottom40 size22Font'>Your support goes a long way!</div>
                    <div className='padBottom40 size22Font'>100% of of every donation goes towards:</div>
                    <div className="simpleFlex">
                        <ol className="fpGrid size18Font width80Per leftText">
                            <li>Maintaining BNY's phone and e-mail services, by keeping the website and email/phone line running and bills paid!</li>
                            <li>Maintaining our training course to train more Advocates and Counselors to reach more people in need.</li>
                            <li>Insurance for our Advocates and Counselors. Our Advocates and Counselors frequently interact with inliiduals who are in an emotional place. Unfortunately these situations can be difficult and dangerous in some circumstances. We aim to protect every one of the amazing volunteers that makes Believe New York's mission possible.</li>
                            <li>Buying, collecting and delivering items directly to people in need through our Food First Program. </li>
                            <li>Planning and executing community impact projects and events to directly improve and serve people in NYC.</li>
                            <li>Maintaining fundraising and marketing operations to expand our reach!</li>
                            <li>Planning and saving for growth and expansion to help every person in need in NYC and beyond.</li>
                        </ol>
                    </div>
                    <div className="simpleFlex padTop40 size24Font padBottom40">
                        <div className="width80Per">We cannot explain in words how much we appreciate every single one of you. Thank you so much for taking the time to read this page and donate to our organization. We cannot keep doing this work without people supporting us. We are so grateful for the support and it is only motivation to keep going. Thank you for believing in New York and allowing us to continue and help as many people as possible! 
                        </div>
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