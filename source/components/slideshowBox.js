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

    var [clickCount, updateCC] = useState(0);
    var [clickBlocker, updateCB] = useState(false);
    var [infoStatus, updateIS] = useState(false);

    return(    
            <div className={`ssBoxContainer verticalAlign simpleFlex border${props.content.series}`}>
                <div className={` centerText `}>
                    <div className='size36Font ssBoxTitle' id="text1">
                    <b>{props.content.title}</b>
                    </div>
                    <div className='size22Font ssBoxDescription' id="text2">
                        <div className="descriptionText">
                            {props.content.description}
                        </div>
                    </div>
                    <div className='verticalAlign simpleFlex height100 hideGetInvolved'>
                        <a href={`mailto:leadership@believeny.org?subject=${props.content.email}`} className='submitButton'>Get Involved</a>
                    </div>
                </div>
                <div className={`imageGrid`}>
                    <div className="igFlex">
                        <div className={infoStatus ? "mwArrow" : "igArrowStyle"} onClick={() => interval(-1)}>
                            <i className="fa-solid fa-arrow-left fa-xl"></i>
                        </div>
                    </div>
                    <div></div>
                    <div className="igFlex">
                        <div className={infoStatus ? "mwArrow" : "igArrowStyle"} onClick={() => interval(1)}>
                            <i className="fa-solid fa-arrow-right fa-xl"></i>
                        </div>
                    </div>
                    <div className="imageSlideContainer" id="slider">
                        <div className="preview" id={`preview${props.content.v}`} style={{backgroundImage: `url(${array[0]})`}}></div>
                        <div className="program" id={`program${props.content.v}`} style={{backgroundImage: `url(${array[0]})`}}></div>
                        <div className={`fadeInDesc ${infoStatus}${props.content.v}`}>
                            <div className='innerFID'>
                                {props.content.description}
                            </div>
                        </div>
                        <div className="revealDesc simpleFlex verticalAlign" onClick={() => updateIS(!infoStatus)}>
                            <i class={`${infoStatus ? "fa-solid fa-xmark fa-lg" : "fa-solid fa-circle-info fa-md"}`}></i>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default slideshowBox;