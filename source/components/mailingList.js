import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "../css/header.css";

const mailingList = () => {

    return(
        <div className="mailingListFlex">
            <div className="mailingListGrid">
                <div></div>
                <div className="mailingListFlex">
                    <div className="mailingListText">Stay updated on our progress and get news delivered to your inbox.</div>
                </div>
                <div className="mailingListFlex">
                    <div className="mailingListButton">
                        <div className="mailingListFlex mlButtonText">
                            Sign up
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default mailingList;