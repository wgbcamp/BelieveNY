import e from 'cors';
import React, {useState} from 'react'

const slideshowBox = (props) => {

    const array = props.content.images;

    function interval(data){
            if ((clickCount === 0 && data === -1) || (clickCount === array.length-1 && data === 1)){
                
            }else{
                updateCC(clickCount + data);
            }
    }

    var [activeImage, updateAI] = useState(true);
    var [image1, updateImage1] = useState("");
    var [image2, updateImage2] = useState("");
    var [i1, updateI1] = useState(0);
    var [i2, updateI2] = useState("");
    var [clickCount, updateCC] = useState(0);

    return(    
            <div className={`ssBoxContainer border${props.content.series}`}>
                <div className={`textGrid centerText elevateDiv`}>
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
                <div className={`imageGrid`}>
                    <div className="igFlex">
                        <div className="igArrowStyle" onClick={() => interval(-1)}>
                            <i className="fa-solid fa-arrow-left fa-2xl"></i>
                        </div>
                    </div>
                    <div></div>
                    <div className="igFlex">
                        <div className="igArrowStyle" onClick={() => interval(1)}>
                            <i className="fa-solid fa-arrow-right fa-2xl"></i>
                        </div>
                    </div>
                    <div className="imageSlideContainer delayVisibility opacityZero">
                        {array.map((value, i) => (
                            <img src={array[i]} className={`imageNumber1 ${clickCount < i ? "setTransparency" : "removeTransparency"}`} key={i}></img>
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default slideshowBox;