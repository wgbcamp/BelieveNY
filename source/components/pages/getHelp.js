import React, { useRef, useState, useEffect } from 'react';
import { getCalApi } from "@calcom/embed-react";
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

import custom from '../../css/main.module.css';

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
                    <div className="openSpaceBanner padTop80 pb-5 whiteText centerText">
                        <b className="size36Font">Get Help Initial Intake</b>
                        <div className="simpleFlex">
                            <div className="padTop20 padBottom40 size18Font max850">Speak with one of our trained Client Advocates that will help your situation by connecting you to referrals and ensuring you achieve your goals in any area of need!</div>
                        </div>
                    </div>
                    <div className="simpleFlex">
                        <div className="hereForYouGrid max1090">
                            {/* <div className="simpleFlex hereForYouInner centerText">
                                <b className="size42Font padTop40 center1200 smallText500">We are here for you.</b>
                                <div className="size18Font padBottom201200 smallerText500">We are here to listen and help you through your next steps.</div>

                            </div> */}
                            <div className={`simpleFlex center1200 verticalAlign `}>
                                <Container>
                                    <Row>
                                        <Col className="text-center padTop80">
                                            {/* <div type="button" data-cal-namespace="intake" data-cal-link="believeny/intake" data-cal-config='{"layout":"month_view","theme":"light"}'
                                            className={`btn btn-dark mt-4 mb-5 mx-1 rounded-5 fw-bold w-100 ${custom.scheduleApp}`} onClick={calcom()}>SCHEDULE APPOINTMENT</div> */}
                                            Thank you for your interest in our services! At this time, we are not accepting new clients until June 30, 2025 as we are updating our programs based on community feedback to better serve you. If you'd like to be added to our waitlist, please email us at <a href="mailto:gethelp@believeny.org" className={custom.emailLink}>gethelp@believeny.org</a> and we'll reach out to you after June 30 with next steps! Thanks again and talk soon!
                                        </Col>
                                    </Row>
                                </Container>
                                
                            </div>
                        </div>
                    </div>
                    <div className='openSpaceDesc padBottom80 marginTop40'>
                        <div className="centerText size42Font padTop40 padBottom40">
                            <b>Learn about Get Help</b>
                        </div>
                            <Container>
                                <Row className="mt-4">
                                    <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                        I need help. How does BNY support clients?
                                    </Col>
                                    <Col className='fw-semibold'>
                                        <Row>
                                            <Col>
                                            The best thing about BNY (in our opinion!) is that we aim to provide ongoing, personalized support to each person who reaches out to us. We are here to listen to your needs and goals, and collaborate with you to create a plan for support and achieving those goals through resource referrals, advocacy, and research. When you first connect with BNY, you will be matched with a volunteer Client Advocate, who will be your continuous point of contact during your time working with us.
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                Some things we have supported clients with in the past include affordable housing, food security, family care, access to other necessary resources, medical and mental healthcare, domestic violence safety and relocation, legal services, continuing education, and job searching.
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mt-5 pt-3">
                                    <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                        What can I expect from working with a BNY Client Advocate?
                                    </Col>
                                    <Col className='fw-semibold'>
                                        <Row>
                                            <Col>
                                                A Client Advocate is our term for a volunteer who works with people interested in support. Client Advocates work weekly shifts, where they have dedicated time to meet with and do research on behalf of their clients. Because our clients usually are working with one Advocate throughout their time with BNY, you can be confident that your Advocate will be familiar with you and your situation on a personal level, and be invested in your success.
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                After you have completed an initial intake session and been matched with a Client Advocate, that person will get to work drafting a plan for support—we call this a Believe Plan, and although your Advocate will do the work of filling it out, it is also your document to edit and change as you see fit. You will also agree on a regular meeting time with your Client Advocate, where you can check in, share updates about how goals are progressing, and identify barriers in the way of getting what you need. Most clients start out meeting with their Advocates once a week.
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                As an important note: Our Advocates are volunteers, and while they may not always be immediately available, they will inform you of their shifts and be present during your regular meeting times. We have the most success when these meetings occur weekly. These times can be adjusted with your needs. Meeting times will be scheduled during the hours of Mon-Fri 9am-9pm and Sat-Sun 9-5pm EST. In addition, each of our Advocates are comprehensively trained in the same manner, and have a background in the social services/mental health care field. Each of our Advocates is fully equipped to assist you with your needs. 
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mt-5 pt-3">
                                    <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                        What is The Open Space? Can I use Get Help and The Open Space at the same time?
                                    </Col>
                                    <Col className='fw-semibold'>
                                        <Row>
                                            <Col>
                                                The Open Space is our free peer support line, where you can connect with a trained Client Advocate to discuss anything that might be on your mind. You can talk about things that have been difficult, vent your frustrations, or process something tough with a kind listening ear on the other end. The Open Space is not therapy, so we are not able to diagnose, treat, or provide support for any psychiatric disorder or illness, and we can’t prescribe any medication. What we can do is be present for you if you feel like you need someone to talk to, for however long you need us. You are not alone and you don't have to be with us. 
                                            </Col>
                                        </Row>
                                        <Row className="mt-4">
                                            <Col>
                                                <div className={custom.unsetPadding}>
                                                    You are absolutely welcome to use Get Help and The Open Space services at the same time; part of achieving your goals might be to have some time to talk and process. However, your Open Space Sessions may not be with the same Client Advocate that you are working with through Get Help, depending on what time you book them for and your specific needs. <a href="/theopenspace" className={custom.iconColor}>You can book your first session here</a> OR if you are already working with one of our Client Advocates, you can ask them about adding Open Space Sessions to your Believe Plan.
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mt-5 pt-3">
                                    <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                        Are BNY's services free of charge? 
                                    </Col>
                                    <Col className='fw-semibold'>
                                        <Row>
                                            <Col>
                                                Yes! We are a nonprofit, and our services are provided completely free of charge. 
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="mt-5 pt-3">
                                    <Col className={`${custom.categoryFont} mb-5`} xs={12} lg={6}>
                                        Where should I go if I have questions about BNY services or want to work with you?
                                    </Col>
                                    <Col className='fw-semibold'>
                                        <Row>
                                            <Col>
                                                <div className={custom.unsetPadding}>
                                                    If you or someone you know is interested in working with us, or if you have any questions about our services, you can reach out to <a href="mailto:gethelp@believeny.org" className={custom.iconColor}>gethelp@believeny.org</a>. We look forward to Believing in you!
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