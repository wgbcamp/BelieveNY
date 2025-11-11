import React from 'react'
import { getCalApi } from "@calcom/embed-react";
import custom from '../../css/main.module.css';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

const theOpenSpace = (props) => {

    function restoreTop() {
        window.scrollTo(0, 0);
    }

    function calcom() {
        (async function () {
            const cal = await getCalApi({ "namespace": "openspace" });
            cal("ui", { "theme": "light", "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }

    return (
        <div>
            <div className="simpleFlex">
                <div className="widen">
                    <div className="d-flex justify-content-center">
   
                    </div>
                    <div className="openSpaceBanner padBottom70500 padTop80 whiteText centerText">
                        <b className="size36Font">Your place for active listening and support.</b>
                        <div className="simpleFlex">
                            <div className="padTop20 padBottom40 size18Font max850">Are you living with loneliness? Sadness? Anxiety? Are you stressed about school, work or difficult relationships? Are you struggling with addictions, violence, or losses in your life?</div>
                        </div>
                    </div>

                    {/* <div className="simpleFlex">
                        <div className="padTop20 max1090">
                            <div className="simpleFlex hereForYouInner centerText">
                                <b className="size42Font padTop40 center1200 smallText500">We are here for you.</b>
                                <div className="size18Font padBottom201200 smallerText500">We are here to listen and help you through your next steps.</div>
                            </div>
                            <div className={`simpleFlex center1200 verticalAlign `}>
                                <Container>
                                    <Row>
                                        <Col className="text-center">
                                            <div data-cal-namespace="openspace" data-cal-link="believeny/openspace" data-cal-config='{"layout":"month_view","theme":"light"}'
                                                className={`btn btn-dark mt-4 mb-5 mx-0 rounded-5 fw-bold ${custom.scheduleApp}`} onClick={calcom()}>Schedule Appointment</div>
                                        </Col>
                                    </Row>
                                </Container>

                            </div>
                        </div>
                    </div> */}

                        <div className="flex justify-center pt-40 pb-40 px-25">
                            <div className="pb-30 max-w-800">
                                <div className="padTop20 size18Font max850">
                                    Thank you for your interest in 
                                    working with us! Due to high demand and upcoming program updates to better serve our 
                                    community, we are not accepting new clients at this time. We hope to be able to accept 
                                    more new clients in the near future.
                                </div>
                                <div className="padTop20 size18Font max850">
                                    If you'd like to join our waitlist, please email our team at <b>gethelp@believeny.org</b> with 
                                    your name and phone number.
                                </div>
                                <div className="padTop20 size18Font max850">
                                    Thank you for your patience and understanding! 
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
                                    A Safe Place to Talk – 100% Free, Confidential, and Judgment-Free
                                </div>
                                <div className="size18Font OSExplanation lineHeight25  color1 padTop20">
                                    <div>
                                        The Open Space is our free and completely confidential space for anyone who needs to talk. Whether you're feeling overwhelmed, isolated, or just need someone to listen, we’re here. Sessions are anonymous, nonjudgmental, and available via phone, Google Meet (audio only), or text message. Most people have ongoing sessions for about 3-6 months, but you are welcome to book only one session if you prefer.
                                        <div className="padTop20"></div>
                                        <b>Please note:</b> A 30-60 minute intake session is <b>required</b> for these services, which will take <u>before</u> your first Open Space Session. During the intake, you may choose to use The Open Space only Track, or be enrolled in both The Open Space and <u className={custom.emailLink}>GetHelp</u> (Hybrid Track), depending on your needs and goals. It's totally up to you! You can also enroll in our other services at a later time, just let your Advocate know!
                                    </div>
                                </div>
                                <div className='boldOSTitle alignLeft color2 padTop20'>
                                    Schedule Sessions with a Client Advocate
                                </div>
                                <div className="size18Font OSExplanation lineHeight25  padTop20 color2">
                                    <div>
                                        Our trained volunteer Client Advocates are here to listen, support, and connect you with resources you need. We are trained in active listening, empathy, and compassion, and committed to providing a safe space where you feel heard and supported.
                                        <div className="padTop20"></div>
                                        Sessions can last up to 45 minutes and are available via phone, Google Meet (audio only), or text. You decide how you want to connect! During your session, we will never judge, interrupt, or pressure you. This is your space — we’re simply here to walk with you through it.
                                    </div>
                                </div>
                                <div className='boldOSTitle alignLeft color1 padTop20'>
                                    Disclaimer!
                                </div>
                                <div className="size18Font OSExplanation lineHeight25  padBottom40  color1 padTop20">
                                    <div className="">
                                        Although we are fully trained and supported by professionals in the mental health and social services field, The Open Space is not a substitute for licensed mental health therapy or professional counseling services. Additionally, <b><u>we are not an emergency service and cannot provide immediate crisis intervention</u></b>. If you are in crisis, experiencing suicidal thoughts, or in immediate danger, please contact <b>911</b> or the <b>988 Suicide & Crisis Lifeline (call or text 988)</b> for immediate support.
                                        <div className="padTop20"></div>
                                        However, if you are interested in accessing therapy or other mental health resources, our service option, <u>GetHelp</u>, can assist you in finding the support you need. We encourage you to choose the <b>Hybrid Track</b> during your intake to utilize both The Open Space and GetHelp services. Please let us know, and we'll work with you to connect to appropriate licensed services!
                                        <div className="padTop20"></div>
                                        Lastly, we are committed to providing a safe and respectful environment for all. As such, <b><u>we do not tolerate hostile, aggressive, abusive, or inappropriate behavior</u></b> toward our volunteers or staff. If such behavior occurs, we reserve the right to discontinue services at our discretion.
                                    </div>
                                </div>
                                <div className='boldOSTitle alignLeft color1 padTop20'>
                                    Have Questions or Want to Work With Us?
                                </div>
                                {/* <div className="size18Font OSExplanation lineHeight25  padBottom40  color1 padTop20">
                                    <div className="">
                                        For questions or to work with us, please email us at <u><a href="mailto:gethelp@believeny.org" className={custom.emailLink}>gethelp@believeny.org</a></u> or book your first session <a href="https://cal.com/believeny/openspace" className={custom.emailLink}>here!</a>    
                                    </div>
                                </div> */}
                                <div className="size18Font OSExplanation lineHeight25  padBottom40  color1 padTop20">
                                    <div className="">
                                        For questions or to work with us, please email us at <u><a href="mailto:gethelp@believeny.org" className={custom.emailLink}>gethelp@believeny.org</a></u>.
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