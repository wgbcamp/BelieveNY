import React from 'react'
import DescriptionBox from '../components/descriptionBox';
import PersonCard from '../components/personCard';
import EasyDropdown from '../components/easyDropdown';
import BNYLogoFull from '../../images/BNYLogoFull-02.png';
import nicole from '../../images/nicole.webp';
import sonny from '../../images/sonny.webp';
import zach from '../../images/zach.webp';
import chiara from '../../images/chiara.webp';
import BelieveNyBylaws from "../../downloads/BelieveNyBylaws.pdf";
import CC from "../../downloads/CC_BELIEVE NEW YORK PHILANTHROPIES.pdf";


const people = [
    {name: "Nicole Bulanchuk", title: "Executive Director, President, Founder", photo: nicole, story: "Nicole is a born and raised New Yorker and has lived all over the state including Long Island, Queens, Brooklyn, Albany, and Manhattan. Nicole founded Believe New York after seeing and experiencing first-hand the struggle many New Yorkers live through. Nicole is currently a Clinical Psychology PhD student at Fairleigh Dickinson. She graduated from Columbia University with her masters. Nicole is committed to improving the lives of all people and has always volunteered and worked with nonprofits and community organizations including Columbia Health Sexual Violence Response, The ETS Sponsorship Program, NAMI-NYS, Save the Children, Care International, The Nature Conservancy, ASPCA, Green Peace, Berny's Hope, the Community Emergency Response Team, West Albany FD, Middle Earth Peer-Assistance Program, Women in Need Shelter, and several Rescue Missions. Nicole aspires to develop and expand Believe NY until we are a household charity name. She aims to serve under-resourced areas around the US and world."}, 

    {name: "Sonny Curtin", title: "Director of Development, Vice President, Co-Founder", photo: sonny, story: "Sonny (They/Them) has lived all over the country, in many impoverished areas, and has seen first hand how marginalized groups are systematically kept from prospering. Sonny attended the Art Institute of Austin for a Bachelor's of Arts in Digital Filmmaking and Video Production. After college they worked for tech companies, start ups, and then nonprofits. They have over a decade of experience in digital marketing, fundraising, policy, corporate building, IT, and website maintenance. Sonny has worked for nonprofits such as The American Botanical Council, ASPCA, The Nature Conservancy, and Green Peace."}, 
    {name: "Zach Koshgarian", title: "Director of Environmental Impact and Sustainability, Secretary and Treasurer, Co-Founder", photo: zach, story: "Originally from Kansas, Zach moved to New York City in 2018 for a job opportunity. He got his undergraduate from the University of Kansas studying political science and environmental science. Zach is currently finishing his masters at The New School in Environmental Policy and Sustainability Management with a minor in Design and Urban Justice. At Believe New York, Zach, along with other Believe members, are beginning an urbanized sustainable farming project that provides low to no cost, healthy produce to low-income and food-insecure individuals across New York City. In addition, Zach oversees the neighborhood and park cleanup events carried out across New York City. Following graduate school, Zach intends to complete another masters or pursue a Ph.D. while continuing his work with Believe New York."},
    {name: "Chiara", title: "Assistant Executive Director", photo: chiara, story: "Chiara (She/They) was raised in France and currently works as a case manager with Safe Horizon in the Family Justice Center in Brooklyn. She has a bachelor's degree in Psychology and Sociology, a master’s degree in psychology, and a certificate in Sexuality, Women, and Gender studies with an LGBTQ+ focus. She worked as a research assistant in a wide variety of psychology research laboratories, and she conducted her master’s thesis on the lack of diversity in sampling methods within the literature on treatment effectiveness for survivors of sexual assaults. She is also currently volunteering with Crime Victims Treatment Center, where she helps victims of domestic violence or sexual assault navigate the hospital setting and where she was trained in crisis counseling and advocacy. Chiara aspires to become a Clinical Psychologist focused on helping LGBTQ+ populations and victims of domestic violence or sexual assault and wishes to work around the world with doctors without borders to help women access mental health services."}
    ];

const legal = [
    {title: "OFFICES", content: `The principal office of Believe New York Philanthropies, Inc., (the “Corporation”) will be located at such place in the City of New York, State of New York as the Board of Directors (referred to in these By-Laws as the “Board of Directors” or the “Board”) may from time to time determine.  The Corporation may also have other offices at such other places both within and without the State of New York as the Board of Directors may from time to time determine or the business of the Corporation may require.`
    },
    {title: "NO MEMBERS", content: `In accordance with the provisions of Section 601(a) of the Not-for-Profit Corporation Law of the State of New York (the “NPCL”), the Corporation has no members.`

    },
    {title: "BOARD OF DIRECTORS", content: ``

    },
    {title: "OFFICERS", content: ``

    },
    {title: "CONFLICT OF INTEREST POLICY AND BOARD CONFIDENTIALITY POLICY", content: ``

    },
    {title: "STAFF", content: ``

    },
    {title: "EXECUTION OF INSTRUMENTS", content: ``

    },
    {title: "INDEMNIFICATION", content: ``

    },
    {title: "GRANTS AND OTHER EXPENDITURES FOR THE ADVANCEMENT OF CHARITABLE PURPOSES", content: ``

    },
    {title: "GENERAL PROVISIONS", content: ``

    },
    {title: "AMENDMENTS", content: ``

    },
    
]

const aboutUs = () => {

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                <div className="bigLogo">
                        <img className="logoResize" src={BNYLogoFull}></img>
                </div>
            <DescriptionBox/> 
                <div className='cardGrid'>
                {people.map((value) => (
                    <PersonCard aboutUs={{name: value.name, title: value.title, photo: value.photo, story: value.story}} key={value.toString()}/>
                ))}
                </div>

                <div className='simpleTitle padTop80'>
                    <div className='simpleFlex'>
                    Legal Documents
                    </div>
                    <div className='simpleFlex size22Font padTop20 centerText'>View Believe New York's Bylaws and legal documentation</div>
                </div>
                <div className="lawGrid">
                    <a href={BelieveNyBylaws} download className="styleLink centerFlex">
                        <div
                        className="lawButton centerFlex">
                            <div>
                            Believe New York Bylaws
                            </div>
                        </div>
                    </a>
                    <a href={CC} download className="styleLink centerFlex">
                        <div
                        className="lawButton centerFlex">
                            <div>
                            Certificate of Incorporation
                            </div>
                        </div>
                    </a>
                </div>          
                </div>
            </div>
        </div>
    )
}

export default aboutUs;