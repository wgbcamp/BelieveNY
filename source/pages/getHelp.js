import React, { useRef, useState, useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

import custom from '../css/home3.module.css';

const getHelp = (props) => {
    function restoreTop(){
        window.scrollTo(0,0);
    }

    function calcom(){
        (async function () {
            const cal = await getCalApi({"namespace":"intake"});
            cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
          })();
    }

    return(
        
        <div>
            <div className="simpleFlex">
                <div className="widen">
                    <div className="openSpaceBanner padBottom70500 padTop80 whiteText centerText">
                        <b className="size36Font">Get Help Initial Intake</b>
                        <div className="simpleFlex">
                            <div className="padTop20 padBottom40 size18Font max850">Speak with one of our trained Client Advocates that will help your situation by connecting you to referrals and ensuring you achieve your goals in any area of need!</div>
                        </div>
                    </div>
                    <div className="simpleFlex">
                        <div className="hereForYouGrid padTop20 max1090">
                            <div className="simpleFlex hereForYouInner centerText">
                                <b className="size42Font padTop40 center1200 smallText500">We are here for you.</b>
                                <div className="size18Font padBottom201200 smallerText500">We are here to listen and help you through your next steps.</div>

                            </div>
                            <div className={`simpleFlex center1200 verticalAlign `}>
                                <Container>
                                    <Row>
                                        <Col className="d-flex justify-content-center">
                                            <button type="button" data-cal-namespace="intake" data-cal-link="believeny/intake" data-cal-config='{"layout":"month_view","theme":"light"}'
                                            className={`btn btn-dark mt-4 mb-5 rounded-5 fw-bold w-100 ${custom.mainButton} ${custom.maxWidth400px} `} onClick={calcom()}>SCHEDULE APPOINTMENT</button>
                                        </Col>
                                    </Row>
                                </Container>
                                
                            </div>
                        </div>
                    </div>
                    <div className='openSpaceDesc padBottom80'>
                        <div className="centerText size42Font padTop40 padBottom40">
                            <b>Learn about Get Help</b>
                        </div>
                            <div className="simpleFlex">
                                <div className="openSpaceWhatIsGrid">
                                    <div className='boldOSTitle alignLeft color1 padTop20'>
                                        Safe place to talk   
                                    </div>
                                    <div className="size18Font OSExplanation lineHeight25 textAlignRight color1 padTop20">
                                        <div>
                                        Ongoing individualized support and resource referrals for housing,  food, medical and mental healthcare, domestic violence safety, legal services, and more
                                        <div className="padTop20"></div>
                                        Sessions can be scheduled for up to 45 minutes and take place over the phone or Google Meet, audio only. Regular sessions are welcome and encouraged!
                                        </div>
                                    </div>
                                    <div className='boldOSTitle alignLeft color2 padTop20'>
                                        Schedule a session with a client advocate
                                    </div>
                                    <div className="size18Font OSExplanation lineHeight25 textAlignRight padTop20 color2">
                                        <div>
                                        Select an available time to schedule a session with one of our trained client advocates. We are trained in active listening, empathy, and compassion and will provide support and resource referrals to help you through during this difficult time.
                                        <div className="padTop20"></div>
                                        Regular check ins with Client Advocates to ensure progress
                                        </div>
                                    </div>
                                    <div className='boldOSTitle alignLeft color1 padTop20'>
                                        Ask us questions
                                    </div>
                                    <div className="size18Font OSExplanation lineHeight25  padBottom40 textAlignRight color1 padTop20">
                                        <div className="">
                                        Any questions about Get Help, please email our administration at <b>admin@believeny.org</b>.
                                        </div>
                                    </div>
                                </div>
                            </div>      
                    </div>   
                </div>
            </div>
        </div>
    )
    
}

export default getHelp;