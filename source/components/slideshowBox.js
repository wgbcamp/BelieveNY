import React from 'react'
import folksAndFood from '../images/folksAndFood.webp'
import '../css/home.css'
import '../css/slideshowBox.css'

const slideshowBox = (props) => {
    return(

            <div className={`ssBoxContainer border${props.content.series}`}>
            <img src={folksAndFood} className={`slideshow1${props.content.version}`}></img>
            <div className={`textGrid1${props.content.version} centerText`}>
                <div className='padText size36Font centerText' id="text1">
                {props.content.title} 
                </div>
                <div className='padText size22Font' id="text2">
                {props.content.description}
                </div>
                <div className='verticalAlign simpleFlex height100'>
                    <a href={`mailto:leadership@believeny.org?subject=${props.content.email}`} className='submitButton'>Get Involved</a>
                </div>
            </div>

        </div>
    )
}

export default slideshowBox;