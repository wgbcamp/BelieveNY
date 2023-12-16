import React from 'react'
import DescriptionBox from '../components/descriptionBox';
import PersonCard from '../components/personCard';
import BNYLogoFull from '../images/general/BNYLogoFull-02.png';
import BelieveNyBylaws from "../documents/BelieveNyBylaws.pdf";
import CC from "../documents/CC_BELIEVE NEW YORK PHILANTHROPIES.pdf";
import Nicole from "../images/general/nicole.webp";
import Sonny from "../images/general/sonny.webp";
import Zach from "../images/general/zach.webp";
import Chiara from "../images/general/chiara.webp";
import Melanie from "../images/general/melanie.webp";
import Rebecca from "../images/general/rebecca.webp";
import Tristan from "../images/general/tristan.png";
import Cameron from "../images/general/Cameron.png";
import Shyanne from "../images/general/shyanne.jpg";
import Kathryn from "../images/general/kathryn.png";
import Warren from "../images/general/warren.jpg";


const people = [
    {name: "Nicole Bulanchuk", title: "Executive Director, President, Founder", photo: Nicole, story: "Nicole is a born and raised New Yorker and has lived all over the state including Long Island, Queens, Brooklyn, Albany, and Manhattan. Nicole founded Believe New York after seeing and experiencing first-hand the struggle many New Yorkers live through. Nicole is currently a Clinical Psychology PhD student at Fairleigh Dickinson. She graduated from Columbia University with her masters. Nicole is committed to improving the lives of all people and has always volunteered and worked with nonprofits and community organizations including Columbia Health Sexual Violence Response, The ETS Sponsorship Program, NAMI-NYS, Save the Children, Care International, The Nature Conservancy, ASPCA, Green Peace, Berny's Hope, the Community Emergency Response Team, West Albany FD, Middle Earth Peer-Assistance Program, Women in Need Shelter, and several Rescue Missions. Nicole aspires to develop and expand Believe NY until we are a household charity name. She aims to serve under-resourced areas around the US and world.", email: "nicole@believeny.org"}, 
    {name: "Sonny Curtin", title: "Co-Founder and Director of Development", photo: Sonny, story: "Sonny (They/Them) has lived all over the country, in many impoverished areas, and has seen first hand how marginalized groups are systematically kept from prospering. Sonny attended the Art Institute of Austin for a Bachelor's of Arts in Digital Filmmaking and Video Production. After college they worked for tech companies, start ups, and then nonprofits. They have over a decade of experience in digital marketing, fundraising, policy, corporate building, IT, and website maintenance. Sonny has worked for nonprofits such as The American Botanical Council, ASPCA, The Nature Conservancy, and Green Peace.", email: "sonny@believeny.org"}, 
    {name: "Zach Koshgarian", title: "Co-Founder and Director of Environmental Impact ", photo: Zach, story: "Originally from Kansas, Zach moved to New York City in 2018 for a job opportunity. He got his undergraduate from the University of Kansas studying political science and environmental science. Zach is currently finishing his masters at The New School in Environmental Policy and Sustainability Management with a minor in Design and Urban Justice. At Believe New York, Zach, along with other Believe members, are beginning an urbanized sustainable farming project that provides low to no cost, healthy produce to low-income and food-insecure individuals across New York City. In addition, Zach oversees the neighborhood and park cleanup events carried out across New York City. Following graduate school, Zach intends to complete another masters or pursue a Ph.D. while continuing his work with Believe New York.", email: "zach@believeny.org"},
    {name: "Chiara Lier", title: "Assistant Executive Director", photo: Chiara, story: "Chiara (She/They) was raised in France and currently works as a case manager with Safe Horizon in the Family Justice Center in Brooklyn. She has a bachelor's degree in Psychology and Sociology, a master’s degree in psychology, and a certificate in Sexuality, Women, and Gender studies with an LGBTQ+ focus. She worked as a research assistant in a wide variety of psychology research laboratories, and she conducted her master’s thesis on the lack of diversity in sampling methods within the literature on treatment effectiveness for survivors of sexual assaults. She is also currently volunteering with Crime Victims Treatment Center, where she helps victims of domestic violence or sexual assault navigate the hospital setting and where she was trained in crisis counseling and advocacy. Chiara aspires to become a Clinical Psychologist focused on helping LGBTQ+ populations and victims of domestic violence or sexual assault and wishes to work around the world with doctors without borders to help women access mental health services.", email: "chiara@believeny.org"},
    {name: "Tristan Broomes", title: "Community Liaison, Fundraiser, and Community Advocate", photo: Tristan, story: "", email: "tristan@believeny.org"},
    {name: "Cameron Reicher", title: "Fundraising Coordinator", photo: Cameron, story: "", email: "Cameron@believeny.org"},
    {name: "Shyanne Francis", title: "Pathways Project Leader ", photo: Shyanne, story: "", email: "shyanne@believeny.org"},
    {name: "Kathryn Murphy", title: "Advocate Coordinator", photo: Kathryn, story: "", email: "kathryn@believeny.org"},
    {name: "Rebecca Blyakher", title: "Social Media Coordinator", photo: Rebecca, story: "", email: "rebecca@believeny.org"},
    {name: "Warren Brown", title: "Web Developer", photo: Warren, story: "", email: "warrengbrn@gmail.com"},
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
                    <div className="majorQuote">Progress starts with you and continues with all of us.</div>
                </div>
                <div className="dividerFlex">
                    <div className="divider"></div>
                </div>
                <div className="introTitleContainer">
                    <div className="introTitle">
                        Introduction to Who We Are
                    </div>
                </div>
                <p></p>
            <DescriptionBox/> 
                <div className='cardGrid'>
                {people.map((value) => (
                    <PersonCard aboutUs={{name: value.name, title: value.title, photo: value.photo, email:value.email, story: value.story}} key={value.toString()}/>
                ))}
                </div>

                <div className='simpleTitle padTop80 whiten'>
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