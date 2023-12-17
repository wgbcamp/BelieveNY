import React, {useState, useEffect} from 'react';

const cancelSession = () => {


    useEffect(() => {
        getBookings();
        }, [])

    function getBookings(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://whale-app-e9it4.ondigitalocean.app/findOneBooking", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        var start = window.location.pathname.lastIndexOf("/") + 1;
        xhr.send(JSON.stringify({
            id: window.location.pathname.slice(start)
        }));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE){
                updateDate(xhr.responseText);
            }
        }
    }

    var [date, updateDate] = useState("");

    function deleteBooking(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://whale-app-e9it4.ondigitalocean.app/deleteOneBooking", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        var start = window.location.pathname.lastIndexOf("/") + 1;
        xhr.send(JSON.stringify({
            id: window.location.pathname.slice(start)
        }));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE){
                alert(xhr.responseText);
                location.href = "/";
            }
        }
    }

    return(
        <div className="simpleFlex padTop80">
            <div className="maxWidth width80Per">
                <div className="simpleTitle centerText">Are you sure you would like to cancel your session?</div>
                <div className="size18Font centerText">Click the button below to cancel the session for:</div>
                <div className="padBottom40"></div>
                <div className='simpleFlex'>
                    <div className="cancelAppCard size24Font">
                        <div className="cAgrid">
                            <div className='cAleft'></div>
                            <div className='cAcenter'>
                                <div></div>
                                <div className="cAdate size28Font centerText">{date}</div>
                                <div></div>
                                <div className="cAbutton" onClick={() => deleteBooking()}>Cancel Session</div>
                            </div>
                            <div className='cARight'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default cancelSession;