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
                    <div className={`size18Font ${collapseStatus}`}>
                       <div>2022</div>
                            <ul>
                                <li>Fed and clothed over 100 people experiencing homelessness in Tompkins Sq Park at our Valentine’s Day spread the love event</li>
                                <li>Hosted a community clean up by Maria Hernandez Park, Brooklyn on April 24th</li>
                                <li>Hosted a summer clothing and supplies drive for children in shelters and transitional homes, collecting hundreds of items (school supplies, art supplies, and summer clothing) for children in two different shelters and one community center in Manhattan</li>
                                <li>Hosted a community clean up by Arthur S. Somers Park, Brooklyn on August 6th </li>
                                <li>Delivered 34 children and their single mothers living in shelters, or transitional homes, holiday homes holiday gifts, totally 61 gifts </li>
                                <li>Collected 4 dozen first aid kits and Narcan kits for the East Village and Washington Sq Park mutual aid to distribute to almost 50 people experiencing homelessness and substance use disorder in downtown Manhattan </li>
                            </ul>
                       <div>2021</div>
                        <ul>
                            <li>Fed over 100 people at our “Spread the Love” Valentine’s Day event in Tompkins Sq Park
                                <ul>
                                    <li>
                                    During this same event, we handed out dozens of items of PPE, hand sanitizer, and hand warmers to event attendees
                                    </li>
                                </ul>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                       <div>2020</div>
                       <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
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