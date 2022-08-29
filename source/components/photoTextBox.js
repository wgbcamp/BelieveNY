import React from 'react'
import folksAndFood from '../images/folksAndFood.webp'
import '../css/photoTextBox.css'

const photoTextBox = () => {
    return(
        <div className="mScontainer">
        <img src={folksAndFood} className="slideshow1"></img>
        <div className="textGrid1">
            <div className='padText' id="text1">
            Domestic violence, homelessness, drug abuse, lack of physical and mental wellness, and malnutrition have been at devastatingly high rates in our city for far too long. It's heartbreaking, we all deserve better. 
            </div>
            <div className='padText' id="text2">
            Now is the time to advance our city, and the lives of New Yorkers. Believe New York was founded by a native New Yorker who has seen hardship, struggle and loss around every corner of the five boroughs.
            </div>
        </div>
        </div>
)
}

export default photoTextBox;