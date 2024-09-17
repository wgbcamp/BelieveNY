import React, {useState, useEffect} from 'react'

const quotes = [`"Before Believe New York I needed soap, deodorant, shampoo, and a toothbrush. I lost my job, couldn’t pay my rent, and lost my apartment. I also needed school supplies for all my children. Because of Believe New York, my kids were able to go to school with supplies and take a bath with body wash and put on deodorant and feel comfortable. We were able to find a new home. My hope is to find employment and we are still working on it. Other people should contact Believe so they can get some help like I did. I really want to thank Believe New York for their generosity." – The Bronx`, `“I say to people who have not contacted Believe New York, do not feel ashamed. We all need help sometimes. They are nice and they do not judge. Believe New York is changing lives.” - Queens`, `“Believe New York has helped me so much; I was able to talk to them openly. Share things I have not shared with others. They are really awesome.” – Brooklyn`, `“Because of Believe New York my situation has improved because I have the things that I needed so badly that I could not afford or find on my own. I feel that somebody cares.” – Manhattan`, `“I would tell anyone in my situation to reach out and look for help. It is out there, all we have to do is never give up. I am glad Believe New York is a nonprofit so they can help a lot more people like me.” – Queens`, `“No one else was going to help me, but the volunteers at Believe New York finally helped me navigate all the options I had. I still have a long way to go but I could not have gotten treatment without their help.” – New Jersey`, `“You guys are awesome, I’ve made it known. I wasn’t alone now, you are here. I will always be grateful to Believe New York, will never forget.” – Manhattan`];


const unused = () => {

    const [quoteCount, setQC] = useState(0);

    function alterQC(param){
        var x = quoteCount;
        if((x === 0) && (param === -1)){
            x = quotes.length-1;
            setQC(x);
        }else if((x === quotes.length-1) && (param === 1)){
            x = 0;
            setQC(x);
        }else{
            setQC(x + param);
        }
    }

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth ">
                    <div className="quoteGrid">
                    <div className="alignTop justifyCenter">
                        <i className="fa-solid fa-arrow-left fa-2xl" onClick={() => alterQC(-1)}></i>
                    </div>
                    <div className="quoteFont purpleQuote">{quotes[quoteCount]}</div>
                    <div className="alignTop justifyCenter">
                        <i className="fa-solid fa-arrow-right fa-2xl" onClick={() => alterQC(1)}></i>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default unused;
