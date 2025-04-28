import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import custom from '../../css/main.module.css';

const volunteer = () => {
    return(
        <div>
            <div className="simpleFlex">
            </div>
        <div className='simpleFlex padTop40'>
                <div className='maxWidth width80Per'>
                <div className="padTop20"></div>
                    <Container className=" mt-5">
                        <Col>
                            <Row>
                                <div>
                                We believe that <u>everyone</u> has valuable skills to contribute to our mission! As most of our volunteers are students, we organize training for volunteers at the end of each semester and the beginning of the next. This ensures that we have a well-coordinated and dedicated team to support our clients and community. 
                                </div>
                                
                                <div className='mt-3'>
                                Therefore, we host trainings for Client and Community Advocate positions on a need basis during the following periods once or twice a year:
                                </div>
                                <ul className="mt-3 ms-5">
                                    <li>August or September</li>
                                    <li>January or February</li>
                                    <li>May or June</li>
                                </ul>
                                {/* here */}
                                <div>If you're interested in learning more or joining our team as an Advocate, and/or other volunteer opportunities listed below, please email <a className={custom.emailLink} href="mailto:admin@believeny.org">admin@believeny.org</a>. </div>
                                <div className="mt-3">Thank you and we look forward to working with you to improve our community well-being!</div>
                                <b className="mt-3"><u>Recruitment Update!</u></b>
                                <div className='mt-3'>We are now recruiting Client and Community Advocates to start Summer 2025. <a href="https://forms.gle/PzzYXy6oftQbPrVbA" className={custom.emailLink}>Applications</a> for these positions are due no later than <u>Sunday, June 1 at 11:59pm ET.</u>  For more information on these positions, the application process, and required training dates, please visit this link <a href="https://docs.google.com/document/d/133wkup3s6_AJDdkxak-mYvCXcQEIOBfZ" className={custom.emailLink}>here</a>.</div>
                            </Row>
                        </Col>
                    </Container>
                            <div className='simpleFlex verticalAlign size42Font weight900 padBottom40 padTop80'>Available Positions
                            </div>
                    <div className='volPosGrid '>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop40"></i>
                            <div className="volPosTitle">CLIENT ADVOCATE</div>
                            <li className="volPosBullet">First line of communication with client on Get Help e-mail, Support Line and/or chat.</li>
                            <li className="volPosBullet">Take Open Space Sessions with clients and provide active listening and a compassionate ear.</li>
                            <li className="volPosBullet">Listen, empathize and familiarize yourself with their unique situation.</li>
                            <li className="volPosBullet">Research and discover what resource(s) will best help the client to move forward.</li>
                            <li className="volPosBullet">Guide and connect individuals and families to the resource(s) they need.</li>
                            <li className="volPosBullet">Follow up with the client regularly to ensure success.</li>
                            <li className="volPosBullet">100% remote and make your own schedule.</li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">COMMUNITY ADVOCATE</div>
                            <li className="volPosBullet">Approach and promote our services through outreach and flyer distribution in the community.</li>
                            <li className="volPosBullet">Encourage our services to individuals and families who may need help. </li>
                            <li className="volPosBullet">Advocate for their future, their well being and their success.</li>
                            <li className="volPosBullet">Connect them to our Get Help email, Open Space and/or Support Line so they can take the next step in moving their life forward.</li>
                            <li className="volPosBullet">In person and make your own schedule.</li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">EVENT COORDINATOR</div>
                            <li className="volPosBullet">Responsible for organizing and hosting the event, recruiting, and managing volunteers, contacting potential sponsors, and organizing materials and plans for events</li>
                            <li className="volPosBullet">Open to all types of events that help the community.</li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">EVENT VOLUNTEER</div>
                            <li className="volPosBullet">Assist with various tasks during our events.</li>
                            <li className="volPosBullet">Support the Event Coordinator, BNY Leadership, and other team members.</li>
                            <li className="volPosBullet">Help set up, manage activities, and ensure the smooth operation of events.
                            </li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">FINANCE, GRANTS, AND TAX COORDINATORS</div>
                            <li className="volPosBullet">Organize and maintain Believe NY's budget along side Executive Director and Finance Director.</li>
                            <li className="volPosBullet">Evaluate and revise revenue and fundraising efforts alongside Board of Directors.</li>
                            <li className="volPosBullet">Support grant writing process and budget creation.</li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">ADVERTISING/MARKETING COORDINATOR</div>
                            <li className="volPosBullet">Advertise and market Believe NY's Get Help e-mail, Support Line and chat, in person and on our social media platforms.</li>
                            <li className="volPosBullet">Work directly with Development and Marketing Director to promote Believe NY.</li>
                            <li className="volPosBullet">Open to any type of advertising and marketing strategies.</li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">VOLUNTEER RECRUITER</div>
                            <li className="volPosBullet">Recruit volunteers for our services!</li>
                            <li className="volPosBullet">Direct individuals to volunteer positions that fit their interests and passions.</li>
                            <li className="volPosBullet">Open to any type of recruitment strategies.</li>
                        </div>
                        
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default volunteer;