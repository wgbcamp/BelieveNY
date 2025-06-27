import React, { useRef, useState, useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

import custom from '../../css/main.module.css';

const getHelp = (props) => {
    function restoreTop() {
        window.scrollTo(0, 0);
    }

    function calcom() {
        (async function () {
            const cal = await getCalApi({ "namespace": "intake" });
            cal("ui", { "theme": "light", "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }


    return (

        <div>
            <div>
                <div className="widen">
                    <div className="openSpaceBanner padTop80 pb-3 whiteText centerText">
                        <b className="size36Font">GetHelp Here!</b>
                        <div className="simpleFlex">
                            <div className="padTop20 padBottom40 size18Font max850">Speak with a trained Client Advocate who will support you in overcoming your concerns across any area of need. We are here for you!</div>
                        </div>
                        <Container>
                            <Row>
                                <Col className='d-flex justify-content-center'>
                                    <div type="button" data-cal-namespace="intake" data-cal-link="believeny/intake" data-cal-config='{"layout":"month_view","theme":"light"}' Add commentMore actions
                                        className={`btn btn-dark mt-4 mb-5 mx-1 rounded-5 fw-bold w-100 ${custom.scheduleApp}`} onClick={calcom()}>Schedule Appointment</div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    <div className="simpleFlex">
                        <div>
                            <div className={`simpleFlex center1200 verticalAlign`}>
                            </div>
                        </div>
                    </div>
                    <div className='openSpaceDesc padBottom80'>
                        <div className="centerText size42Font padTop40 padBottom40">
                            <b>GetHelp with Believe New York</b>
                        </div>
                        <Container>
                            <Row className="mt-4">
                                <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                    How Does BNY Support Clients?
                                </Col>
                                <Col className='fw-semibold'>
                                    <Row>
                                        <Col>
                                            The best thing about BNY (in our opinion!) is that we provide <b>ongoing, personalized support</b> to everyone who reaches out, regardless of location, language, situation, background, or identity. We start by listening to your needs, your goals, and your priorities, and work with you to build a plan that helps you move forward.
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            The average time people work with us is 6 months. Although most of our outreach targets the 5 NYC boroughs, we do not turn people away and will work with anyone who needs support. We can also accommodate numerous language preferences, most commonly English, Spanish, and Mandarin.
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            When you first connect with BNY, you'll complete an <b>initial intake (about 30-60 minutes)</b> and be matched with a <b>volunteer Client Advocate</b> — your consistent point of contact throughout your time with us. As much as we would like to, we cannot guarantee a specific Advocate background, gender, or identity due to availability. However, we do <b>everything in our power</b> to match you with someone you are comfortable with who can best support you.
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <u>Our support has helped clients access:</u>
                                        <ul>
                                            <li>Affordable housing throughout NYC Metro area</li>
                                            <li>Food security programs like SNAP and WIC</li>
                                            <li>Family and childcare support</li>
                                            <li>Medical and mental healthcare and treatment</li>
                                            <li>Support for chronic illness</li>
                                            <li>Domestic violence safety and relocation</li>
                                            <li>Legal services</li>
                                            <li>Continuing education</li>
                                            <li>Job search and employment resources</li>
                                            <li>SSI/SSDI</li>
                                            <li>And so much more! </li>
                                        </ul>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-5 pt-3">
                                <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                    What Can I Expect From a Client Advocate?
                                </Col>
                                <Col className='fw-semibold'>
                                    <Row>
                                        <Col>
                                            Client Advocates are our trained volunteers who work directly with people seeking support. They dedicate regular weekly shifts to meet with clients and research resources and solutions on their behalf. Most of our Client Advocates are students in clinical/counseling psychology, social services, and other help-seeking professions.
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            Once you're matched with a Client Advocate, they’ll help create and manage your personalized <b>Believe Plan</b>, a living document outlining your goals, support needs, and action steps for each session. Your Advocate will take the lead on creating and managing it, but it's your plan to guide and update as you grow and overcome your concerns.
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            You'll also schedule a regular meeting time with your Advocate (once a week for 30 minutes to start) to check in, problem-solve, and track progress.
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <b>Meeting hours:</b>
                                            <ul className={custom.ulNoBullet}>
                                                <li>Monday–Friday, 9am–9pm EST</li>
                                                <li>Saturday–Sunday, 9am–5pm EST</li>
                                            </ul>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <b>Please note:</b> All of our Advocates are trained in the same comprehensive service model and come from backgrounds in social services or mental health. While they are volunteers and may not be available at all times, they are fully committed to your growth and will keep you informed of their schedule.
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-5 pt-3">
                                <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                    Fast Track Option
                                </Col>
                                <Col className='fw-semibold'>
                                    <Row>
                                        <Col>
                                            Need quick support but not ongoing sessions?
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <div>
                                                After your intake session, you can choose our <b>Fast Track</b> option. Instead of ongoing meetings, your Client Advocate will research and send you a one-time personalized referral and resource package within approximately <b>1-3 business days</b> (depending on when the intake occurs).
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <div>
                                                We tailor each Fast Track package specifically to your situation, taking the time to <b>verify availability and accuracy</b> based on your needs and local services. Because of this, that turnaround time may vary slightly depending on provider hours and resource accessibility. You are welcome to enroll in other BNY services if you choose at a later time.
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-5 pt-3">
                                <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                    Can I Use The Open Space and GetHelp?
                                </Col>
                                <Col className='fw-semibold'>
                                    <Row>
                                        <Col>
                                            Yes! Many of our clients benefit from using both services.
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <div>
                                                The Open Space is our mental health peer support line — a 100% free, confidential, and anonymous space where you can talk via phone, Google Meet (audio only), or text. It's a judgment-free zone to vent, reflect, or share whatever’s on your mind.
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <div>
                                                If you use both GetHelp and The Open Space, this is called our <b>Hybrid Track</b>. You’re welcome to do both! Just note that your Open Space Sessions may not always be with the same Advocate you’re working with through GetHelp, depending on scheduling and your needs. Ask your Advocate to add it to your Believe Plan if you are interested in the Hybrid Track!
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-5 pt-3">
                                <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                    Are BNY’s Services Free?
                                </Col>
                                <Col className='fw-semibold'>
                                    <Row>
                                        <Col>
                                            Yes! We are a nonprofit, and <b>all services are 100% free of charge</b>.
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-5 pt-3">
                                <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                    Disclaimer!
                                </Col>
                                <Col className='fw-semibold'>
                                    <Row>
                                        <Col>
                                            <div>
                                                GetHelp is not a crisis service or a licensed clinical treatment program. While our trained Client Advocates are here to support you, <b><u>we do not provide therapy, diagnosis, or emergency intervention</u></b>. All information shared is kept fully confidential within our organization and used solely to support your goals. Information is only shared to support the referral process as needed.
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <div>
                                                If you are in crisis, experiencing suicidal thoughts, or in immediate danger, please contact <b>911</b> or the <b>988 Suicide & Crisis Lifeline (call or text 988)</b> for immediate support.
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row className="mt-4">
                                        <Col>
                                            <div>
                                                Lastly, we are committed to providing a safe and respectful environment for all. As such, <b><u>we do not tolerate hostile, aggressive, abusive, or inappropriate behavior</u></b> toward our volunteers or staff. If such behavior occurs, we reserve the right to discontinue services at our discretion.
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mt-5 pt-3">
                                <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                    Have Questions or Want to Work With Us?
                                </Col>
                                <Col className='fw-semibold'>
                                    <Row>
                                        <Col>
                                            <div>
                                                For questions, referrals, or to work with us, please email us at <u><a href="gethelp@believeny.org" className={custom.emailLink}>gethelp@believeny.org</a></u> or book an initial intake <a href="https://cal.com/believeny/intake" className={custom.emailLink}>here!</a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="mt-4" >
                                                We can’t wait to <b>believe in you!</b>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>

                    </div>
                </div>
            </div>
        </div>
    )

}

export default getHelp;