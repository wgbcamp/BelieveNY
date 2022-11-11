import React from 'react'
import { Link } from 'react-router-dom'

const theOpenSpace = () => {

    function restoreTop(){
        window.scrollTo(0,0);
    }

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                    <div className="size24Font padTop80 centerText lineHeight30">Are you living with loneliness? Sadness? Anxiety? Are you stressed about school, work or difficult relationships? Are you struggling with addictions, violence, or losses in your life?</div>
                    <div className="size36Font padTop40 centerText">We are here for you.</div>
                    <div className="size26Font padTop40 centerText"> We are here to listen and help you through your next steps.</div>
                    <div className='simpleFlex padTop40 padBottom40'>
                    {/* <div className='fixIcon'><i class="fa-solid fa-phone fa-2xl"></i>
                                </div> */}
                            <Link to="/scheduleBooking" className="submitButton1" onClick={() => restoreTop()}>
                              Book an Anonymous Session Here
                            </Link> 
                    </div>
                    <div className="centerText size24Font">What is The Open Space?</div>
                    <div className="size18Font centerText lineHeight25 padTop40">The Open Space offers a safe, nonjudgemental, place to talk about what you are going through and remain anonymous. 100% free of charge and confidential. Sessions can be scheduled for up to 45 minutes and take place over the phone or Google Meet, audio only. Regular sessions are welcome and encouraged!</div>
                    <div className="size18Font centerText lineHeight25 padTop40">Select an available time to schedule a session with one of our trained Counselors. We are trained in active listening, empathy, and compassion and will provide support and resource referrals to help you through during this difficult time. Our active listeners will not question, criticize, interrupt nor judge as you tell us about your situation. We are here and we will get you through it.</div>
                    <div className="size18Font centerText lineHeight25 padTop40 padBottom40">Any questions about The Open Space, please email our administration at <b>believenewyork@gmail.com</b>.</div>
                    

                </div>
            </div>
        </div>
    )
}

export default theOpenSpace;