import React, {useState} from "react";
import { render } from "react-dom";

const emailFormHandle = (props) => {

    function submitEmail(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            type: "contactForm",
            name: props.payload.name,
            email: props.payload.email,
            phone: props.payload.phone,
            subject: props.payload.subject,
            time: props.payload.time,
            text: props.payload.text
        }));
        alert("Your form has been submitted, thank you.");
        window.location.reload();
    }

    function revertFixation(){
        document.body.style.position = "static";
        props.updateDim(false);
    }

    return(
        <div className={`${props.dim === true ? "areYouSure" : "hideCB"} padLeft30 padRight30 size18Font`}>
        <div className="centerText padTop20 padBottom20"><b>Is the following information correct?</b></div>
        <div><b>Name:</b> {props.payload.name}</div>
        <div><b>Email:</b> {props.payload.email}</div>
        <div><b>Phone #:</b> {props.payload.phone}</div>
        <div><b>Subject:</b> {props.payload.subject}</div>
        <div><b>Description:</b> {props.payload.text}</div>
        <div><b>Best callback time:</b> {props.payload.time}</div>
        <div className="aysButtonGrid">
            <div className='simpleFlex'>
                <div className="submitButton size24Font" onClick={() => submitEmail()}>Confirm</div>
            </div>
            <div className='simpleFlex'>
                <div className="cancelButton size24Font" onClick={() => revertFixation()}>Cancel</div>
            </div>
        </div>
    </div>
    )
}

export default emailFormHandle;