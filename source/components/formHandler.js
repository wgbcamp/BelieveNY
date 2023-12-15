import React, {useState} from "react";

const FormHandler = (props) => {
    
    function submit(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `http://localhost:8080/${props.payload.path}`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        if(props.payload.type === "contactForm"){
            xhr.send(JSON.stringify({
                type: props.payload.type,
                name: props.payload.name,
                email: props.payload.email,
                phone: props.payload.phone,
                subject: props.payload.specific0,
                time: props.payload.specific1,
                text: props.payload.specific2
            }));
        }
        if(props.payload.type === "booking"){
            xhr.send(JSON.stringify({
                type: props.payload.type,
                name: props.payload.name,
                email: props.payload.email,
                phone: props.payload.phone,
                text: props.payload.specific0,
                date: props.payload.specific1,
                time: props.payload.specific2,
                clientStatus: props.payload.specific3,
                ongoingSupport: props.payload.specific4,
                howYouHeard: props.payload.specific5,
            }));
        }
        if(props.payload.type === "eventSponsor"){
            xhr.send(JSON.stringify({
                type: props.payload.type,
                email: props.payload.email,
                phone: props.payload.phone,
                contactName: props.payload.specific0,
                businessName: props.payload.specific1,
                text: props.payload.specific2
            }));
        }

        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.status);
                if(props.payload.type === "eventSponsor" || props.payload.type === "contactForm"){
                    alert("Your request has been submitted, thank you.");
                    }else{
                        alert(xhr.responseText);
                    }
                    window.location.reload();
            }
        }


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
        <div><b>{props.payload.path === "" ? props.payload.type === "eventSponsor" ? "Description" : "Subject" : "Description"}:</b> {props.payload.specific0}</div>
        <div><b>{props.payload.path === "" ? props.payload.type === "eventSponsor" ? "Name of Business" : "Description" : "Date"}:</b> {props.payload.specific1}</div>
        <div><b>{props.payload.path === "" ? props.payload.type === "eventSponsor" ? "" : "Best callback time:" : "Time:"}</b> {props.payload.specific2}</div>
        <div className={`${props.payload.type === "booking" ? "" : "hideCB"}`}><b>{props.payload.type === "booking" ? "New or current client?" : ""}</b> {props.payload.specific3}</div>
        <div className={`${props.payload.type === "booking" ? "" : "hideCB"}`}><b>{props.payload.type === "booking" ? "Interested in ongoing support?" : ""}</b> {props.payload.specific4}</div>
        <div className={`${props.payload.type === "booking" ? "" : "hideCB"}`}><b>{props.payload.type === "booking" ? "How did you hear about Believe NY?" : ""}</b> {props.payload.specific5}</div>
        <div className="aysButtonGrid">
            <div className='simpleFlex'>
                <div className="submitButton size24Font" onClick={() => submit()}>Confirm</div>
            </div>
            <div className='simpleFlex'>
                <div className="cancelButton size24Font" onClick={() => revertFixation()}>Cancel</div>
            </div>
        </div>
    </div>
    )
}

export default FormHandler;