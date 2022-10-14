import React from 'react'
import { Link } from 'react-router-dom';

const volunteerBox = (props) => {

    function restoreTop(){
        window.scrollTo(0,0);
    }   

    return(
        <div className="volGrid borderBottom">
        <img src={props.app.folksAndFood} className="slideshow3"></img>
        <div className="volCol2">
        {/* <div className="volTitle"></div> */}
        <div className="volText1">If you'd like to volunteer with us, and help improve the lives of New Yorkers, we'd love to hear from you!</div>
        <div className="volText2">Our volunteers work directly with people in need, creative social media posts, and help with new fundraising efforts. If you think you'd be a great fit don't hesitate to apply!</div>
        <div className="volBtnOut">
            <Link to="/volunteer" className="volBtnIn noDecoration" onClick={() => restoreTop()}>
            Become a Volunteer
            </Link>
        </div>
        </div>
    </div>
)
}

export default volunteerBox;