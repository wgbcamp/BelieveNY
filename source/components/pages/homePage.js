import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

import custom from '../../css/main.module.css';

import donationPhoto from "../../images/homepage/Homepage.PNG";
import imposter from "../../images/homepage/IMG_4750.jpg";
import thanksgiving from "../../images/events/thanksgiving2024/IMG_9487.jpeg"
import communityAdvocates from '../../images/homepage/CommunityAdvocates.jpg';
import handingOutClothes from '../../images/homepage/Handingoutclothes.jpg';
import trio from '../../images/homepage/Trio.jpg';
import donuts from '../../images/homepage/donuts.jpg';
import bigGroup from '../../images/homepage/bigGroup.jpg';
import tableBending from '../../images/homepage/tableBending.jpg';
import servingFood from '../../images/homepage/ServingFood.jpg';
import mentalHealthFair from '../../images/homepage/Mentalhealthfair.jpg';


const newHome3 = () => {

    const testimonials = [
        {quote: "Before Believe New York I needed soap, deodorant, shampoo, and a toothbrush. I lost my job, couldn’t pay my rent, and lost my apartment. I also needed school supplies for all my children. ... Other people should contact Believe so they can get some help like I did. I really want to thank Believe New York for their generosity.", location: "The Bronx"}, 
        {quote: "I say to people who have not contacted Believe New York, do not feel ashamed. We all need help sometimes. They are nice and they do not judge. Believe New York is changing lives.", location: "Queens"},
        {quote: "Believe New York has helped me so much; I was able to talk to them openly. Share things I have not shared with others. They are really awesome.", location: "Brooklyn"},
        {quote: "Because of Believe New York my situation has improved because I have the things that I needed so badly that I could not afford or find on my own. I feel that somebody cares.", location: "Manhattan"},
        {quote: "I would tell anyone in my situation to reach out and look for help. It is out there, all we have to do is never give up. I am glad Believe New York is a nonprofit so they can help a lot more people like me.", location: "Queens"},
        {quote: "No one else was going to help me, but the volunteers at Believe New York finally helped me navigate all the options I had. I still have a long way to go but I could not have gotten treatment without their help.", location: "New Jersey"},
        {quote: "You guys are awesome, I’ve made it known. I wasn’t alone now, you are here. I will always be grateful to Believe New York, will never forget.", location: "Manhattan"},
            ];

    const [currentTestimonial, setCurrTest] = useState(0);

    function handleChange(param) {
        
        if (param === "up") {
            if (currentTestimonial === testimonials.length-1) {
                setCurrTest(0);
            } else {
                setCurrTest(currentTestimonial => currentTestimonial + 1);
            }
        } else {
            if (currentTestimonial === 0) {
                setCurrTest(testimonials.length-1);
            } else {
                setCurrTest(currentTestimonial => currentTestimonial - 1);
            }
        }
    }

    return(
        <div>
            <Col md={12} className=''>
                <div className={`d-flex justify-content-center mb-2`}> 
                    <div className={`mb-5 mt-2 pt-1  ${custom.imageRestrict} ${custom.missionStatementFlex}`}>
                        <div className={`mb-1 mx-4 ${custom.titleStatement}`}>
                            <div>ADVANCING OUR CITY & EMPOWERING NEW YORKERS</div>
                        </div>
                        <div>
                            <Link to="https://givebutter.com/newyorkgiftdrive" 
                                className={`${custom.mainButtonContainer}`}>
                                <button type="button" className={`btn btn-dark mt-4 mb-5 rounded-5 fw-bold ${custom.mainButton}`}>
                                    <div className="d-flex justify-content-center align-items-center">
                                        Donate
                                    </div> 
                                </button>
                            </Link>
                        </div>
                    </div>  
                </div>
            </Col>
            <Container id="MISSION STATEMENT">
                <Row>
                    <Col>
                        <Row className={`${custom.customPaddingTop} mb-5 pb-2`}>
                            <Col md={6}>
                                <i className={`${custom.iconColor} fa-solid fa-handshake-angle fa-3x mb-2`}></i>
                                <div className={`${custom.categoryFont}`}>Our Mission</div>
                                <div className={`${custom.customPaddingTop}  ${custom.descriptionFont}`}>
                                    Believe New York is committed to
                                    uplifting all individuals and families
                                    navigating the challenges of poverty,
                                    abuse, and mental health issues.
                                </div>
                                <div className={`${custom.separator}`}></div>
                                <i className={`fa-solid fa-people-group fa-3x mb-2 ${custom.iconColor}`}></i>
                                <div className={`${custom.categoryFont}`}>Fostering Community</div>
                                <div className={`${custom.customPaddingTop}  ${custom.descriptionFont}`}>
                                    Our philosophy is that no one should feel excluded and alone. We believe in fostering an inclusive, supportive, and healthy community for all.
                                </div>
                                <div className={`${custom.separator}`}></div>
                                <i className={`${custom.iconColor} fa-solid fa-shield-halved fa-3x mb-2`}></i>
                                <div className={`${custom.categoryFont}`}>Long-term Solutions</div>
                                <div className={`${custom.customPaddingTop}  ${custom.descriptionFont}`}>
                                    We empower individuals by addressing the root causes of their challenges and providing personalized care tailored to their unique needs.
                                </div>
                            </Col>
                            <Col md={1}></Col>
                            <Col md={5} className='d-flex align-items-center mt-5'>
                                    <Image src={thanksgiving} fluid rounded/>

                            </Col>
                        </Row>
                        <Row className={`pt-4 mb-4`}>
                            <Col md={6}>
                                <Image src={imposter} fluid rounded className=""/> 
                            </Col>
                            <Col md={2}></Col>
                            <Col md={4} className='order-md-1 order-first d-flex justify-content-center flex-column'>
                                <div className={`${custom.largerDescriptionFont} `}>
                                    Addressing these concerns goes beyond providing immediate relief.
                                </div>
                                <div className={` ${custom.descriptionFont} mt-3 mb-5`}>
                                    We have two core programs, and several ongoing initiatives, that work
                                    synergistically to address the complex needs of our clients.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <div className='d-flex justify-content-center flex-column text-center mt-5'>
                                <div className={custom.categoryFont}>The Open Space</div>
                                <div className={`${custom.descriptionFont} mt-3 d-flex justify-content-center`}>
                                    <div className='w-75'>
                                        Accessible, no-cost, and confidential platform for clients to freely express their feelings and engage in non-judgmental mental health support while exploring and navigating the different resources available to them.
                                    </div>
                                </div>
                                <div>
                                    <Link to="/theOpenSpace" onClick={() => window.scrollTo(0,0)}>
                                        <button type="button" className={`btn btn-dark mt-4 mb-5  rounded-5 fw-bold ${custom.mainButton}`}>Learn more</button>
                                    </Link>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center flex-column text-center mt-5'>
                                <div className={custom.categoryFont}>Get Help</div>
                                <div className={`${custom.descriptionFont} mt-3 d-flex justify-content-center`}>
                                    <div className='w-75'>
                                        Ongoing individualized support and resource referrals for housing, food, medical and mental healthcare, domestic violence safety, legal services, and more.
                                    </div>
                                </div>
                                <div>
                                    <Link to="/getHelp" onClick={() => window.scrollTo(0,0)}>
                                        <button type="button" className={`btn btn-dark mt-4 mb-5  rounded-5 fw-bold ${custom.mainButton}`}>Learn more</button>
                                    </Link>
                                </div>
                            </div>
                        </Row>
                        <Row>
                            <Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container className='mb-5' style={{maxWidth: '4000px'}}>
                <Row className='mb-2'>
                    <Col className={`${custom.categoryFont} text-center mt-5 mb-5`}>
                        Community Events
                    </Col>
                </Row>
                <Row className={custom.carousel}>
                        <div className={` ${custom.carouselWrapper}`}>
                            <div className={custom.animateSlider}>
                                <img src={communityAdvocates} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={handingOutClothes} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={trio} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={donuts} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={bigGroup} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={tableBending} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={servingFood} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={communityAdvocates} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={handingOutClothes} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={trio} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={donuts} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={bigGroup} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={tableBending} className={custom.shrinkImage}></img>
                            </div>
                            <div className={custom.animateSlider}>
                                <img src={servingFood} className={custom.shrinkImage}></img>
                            </div>
                        </div>
                   
                </Row>
               
            </Container>
            <Container className='py-5'>
                <Row className='fw-bold d-flex align-items-center flex-column pt-1'>
                    <Col className='d-flex justify-content-center'>
                        <div className={`${custom.bottomBorderColor} pb-2`}>FOLLOW US ON SOCIAL MEDIA</div>
                        
                    </Col>
                    <Col className='d-flex justify-content-center mt-3'>
                    <a href="https://www.facebook.com/believeny">
                        <i className="fa-brands fa-facebook fa-3x me-5"></i>
                    </a>
                    <a href="https://www.instagram.com/believeny">
                        <i className="fa-brands fa-square-instagram fa-3x me-5"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/believeny">
                        <i className="fa-brands fa-linkedin fa-3x"></i>
                    </a>
                    </Col>
                </Row>
            </Container>
                <Container fluid className={`py-5 mt-5 d-flex justify-content-center ${custom.bgColor} text-white`}>
                    <Row className={`${custom.maxWidth}`}>
                        <Col md={6} className={`d-flex  align-items-center`}>
                            <div className='d-flex justify-content-center flex-column'>
                                <div className={`${custom.donationTitle} fw-bold mb-4`}>
                                    Your support goes a long way
                                </div>
                                <div className="text-start fs-5">
                                    Give a donation to support New Yorkers in need.
                                </div>
                                <div className='mb-4'>
                                    <Link to="/donate" onClick={() => window.scrollTo(0,0)}>                 
                                        <button type="button" className={` mt-4 me-3 rounded-5 fw-bold text-white ${custom.mainButton} ${custom.secondaryButton}`}>Donate now</button>
                                    </Link>  
                                </div>
                            </div>
      
                           
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <Image src={donationPhoto} className='' fluid rounded/> 
                        </Col>
                    </Row>
                </Container>
                <Container className={`d-flex justify-content-center ${custom.testimonialSizing}`}>
                    <Row>
                        <Col className='d-flex align-items-center justify-content-end flex-column mx-2'>
                            <div className={`${custom.quoteSizing} d-flex align-items-end fw-semibold text-center mb-3 fs-5 `}>"{testimonials[currentTestimonial].quote}"</div>
                            <div className={`fw-bold ${custom.topBorderColor} pt-3 fs-4`}>{testimonials[currentTestimonial].location}</div>
                            <i className={`fa-solid fa-hand-holding-heart fa-3x mt-3 mb-3 ${custom.color1}`}></i>
                            
                                <Row className='my-5 text-center w-100'>
                                    <Col xs={4} md={5}>
                                        <div className='d-flex align-items-center me-4'>
                                            <div className={`${custom.barLine}`}></div>
                                        </div>
                                    </Col>
                                    <Col xs={4} md={2} className='d-flex justify-content-center'>
                                        <i className={`fa-solid fa-circle-left fa-2x ${custom.color1}`} onClick={() => handleChange("down")}></i>
                                        <div className={`d-flex align-items-center justify-content-center mx-4`}>{(currentTestimonial) + 1}/7</div>
                                        <i className={`fa-solid fa-circle-right fa-2x ${custom.color1}`} onClick={() => handleChange("up")}></i>
                                    </Col>
                                    <Col xs={4} md={5}>
                                        <div className='d-flex align-items-center ms-4'>
                                            <div className={`${custom.barLine}`}></div>
                                        </div>
                                    </Col>
                                </Row>
                            
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <Row className={`my-5 py-5 ${custom.backgroundLight} bg-gradient bg-opacity-25 text-dark`}>
                                <Col xs={3} className='d-flex justify-content-center align-items-center '>
                                    <i className={`fa-brands fa-leanpub fa-3x ${custom.iconColor} `}></i>
                                </Col>
                                <Col xs={7} className='d-flex justify-content-start align-items-center fs-3 fw-semibold'>Read our impact report, see our accomplishment, and hear more feedback from our clients.</Col>
                                <Col xs={2} className='d-flex justify-content-center align-items-center'>
                                    <Link to="/impactReport" onClick={() => window.scrollTo(0,0)}>
                                        <button type="button" className={`btn btn-dark ${custom.shrinkButton} rounded-5 py-2`}>
                                            <i className="fa-solid fa-arrow-right fa-lg"></i>
                                        </button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className={`mx-0 d-flex justify-content-center ${custom.bgColor}  pb-2`}>
                    <Row className={`${custom.maxWidth} py-5`}>
                        <Col md={6} className={`d-flex justify-content-center align-items-center`}>
                            <div className={`d-flex justify-content-center flex-column text-white mt-2`}>
                                <div className={`${custom.sponsorTitle} fw-bold`}>Become a Sponsor</div>
                                <div className={`mt-3 ${custom.sponsorDescription}`}>We're looking to partner with more locally run businesses to help ensure every New Yorker is getting the help they need.</div>
                                <div className='mb-4'>
                                    <Link to="/eventSponsors" onClick={() => window.scrollTo(0,0)}>                   
                                        <button type="button" className={`mt-4 me-3 rounded-5 fw-bold text-white ${custom.mainButton} ${custom.secondaryButton}`}>Contribute</button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                        <Col md={6} className="d-flex align-items-center">
                            <Image src={mentalHealthFair} className='' fluid rounded/> 
                        </Col>
                    </Row>
                </Container>

   

  
        </div>
    )
}

export default newHome3;