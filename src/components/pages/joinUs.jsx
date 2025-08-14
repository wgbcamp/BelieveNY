import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import custom from '../../css/main.module.css';

const volunteer = () => {
    return (
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
                            </Row>
                        </Col>
                    </Container>
                    <div className='simpleFlex verticalAlign size42Font weight900 padBottom40 padTop80'>Available Positions
                    </div>
                    <div className='volPosGrid '>
                        <div>
                            <div className="volPosTitle">BNY Client Advocate</div>
                            <div className="volPosSubtitle">Time Commitment</div>
                            <li className="volPosBullet">100% Remote (Unless you help facilitate peer groups, see info on page 3)</li>
                            <li className="volPosBullet">Minimum of 5-10 hours per week, up to 20 hours available</li>
                            <li className="volPosBullet">Create your own regular on-call schedule</li>
                            <li className="volPosBullet">The more hours you are available, the more clients you will be assigned</li>
                            <ul>
                                <li>Typical caseload: 1–5 clients</li>
                            </ul>
                            <li className="volPosBullet">Participation in biweekly supervision and continued education meetings is <u>required</u></li>
                            <div className="volPosSubtitle">What You'll Gain</div>
                            <li className="volPosBullet">Hands-on experience in clinical and counseling skills, client support, case management, and resource navigation</li>
                            <li className="volPosBullet">Direct work with individuals facing trauma, adversity, and a wide range of social and emotional challenges</li>
                            <li className="volPosBullet">Exposure to real-world scenarios involving trauma-informed care and social services</li>
                            <li className="volPosBullet">Personalized letter of recommendation upon successful completion of <u>one year</u> of service</li>
                            <li className="volPosBullet">Supervision, ongoing education, and mentorship by experts in the field!</li>
                            <div className="volPosSubtitle"><u>Client Advocate Primary Responsibilities</u></div>
                            <div>Client Advocates support BNY’s core programs: <a className={custom.emailLink} href="http://believeny.org/getHelp">GetHelp</a> and <a className={custom.emailLink} href="http://believeny.org/theOpenSpace">The Open Space</a></div>
                            <div className="volPosSubtitle">GetHelp</div>
                            <li className="volPosBullet">Conduct intakes and connect clients to relevant resources, including affordable housing, mental health services and treatment, domestic violence support, nutrition programs, LGBTQ+ services, employment resources, disability support, and more</li>
                            <li className="volPosBullet">Maintain regular 30-45 minute (weekly or biweekly) contact with clients to monitor progress toward personal and wellness goals</li>
                            <li className="volPosBullet">Provide ongoing support and follow-through, ensuring clients are moving forward and that services are meeting their needs</li>
                            <li className="volPosBullet"><b>Example Scenario:</b> A client experiencing domestic violence reaches out for help. A Client Advocate conducts an intake, identifies appropriate housing resources, and remains involved through regular check-ins (weekly, biweekly, etc.) to ensure the client is safe, supported, and making progress toward long-term goals.</li>
                            <div className="volPosSubtitle">The Open Space</div>
                            <li className="volPosBullet">Host 45-minute one-on-one talk sessions by phone, text, or Google Meet (audio only)</li>
                            <li className="volPosBullet">Provide a supportive, non-judgmental space for individuals who need someone to talk to</li>
                            <li className="volPosBullet">While not a substitute for therapy, Advocates are trained in core counseling and communication skills to provide meaningful emotional support</li>
                            <div className="volPosSubtitle">Additional <i>Optional</i> Opportunities for Client Advocates:</div>
                            <li className="volPosBullet">Research and evaluation projects (including upcoming survey). Past projects have led to publications, conference presentations, and hands-on research experience</li>
                            <li className="volPosBullet">Social media, community outreach, and marketing efforts</li>
                            <li className="volPosBullet">Planning and hosting peer support groups and community events (see page 3!)</li>
                            <li className="volPosBullet">Grant writing and fundraising! *Experience preferred but not required</li>

                            <div className="volPosTitle">BNY Community Advocate</div>
                            <div className="volPosSubtitle">Time Commitment</div>
                            <li className="volPosBullet">In-person required at our partner’s location, <a className={custom.emailLink} href="https://sproutsociety.org/">Sprout Society HQ</a>, and during community outreach except select days of social media promotion only</li>
                            <li className="volPosBullet">Minimum of 5-10 hours per week, up to 20 hours available</li>
                            <li className="volPosBullet">Flexible, build-your-own regular schedule</li>
                            <li className="volPosBullet">Participation in biweekly supervision and continued education meetings is required.</li>
                            <div className="volPosSubtitle">What You’ll Gain</div>
                            <li className="volPosBullet">Real-world experience in community organizing, program facilitation, and social services</li>
                            <li className="volPosBullet">Leadership experience working directly with underserved populations and individuals facing trauma, adversity, and a wide range of social and emotional challenges</li>
                            <li className="volPosBullet">Direct exposure to issues in housing and food insecurity, mental health, domestic violence, etc.</li>
                            <li className="volPosBullet">Opportunity to co-create new programming based on community needs</li>
                            <li className="volPosBullet">Personalized letter of recommendation upon successful completion of <u>one year</u> of service</li>
                            <li className="volPosBullet">Supervision, ongoing education, and mentorship by experts in the field!</li>
                            <div className="volPosSubtitle"><u>Community Advocate Primary Responsibilities</u></div>
                            <div className="volPosSubtitle">Community Outreach & Promotion</div>
                            <li className="volPosBullet">Distribute flyers and materials in low-income neighborhoods, shelters, and community centers </li>
                            <li className="volPosBullet">Promote BNY’s services online via social media and in-person during community events, public spaces, and partner sites. *Social media/marketing experience is not required </li>
                            <li className="volPosBullet">Support and attend community impact events (e.g., food and clothing drives, voter registration events, school supply giveaways, holiday initiatives, and more)</li>
                            <div className="volPosSubtitle">Peer Group Facilitation</div>
                            <li className="volPosBullet">Oversee, supervise, and facilitate in-person peer groups at <a className={custom.emailLink} href="https://sproutsociety.org/">Sprout Society HQ</a></li>
                            <li className="volPosBullet">Open and/or close the Sprout Society HQ on peer group days</li>
                            <li className="volPosBullet">Support outreach and online promotion on non-peer group days</li>
                            <div className="volPosSubtitle">Additional <i>Optional</i> Opportunities for Community Advocates:</div>
                            <li className="volPosBullet">Research and evaluation projects (including upcoming survey).</li>
                            <li className="volPosBullet">Past projects have led to publications, conference presentations, and hands-on research experience.</li>
                            <li className="volPosBullet">Grant writing and fundraising! *Experience preferred but not required</li>
                            <div className="volPosSubtitle"><u>What are Peer Groups?</u></div>
                            <div>Peer Groups provide a safe, welcoming space for individuals to connect with others navigating similar challenges. These groups are 1-2 hours weekly, biweekly, or monthly, and designed to build community, reduce isolation, and increase access to support and services. Our operational partner, <a className={custom.emailLink} href="https://sproutsociety.org/">Sprout Society</a> provides the space to host them, refreshments, and staff support during facilitation.</div>
                            <div className="volPosSubtitle">Examples of Peer Groups:</div>
                            <li className="volPosBullet"><i>Affordable Housing Peer Group</i></li>
                            <li className="volPosBullet"><i>Domestic Violence Survivors Peer Group</i></li>
                            <li className="volPosBullet"><i>United Under Uncertainty (discuss stressors related to uncertainty in the country)</i></li>
                            <li className="volPosBullet"><i>Work Together Peer Group (quiet space for collaborative work or study)</i></li>
                            <div>Additional peer groups will be introduced based on community needs. Virtual groups will also be offered. Peer Groups serve as an access point for BNY support, resources, and GetHelp enrollment.</div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default volunteer;