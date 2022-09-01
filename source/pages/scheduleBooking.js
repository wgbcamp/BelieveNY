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
        dates.push(new Date(date));
        date.setDate(date.getDate() + 1);
    }
    return dates;
}
const now = new Date();
console.log(monthDays(now.getFullYear(), now.getMonth()));

//early testing for getting today button to select proper tile
console.log(new Date().getFullYear());
console.log(new Date().getMonth());
console.log(new Date().getDay());
console.log(new Date());






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
                                <div className="calTile">31</div>
                                <div className="calTile">1</div>
                                <div className="calTile">2</div>
                                <div className="calTile til1">3</div>
                                <div className="calTile">4</div>
                                <div className="calTile">5</div>
                                <div className="calTile">6</div>
                                <div className="calTile">7</div>
                                <div className="calTile">8</div>
                                <div className="calTile">9</div>
                                <div className="calTile">10</div>
                                <div className="calTile">11</div>
                                <div className="calTile">12</div>
                                <div className="calTile">13</div>
                                <div className="calTile">14</div>
                                <div className="calTile">15</div>
                                <div className="calTile">16</div>
                                <div className="calTile">17</div>
                                <div className="calTile">18</div>
                                <div className="calTile">19</div>
                                <div className="calTile">20</div>
                                <div className="calTile">21</div>
                                <div className="calTile">22</div>
                                <div className="calTile">23</div>
                                <div className="calTile">24</div>
                                <div className="calTile">25</div>
                                <div className="calTile">26</div>
                                <div className="calTile">27</div>
                                <div className="calTile">28</div>
                                <div className="calTile">29</div>
                                <div className="calTile">30</div>
                                <div className="calTile">31</div>
                                <div className="calTile">1</div>
                                <div className="calTile">2</div>
                                <div className="calTile">3</div>
                                <div className="calTile">4</div>
                                <div className="calTile">5</div>
                                <div className="calTile">6</div>
                                <div className="calTile">7</div>
                                <div className="calTile">8</div>
                                <div className="calTile">9</div>
                                <div className="calTile">10</div>
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