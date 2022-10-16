import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css";

const bottomContact = (props) => {



    return(
        <div className="bottomContact">
            <div className="bottomContactGrid">
                <div className="contact1">
                    <div><i className="fa-solid fa-envelope-open-text"></i> EMAIL GetHelp@BelieveNY.org</div>
                </div>
                <div className="blankSpace"></div>
                <div className="contact2"> 
                    <div><i className="fa-solid fa-message"></i> TEXT 347-NYC-0011</div>
                </div>
            </div>
        </div>
    )
}

export default bottomContact;