import React from 'react'
import custom from '../../css/main.module.css';
import { InstagramEmbed } from 'react-social-media-embed';
import { Container, Row, Col } from 'react-bootstrap';


const upcomingEvents = () => {

    return(
        <div>
            <Container className={custom.maxWidth}>
                <Row>
                    <Col className={`mt-5 pt-5 pb-4 text-center ${custom.categoryFont}`}>
                    Follow our instagram for event updates!
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div style={{ display: 'flex', justifyContent: 'center' }} className={`py-5`}>
                            <InstagramEmbed url="https://www.instagram.com/believeny/" width={'90%'}/>
                        </div>
                    </Col>
                </Row>
            </Container>
            
            <Container>
                <Row>
                    <Col>
                        <div className={`${custom.categoryFont} text-center pt-5`}>
                            Do you want to help with our events?
                        </div>
                        <div className='pt-5'>
                            We are looking for enthusiastic Event Volunteers to help make our Community and Outreach Events a success! If you're interested in volunteering, please email our team at <a href="mailto:admin@believeny.org" className={custom.iconColor}>admin@believeny.org</a>. 
                        </div>
                        <div className='pt-5'>
                            In addition, we are seeking dedicated individuals to join our team as Event Coordinators! In this role, you will be responsible for organizing and hosting events, recruiting and managing volunteers, reaching out to potential sponsors, and coordinating materials and plans to ensure the success of our events. 
                            
                            <div className='pt-5'>This position requires a commitment of 2-5 hours per week, including weekly meetings to provide updates and collaborate with our leadership team. If you’re passionate about making a difference and are interested in this position, please email <a href="mailto:admin@believeny.org" className={custom.iconColor}>admin@believeny.org</a>.</div> 
                        </div>
                    </Col>
                </Row>

            </Container>

        </div>
        

    )
}
export default upcomingEvents;