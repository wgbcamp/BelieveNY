import React from 'react'
import { getCalApi } from "@calcom/embed-react";
import custom from '../../css/main.module.css';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

const theOpenSpace = (props) => {

    function restoreTop(){
        window.scrollTo(0,0);
    }

    function calcom(){
        (async function () {
            const cal = await getCalApi({"namespace":"openspace"});
            cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"month_view"});
          })();
    }

    return(
        <div>
            <div className="simpleFlex">
                <div className="widen">
                    <div className="pt-5 text-center fs-1 pb-3">Disclaimer</div>
                    <div className="d-flex justify-content-center">
                        <div className={`px-5 pb-4 fs-6 ${custom.maxWidth1000px}`}>
                            Although we are fully trained and supported by professionals in the mental health field, The Open Space is not a substitute for licensed mental health therapy or professional counseling services. Additionally, we are not an emergency service and cannot provide immediate crisis intervention. If you are experiencing an emergency, please call 911 or contact a crisis hotline such as the Suicide & Crisis Lifeline by dialing 988. However, if you are interested in accessing therapy or other mental health resources, our program, <a href="/getHelp" className={`${custom.redecorate}`}>GetHelp</a>, can assist you in finding the support you need. Please let us know, and we'll work with you to connect to appropriate licensed services.
                        </div>
                    </div>
                    <div className="openSpaceBanner padBottom70500 padTop80 whiteText centerText">
                        <b className="size36Font">Your place for active listening and support.</b>
                        <div className="simpleFlex">
                            <div className="padTop20 padBottom40 size18Font max850">Are you living with loneliness? Sadness? Anxiety? Are you stressed about school, work or difficult relationships? Are you struggling with addictions, violence, or losses in your life?</div>
                        </div>
                        
                    </div>

                    <div className="simpleFlex">
                        <div className="hereForYouGrid padTop20 max1090">
                            <div className="simpleFlex hereForYouInner centerText">
                                {/* <b className="size42Font padTop40 center1200 smallText500">We are here for you.</b>
                                <div className="size18Font padBottom201200 smallerText500">We are here to listen and help you through your next steps.</div> */}

                            </div>
                            <div className={`simpleFlex center1200 verticalAlign `}>
                                <Container>
                                    <Row>
                                    <div className="d-flex justify-content-center align-items-center padTop20" style={{height: "80px", color: "rgb(255,59,48)"}}>
                                            <i class="fa-solid fa-circle-exclamation fa-2xl"></i>
                                        </div>
                                        <Col className=" text-center padTop40 padBottom40">
                                            {/* <div data-cal-namespace="openspace" data-cal-link="believeny/openspace" data-cal-config='{"layout":"month_view","theme":"light"}'
                                            className={`btn btn-dark mt-5 mb-5 mx-0 rounded-5 fw-bold ${custom.scheduleApp}`} onClick={calcom()}>Schedule Appointment</div> */}
                                            Thank you for your interest in our services! At this time, we are not accepting new clients until June 30, 2025 as we are updating our programs based on community feedback to better serve you. If you'd like to be added to our waitlist, please email us at <a href="mailto:gethelp@believeny.org" className={custom.emailLink}>gethelp@believeny.org</a> and we'll reach out to you after June 30 with next steps! Thanks again and talk soon!
                                        </Col>
                                    </Row>
                                </Container>
                                
                            </div>
                        </div>
                    </div>
                    <div className='openSpaceDesc padBottom80'>
                        <div className="centerText size42Font padTop40 padBottom40">
                            <b>What is The Open Space?</b>
                        </div>
                            <div className="simpleFlex">
                                <div className="openSpaceWhatIsGrid">
                                    <div className='boldOSTitle alignLeft color1 padTop20'>
                                        Safe place to talk   
                                    </div>
                                    <div className="size18Font OSExplanation lineHeight25 textAlignRight color1 padTop20">
                                        <div>
                                        100% free of charge and confidential, the Open Space offers a safe and nonjudgemental place to talk about what you are going through while remaining anonymous.
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
                                        Our active listeners will not question, criticize, interrupt, nor judge as you tell us about your situation. We are here to help get you through it.
                                        </div>
                                    </div>
                                    <div className='boldOSTitle alignLeft color1 padTop20'>
                                        Ask us questions
                                    </div>
                                    <div className="size18Font OSExplanation lineHeight25  padBottom40 textAlignRight color1 padTop20">
                                        <div className="">
                                        Any questions about The Open Space, please email our administration at <b>getHelp@believeny.org</b>.
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

export default theOpenSpace;