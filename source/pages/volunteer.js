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