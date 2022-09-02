import React, { useState, useEffect } from 'react'
import '../css/scheduleBooking.css'

const month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

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
    const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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
            var prevMonth = monthDays(customYear-1, 11).slice(-todayValue);
        }else{
            var prevMonth = monthDays(customYear, customMonth-1).slice(-todayValue);
        }
        thisMonth = prevMonth.concat(thisMonth);
    }
    

    //pushes the start of the next month to the end of the thisMonth array equivalent to the open calendar spaces
    if (customMonth === 11){
        var nextMonth = monthDays(customYear+1, 0).slice(0,42-thisMonth.length);
    }else{
        var nextMonth = monthDays(customYear, customMonth+1).slice(0,42-thisMonth.length);
    }
    thisMonth = thisMonth.concat(nextMonth);

    newCalValue(thisMonth.map((value) => (
        <div className="calTile">{value.slice(8,10)}</div>
    )));  
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
                    <div className="simpleTitle">Schedule Online</div>
                    <div className="padTop40"></div>
                    <div className="calendarAppGrid">
                        <div className="appCol1">
                            <div className="mtSwitchGrid padBottom40">
                                {/* <div className="size22Font">{currMonth} {currYear}</div> */}
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