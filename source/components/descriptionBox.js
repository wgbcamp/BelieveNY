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
                Believe New York, or BNY, is a grassroots nonprofit organization based in the New York City metro area. It was founded by a native New Yorker in February 2021 during the aftermath of the COVID-19 pandemic. 
                <br></br>
                <br></br>

                BNY’s mission is to improve the lives of all New Yorkers and beyond, and ensure all people regardless of age, sex, ethnicity, gender, and/or race can find and have access to the resources they need to survive and thrive. We aim to help all individuals and families who need us, specifically individuals experiencing poverty, homelessness, mental illness, domestic violence, discrimination, unemployment, disability, loss, trauma, and/or any form of hardship that impacts their well-being. In addition, we are committed to healthier communities and reducing our carbon footprint. Throughout all our efforts, we are focused on doing our part to improve our environment and overall community health.

                <br></br>
                <br></br>
                As for our structure, BNY has an Executive Board that helps oversee strategic planning and resources, a Leadership team that supports day-to-day operations, and a fantastic team of volunteers (our Client and Community Advocates) and who offer their time to support people who need us the most. Check out our wonderful Board and Leaders below!
                </div>
            </div>
            <div className="centerFlex">
                <i className={`fa-solid fa-arrow-down ${status ? "arrowDownPad" : "hideArrow"}`} onClick={handleClick}></i>
            </div>
        </div>
    )

}

export default descriptionBox;