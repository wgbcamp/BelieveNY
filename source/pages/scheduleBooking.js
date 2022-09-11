import React, { useState, useEffect } from 'react'
import '../css/scheduleBooking.css'

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const longMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const longWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

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
var customMonth = month.indexOf(actualDate.slice(4,7));
var customYear = actualDate.slice(-4);




const scheduleBooking = () => {

    const timeValues = ["Morning", "Afternoon", "Evening"];
    const morningTimes = ["9:00 am", "10:00 am", "11:00 am"];
    const afternoonTimes = ["12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm"];
    const eveningTimes = ["6:00 pm", "7:00 pm", "8:00 pm"];
    
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

        <div className={`calTile ${thisMonth.indexOf(value)} ${value.slice(11,15)} ${value.length > 5 ? value.slice(4,7).concat(value.slice(8,10)): "invalid"}`} onClick={() => toggleSelection(thisMonth.indexOf(value), value.slice(0,15))} key={value.toString()}>{value.length > 5 ? value.slice(8,10) : value.slice(3,5)}</div>
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
        }
    }
    
    useEffect(() => {
        
    fillCalendar();

    }, [])
    

    var [calendarValue, newCalValue] = useState("");

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                    <div className="padTop40"></div>
                    <div className="simpleTitle bookingTitle">Schedule Online</div>
                    <div className="padTop40"></div>
                    <div className='simpleFlex'>
                    <div className="calendarAppGrid">
                        <div className="appCol1">
                            <div className="mtSwitchGrid padBottom40">
                                <div className="size22Font">{currMonth} {currYear}</div>
                                <div className="mtArrow" onClick={() =>fillCalendar(-1)}><i className="fa-solid fa-caret-left fa-xl"></i></div>
                                <div className="mtArrow" onClick={() => fillCalendar(1)}><i className="fa-solid fa-caret-right fa-xl"></i></div>
                                <div></div>
                                <div className='mtToday' onClick={() => fillCalendar(0)}>Today</div>
                            </div>
                        
                            <div className="dayGrid padBottom20">
                                <b>Sun.</b>
                                <b>Mon.</b>
                                <b>Tue.</b>
                                <b>Wed.</b>
                                <b>Thu.</b>
                                <b>Fri.</b>
                                <b>Sat.</b>
                            </div>
                            <div className="calendar">
                             {calendarValue}
                                
                            </div>
                            <div className='simpleFlex'>
                            <div className='dayPeriodGrid'>
                                <div className="morning">
                                    <div className=''></div>
                                    <div>Morning</div>
                                    {morningTimes.map((value) => (
                                        <div className="mStyle" key={value}>{value}</div>
                                    ))}
                                </div>
                                <div className="afternoon">
                                    <div>Afternoon</div>
                                    {afternoonTimes.map((value) => (
                                        <div className="aStyle" key={value}>{value}</div>
                                    ))}
                                </div>
                                <div className="evening">
                                    <div>Evening</div>
                                    {eveningTimes.map((value) => (
                                        <div className="eStyle" key={value}>{value}</div>
                                    ))}
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
                                    <div className="dateSelected">{superDate}</div>
                                    <div className="nextButton">Next</div>
                                    <div></div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default scheduleBooking;