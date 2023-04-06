import React, {useState} from "react";

const personCard = (props) => {

    var [descriptStatus, toggleDS] = useState(false);

    return(
        <div className="cardFlex">
            <div className="cardContainer">
                <img className="person" src={props.aboutUs.photo} alt="photo"></img>  
                <div className="infoGrid">
                <div className="name">{props.aboutUs.name}</div>
                <div className="title">{props.aboutUs.title}</div>
                </div>
            </div>
        </div>
    )
}

export default personCard;