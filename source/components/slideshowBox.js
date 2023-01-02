import e from 'cors';
import React, {useState, useEffect} from 'react'

const slideshowBox = (props) => {

    
    useEffect(() => {
        
        // compileShaders();
    
        }, [])

    const array = props.content.images;

    function interval(data){
        //update preview
        var prgmValue;
        if (clickBlocker === false){
            updateCB(true);
            if (clickCount === array.length-1 && data === 1){
                document.getElementById(`preview${props.content.v}`).style.backgroundImage = `url(${array[0]})`;
                updateCC(0);
                prgmValue = 0;
            }else if (clickCount === 0 && data === -1){
                document.getElementById(`preview${props.content.v}`).style.backgroundImage = `url(${array[array.length-1]})`;
                updateCC(array.length-1);
                prgmValue = array.length-1;
            }else{
                document.getElementById(`preview${props.content.v}`).style.backgroundImage = `url(${array[clickCount+data]})`;
                updateCC(clickCount + data);
                prgmValue = clickCount+data;
            }
            
            //update program
            document.getElementById(`program${props.content.v}`).classList.add("transparent");
            window.setTimeout(function() { 
                document.getElementById(`program${props.content.v}`).style.backgroundImage = `url(${array[prgmValue]})`;
                document.getElementById(`program${props.content.v}`).classList.remove("transparent");
                updateCB(false);
                                            }, 250);
        }

    }

    function compileShaders(){
        for (var i=0; i<array.length-1; i++){
            window.setTimeout(function(){
                document.getElementById(`preview${props.content.v}`).style.backgroundImage = `url(${array[i]})`;
                document.getElementById(`program${props.content.v}`).classList.add("transparent");
                document.getElementById(`program${props.content.v}`).style.backgroundImage = `url(${array[i]})`;
                document.getElementById(`program${props.content.v}`).classList.remove("transparent");
                console.log("yeehaw");
                console.log(i);
            }, 1000)
        }
        document.getElementById(`preview${props.content.v}`).style.backgroundImage = `url(${array[0]})`;
        document.getElementById(`program${props.content.v}`).style.backgroundImage = `url(${array[0]})`;
    }

    var [activeImage, updateAI] = useState(true);
    var [image1, updateImage1] = useState("");
    var [image2, updateImage2] = useState("");
    var [i1, updateI1] = useState(0);
    var [i2, updateI2] = useState("");
    var [clickCount, updateCC] = useState(0);
    var [clickBlocker, updateCB] = useState(false);

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
                    <div className="imageSlideContainer" id="slider">
                        {/* {array.map((value, i) => (
                            <img src={array[i]} className={`imageNumber1 ${clickCount < i ? "setTransparency" : "removeTransparency"}`} key={i}></img>
                        ))} */}
                        <div className="preview" id={`preview${props.content.v}`} style={{backgroundImage: `url(${array[0]})`}}></div>
                        <div className="program" id={`program${props.content.v}`} style={{backgroundImage: `url(${array[0]})`}}></div>
                    </div>
                </div>
            </div>
    )
}

export default slideshowBox;