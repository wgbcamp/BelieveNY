import React, {useState, useEffect} from 'react'

const updateDB = () => {

    useEffect(() => {  
        getDates();
        }, [])

    var [timeslots, updateTimeslots] = useState(false);
    var tempTimeSlots = [];
    var [fullTimeSlots, updateFTS] = useState("");
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

    useEffect(() => {
        if (timeslots !== false){
            for (var i=0; i<dayNames.length; i++){
                for (var a=0; a<timeslots.schedule.length; a++){
                    if (dayNames[i] === timeslots.schedule[a].day){
                        tempTimeSlots.push(timeslots.schedule[a].time);
                        console.log(timeslots.schedule[a].time);
                    }
                }
            }
            console.log(tempTimeSlots);
            updateFTS(tempTimeSlots.map((value) => (
                    <div className="updateTimeHours">
                        {value.map((value) => (
                            <div className="updateTimeHoursMiniGrid">
                                <div></div>
                                <div>{value}</div>
                                <div></div>
                            </div>
                        ))}           
                    </div>     
                )))
        }
    }, [timeslots])

    function getDates(){
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://whale-app-e9it4.ondigitalocean.app/getDates", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send("");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.status);
                console.log(xhr.responseText);
                updateTimeslots(JSON.parse(xhr.responseText));
                
            }
        }
    }

    //placeholder
    var dateArray = [
        {"day":"Mon","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Tue","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Wed","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Thu","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Fri","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Sat","time":["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]},
        {"day":"Sun","time":["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]}
    ];

    // postDates();
    function postDates(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://whale-app-e9it4.ondigitalocean.app/postDates", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        console.log(dateArray);
        xhr.send(JSON.stringify(dateArray));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.status)
                console.log(xhr.responseText);
            }
        }
    }

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                    <div className="updateTimeGrid">
                        <div className="updateTimeTitle">Available timeslots</div>
                        <div className="updateTimeWeekCol">
                            <div className="updateTimeDays">SUN</div>
                            <div className="updateTimeDays">MON</div>
                            <div className="updateTimeDays">TUE</div>
                            <div className="updateTimeDays">WED</div>
                            <div className="updateTimeDays">THU</div>
                            <div className="updateTimeDays">FRI</div>
                            <div className="updateTimeDays">SAT</div>
                        </div>
                        <div className="updateTimeDayCol">
                            {fullTimeSlots}
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default updateDB;
