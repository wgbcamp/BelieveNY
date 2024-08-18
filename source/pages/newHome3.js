import React from 'react';

import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';

import custom from '../css/home3.module.css';

import everyone from '../images/general/IMG_5998.jpg'
import foodDelivery from '../images/events/foodDelivery.jpeg'
import donuts from '../images/events/donuts.jpeg'
import servingFood from '../images/general/ServingFood.jpg'
import '../images/general/ServingFood.jpg'


const newHome3 = () => {
    return(
        <div>
            <Container>
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
                <Container>
                    <Row>
                        <Col className={`${custom.huge} text-center`}>
                            Our Services
                        </Col>
                    </Row>
                    <Row >
                        <Col xl={6}>
                            <Row className={`mt-5 mx-1 ${custom.backgroundColor2} bg-gradient text-white rounded-2`}>
                                <Col>
                                    <Row className={custom.huge}>
                                        <Col>
                                            The Open Space
                                        </Col>
                                    </Row>
                                    <Row className="fs-2 mt-5 mb-5">
                                        <Col>   
                                            100% free of charge and confidential, the Open Space offers a safe and nonjudgemental place to talk about what you are going through while remaining anonymous.
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6}>
                            <Row className={`mt-5 mx-1 ${custom.backgroundColor2} bg-gradient text-white rounded-2`}>
                                <Col>
                                    <Row className={custom.huge}>
                                        <Col>
                                            Get Help
                                        </Col>
                                    </Row>
                                    <Row className="fs-2 mt-5 mb-5">
                                        <Col>   
                                            100% free of charge and confidential, the Open Space offers a safe and nonjudgemental place to talk about what you are going through while remaining anonymous.
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col className={`${custom.huge} text-center`}>
                        Community Events
                    </Col>
                </Row>
                {/* <Row>
                    <Col>
                        <Carousel fade sm={6}>
                            <Carousel.Item>
                                <Image src={donuts} className='mt-5' fluid rounded/>  
                                <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={foodDelivery} className='mt-5' fluid rounded/>  
                                <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Image src={servingFood} className='mt-5' fluid rounded/>  
                                <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel> 
                    </Col>
                </Row>  */}
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                Col 1
                            </Col>
                            <Col>
                                Col 2
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                Col 3
                            </Col>
                            <Col>
                                Col 4
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default newHome3;