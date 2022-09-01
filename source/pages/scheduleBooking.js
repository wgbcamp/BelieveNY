import React, { useState } from 'react'
import '../css/scheduleBooking.css'

const timeValues = ["Morning", "Afternoon", "Evening"];
const morningTimes = ["9:00 am", "10:00 am", "11:00 am"];
const afternoonTimes = ["12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm"];
const eveningTimes = ["6:00 pm", "7:00 pm", "8:00 pm"];

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];



//gets all the values of the days of the year
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
console.log(now.toDateString().slice(0,3));

//finds starting day to place on calendar
var todayValue;
const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
for (var i=0; i<week.length; i++){
    if(now.toDateString().slice(0,3) === week[i]){
        todayValue = i;
    }
}

//pushes all the days of the current month into array
var thisMonth = monthDays(now.getFullYear(), now.getMonth());
console.log(thisMonth);

//pushes the end of the previous month into the start of the thisMonth array equivalent to the open calendar spaces
var prevMonth = monthDays(now.getFullYear(), now.getMonth()-1).slice(-todayValue);
console.log(prevMonth);
thisMonth = prevMonth.concat(thisMonth);
console.log(thisMonth);

//pushes the start of the next month to the end of the thisMonth array equivalent to the open calendar spaces
var nextMonth = monthDays(now.getFullYear(), now.getMonth()+1).slice(0,42-thisMonth.length);
console.log(nextMonth);
thisMonth = thisMonth.concat(nextMonth);
console.log(thisMonth);

const scheduleBooking = () => {

    var [currMonth, newMonValue] = useState(month[new Date().getMonth()]);
    var [currYear, newYrValue] = useState(new Date().getFullYear());

    function changeMonth(data){

        var value = 1;
        if (data === "minus"){
            value = -1;
        }
        
        var arrayValue = month.indexOf(currMonth)+value;
        value = month[arrayValue];
        if (arrayValue > 11){
            value = month[0];
            newYrValue(currYear + 1);
        }
        
        if (arrayValue < 0){
            value = month[11]
            newYrValue(currYear - 1);
        }


        console.log(value);
        newMonValue(value);
    }

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                    <div className="padTop40"></div>
                    <div className="simpleTitle">Schedule Online</div>
                    <div className="padTop40"></div>
                    <div className="calendarAppGrid">
                        <div className="appCol1">
                            <div className="mtSwitchGrid padBottom40">
                                <div className="size22Font">{currMonth} {currYear}</div>
                                <div className="mtArrow" onClick={() => changeMonth("minus")}><i className="fa-solid fa-caret-left fa-xl"></i></div>
                                <div className="mtArrow" onClick={() => changeMonth("plus")}><i className="fa-solid fa-caret-right fa-xl"></i></div>
                                <div></div>
                                <div className='mtToday'>Today</div>
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
                                {thisMonth.map((value) => (
                                    <div className="calTile">{value.slice(8,10)}</div>
                                ))}
                                
                            </div>
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
                        <div className="appCol2">
                        <div className="infoBoxGrid">
                            <div></div>
                                <div className="infoBox">
                                    <div></div>
                                    <div className="ibTitle">
                                        The Open Space
                                    </div>
                                    <div className="timeInfo">45 min</div>
                                    <div className="dateSelected">September 03, 2022</div>
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
    )
}

export default scheduleBooking;