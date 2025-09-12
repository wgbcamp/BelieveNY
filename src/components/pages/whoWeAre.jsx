import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import custom from '../../css/main.module.css';
import PersonCard from '../items/personCard';
import BNYLogoFull from '../../images/general/BNYLogoFull-02.png';
import BelieveNyBylaws from "../../documents/BelieveNyBylaws.pdf";
import CC from "../../documents/CC_BELIEVE NEW YORK PHILANTHROPIES.pdf";
import Nicole from "../../images/whoWeAre/nicole.jpeg";
import Chiara from "../../images/whoWeAre/chiara.webp";
import Rebecca from "../../images/whoWeAre/rebecca.webp";
import Tristan from "../../images/whoWeAre/tristan.png";
import Cameron from "../../images/whoWeAre/cameron.jpg";
import Shyanne from "../../images/whoWeAre/shyanne.webp";
import Warren from "../../images/whoWeAre/warren.jpg";
import Heather from "../../images/whoWeAre/heather.webp";
import Anh from "../../images/whoWeAre/anh.webp";
import Li from "../../images/whoWeAre/Li-ann.jpeg";
import Zenaida from "../../images/whoWeAre/zenaida.webp";
import David from "../../images/whoWeAre/david.webp";
import Xiaotian from "../../images/whoWeAre/xiaotian.webp";
import Joe from "../../images/whoWeAre/joe.jpg";
import Chris from "../../images/whoWeAre/chris.jpg";
import Ashley from "../../images/whoWeAre/ashley.jpeg";
import Savannah from "../../images/whoWeAre/savannah.jpeg";
import Elizabeth from "../../images/whoWeAre/elizabeth.jpg";
import Zhijiao from "../../images/whoWeAre/Zhijiao.jpg"; 
import Tiana from "../../images/whoWeAre/Tiana.png";
import Sandhya from "../../images/whoWeAre/Sandhya.jpg";
import Jared from "../../images/whoWeAre/jared.jpeg";

