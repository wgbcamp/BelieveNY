import e from 'cors';
import React, {useState} from 'react'
import folksAndFood from '../../images/folksAndFood.webp'

const slideshowBox = (props) => {

    const array = ["https://i.imgur.com/3jKvhFY.jpeg", "https://i.imgur.com/J2l4uLI.jpeg", "https://i.imgur.com/iaWr1P9.jpeg", "https://i.imgur.com/DuTbJYr.jpeg", "https://i.imgur.com/zfdFae1.jpeg", "https://i.imgur.com/cyyijEC.jpeg", "https://i.imgur.com/h0N8Pap.jpeg", "https://i.imgur.com/DVdcHmg.jpeg"];

    var [leftIndex, updateLeftIndex] = useState(0);
    var [rightIndex, updateRightIndex] = useState(0);

    function moveImage(direction){
        const captureRight = Array.from(document.querySelectorAll(".centerToRight,.rightToCenter"));
        const captureLeft = Array.from(document.querySelectorAll(".leftToCenter,.centerToLeft"));
        const captureHold = Array.from(document.getElementsByClassName("hold"));

        var a = "centerToRight";
        var b = "centerToLeft";
        var c = "leftToCenter";
        var d = "rightToCenter";
        var x;
        var y;

        captureRight.forEach(element => {             
            if (element.classList.contains("centerToRight")){
                if (direction === "left"){
                    x = a;
                    y = c;
                    
                    if (element.classList.contains("rightIndex")){
                        if (rightIndex === 0 || leftIndex === 0){
                            updateRightIndex(array.length-1);
                        }else{
                            updateRightIndex(leftIndex-1);
                        }
                    }else{
                        updateLeftIndex(rightIndex-1);
                    }
                    
                }else{
                    x = a;
                    y = d;

                    if (element.classList.contains("rightIndex")){
                        if (rightIndex === 0 || leftIndex === 0){
                            updateRightIndex(1);
                        }else{
                            updateRightIndex(leftIndex+1);
                        }
                    }else{
                        updateLeftIndex(rightIndex+1);
                    }

                }
            }else{
                if (direction === "left"){
                    x = d;
                    y = a;
                }else{
                    x = d;
                    y = b;
                }
            }
            element.classList.replace(x, y);
        });
        
        captureHold.forEach(element => {
            x = "hold";
            if (direction === "left"){
                y = a;           
            }else{
                y = b;
            }
            element.classList.replace(x, y);
        });

        captureLeft.forEach(element => {
            if (element.classList.contains("leftToCenter")){
                if (direction === "left"){
                    x = c;
                    y = a;
                }else{
                    x = c;
                    y = b;
                }
            }else{
                if (direction === "left"){
                    x = b;
                    y = c;
                }else{
                    x = b;
                    y = d;

                    if (element.classList.contains("leftIndex")){
                        if (rightIndex === array.length-1 || leftIndex === array.length-1){
                            updateLeftIndex(0);
                        }else{
                            updateLeftIndex(rightIndex+1);
                        }
                    }else{
                        updateRightIndex(leftIndex+1);
                    }

                }
            }
            element.classList.replace(x, y);
        });
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
                        <img src={array[leftIndex]} className="imageNumber1 hold leftIndex"></img>
                        <img src={array[rightIndex]} className="imageNumber1 centerToRight rightIndex"></img>

 
                </div>


        </div>
    )
}

export default slideshowBox;