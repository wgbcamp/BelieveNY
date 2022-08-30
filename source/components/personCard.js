import React, {useState} from "react";
import '../css/personCard.css';
const personCard = (props) => {

    var [descriptStatus, toggleDS] = useState(false);

    return(
        <div className="cardFlex">
            <div className="cardContainer">
                {descriptStatus ? <div className="cardDescriptor">
                    <div className="cardText">{props.aboutUs.story}
                    </div>
                    </div> : <img className="person" src={props.aboutUs.photo} alt="photo"></img>}
                
                <div className="infoGrid">
                <div className="name">{props.aboutUs.name}</div>
                <div className="title">{props.aboutUs.title}</div>
                <div className="moreAbout" onClick={() => toggleDS(!descriptStatus)}>More about me ^</div>
                </div>
            </div>
        </div>
    )
}

export default personCard;