const people = [
    {name: "Nicole Bulanchuk", title: "Executive Director & President", pronoun: "(she/her)", photo: Nicole, story: "Nicole is a born and raised New Yorker and has lived all over the state including Long Island, Queens, Brooklyn, Albany, and Manhattan. Nicole founded Believe New York after seeing and experiencing first-hand the struggle many New Yorkers live through. Nicole is currently a Clinical Psychology PhD student at Fairleigh Dickinson. She graduated from Columbia University with her masters. Nicole is committed to improving the lives of all people and has always volunteered and worked with nonprofits and community organizations including Columbia Health Sexual Violence Response, The ETS Sponsorship Program, NAMI-NYS, Save the Children, Care International, The Nature Conservancy, ASPCA, Green Peace, Berny's Hope, the Community Emergency Response Team, West Albany FD, Middle Earth Peer-Assistance Program, Women in Need Shelter, and several Rescue Missions. Nicole aspires to develop and expand Believe NY until we are a household charity name. She aims to serve under-resourced areas around the US and world.", email: "nicole@believeny.org"}, 
    {name: "Anh Le", title: "Vice President", photo: Anh, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Heather Bowen", title: "Board Member", photo: Heather, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Cameron Reicher", title: "Program Manager for Core Services", photo: Cameron, pronoun: "(he/him)",  story: "", email: "cameron@believeny.org"},
    {name: "Shyanne Francis", title: "Program Coordinator", photo: Shyanne, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Jared Male", title: "Program Coordinator", photo: Jared, pronoun: "", story: "", email: ""},
    {name: "Warren Brown", title: "Website Manager & Developer", photo: Warren, pronoun: "(he/him)",  story: "", email: ""},
    {name: "Li-Ann Ting", title: "Board Member", photo: Li, pronoun: "(she/her)",  story: "", email: ""},
    {name: "David Wiecks", title: "Treasurer", photo: David, pronoun: "(he/him)",  story: "", email: ""},
    {name: "Xiaotian Chang", title: "Research Consultant", photo: Xiaotian, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Joe Lebers", title: "Technology Consultant", photo: Joe, pronoun: "(he/him)",  story: "", email: ""},
    {name: "Chris Kang", title: "Research Consultant", photo: Chris, pronoun: "(she/her)",  story: "", email: ""},
    {name: "Savannah Lynn", title: "Operations Consultant", photo: Savannah, pronoun: "(she/they)",  story: "", email: ""},
    {name: "Ashley Fuentes-Miranda", title: "Advocate Liaison & Board Secretary", photo: Ashley, pronoun: "(she/her)",  story: "", email: "ashley@believeny.org"},
    {name: "Elizabeth Krauthamer", title: "Marketing Manager", photo: Elizabeth, pronoun: "(she/her)", email: ""},
    {name: "Zhijiao Gao", title: "Project Manager", photo: Zhijiao, pronoun: "(she/her)", email: "zhijiao@believeny.org"},
    {name: "Tiana Allen", title: "Co-Program Manager for Peer Groups & Research", photo: Tiana, pronoun: "(she/her)", email: "tiana@believeny.org"},
    {name: "Sandhya Sriram", title: " Co-Program Manager for Peer Groups & Research", photo: Sandhya, pronoun: "(she/her)", email: "sandhya@believeny.org"},
    
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
                <Container className="introTitleContainer">
                    <div className="introTitle">
                    Who is Believe New York?
                    </div>
                </Container>
                <Container>
                    <Row className='fs-3 mb-5 mt-3'>
                        <Col>
                            Believe New York, or BNY, is a grassroots nonprofit organization based in the New York City metro area. It was founded by a native New Yorker in February 2021 during the aftermath of the COVID-19 pandemic. 
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} xl={4} className={`mb-5`}>
                            <div className={`${custom.backgroundLight} rounded-4 py-3 px-3 h-100`}>
                                <div className={`${custom.categoryFont} mt-4`}>Our Mission</div>
                                <div className='mt-4'>To improve the lives of all New Yorkers, and beyond, and ensure all people, regardless of identity or background (e.g., age, sex, ethnicity, race, gender, religion, sexual orientation, socioeconomic status, or disability), can find and access the resources they need to survive and thrive.
                                </div>
                            </div>
                        </Col>
                        <Col md={12} xl={4} className={`mb-5`}>
                            <div className={`${custom.backgroundLight} rounded-4 py-3 px-3 h-100`}>
                                <div className={`${custom.categoryFont} mt-4`}>Our Target Population</div>
                                <div className='mt-4'>All individuals and families who need help, specifically individuals experiencing poverty, mental illness, domestic violence, discrimination, unemployment, disability, loss, trauma, and/or any other form of hardship that impacts their well-being.
                                </div>
                            </div>
                        </Col>
                        <Col md={12} xl={4} className={`mb-5`}>
                            <div className={`${custom.backgroundLight} rounded-4 py-3 px-3 h-100`}>
                                <div className={`${custom.categoryFont} mt-4`}>Our Vision</div>
                                <div className='mt-4'>To empower individuals and families facing adversity e.g., poverty, abuse, and mental health challenges by improving their overall well-being, ensuring economic stability, and advancing social justice and health equity. 
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='fs-5 my-3'>
                            In addition, we are committed to healthier communities and reducing our carbon footprint. Throughout all our efforts, we are focused on doing our part to improve our environment and overall community health.
                        </Col>
                    </Row>
                    <Row className={`fs-4 lh-base my-5`}>
                        As for our structure, BNY has an Executive Board that helps oversee strategic planning and resources, a Leadership team that supports day-to-day operations, and a fantastic team of volunteers (our Client and Community Advocates) who offer their time to support people who need us the most. Check out our wonderful Board and Leaders below!
                    </Row>
                </Container>
                <div className='cardGrid pt-5'>
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