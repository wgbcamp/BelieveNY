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
                    <u>BNY Success Stats</u>
                    <div className={`size18Font ${collapseStatus}`}>
                        <p>Successfully registered over 200 people in underserved areas of Brooklyn, Queens, Manhattan, and the Bronx to vote in the 2020 Presidential Election. Most of the individuals we registered were first-time voters and people of color.
                        </p>
                        <p>
                        Cooked and served over 750 hot meals to underserved individuals and families through our events, often partnering with local restaurants to serve. Restaurants include Lil’Frankies and Havana Central).
                        </p>
                        <p>
                        Partnered with a local hair salon, Cutler Salon, and provided free haircuts to over two dozen people experiencing homelessness at Washington Square Park.
                        </p>
                        <p>
                        Gave out thousands of articles of clothing, especially winter clothing items to individuals and families experiencing homelessness through our events. 
                        </p>
                        <p>
                        As of December 2022, Collected, donated, and delivered over $12,000 worth of nonperishable foods, groceries, essential products, and new and gently used clothing and shoes directly to individuals and families who seek these items and have no other methods of them through our Food First Program.
                        </p>
                        <p>
                        Collected, wrapped, and delivered gifts for 30 children and their single mothers experiencing extreme poverty during the 2021 holiday season and 34 children in 2022, totaling over 100 gifts during these years. 
                        </p>
                        <p>
                        Through our GetHelp service, we have had over 50 active Counselors available 24/7 to support your needs and connect you to the resources and programs that will improve your situation. 
                        </p>
                        <p>
                        Served dozens of individuals and families in extreme poverty or hardship by connecting them with safe housing, nutritional programs, legal services, therapy, medical services, and other resources in their area. 
                        </p>
                        <p>
                        There are over 60 appointments available in any given week for anyone who needs to talk to someone and needs mental health support through The Open Space.
                        </p>
                        <p>
                        Regularly hosting community cleanups in underserved areas of NYC including in Brooklyn, Queens, and The Bronx, partnering with the Department of Sanitation (DSNY) to obtain safe equipment. 
                        </p>
                        <p>
                        Cleaned up over 2,000 lbs of trash during community clean ups.
                        </p>
                        <p>
                        During all in-person events, we provide free PPE including masks (reusable and surgical) and hand sanitizer to our volunteers and recipients to ensure wellness safety. 
                        </p>
                        <p>
                        Collected dozens of first aid kits and Narcan kits for the East Village and Washington Sq Park mutual aid to distribute to people experiencing homelessness and substance use disorder in downtown Manhattan. 
                        </p>
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