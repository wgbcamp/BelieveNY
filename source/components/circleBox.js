import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const circleBox = (props) => {

    var [purp, purpStatus] = useState(false);
    var [whit, whitStatus] = useState(false);

    function restoreTop(){
        window.scrollTo(0,0);
    }

    return(
        <div className="circleBoxFlex">
            <div className="circleBoxGrid">
                <div className="circleStyleFlex">
                    <div className={`circlePhoto ${props.info.photo}`}>
                    </div>
                </div>
                <div className="circleStyleFlex">
                    <div className="circleTitle">
                        {props.info.title}   
                    </div>
                </div>
                <div className="circleFlexStart">
                    <div className="circleText">
                        {props.info.description}
                     
                    </div>
                </div>
                <div className="circleStyleFlex">
                    <Link to={props.info.link} className={`circleButton circleStyleFlex ${purp ? "changeToPurp" : ""} ${whit ? "changeToWhite" : ""}`} onMouseEnter={() => {purpStatus(true); whitStatus(false);} } onMouseLeave={() => {purpStatus(false); whitStatus(true);}} onClick={() => restoreTop()}>
                        {props.info.buttonText}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default circleBox;