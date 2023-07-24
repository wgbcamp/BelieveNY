import React, { useState, useEffect } from 'react'
const descriptionBox = () => {

    var [status, toggleStatus] = useState(true);

    const handleClick = e => {
        toggleStatus(!status);
    }

    return(
        <div>
            <div className="dContainer">
                <div className={`${status ? "dText" : "dTextInitial"}`}>
                Believe New York is a start-up 501c3 non-profit organization in New York City. Our initial work began in the fall of 2018 by the collaboration of community activist Nicole K. Bulanchuk and artist Tyler S. Parrish. Believe New York restarted its services in the Summer of 2020 in the aftermath of COVID-19, with a new mission, new leadership, and a new outreach model. During this time, Sonny Curtin and Zach Koshgarian joined and were instrumental in shaping what Believe New York is today. We became an official 501c3 non-for-profit in February 2021 and it has been uphill ever since!

                <br></br>
                <br></br>

                Believe New York's mission is to improve the lives of all New Yorkers and beyond, and ensure all people regardless of age, sex, ethnicity, gender, and/or race can find and have access to the resources they need to survive and thrive. We aim to help all individuals and families who need us, specifically individuals experiencing poverty, homelessness, mental illness, domestic violence, discrimination, unemployment, disability, loss, trauma, and/or any form of hardship that impacts their well-being. In addition, we are committed to healthier communities and reducing our carbon footprint. Throughout all our efforts, we are focused on doing our part to improve our environment and community health. 

                <br></br>
                <br></br>
                With help from the Believers, passionate and hardworking volunteers, and generous contributors, we are able to service and connect individuals and families to life-saving resources in all five boroughs of NYC (and beyond). We aspire to continue to expand our outreach and services past our incredible city, but first, there is much more work to be done in our home.

                <br></br>
                <br></br>

                Progress starts with you and continues with all of us. Please join our movement to make our city the best it's ever been. If you believe anything, Believe New York.

                </div>
            </div>
            <div className="centerFlex">
                <i className={`fa-solid fa-arrow-down ${status ? "arrowDownPad" : "hideArrow"}`} onClick={handleClick}></i>
            </div>
        </div>
    )

}

export default descriptionBox;