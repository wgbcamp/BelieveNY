import React from 'react'

const photoTextBox = (props) => {
    return(
            <div className={`mScontainer mScontainer2 shiftLeft border${props.content.series}`}>
                <div className="verticalAlign simpleFlex">
                    <img src={props.content.image} className="slideshowContain"></img>
                </div>
                <div className={`textGrid1${props.content.version} verticalAlign`}>
                    <div className='padText text-[22px]' id="text1">
                        {props.content.description}
                    </div>

                </div>
            </div>
    
    )
}


export default photoTextBox;