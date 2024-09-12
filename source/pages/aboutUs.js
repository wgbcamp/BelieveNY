import React from 'react'
import DescriptionBox from '../components/descriptionBox';
import PersonCard from '../components/personCard';
import BNYLogoFull from '../images/general/BNYLogoFull-02.png';
import BelieveNyBylaws from "../documents/BelieveNyBylaws.pdf";
import CC from "../documents/CC_BELIEVE NEW YORK PHILANTHROPIES.pdf";
import Nicole from "../images/general/nicole.jpeg";
import Zach from "../images/general/zach.webp";
import Chiara from "../images/general/chiara.webp";
import Rebecca from "../images/general/rebecca.webp";
import Tristan from "../images/general/tristan.png";
import Cameron from "../images/general/Cameron.png";
import Shyanne from "../images/general/shyanne.webp";
import Kathryn from "../images/general/kathryn.png";
import Warren from "../images/general/warren.jpg";
import Heather from "../images/general/heather.webp";
import Anh from "../images/general/anh.webp";
import Li from "../images/general/Li-ann.jpeg";
import Zenaida from "../images/general/zenaida.webp";
import David from "../images/general/david.webp";
import Xiaotian from "../images/general/xiaotian.webp";
import Joe from "../images/general/joe.jpg";
import Chris from "../images/general/chris.jpg";
import Ashley from "../images/general/ashley.jpeg";
import Savannah from "../images/general/savannah.jpeg";

const people = [
    {name: "Nicole Bulanchuk", title: "President & Executive Director", pronoun: "(she/her)", photo: Nicole, story: "Nicole is a born and raised New Yorker and has lived all over the state including Long Island, Queens, Brooklyn, Albany, and Manhattan. Nicole founded Believe New York after seeing and experiencing first-hand the struggle many New Yorkers live through. Nicole is currently a Clinical Psychology PhD student at Fairleigh Dickinson. She graduated from Columbia University with her masters. Nicole is committed to improving the lives of all people and has always volunteered and worked with nonprofits and community organizations including Columbia Health Sexual Violence Response, The ETS Sponsorship Program, NAMI-NYS, Save the Children, Care International, The Nature Conservancy, ASPCA, Green Peace, Berny's Hope, the Community Emergency Response Team, West Albany FD, Middle Earth Peer-Assistance Program, Women in Need Shelter, and several Rescue Missions. Nicole aspires to develop and expand Believe NY until we are a household charity name. She aims to serve under-resourced areas around the US and world.", email: "nicole@believeny.org"}, 
    {name: "Heather Bowen", title: "Vice President", photo: Heather, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Zach Koshgarian", title: "Treasury & Secretary", pronoun: "(he/him)", photo: Zach, story: "Originally from Kansas, Zach moved to New York City in 2018 for a job opportunity. He got his undergraduate from the University of Kansas studying political science and environmental science. Zach is currently finishing his masters at The New School in Environmental Policy and Sustainability Management with a minor in Design and Urban Justice. At Believe New York, Zach, along with other Believe members, are beginning an urbanized sustainable farming project that provides low to no cost, healthy produce to low-income and food-insecure individuals across New York City. In addition, Zach oversees the neighborhood and park cleanup events carried out across New York City. Following graduate school, Zach intends to complete another masters or pursue a Ph.D. while continuing his work with Believe New York.", email: "zach@believeny.org"},
    {name: "Chiara Lier", title: "Operations Associate", photo: Chiara, pronoun: "(she/her)",  story: "Chiara (She/They) was raised in France and currently works as a case manager with Safe Horizon in the Family Justice Center in Brooklyn. She has a bachelor's degree in Psychology and Sociology, a master’s degree in psychology, and a certificate in Sexuality, Women, and Gender studies with an LGBTQ+ focus. She worked as a research assistant in a wide variety of psychology research laboratories, and she conducted her master’s thesis on the lack of diversity in sampling methods within the literature on treatment effectiveness for survivors of sexual assaults. She is also currently volunteering with Crime Victims Treatment Center, where she helps victims of domestic violence or sexual assault navigate the hospital setting and where she was trained in crisis counseling and advocacy. Chiara aspires to become a Clinical Psychologist focused on helping LGBTQ+ populations and victims of domestic violence or sexual assault and wishes to work around the world with doctors without borders to help women access mental health services.", email: "chiara@believeny.org"},
    {name: "Tristan Broomes", title: "Community Liaison", pronoun: "(he/him)",  photo: Tristan, story: "", email: "tristan@believeny.org"},
    {name: "Cameron Reicher", title: "Program Coordinator", photo: Cameron, pronoun: "(he/him)",  story: "", email: "Cameron@believeny.org"},
    {name: "Shyanne Francis", title: "Program Coordinator", photo: Shyanne, pronoun: "(she/her)",  story: "", email: "shyanne@believeny.org"},
    {name: "Rebecca Blyakher", title: "Operations Associate", photo: Rebecca, pronoun: "(she/her)",  story: "", email: "rebecca@believeny.org"},
    {name: "Warren Brown", title: "Web Developer & Manager", photo: Warren, pronoun: "(he/him)",  story: "", email: "warrengbrn@gmail.com"},
    {name: "Anh Le", title: "Board Member", photo: Anh, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Li-Ann Ting", title: "Board Member", photo: Li, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Zenaida Rodriguez", title: "Board Member", photo: Zenaida, pronoun: "(she/her)",  story: "", email: ""},
    {name: "David Wiecks", title: "Board Member", photo: David, pronoun: "(he/him)",  story: "", email: ""},
    {name: "Xiaotian Chang", title: "Research Coordinator", photo: Xiaotian, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Joe Lebers", title: "Tech Consultant", photo: Joe, pronoun: "(he/him)",  story: "", email: ""},
    {name: "Chris Kang", title: "Research Coordinator & Senior Trainer", photo: Chris, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Savannah Lynn", title: "Advocate Coordinator", photo: Savannah, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Ashley Fuentes-Miranda", title: "Advocate Coordinator", photo: Ashley, pronoun: "(she/her)",  story: "", email: ""},
    ];

const aboutUs = () => {

    return(
        <div>
            <div className="simpleFlex">
                <div className="maxWidth width80Per">
                <div className="bigLogo">
                        <img className="logoResize" src={BNYLogoFull}></img>
                </div>
                <div className="majorQuoteFlex">
                    <div className="majorQuote">Progress starts here.</div>
                </div>
                <div className="dividerFlex">
                    <div className="divider"></div>
                </div>
                <div className="introTitleContainer">
                    <div className="introTitle">
                    Who is Believe New York?
                    </div>
                </div>
                <p></p>
            <DescriptionBox/> 
                <div className='cardGrid'>
                {people.map((value) => (
                    <PersonCard aboutUs={{name: value.name, title: value.title, pronoun: value.pronoun, photo: value.photo, email:value.email, story: value.story}} key={value.toString()}/>
                ))}
                </div>

                <div className='simpleTitle padTop80 whiten'>
                    <div className='simpleFlex'>
                    Legal Documents
                    </div>
                    <div className='simpleFlex size22Font padTop20 centerText'>View Believe New York's Bylaws and legal documentation</div>
                </div>
                <div className="lawGrid mb-5 pb-5">
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