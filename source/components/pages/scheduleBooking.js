import React, { useState, useEffect, useRef } from 'react'

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const longMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const longWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//gets all the values of the days of the month
function monthDays(year, month){

    const date = new Date(year, month, 1);
    const dates = [];

    while (date.getMonth() === month){
        dates.push(new Date(date).toString());
        date.setDate(date.getDate() + 1);
    }
    return dates;
}

//create time offset and convert to EST
const timeZone = new Date().getTimezoneOffset()/60;
const now = new Date();
now.setHours(now.toString().slice(16,18)*1 + timeZone -5);


var actualDate = now.toDateString();
console.log(actualDate);
var tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);
var tomorrowDate = tomorrow.toString().slice(4,10).split(" ").join("");
var customMonth = month.indexOf(actualDate.slice(4,7));
var customYear = actualDate.slice(-4);

//set initial time for state function below
var actualTime = now.toString().slice(16,18)*1;
console.log("actual time: " + actualTime);
if (actualTime > 12){
    actualTime = actualTime-12;
    actualTime = actualTime.toString() + ":00 PM";
}
if (actualTime === 12){
    actualTime = actualTime.toString() + ":00 PM";
}
if (actualTime < 12){
    actualTime = actualTime.toString() + ":00 AM";
}


const scheduleBooking = (props) => {

    const timeslotRef = useRef();
    const continueRef = useRef();


    useEffect(() => {
        
        getBookings();
    
        }, [])

    var z = [];
    var blockedTime = [];

    function getBookings(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", `https://whale-app-e9it4.ondigitalocean.app/getBookings`, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            date: "Thu 2022 Sep22", 
            time: "1:00 PM"
        }));
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE){
                console.log(xhr.status)
                z = JSON.parse(xhr.responseText);
                for (var i=0; i<z.length; i++){
                    blockedTime.push(z[i].date);
                }
                console.log("Blocked times: ");
                console.log(blockedTime);
            }
        }
    }

    var schedule = [
        {"day":"Mon","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Tue","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Wed","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Thu","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Fri","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"]},
        {"day":"Sat","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"]},
        {"day":"Sun","time":["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"]}
    ]
    
    var [morningslots, updatemTimeslots] = useState("");
    var [afternoonslots, updateaTimeslots] = useState("");
    var [eveningslots, updateeTimeslots] = useState("");

    var [timeChosen, updateTC] = useState("");
    var [slotTitles, updateST] = useState(false);

    const morningTimes = ["9:00 AM", "10:00 AM", "11:00 AM"];
    const afternoonTimes = ["12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"];
    const eveningTimes = ["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

    var [calendarSwitch, swCal] = useState(true);

    function checkTime(){
        if (timeChosen !== ""){
            swCal(!calendarSwitch);
            window.scrollTo(0,0);
        }
    }
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [clientStatus, setCS] = useState('');
    const [ongoingSupport, setOS] = useState('');
    const [howYouHeard, setHYH] = useState('');
    //superdate and time chosen as well

    const updateName = event => {
        setName(event.target.value);
    }
    const updateEmail = event => {
        setEmail(event.target.value);
    }
    const updatePhone = event => {
        setPhone(event.target.value);
    }
    const updateMessage = event => {
        setMessage(event.target.value);
    }
    const updateCS = event => {
        setCS(event.target.value);
    }
    const updateOS = event => {
        setOS(event.target.value);
    }
    const updateHYH = event => {
        setHYH(event.target.value);
    }

    function submitBooking(){
        if (name !== "" && email !== "" && email.includes("@") && email.includes(".") && phone !== "" && phone.split(/[-\s]/).join("").length === 10 && message !== "" && clientStatus !== "" && ongoingSupport !== "" && howYouHeard !== "" && superDate !== "" && timeChosen !== ""){
            props.updateDim(true);
            props.updatePayload({name: name, email: email, phone: phone, path: "booking", type: "booking", specific0: message, specific1: superDate, specific2: timeChosen, specific3: clientStatus, specific4: ongoingSupport, specific5: howYouHeard, label: props.bookingCategory});
        }else{
            if (phone.split(/[-\s]/).join("").length !== 10){
                alert("Please make sure your phone number consists of 10 digits.");
            }else if (!(email.includes("@") && email.includes("."))){
                alert("Please make sure to include a valid email address.");
            }else{
                alert("Please fill out every field below before scheduling your session.");
            }
        }

    }

    var [currMonth, changeMonth] = useState(0);
    var [currYear, changeYear] = useState(0);
    var [superDate, setSuperDate] = useState(actualDate);
    
    //mark specific dates as invalid for showing times or being selectable
    var tempDateBlock = ["Nov23", "Nov24", "Dec24", "Dec25", "Dec31", "Jan01","Jul28","Jul29","Jul30","Jul31","Aug01","Aug02","Aug03","Aug04","Aug05","Aug06","Aug07","Aug08","Aug09","Aug10","Aug11","Aug12","Aug13","Aug14","Aug15","Aug16","Aug17","Aug18","Aug19","Aug20","Aug21","Aug22","Aug23","Aug24","Aug25","Aug26","Aug27","Aug28","Aug29","Aug30","Aug31","Sep01","Sep02", "Sep03", "Sep04", "Sep05", "Sep06", "Sep07", "Sep08", "Sep09", "Sep10", "Sep11", "Sep12", "Sep13", "Sep14", "Sep15", "Sep16"];


    function fillCalendar(data){
        if(data === 1){
            if(customMonth<11){
                customMonth +=1;
            }else{
                customMonth = 0;
                customYear++;
            }
        }
        if(data === -1){
            if(customMonth>0){
                customMonth -=1;
            }else{
                customMonth = 11;
                customYear--;
            }
        }
        if(data === 0){
            console.log("yes")
            customMonth = month.indexOf(actualDate.slice(4,7));
            customYear = actualDate.slice(-4);
        }

    //finds starting day to place on calendar
    var todayValue;
    var startDateArray = monthDays(customYear, customMonth);
    for (var i=0; i<startDateArray.length; i++){
        if (startDateArray[i].slice(8,10) === "01"){
            //changes the name of the month on the calendar
            changeMonth(longMonth[month.indexOf(startDateArray[i].slice(4,7))]);
            changeYear(startDateArray[i].slice(10,15));
            //decides the todayValue, used to choose how many days of the prev and next month to gather
            for (var a=0; a<week.length; a++){
                if (startDateArray[i].slice(0,3) === week[a]){
                    todayValue = a;
                }
            }
        }
    }

    //pushes all the days of the current month into array
    var thisMonth = monthDays(customYear, customMonth);


    //pushes the end of the previous month into the start of the thisMonth array equivalent to the open calendar spaces
    if(todayValue > 0){
        if (customMonth === 0){
            var prevMonth = monthDays(parseInt(customYear)-1, 11).slice(-todayValue);
        }else{
            var prevMonth = monthDays(customYear, customMonth-1).slice(-todayValue);
        }
        thisMonth = prevMonth.concat(thisMonth);
    }
    
    //pushes the start of the next month to the end of the thisMonth array equivalent to the open calendar spaces
    if (customMonth === 11){
        var nextMonth = monthDays(parseInt(customYear)+1, 0).slice(0,42-thisMonth.length);
    }else{
        var nextMonth = monthDays(customYear, customMonth+1).slice(0,42-thisMonth.length);
    }
    thisMonth = thisMonth.concat(nextMonth);

    //greys out dates before current day or within 24 hours
    var invalidDays = [];

    for (var i=0; i<thisMonth.length; i++){
        var y = month.indexOf(thisMonth[i].slice(4,7));
        var z = month.indexOf(actualDate.slice(4,7));
        var e = thisMonth[i].slice(8,10);
        var r = actualDate.slice(8,10);
        var cMonth = month.indexOf(thisMonth[i].slice(4,7));
        var aMonth = month.indexOf(actualDate.slice(4,7));
        var cYear = thisMonth[i].slice(11,15);
        var aYear = actualDate.slice(11,15);
        var g = false;

        //invalidates days of previous months
        if ( y < z && (cYear <= aYear)){
            console.log(thisMonth[i].slice(4,7))
            g = true;
        }
        //invalidates previous days and today of current matching month
        if ( (e <= r) && (y === z )){
            g = true;
        }
       
        //invalidates previous years
        if (cYear < aYear){
            g = true;
        }

        //re-validates future dates 
        if ((cMonth > aMonth && cYear >= aYear) || cYear > aYear){
            g = false;
        }

        if (g === true){
            invalidDays.push(thisMonth[i].slice(4,7).concat(thisMonth[i].slice(8,10)));
        }
    }

    //removes tomorrow on calendar if all scheduled timeslots are invalid
    for (var i=0; i<schedule.length; i++){
        if (tomorrow.toString().slice(0,3) === schedule[i].day){
            if ((actualTime.slice(0,2).split(":").join("")*1 >= schedule[i].time[schedule[i].time.length-1].slice(0,2).split(":").join("")*1) && actualTime.slice(-2) === "PM" && actualTime.slice(0,2).split(":").join("")*1 !== 12){
                for (var a=0; a<thisMonth.length; a++){
                    if (thisMonth[a].slice(4,10).split(" ").join("") === tomorrowDate && actualDate.slice(-4)*1 === thisMonth[a].slice(11,15).split(" ").join("")*1){
                        invalidDays.push(tomorrowDate);
                    }
                }
              
            }
        }
    }

    //removes days that are invalid
    console.log("Invalid days:");
    console.log(invalidDays);
    console.log("This month:");
    console.log(thisMonth)
    for (var i=0; i<invalidDays.length; i++){
        thisMonth.splice(i, 1, invalidDays[i])
    }
    console.log("Updated month:");
    console.log(thisMonth);

    //maps the values to the calendar tiles
    newCalValue(thisMonth.map((value) => (

        <div className={`calTile ${thisMonth.indexOf(value)} ${value.slice(0,3)} ${value.slice(11,15)} ${value.length > 5 && !tempDateBlock.includes(value.slice(4,10).split(" ").join("")) ? value.slice(4,7).concat(value.slice(8,10)): "invalid"}`} onClick={() => { toggleSelection(thisMonth.indexOf(value), value.slice(0,15)); updateTC(""); updateST(true); toggleTSselection("blank");}} key={value.toString()}>{value.length > 5 ? value.slice(8,10) : value.slice(3,5)}</div>
    )));  
}

    //changes css classes based on whether the date is valid and which valid dates have been selected
    function toggleSelection(data1, data2){
        const containsCalTile = Array.from(document.getElementsByClassName("calTile"));
        const containsClass = Array.from(document.getElementsByClassName(data1));
        const containsInvalid = Array.from(document.getElementsByClassName("invalid"));

        containsCalTile.forEach(element => {
            element.classList.remove("calTileSelected");
        })

        containsClass.forEach(element => {
            console.log(containsClass);
            element.classList.add("calTileSelected");
        });

        console.log(containsInvalid);
        containsInvalid.forEach(element => {
            element.classList.remove("calTileSelected");
        })
        
        //sanitize data2 value if its got a length longer than 5 to accomodate for tempDateBlock rule
        if (data2.length > 5 && tempDateBlock.includes(data2.slice(4,7).concat(data2.slice(8,10)))) {
            data2 = "";
        }

        var dPart1 = longWeek[week.indexOf(data2.slice(0,3))] + ", ";
        var dPart2 = longMonth[month.indexOf(data2.slice(4,7))] + " ";
        var dPart3 = data2.slice(8,10) + ", ";
        var dPart4 = data2.slice(11,15);
        
        var morningValues = [];
        var afternoonValues = [];
        var eveningValues = [];

        if (dPart1 !== "undefined, "){
            console.log("warren!")
            console.log(data2);
            console.log(dPart1)
            setSuperDate(dPart1.concat(dPart2.concat(dPart3.concat(dPart4))));
            var selectedDate = dPart1.concat(dPart2.concat(dPart3.concat(dPart4)));
            var tileTomorrowDate = dPart2.slice(0,3).concat(dPart3.slice(0,2));
            
            
            console.log("LOOK HERE");
            console.log(selectedDate);

            for (var i=0;i<schedule.length; i++){
                console.log("ugh");
                if (schedule[i].day === dPart1.slice(0,3)){
                    console.log(dPart1.slice(0,3))
                    
                    //adds timeslots based on schedule and time
                    for (var a=0; a<schedule[i].time.length; a++){
                        if ((schedule[i].time[a].slice(0,2).split(":").join("")*1) < 12 && schedule[i].time[a].slice(-2) === "AM"){
                            morningValues.push(schedule[i].time[a]);
                        }
                        if (((schedule[i].time[a].slice(0,2).split(":").join("")*1) === 12 || (schedule[i].time[a].slice(0,2).split(":").join("")*1) <= 4) && schedule[i].time[a].slice(-2) === "PM"){
                            afternoonValues.push(schedule[i].time[a]);
                        }
                        if (((schedule[i].time[a].slice(0,2).split(":").join("")*1) !== 12 && (schedule[i].time[a].slice(0,2).split(":").join("")*1) >= 5) && schedule[i].time[a].slice(-2) === "PM"){
                            eveningValues.push(schedule[i].time[a]);
                        }
                    }

                    //removes timeslots that have been reserved by clients
                    for (var b=0; b<blockedTime.length; b++){
                        for (var c=0; c<morningValues.length; c++){
                            if (blockedTime[b] === selectedDate.concat(" ").concat(morningValues[c])){
                                morningValues.splice(c, 1);
                            }
                        }
                        for (var c=0; c<afternoonValues.length; c++){
                            if (blockedTime[b] === selectedDate.concat(" ").concat(afternoonValues[c])){
                                afternoonValues.splice(c, 1);
                            }
                        }
                        for (var c=0; c<eveningValues.length; c++){
                            if (blockedTime[b] === selectedDate.concat(" ").concat(eveningValues[c])){
                                eveningValues.splice(c, 1);
                            }
                        }
                    }
                   
                    //removes timeslots that are within 24hrs of the client's time
                    if (tomorrowDate === tileTomorrowDate){
                        for (var d=0; d<morningValues.length; d++){
                            if (actualTime.slice(0,2).split(":").join("")*1 < 12 && actualTime.slice(-2) === "AM" && actualTime.slice(0,2).split(":").join("")*1 >= morningValues[d].slice(0,2).split(":").join("")*1){
                                morningValues.splice(d, 1);
                                d--;
                            }
                            if (actualTime.slice(-2) === "PM"){
                                morningValues.splice(d, 1);
                                d--;
                            }
                        }
                        for (var d=0; d<afternoonValues.length; d++){
                            if (afternoonValues[d].slice(0,2).split(":").join("")*1 === 12 && actualTime.slice(-2) === "PM"){
                                afternoonValues.splice(d, 1);
                            }
                            if (actualTime.slice(-2) === "PM" && actualTime.slice(0,2).split(":").join("")*1 >= afternoonValues[d].slice(0,2).split(":").join("")*1 && actualTime.slice(0,2).split(":").join("")*1 !== 12){
                                afternoonValues.splice(d, 1);
                                d--;
                            }
                        }
                        for (var d=0; d<eveningValues.length; d++){
                            if (actualTime.slice(-2) === "PM" && actualTime.slice(0,2).split(":").join("")*1 >= eveningValues[d].slice(0,2).split(":").join("")*1 && actualTime.slice(0,2).split(":").join("")*1 !== 12){
                                eveningValues.splice(d, 1);
                                d--;
                            }
                        }
                    }

                    //updates state values
                    updatemTimeslots(morningValues.map((value) => (
                        <div className={"mStyle"} id={value} onClick={(e) => toggleTSselection(e)} key={value}>{value}</div>
                    )));
                    updateaTimeslots(afternoonValues.map((value) => (
                        <div className={"mStyle"} id={value} onClick={(e) => toggleTSselection(e)} key={value}>{value}</div>
                    )));
                    updateeTimeslots(eveningValues.map((value) => (
                        <div className={"mStyle"} id={value} onClick={(e) => toggleTSselection(e)} key={value}>{value}</div>
                    )));
                }
            }
           timeslotRef.current.scrollIntoView({ behavior: 'smooth' });
        }else{
            updatemTimeslots("");
            updateaTimeslots("");
            updateeTimeslots("");
        }
    }

    function toggleTSselection(e){
        const containsmStyle = Array.from(document.getElementsByClassName("mStyleSelected"));
        containsmStyle.forEach(element => {
            element.classList.replace("mStyleSelected", "mStyle");
        })
        if(e !== "blank"){
            if (e.target.className === "mStyle"){
                updateTC(e.target.id);
                e.target.className="mStyleSelected";
                continueRef.current.scrollIntoView({ behavior: 'smooth' })
            }else{
                updateTC("");
            }
        }
    }

    function getToday(){
        var tilePosition = actualDate.slice(8,10);
        if (tilePosition.charAt(0) === 0){
            tilePosition = tilePosition.charAt(1);
        }
        toggleSelection(tilePosition, actualDate.slice(0,15));
        updateST("");
    }
    
    useEffect(() => {
        
    fillCalendar();

    }, [])
    

    var [calendarValue, newCalValue] = useState("");

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                    <div className='padTop80'></div>
                    <div className='weight500 lineHeight25'>{props.bookingCategory} is not a substitute for clinical mental health treatment and/or a cure for any mental health issues and/or disorders. Although our Counselors are comprehensively trained, they are not certified nor licensed mental health specialists. They are trained in active listening techniques, empathy, and compassion and will provide support and resource referrals as needed.</div>
                    <div className="padTop40"></div>
                    <div className='weight800 lineHeight25 padBottom80'>Important Update for New Clients: At this time, we do not have any openings for new clients until September 16th. 
                        We are currently transitioning to a new operations system and training model designed to enhance our services and support our continued growth. 
                        This temporary pause allows us to ensure that all our staff and volunteers are fully equipped to provide the highest level of care and support to our clients. We appreciate your understanding and patience during this period. Please check back with us after September 16th for updates on availability. 
                        We look forward to continuing to serve our community with improved resources and services. 
                        Thank you for your support!
                    </div>                    
                    <div className='simpleFlex'>
                        
                    <div>{calendarSwitch ?
                        <div className="calendarAppGrid">
                            <div className="appCol1">
                            <div className="bookingTitle size30Font">Schedule Online</div>
                            <div className="padTop80"></div>
                                <div className="simpleFlex">
                                    <div className="mtSwitchGrid padBottom40">
                                        <div className="size36Font"><b>{currMonth}</b> {currYear}</div>
                                        <div className="mtArrow" onClick={() =>fillCalendar(-1)}><i className="fa-solid fa-caret-left fa-xl"></i></div>
                                        <div className="mtArrow" onClick={() => fillCalendar(1)}><i className="fa-solid fa-caret-right fa-xl"></i></div>
                                        <div></div>
                                        <div className='mtToday' onClick={() => {fillCalendar(0); getToday();}}>Today</div>
                                    </div>
                                </div>
                            <div className='simpleFlex'>
                                <div className="dayGrid padBottom20">
                                    <b>Sun</b>
                                    <b>Mon</b>
                                    <b>Tue</b>
                                    <b>Wed</b>
                                    <b>Thu</b>
                                    <b>Fri</b>
                                    <b>Sat</b>
                                </div>
                            </div>
                                <div className='simpleFlex'>
                                <div className="calendar" ref={timeslotRef}>
                                {calendarValue}
                                </div>
                                </div>
                                <div className='simpleFlex'>
                                <div className={`dayPeriodGrid ${slotTitles === true ? "" : "visibleNo"}`}>
                                    <div className={`${morningslots.length > 0 ? "morning": "opacityZero"}`}>
                                        <div className="timeTitle">Morning</div>
                                        {morningslots}
                                    </div>
                                    <div className={`${afternoonslots.length > 0 ? "afternoon": "opacityZero"}`}>
                                        <div className="timeTitle">Afternoon</div>
                                        {afternoonslots}
                                    </div>
                                    <div className={`${eveningslots.length > 0 ? "evening": "opacityZero"}`}>
                                        <div className="timeTitle">Evening</div>
                                        {eveningslots}
                                    </div>
                                    <div className={`contSchedContainer ${timeChosen !== "" ? "" : "opacityZero"}`} onClick={() => checkTime()} ref={continueRef}>
                                        <div className="contSched">
                                            Continue Scheduling
                                            </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="appCol2">
                            <div className={`infoBoxGrid ${calendarSwitch === true ? "visibleNo" : ""}`}>
                                <div></div>
                                    <div className="infoBox">
                                        <div></div>
                                        <div className="ibTitle">
                                            The Open Space
                                        </div>
                                        <div className="timeInfo">45 min</div>
                                        <div className="dateSelected">{superDate} {timeChosen}</div>
                                    </div>
                                    <div></div>
                                </div>
                            </div>
                            <div className="padTop80"></div>
                    </div> 
                    
                    : 
                    <div className="simpleFlex">
                    <div className='maxWidth width80Per padBottom80'>
                    <div className="bookingInfoGrid">
                        <div className='bCol1' onClick={() => {checkTime(); updateST(false); setSuperDate(now.toDateString()); updateTC("");}}><div className="borderBlack">Go Back</div></div>
                        <div className="bCol1 simpleTitle">Add Your Info</div>
                        <div className='bCol1'></div>
                        <div className='bCol1'>Name</div>
                        <input className='bCol1' onChange={updateName} value={name}></input>
                        <div className='bCol1'>Email</div>
                        <input className='bCol1' onChange={updateEmail} value={email}></input>
                        <div className='bCol1'>Phone Number</div>
                        <input className='bCol1' onChange={updatePhone} value={phone}></input>
                        <div className='bCol1'>Tell us what's going on...</div>
                        <textarea className='bCol1 borderTopSolid' onChange={updateMessage} value={message}></textarea>
                        <div className="bCol1">
                            <div className="bookingDropdownGrid">
                                <label for="client-status" className=''>Are you a new or current client?</label>
                                <select name="clientStatus" id="client-status" className='bookingDropdownWidth' onChange={updateCS}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="yes">New</option>
                                    <option value="no">Current</option>
                                </select>
                            </div>
                        </div>
                        <div className="bCol1">
                            <div className="bookingDropdownGrid">
                                <label for="ongoing-status" className=''>Are you interested in receiving ongoing support from our Client Advocates?</label>
                                <select name="ongoingStatus" id="ongoing-status" className='bookingDropdownWidth' onChange={updateOS}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                        </div>
                        <div className='bCol1'>How did you hear about Believe NY?</div>
                        <textarea className='bCol1 borderTopSolid' onChange={updateHYH} value={howYouHeard}></textarea>
                        <div className="simpleFlex confirmationBox">
                        <div className="infoBoxGrid" id="ibg">
                                <div></div>
                                    <div className="infoBox">
                                        <div></div>
                                        <div className="ibTitle">
                                            The Open Space
                                        </div>
                                        <div className="timeInfo">45 min</div>
                                        <div className="dateSelected">{superDate} </div>
                                        <div className="timeSelected">{timeChosen} EST</div>
                                        <div className="nextButton" onClick={() => submitBooking()}>Request to Book</div>
                                        <div></div>
                                    </div>
                                    <div></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    }</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default scheduleBooking;
