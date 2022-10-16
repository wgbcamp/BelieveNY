import React from 'react'
import CanvasBag from '../../images/CanvasBagv2.webp'
import PhotoTextBox from '../components/photoTextBox'

const volunteer = () => {
    return(
        <div className='simpleFlex padTop80'>
            <div className='maxWidth width80Per'>
                <div className='size36Font simpleFlex padBottom80 padTop40 centerText'>We all have skills that contribute to Believe New York's helpful and efficient service for all New Yorkers!</div>

                <div className="padTop20"></div>
                <div className='simpleFlex verticalAlign sT size36Font marginTop40 lightPurple'>Open Volunteer Positions
                </div>
                    <div className='volPosGrid'>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop40"></i>
                            <div className="volPosTitle">COUNSELOR</div>
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
                            <div className="volPosTitle">ADVOCATE</div>
                            <li className="volPosBullet">Approach and promote our services through outreach and flyer distribution in the community.</li>
                            <li className="volPosBullet">Encourage our services to individuals and families who may need help. </li>
                            <li className="volPosBullet">Advocate for their future, their well being and their success.</li>
                            <li className="volPosBullet">Connect them to our Get Help email, Open Space and/or Support Line so they can take the next step in moving their life forward.</li>
                            <li className="volPosBullet">In person and make your own schedule.</li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">FUNDRAISER</div>
                            <li className="volPosBullet">Fundraise on behalf of Believe NY so we can expand.</li>
                            <li className="volPosBullet">Includes anything from phone banking to street canvassing to door to door.</li>
                            <li className="volPosBullet">Open to any type of fundraising strategies. </li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">FINANCE, GRANTS, AND TAX CONSULTANTS</div>
                            <li className="volPosBullet">Organize and maintain Believe NY's budget along side Executive Director and Finance Director.</li>
                            <li className="volPosBullet">Evaluate and revise revenue and fundraising efforts alongside Board of Directors.</li>
                            <li className="volPosBullet">Support grant writing process and budget creation.</li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">ADVERTISING/MARKETING CONSULTANT</div>
                            <li className="volPosBullet">Advertise and market Believe NY's Get Help e-mail, Support Line and chat, in person and on our social media platforms.</li>
                            <li className="volPosBullet">Work directly with Development and Marketing Director to promote Believe NY.</li>
                            <li className="volPosBullet">Open to any type of advertising and marketing strategies.</li>
                        </div>
                        <div>
                            <i className="fa-regular fa-newspaper fa-2xl padTop80"></i>
                            <div className="volPosTitle">RECRUITER</div>
                            <li className="volPosBullet">Recruit volunteers for our services!</li>
                            <li className="volPosBullet">Direct individuals to volunteer positions that fit their interests and passions.</li>
                            <li className="volPosBullet">Open to any type of recruitment strategies.</li>
                        </div>
                        
                        
                    </div>
            </div>
        </div>
    )
}

export default volunteer;