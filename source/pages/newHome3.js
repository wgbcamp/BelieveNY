import React, { useState, useEffect } from 'react';

import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

import custom from '../css/home3.module.css';

import everyone from '../images/general/IMG_5998.jpg';
import donationPhoto from "../images/general/Homepage.PNG";
import '../images/general/ServingFood.jpg';

import mobileCA from '../images/mobile/CommunityAdvocates.jpeg';
import mobileDonuts from '../images/mobile/donuts.jpeg';
import mobileFD from '../images/mobile/foodDelivery.jpeg';
import mobileMHF from '../images/mobile/Mentalhealthfair.jpeg';
import mobileSF from '../images/mobile/ServingFood.jpg';
import mobile3D from '../images/mobile/threeDudes.jpeg'; 

const newHome3 = () => {

    const [width, setWidth] = useState(window.innerWidth);

            useEffect(() => {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };

            window.addEventListener('resize', handleResize);
            console.log(width);

        }, []);
 
    function Photos() {
        if (width >= 1201) {
            
            return <Row id="COLLAGE">
                    <Col>
                        <Row>
                            <div className={`${custom.imageResize} ${custom.mhfImage} mt-5 mb-5`}>
                            </div>
                        </Row>
                        <Row>
                            <div className={`${custom.imageResize} ${custom.sfImage}`}>
                            </div>
                        </Row>                            
                    </Col>
                    <Col>
                        <Row>
                            <div className={`${custom.imageResize} ${custom.donutsImage} mb-5`}>
                            </div>
                        </Row>
                        <Row>
                            <div className={`${custom.imageResize} ${custom.fdImage}`}>
                            </div>
                        </Row>                            
                    </Col>
                </Row>;
        }else{
             return  <Row id="CAROUSEL">
                    <Col>
                        <Carousel fade sm={6}>
                            <Carousel.Item>
                                <Image src={mobileCA} fluid rounded/>  
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={mobileDonuts} fluid rounded/>  
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={mobileFD} fluid rounded/>  
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={mobileMHF} fluid rounded/>  
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={mobileSF} fluid rounded/>  
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={mobile3D} fluid rounded/>  
                            </Carousel.Item>
                        </Carousel> 
                    </Col>
                </Row>;
        }
    }

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
            <Container id="MISSION STATEMENT">
                <Row>
                    <Col xl={6} className="mb-4">
                        <Row>
                            <Col className={`${custom.huge}`}>
                            Advancing our city & the lives of <div className={custom.color2}>New Yorkers</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="fs-5 fw-semibold lh-base mt-4">
                                Believe New York is on a mission—to improve the lives of all individuals and families in New York City, but we need your help, Donate Now to support our mission!
                            </Col>
                        </Row>
                        
                    </Col>
                    <Col xl={6}> 
                        <Image src={everyone} className='mt-5' fluid rounded/>  
                    </Col>
                </Row>
            </Container>
            <div className={`${custom.backgroundColor2} text-light mt-5 pb-5`}>
                <Container id="SERVICES">
                    <Row>
                        <Col className={`${custom.huge} text-center`}>
                            Our Services
                        </Col>
                    </Row>
                    <Row >
                        <Col xl={6}>
                            <Row className={`mt-5 mx-1 ${custom.backgroundColor2} ${custom.cardShadow} bg-white text-dark rounded-5`}>
                                <Col>
                                    <Row className={custom.huge}>
                                        <Col className='px-3'>
                                            The Open Space
                                        </Col>
                                    </Row>
                                    <Row className="fs-2 mt-5 mb-5 px-3">
                                        <Col className='px-3'>   
                                            100% free of charge and confidential, the Open Space offers a safe and nonjudgemental place to talk about what you are going through while remaining anonymous.
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6}>
                            <Row className={`mt-5 mx-1 ${custom.backgroundColor2} ${custom.cardShadow} ${custom.cardShadowSubtle} bg-white text-dark rounded-5`}>
                                <Col>
                                    <Row className={custom.huge}>
                                        <Col className='px-3'>
                                            Get Help
                                        </Col>
                                    </Row>
                                    <Row className="fs-2 mt-5 mb-5 px-3">
                                        <Col className='px-3'>   
                                            100% free of charge and confidential, the Open Space offers a safe and nonjudgemental place to talk about what you are going through while remaining anonymous.
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='mb-5'>
                <Row className='mb-2'>
                    <Col className={`${custom.huge} text-center mb-5`}>
                        Community Events
                    </Col>
                </Row>
                <Photos/>
            </Container>
            <Container>
                <Row className='fw-bold d-flex align-items-center flex-column'>
                    <Col className='d-flex justify-content-center'>
                        <div className={`${custom.borderColor} pb-2`}>FOLLOW US ON SOCIAL MEDIA</div>
                        
                    </Col>
                    <Col className='d-flex justify-content-center mt-3'>
                        <i className="fa-brands fa-facebook fa-3x me-5"></i>
                        <i className="fa-brands fa-square-instagram fa-3x me-5"></i>
                        <i className="fa-brands fa-linkedin fa-3x"></i>
                    </Col>
                </Row>
            </Container>
                <Container fluid className='mt-5 d-flex justify-content-center'>
                    <Row className={`${custom.maxWidth}`}>
                        <Col md={6} className={`d-flex  align-items-center`}>
                            <div className='d-flex justify-content-center flex-column'>
                                <div className={`${custom.donationTitle} fw-bold mb-4`}>
                                    Your support goes a long way
                                </div>
                                <div className="text-start">
                                    Give a donation to support New Yorkers in need.
                                </div>
                                <div className='mb-4'>                   
                                    <button type="button" className={`btn btn-primary mt-4 me-3 ${custom.shrinkButton}`}>Donate now</button>
                                    <button type="button" className={`btn btn-light border-dark-subtle mt-4 ${custom.shrinkButton}`}>About Believe</button>
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
                            <div className={`${custom.quoteSizing} d-flex align-items-end fw-normal text-center mb-3 fs-6 fst-italic`}>"{testimonials[currentTestimonial].quote}"</div>
                            <div className='fw-bold border-2 border-top border-primary pt-3 fs-4'>{testimonials[currentTestimonial].location}</div>
                            <i className={`fa-solid fa-hand-holding-heart fa-3x mt-3 mb-3 ${custom.color1}`}></i>
                            <div className='my-5'>
                            <i className={`fa-solid fa-circle-left fa-2x ${custom.color1}`} onClick={() => handleChange("down")}></i>
                            <i className={`fa-solid fa-circle-right fa-2x ${custom.color1}`} onClick={() => handleChange("up")}></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className={`${custom.backgroundColor1} mx-0 d-flex justify-content-center`}>
                    <Row className={`${custom.maxWidth}`}>
                        <Col md={6} className={`d-flex align-items-center`}>
                            <div className={`${custom.sponsorHeight} d-flex justify-content-center flex-column text-white mt-2`}>
                                <div className={`${custom.sponsorTitle} fw-bold`}>Become a Sponsor</div>
                                <div className='mt-3'>We're looking to partner with more locally run businesses to help ensure every New Yorker is getting the help they need.</div>
                                <button type="button" className={`btn btn-primary mt-4 ${custom.shrinkButton}`}>
                                    Learn more
                                    <i className="ms-2 fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className={`${custom.sponsorPhoto}`}></div>
                        </Col>
                    </Row>
                </Container>
        
   

  
        </div>
    )
}

export default newHome3;