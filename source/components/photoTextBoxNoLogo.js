import React from 'react'
import folksAndFood from '../../images/folksAndFood.webp'

const photoTextBoxNoLogo = (props) => {
    return(
            <div className={`mScontainer mScontainer2 shiftLeft border${props.content.series}`}>
                <div className="slideshowContain simpleTitleGrid">
                    <div className="simpleFlex">
                        <u className='verticalAlign'>{props.content.title}</u>
                    </div>     
                    <img src={props.content.image} className="slideshow1"></img>
                </div>
                <div className={`textGrid1${props.content.version}`}>
                    <div className='padText' id="text1">
                        {props.content.description}
                    </div>

                </div>
            </div>
    )
}


export default photoTextBoxNoLogo;