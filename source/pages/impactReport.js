import React, {useState, useEffect} from 'react'
import QuoteSlider from '../components/quoteSlider'


const impactReport = () => {

    const [textValue, updateTV] = useState("Expand");
    const [collapseStatus, updateCS] = useState("collapsable400px");

    function swapText(){
        var x = textValue;
        if(x === "Expand"){
            x = "Collapse";
        }else{
            x = "Expand";
        }
        if(x === "Expand"){
            updateCS("collapsable400px");
        }else{
            updateCS("");
        }
        updateTV(x);
        document.getElementById('successStats').scrollIntoView();

    }
    return(
            <div className="simpleFlex">
                <div className="maxWidth pdfWidth">
                <div className="impactTitle">Our Success</div>
                <div className='impactItalicized'>
                    <div></div>
                    <div className="">Note: These are quotes direct from clients with permission to share, the identity of these individuals has been hidden to protect their privacy</div>
                </div>
                <QuoteSlider/>
                <div className="impactSubtitle size24Font" id="successStats">
                    <u>Other Successes</u>
                    <div className={`${collapseStatus}`}>
                       <div className="purpleDate">2022</div>
                            <ul className="size18Font">
                                <li>Fed and clothed over 100 people experiencing homelessness in Tompkins Sq Park at our Valentine’s Day spread the love event</li>
                                <li>Hosted a community clean up by Maria Hernandez Park, Brooklyn on April 24th</li>
                                <li>Hosted a summer clothing and supplies drive for children in shelters and transitional homes, collecting hundreds of items (school supplies, art supplies, and summer clothing) for children in two different shelters and one community center in Manhattan</li>
                                <li>Hosted a community clean up by Arthur S. Somers Park, Brooklyn on August 6th </li>
                                <li>Delivered 34 children and their single mothers living in shelters, or transitional homes, holiday homes holiday gifts, totally 61 gifts </li>
                                <li>Collected 4 dozen first aid kits and Narcan kits for the East Village and Washington Sq Park mutual aid to distribute to almost 50 people experiencing homelessness and substance use disorder in downtown Manhattan </li>
                            </ul>
                       <div className="purpleDate">2021</div>
                        <ul className="size18Font">
                            <li>Fed over 100 people at our “Spread the Love” Valentine’s Day event in Tompkins Sq Park
                                <ul>
                                    <li>During this same event, we handed out dozens of items of PPE, hand sanitizer, and hand warmers to event attendees</li>
                                </ul>
                            </li>
                            <li>In early March, partnered with The Ellen Macguire Foundation to serve approximately 30 people experiencing homelessness in Midtown Manhattan food and warm clothing
                                <ul>
                                    <li>During this same event, we handed out dozens of items of PPE, hand sanitizer, and hand warmers to event attendees</li>
                                </ul>
                            </li>
                            <li>Hosted a community clean up in Bushwick (Myrtle-Wyckoff), Brooklyn on March 21</li>
                            <li>Hosted a community clean up in St. Mary’s Park, South Bronx on April 25th</li>
                            <li>Executive Director, Assistant Director, and several volunteers participated in the week long Global Mental Health Summer Institute Training at Columbia University</li>
                            <li>Fed and clothed over 100 people experiencing homelessness in Washington Sq Park at our June 13th event</li>
                            <li>At this same event, we partnered with a local hair salon and gave out over 2 dozen haircuts to people experiencing homelessness</li>
                            <li>Fed over 75 people at a meal hand out in Lincoln Center on Sept 21. The traffic was a bit slow at Lincoln Center, so several of our volunteers packed up the food and gave it out to people experiencing homelessness at Penn Station and Bryant Park
                                <ul>
                                    <li>During this same event, we handed out dozens of items of PPE, hand sanitizer, and hand warmers to event attendees</li>
                                </ul>
                            </li>
                            <li>Hosted a community clean up in Hylan Park, The Bronx on Oct 3rd</li>
                            <li>Served over 80 hot meals and hundreds of warm clothing items to people experiencing homelessness during our Thanksgiving meal and clothing hand out on November 28 in Tompkins Sq Park
                                <ul>
                                    <li>During this same event, we handed out dozens of items of PPE, hand sanitizer, and hand warmers to event attendees</li>
                                </ul>
                            </li>
                            <li>Delivered 30 children and their single mothers living in shelters, or transitional homes, holiday homes holiday gifts, totaling 42 gifts</li>
                        </ul>
                       <div className="purpleDate">2020</div>
                       <ul className="size18Font">
                            <li>Fed over 75 people experiencing homelessness at Herbert Von King Park in Brooklyn at our Thanksgiving Day meal hand out
                                <ul>
                                    <li>During this same event, we handed out dozens of items of PPE, hand sanitizer, and hand warmers to event attendees</li>
                                </ul>
                            </li>
                            <li>Registered over 200 people to vote in underserved areas in Brooklyn, Manhattan, Queens, and The Bronx, majority of people who were first time votes and people of color 
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="expansionButtonContainer">
                    <div className="expandAbove900px" onClick={() => swapText()}>{textValue}</div>
                </div>
                <div className="impactTitle">Impact Report</div>
                <iframe className="pdfViewer"
                    src="https://drive.google.com/file/d/1NDOvAUNAPM7jPjuuaeAqumV8yQnPNzxx/preview"
                    height="100%"
                    width="100%"
                ></iframe>
                </div>
            </div>
    )
}

export default impactReport;
