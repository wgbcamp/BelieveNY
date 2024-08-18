import React from 'react';

import { Container, Row, Col, Image} from 'react-bootstrap';

import custom from '../css/home3.module.css';

import everyone from '../images/general/IMG_5998.jpg'

const newHome3 = () => {
    return(
        <div>
            {/* <div className="simpleFlex">
                <div className="maxWidth width80Per">
                </div>
            </div> */}
w
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
                <Row>
                    <Col className={`${custom.huge} text-center`}>
                        Our Services
                    </Col>
                </Row>
                <Row>
                    <Col xl={6}>
                        <Row className={`mt-5 mx-1 ${custom.backgroundColor1} bg-gradient text-white rounded-2`}>
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
    )
}

export default newHome3;