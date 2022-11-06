import e from 'cors';
import React, {useState} from 'react'

const slideshowBox = (props) => {

    const array = ["https://i.imgur.com/3jKvhFY.jpeg", "https://i.imgur.com/J2l4uLI.jpeg", "https://i.imgur.com/iaWr1P9.jpeg", "https://i.imgur.com/DuTbJYr.jpeg", "https://i.imgur.com/zfdFae1.jpeg", "https://i.imgur.com/cyyijEC.jpeg", "https://i.imgur.com/h0N8Pap.jpeg", "https://i.imgur.com/DVdcHmg.jpeg"];

    function moveImage(direction){

        //cases for css animations
        if (props.content.leftCSS === "hold"){
            if (direction === "left"){
                props.updateLeftCSS("centerToRight");
                props.updateRightCSS("leftToCenter");
            }
            if (direction === "right"){
                props.updateLeftCSS("centerToLeft");
                props.updateRightCSS("rightToCenter");
            }
        }else{
            if (props.content.leftCSS === "centerToRight"){
                if (direction === "left"){
                    props.updateLeftCSS("leftToCenter");
                    props.updateRightCSS("centerToRight");
                }
                if (direction === "right"){
                    props.updateLeftCSS("rightToCenter");
                    props.updateRightCSS("centerToLeft");
                }
            }
            if (props.content.leftCSS === "leftToCenter"){
                if (direction === "left"){
                    props.updateLeftCSS("centerToRight");
                    props.updateRightCSS("leftToCenter");
                }
                if (direction === "right"){
                    props.updateLeftCSS("centerToLeft");
                    props.updateRightCSS("rightToCenter");
                }
            }
            if (props.content.leftCSS === "centerToLeft"){
                if (direction === "left"){
                    props.updateLeftCSS("leftToCenter");
                    props.updateRightCSS("centerToRight");
                }
                if (direction === "right"){
                    props.updateLeftCSS("rightToCenter");
                    props.updateRightCSS("centerToLeft");  
                }
            }
            if (props.content.leftCSS === "rightToCenter"){
                if (direction === "left"){
                    props.updateLeftCSS("centerToRight");
                    props.updateRightCSS("leftToCenter");
                }
                if (direction === "right"){
                    props.updateLeftCSS("centerToLeft");
                    props.updateRightCSS("rightToCenter");
                }
            }
        }

        //track array intervals for each image source
        if (direction === "left"){
            if (props.content.currentSelection === ""){
                props.updateRight(array.length-1);
                props.updateSelection("left");
            }
            
            if (props.content.currentSelection === "left"){
                if (props.content.preventChange === false){
                    props.updatePC(true);
                }else{
                    props.updateLeft(props.content.rightIndex - 1);
                }
                props.updateSelection("right");
            }

            if (props.content.currentSelection === "right"){
                if (props.content.preventChange === true){
                    props.updateLeft(props.content.leftIndex - 2);
                    props.updatePC(false);
                }else{
                    if (props.content.leftIndex === 0){
                        props.updateRight(array.length-1);
                    }else{
                        props.updateRight(props.content.leftIndex - 1);
                    }
                }
                props.updateSelection("left");
            }

        }

        if (direction === "right"){
            if (props.content.currentSelection === ""){
                props.updateRight(1);
                props.updateSelection("right");
            }

            if (props.content.currentSelection === "left"){
                props.updateRight(props.content.leftIndex + 1);
                props.updateSelection("right");
            }

            if (props.content.currentSelection === "right"){
                if (props.content.rightIndex === array.length - 1){
                    props.updateLeft(0);
                }else{
                    props.updateLeft(props.content.rightIndex + 1);
                }
                props.updateSelection("left");
            }
        }



    }

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
                            <div className="igArrowStyle" onClick={() => moveImage("left")}>
                                <i class="fa-solid fa-arrow-left fa-2xl"></i>
                            </div>
                        </div>
                        <div></div>
                        <div className="igFlex">
                            <div className="igArrowStyle" onClick={() => moveImage("right")}>
                                <i class="fa-solid fa-arrow-right fa-2xl"></i>
                            </div>
                        </div>
                        <img src={array[props.content.leftIndex]} className={`imageNumber1 ${props.content.leftCSS}`}></img>
                        <img src={array[props.content.rightIndex]} className={`imageNumber1 ${props.content.rightCSS}`}></img> 
                </div>
        </div>
    )
}

export default slideshowBox;