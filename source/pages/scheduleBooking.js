import e from 'cors';
import React, { useState, useEffect } from 'react'

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
const now = new Date();
var actualDate = now.toDateString();
console.log(actualDate);
var tomorrow = new Date(now);
tomorrow.setDate(tomorrow.getDate() + 1);
var tomorrowDate = tomorrow.toString().slice(4,10).split(" ").join("");
var customMonth = month.indexOf(actualDate.slice(4,7));
var customYear = actualDate.slice(-4);

//set initial time for state function below
var initialTime = new Date().getHours();
if (initialTime > 12){
    initialTime = initialTime-12;
    initialTime = initialTime.toString() + ":00 PM";
}
if (initialTime === 12){
    initialTime = initialTime.toString() + ":00 PM";
}
if (initialTime < 12){
    initialTime = initialTime.toString() + ":00 AM";
}


const scheduleBooking = () => {

    useEffect(() => {
        
        getBookings();
    
        }, [])

    var z = [];
    var blockedTime = [];

    function getBookings(){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/getBookings", true);
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
                console.log("#########");
                console.log(blockedTime);
            }
        }
    }

    //update actual time to prevent submissions within 24 hours
    var [actualTime, updateAT] = useState(initialTime);
    const interval = setInterval(updateTime, 60000);
    function updateTime(){
        initialTime = new Date().getHours();
        if (initialTime > 12){
            initialTime = initialTime-12;
            initialTime = initialTime.toString() + ":00 PM";
        }
        if (initialTime === 12){
            initialTime = initialTime.toString() + ":00 PM";
        }
        if (initialTime < 12){
            initialTime = initialTime.toString() + ":00 AM";
        }
        updateAT(initialTime);
        console.log("Let me remember...")
    }

    var schedule = [
        {"day":"Mon","time":["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM"]},
        {"day":"Tue","time":["8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"]},
        {"day":"Wed","time":["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM","9:00 PM"]},
        {"day":"Thu","time":["10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM"]},
        {"day":"Fri","time":["10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM","8:00 PM"]},
        {"day":"Sat","time":["9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM"]},
        {"day":"Sun","time":["12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM"]}];    

       
    
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
    
     function scrollToIBG(){
        document.getElementById('ibg').scrollIntoView({
            behavior: 'smooth' 
        });
    }
    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
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

    function submitBooking(){
        if (name !== "" && email !== "" && phone !== "" && message !== "" && superDate !== "" && timeChosen !== ""){
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/booking", true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify({
                type: "booking",
                name: name,
                email: email,
                phone: phone,
                message: message,
                date: superDate,
                time: timeChosen
            }));
            xhr.onreadystatechange = () => {
                if(xhr.readyState === XMLHttpRequest.DONE){
                    alert(xhr.responseText);
                    location.reload();
                }
            }
            
        }else{
            alert("Please fill out every field below before booking your appointment.");
        }

    }

    var [currMonth, changeMonth] = useState(0);
    var [currYear, changeYear] = useState(0);
    var [superDate, setSuperDate] = useState(actualDate);

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
            changeMonth(startDateArray[i].slice(4,7));
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

        console.log("test")
        console.log(thisMonth[i].slice(0,15))


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

    console.log("Here are days that must be greyed out:")
    console.log(invalidDays);
    console.log(thisMonth)
    for (var i=0; i<invalidDays.length; i++){
        thisMonth.splice(i, 1, invalidDays[i])
    }
    console.log(thisMonth);

    //maps the values to the calendar tiles
    newCalValue(thisMonth.map((value) => (

        <div className={`calTile ${thisMonth.indexOf(value)} ${value.slice(0,3)} ${value.slice(11,15)} ${value.length > 5 ? value.slice(4,7).concat(value.slice(8,10)): "invalid"}`} onClick={() => { toggleSelection(thisMonth.indexOf(value), value.slice(0,15)); updateTC(""); updateST(true);}} key={value.toString()}>{value.length > 5 ? value.slice(8,10) : value.slice(3,5)}</div>
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
        
        var dPart1 = longWeek[week.indexOf(data2.slice(0,3))] + ", ";
        var dPart2 = longMonth[month.indexOf(data2.slice(4,7))] + " ";
        var dPart3 = data2.slice(8,10) + ", ";
        var dPart4 = data2.slice(11,15);
        
        if (dPart1 !== "undefined, "){
            console.log(dPart1)
            setSuperDate(dPart1.concat(dPart2.concat(dPart3.concat(dPart4))));
            var tempDate = dPart1.concat(dPart2.concat(dPart3.concat(dPart4)));
            var tileTomorrowDate = dPart2.slice(0,3).concat(dPart3.slice(0,2));
            console.log(tempDate);
            console.log(tempDate.concat(" ", "1:00 PM"));

            for (var i=0;i<schedule.length; i++){
                console.log("ugh");
                if (schedule[i].day === dPart1.slice(0,3)){
                    updatemTimeslots(morningTimes.map((value) => (
                        <div className={`${schedule[i].time.includes(value) && !blockedTime.includes(tempDate.concat(" ", value)) && !(tomorrowDate === tileTomorrowDate && ((actualTime.slice(-2) === value.slice(-2)) && (actualTime.slice(0,2).split(":").join("")*1) < 12 && (actualTime.slice(0,2).split(":").join("")*1) >= value.slice(0,2).split(":").join("") || (actualTime.slice(-2) === "PM" && value.slice(-2) === "AM") || (actualTime.slice(-2) === "PM" && (actualTime.slice(0,2).split(":").join("")*1) < 12 && value.slice(0,2).split(":").join("") === "12"))) ? 'mStyle' : 'invalidTime'}`} onClick={(e) => e.target.classList.contains("mStyle") ? updateTC(value) : null} key={value}>{value}</div>
                    )));
                    updateaTimeslots(afternoonTimes.map((value) => (
                        <div className={`${schedule[i].time.includes(value) && !blockedTime.includes(tempDate.concat(" ", value)) && !(tomorrowDate === tileTomorrowDate && ((actualTime.slice(-2) === value.slice(-2)) && (actualTime.slice(0,2).split(":").join("")*1) < 12 && (actualTime.slice(0,2).split(":").join("")*1) >= value.slice(0,2).split(":").join("") || (actualTime.slice(-2) === "PM" && value.slice(-2) === "AM") || (actualTime.slice(-2) === "PM" && (actualTime.slice(0,2).split(":").join("")*1) < 12 && value.slice(0,2).split(":").join("") === "12"))) ? 'mStyle' : 'invalidTime'}`} onClick={(e) => e.target.classList.contains("mStyle") ? updateTC(value) : null} key={value}>{value}</div>
                    )));
                    updateeTimeslots(eveningTimes.map((value) => (
                        <div className={`${schedule[i].time.includes(value) && !blockedTime.includes(tempDate.concat(" ", value)) && !(tomorrowDate === tileTomorrowDate && ((actualTime.slice(-2) === value.slice(-2)) && (actualTime.slice(0,2).split(":").join("")*1) < 12 && (actualTime.slice(0,2).split(":").join("")*1) >= value.slice(0,2).split(":").join("") || (actualTime.slice(-2) === "PM" && value.slice(-2) === "AM") || (actualTime.slice(-2) === "PM" && (actualTime.slice(0,2).split(":").join("")*1) < 12 && value.slice(0,2).split(":").join("") === "12"))) ? 'mStyle' : 'invalidTime'}`} onClick={(e) => e.target.classList.contains("mStyle") ? updateTC(value) : null} key={value}>{value}</div>
                    )));

                    break;
                }
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
                    <div className='weight500 lineHeight25'>Important Disclaimer: The Open Space is not a substitute for clinical mental health treatment and/or a cure for any mental health issues and/or disorders. Although our Counselors are comprehensively trained, they are not certified nor licensed mental health specialists. They are trained in active listening techniques, empathy, and compassion and will provide support and resource referrals as needed.</div>
                    <div className="padTop80"></div>
                    
                    
                    <div className='simpleFlex'>
                        
                    <div>{calendarSwitch ?
                        <div className="calendarAppGrid">
                            <div className="appCol1">
                            <div className="bookingTitle size30Font">Schedule Online</div>
                            <div className="padTop80"></div>
                                <div className="simpleFlex">
                                    <div className="mtSwitchGrid padBottom40">
                                        <div className="size22Font">{currMonth} {currYear}</div>
                                        <div className="mtArrow" onClick={() =>fillCalendar(-1)}><i className="fa-solid fa-caret-left fa-xl"></i></div>
                                        <div className="mtArrow" onClick={() => fillCalendar(1)}><i className="fa-solid fa-caret-right fa-xl"></i></div>
                                        <div></div>
                                        <div className='mtToday' onClick={() => {fillCalendar(0); getToday();}}>Today</div>
                                    </div>
                                </div>
                            <div className='simpleFlex'>
                                <div className="dayGrid padBottom20">
                                    <b>Sun.</b>
                                    <b>Mon.</b>
                                    <b>Tue.</b>
                                    <b>Wed.</b>
                                    <b>Thu.</b>
                                    <b>Fri.</b>
                                    <b>Sat.</b>
                                </div>
                            </div>
                                <div className='simpleFlex'>
                                <div className="calendar">
                                {calendarValue}
                                </div>
                                </div>
                                <div className='simpleFlex'>
                                <div className={`dayPeriodGrid ${slotTitles === true ? "" : "visibleNo"}`}>
                                    <div className="morning">
                                        <div>Morning</div>
                                        {morningslots}
                                    </div>
                                    <div className="afternoon">
                                        <div>Afternoon</div>
                                        {afternoonslots}
                                    </div>
                                    <div className="evening">
                                        <div>Evening</div>
                                        {eveningslots}
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="appCol2">
                            <div className="infoBoxGrid">
                                <div></div>
                                    <div className="infoBox">
                                        <div></div>
                                        <div className="ibTitle">
                                            The Open Space
                                        </div>
                                        <div className="timeInfo">45 min</div>
                                        <div className="dateSelected">{superDate} {timeChosen}</div>
                                        <div className={`${superDate !== "" && timeChosen !== "" ? "nextButton" : "visibleNo"}`} onClick={() => checkTime()}>Next</div>
                                        <div></div>
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
                        <div className='bCol1'>Add Your Message</div>
                        <textarea className='bCol1 borderTopSolid' onChange={updateMessage} value={message}></textarea>
                        <div className="simpleFlex confirmationBox">
                        <div className="infoBoxGrid" id="ibg">
                                <div></div>
                                    <div className="infoBox">
                                        <div></div>
                                        <div className="ibTitle">
                                            The Open Space
                                        </div>
                                        <div className="timeInfo">45 min</div>
                                        <div className="dateSelected">{superDate} {timeChosen}</div>
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