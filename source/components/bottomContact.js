import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css";

const bottomContact = (props) => {

    useEffect(() => {
        simplifyUI();
        }, [])

    function simplifyUI(){
        if(window.location.pathname === "/donateform"){
            document.getElementById("grid").style.visibility = "hidden";
        }
    }


    return(
        // <div className="bottomContact">
        //     <div className="bottomContactGrid">
        //         <div className="contact1">
        //             <div className="iconCircle">
        //                 <i className="fa-solid fa-envelope-open-text"></i>
        //             </div>
        //         <div>EMAIL GetHelp@BelieveNY.org</div>
        //         </div>
        //         <div className="blankSpace"></div>
        //         <div className="contact2">
        //             <div><i className="fa-solid fa-message"></i> TEXT 347-NYC-0011</div>
        //         </div>
        //     </div>
        // </div>
        <div className="bottomIconGrid" id="grid">
            <a href="sms:+13476920011?&body=Send a text message to Believe New York" className="iconBubble">
                <i className="fa-solid fa-message fa-2xl"></i>
            </a>
            <a href="mailto:leadership@believeny.org?subject=Contact Believe New York" className="iconBubble">
                <i className="fa-solid fa-envelope-open-text fa-2xl"></i>
            </a>
        </div>
    )
}

export default bottomContact;