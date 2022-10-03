import React from 'react'

const volunteerBox = (props) => {
    return(
        <div className="volGrid borderBottom">
        <img src={props.app.folksAndFood} className="slideshow3"></img>
        <div className="volCol2">
        <div className="volTitle">Become a Volunteer</div>
        <div className="volText1">If you'd like to volunteer with us, and help improve the lives of New Yorkers, we'd love to hear from you!</div>
        <div className="volText2">Our volunteers work directly with people in need, creative social media posts, and help with new fundraising efforts. If you think you'd be a great fit don't hesitate to apply!</div>
        <div className="volBtnOut">
            <div className="volBtnIn">
            Volunteer
            </div>
        </div>
        </div>
    </div>
)
}

export default volunteerBox;