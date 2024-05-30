import React from 'react'
import VolunteerAppWidget from '../components/volunteerAppWidget';

const volunteer = () => {
    return(
        <div>
            <div className="simpleFlex">
                {/* 
                iframe for pdf documents
                    */}
                {/* <iframe className="pdfViewer maxWidth"
                    src="https://drive.google.com/file/d/15UofE2JbZ8Z2xpUGbpD1QSbRaljYsvNt/preview"
                    height="100%"
                    width="100%"
                ></iframe> */}
            </div>
        <div className='simpleFlex padTop40'>
                <div className='maxWidth width80Per'>
                <div className="padTop20"></div>
                <div className="simpleFlex">
                    <div className="centerText width80Per weight500 marginTop20">We all have skills that contribute to Believe New York's helpful and efficient service for all New Yorkers!</div>
                </div>
                <div className="simpleFlex">
                    <div className="centerText width80Per padTop20 weight500">Do you want to apply to any of these positions? Send your resume to <span className='bold'>admin@believeny.org</span>! All welcome to apply.</div>
                </div>   
                            <div className="volPosTitle weight700 size26Font">Professional Community Fundraiser & Advocate</div>
                            <div className="volPosText padBottom20">Are you a passionate and outgoing individual who wants to make a tangible difference in the lives of others? Do you want to work directly for a nonprofit organization? Believe New York is seeking dedicated individuals like you to join our team as a Professional Community Fundraiser and Community Advocate. To apply, please email your resume and cover letter to our Director of Development, Sonny Curtin at <span className="bold">admin@believeny.org</span>.
                            </div>
                            <div className="volPosText padBottom20">
                            In this role, you will have a unique opportunity to engage directly with the community, build meaningful connections, and raise vital funds to support our mission of improving the lives of New Yorkers facing adversity. By joining us, you will become an ambassador for positive change, inspiring individuals to contribute to our cause and create lasting impact. With comprehensive training, ongoing support, and a collaborative team environment, this position offers personal growth, professional development, and the satisfaction of knowing that your efforts directly contribute to transforming lives and expanding Believe New York's impact! 
                            </div>
                            <div className="volPosText weight700 padBottom20 padTop20">
                            Benefits and Hours:
                            </div>
                            <li className="volPosBullet">Part time only; Thurs-Sat (12:00PM-6:00PM EST)</li>
                            <li className="volPosBullet">$20/hour</li>
                            <li className="volPosBullet">Opportunity to network and make connections in the nonprofit sector</li>
                            <li className="volPosBullet">Personalized letter of recommendation after 1 year of service</li>
                            <li className="volPosBullet">Leadership and professional growth</li>
                            <li className="volPosBullet">Make a strong impact on your community and vulnerable populations</li>
                            <li className="volPosBullet">Ability to travel to different locations in NYC and communicate with diverse populations</li>
                            <li className="volPosBullet">Receive ongoing support and guidance from our leadership team, including our Executive Director and Director of Development</li>
                            <div className="volPosText weight700 padBottom20 padTop20">
                            Responsibilities:
                            </div>
                            <li className="volPosBullet">Engage with the public in a friendly and persuasive manner to inspire support and donations for Believe New York's mission.</li>
                            <li className="volPosBullet">Effectively communicate the organization's goals, programs, and impact to potential donors.</li>
                            <li className="volPosBullet">Develop and maintain a deep understanding of Believe New York's initiatives to engage in meaningful conversations with potential supporters.</li>
                            <li className="volPosBullet">Utilize effective storytelling techniques to connect emotionally with individuals and convey the importance of their contributions.</li>
                            <li className="volPosBullet">Meet assigned fundraising targets and goals while maintaining a positive and enthusiastic attitude.</li>
                            <li className="volPosBullet">Represent Believe New York in a professional manner at various public locations and events.</li>
                            <li className="volPosBullet">Document and maintain accurate records of donor interactions and contributions.</li>
                            <li className="volPosBullet">Collaborate with team members and participate in regular meetings and training sessions.</li>
                            <div className="volPosText weight700 padBottom20 padTop20">
                            Required Qualifications:
                            </div>
                            <li className="volPosBullet">Strong interpersonal and communication skills with the ability to connect with people from diverse backgrounds.</li>
                            <li className="volPosBullet">Sales experience and/or experience in face2face fundraising.</li>
                            <li className="volPosBullet">Outgoing personality and enthusiasm for engaging with the public.</li>
                            <li className="volPosBullet">Excellent verbal communication and active listening skills.</li>
                            <li className="volPosBullet">Passionate about Believe New York's mission and able to articulate it effectively to others.</li>
                            <li className="volPosBullet">Ability to work independently and as part of a team.</li>
                            <li className="volPosBullet">Results-oriented with a drive to meet fundraising targets.</li>
                            <li className="volPosBullet">Reliable and punctual, with strong time management skills.</li>
                            <li className="volPosBullet">Comfortable working outdoors and standing for extended periods.</li>
                            <li className="volPosBullet">Access to own transportation.</li>
                            <div className='simpleFlex verticalAlign size42Font weight900 padBottom40 padTop80'>Open Volunteer Positions
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