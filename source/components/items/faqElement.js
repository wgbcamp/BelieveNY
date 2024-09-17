import React from 'react'

const faqElement = (props) => {
    console.log(props);
    function toggleElement(event){
       var x = event.currentTarget.id;
       document.getElementById(`${x}` + "a").classList.toggle("killElement");
    }

    return(
        <div>
            <div className="faqElement">
                <div className="faqGrid" id={props.content.id} onClick={toggleElement}>
                    <div className="verticalAlign">{props.content.question}</div>
                    <div className='simpleFlex verticalAlign'>
                        <i className="fa-solid fa-plus fa-xl"></i>
                    </div>
                </div>
                <div className="faqAnswer killElement" id={props.content.id+"a"}>{props.content.answer}
                <div className={`faqOrderedList`}>
                    <div className={props.content.hideList}>
                        <ol type="A">
                            <li className="faqOLelement">{props.content.oL1}</li>
                            <li className="faqOLelement">{props.content.oL2}</li>
                            <li className="faqOLelement">{props.content.oL3}</li>
                        </ol> 
                    </div> 
                </div>
                <div className="faqAnswer2">{props.content.answer2}</div>
                <div className="faqAnswer3">{props.content.answer3}</div>
                </div>
                
            </div>
        </div>
    )
}

export default faqElement;