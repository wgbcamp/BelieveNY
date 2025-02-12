import React, {useState} from 'react'
import { Carousel, Image, Container, Row, Col } from 'react-bootstrap';
import custom from '../../css/main.module.css';

import clothes1 from '../../images/events/clothesMealHandOuts/3jKvhFY.jpeg'
import clothes2 from '../../images/events/clothesMealHandOuts/cyyijEC.jpeg'
import clothes3 from '../../images/events/clothesMealHandOuts/handout1.jpeg'
import clothes4 from '../../images/events/clothesMealHandOuts/handout2.jpeg'
import clothes5 from '../../images/events/clothesMealHandOuts/handout3.jpeg'
import clothes6 from '../../images/events/clothesMealHandOuts/iaWr1P9.jpeg'
import clothes7 from '../../images/events/clothesMealHandOuts/J2l4uLI.jpeg'
import clothes8 from '../../images/events/clothesMealHandOuts/zfdFae1.jpeg'
import cleanup1 from '../../images/events/communityCleanUp/0FA38BB4-11FC-4AB3-AC12-7192030C39D4.jpg'
import cleanup2 from '../../images/events/communityCleanUp/IMG_0126.jpeg'
import cleanup3 from '../../images/events/communityCleanUp/IMG_3323.JPG'
import cleanup4 from '../../images/events/communityCleanUp/IMG_3333.JPG'
import cleanup5 from '../../images/events/communityCleanUp/IMG_3346.JPG'
import cleanup6 from '../../images/events/communityCleanUp/IMG_3365.JPG'
import cleanup7 from '../../images/events/communityCleanUp/IMG_3367.JPG'
import cleanup8 from '../../images/events/communityCleanUp/IMG_5422.jpeg'
import summer1 from '../../images/events/summerHairCuts/326CC3C6-82D5-4253-8910-18E4C386DAC5.jpg'
import summer2 from '../../images/events/summerHairCuts/C19B1BAF-0ABE-4C42-8838-3E6305BBA168.jpg'
import summer3 from '../../images/events/summerHairCuts/IMG_4336.JPG'
import summer4 from '../../images/events/summerHairCuts/IMG_4337.JPG'
import summer5 from '../../images/events/summerHairCuts/IMG_4340.JPG'
import summer6 from '../../images/events/summerHairCuts/IMG_4342.JPG'
import summer7 from '../../images/events/summerHairCuts/IMG_4346.JPG'
import summer8 from '../../images/events/summerHairCuts/IMG_4349.JPG'
import summer9 from '../../images/events/summerHairCuts/IMG_4352.JPG'
import summer10 from '../../images/events/summerHairCuts/IMG_4353.JPG'
import summer11 from '../../images/events/summerHairCuts/IMG_4354.JPG'
import summer12 from '../../images/events/summerHairCuts/IMG_4356.JPG'
import summer13 from '../../images/events/summerHairCuts/IMG_4405.jpeg'
import rF1 from '../../images/events/resourceFairs/FIRST PHOTO.jpeg'
import rF2 from '../../images/events/resourceFairs/IMG_4750.jpeg'
import rF3 from '../../images/events/resourceFairs/IMG_6332.jpeg'
import rF4 from '../../images/events/resourceFairs/IMG_6335.jpeg'
import rF5 from '../../images/events/resourceFairs/IMG_6336.jpeg'
import rF6 from '../../images/events/resourceFairs/IMG_6337.jpeg'
import rF7 from '../../images/events/resourceFairs/IMG_6338.jpeg'
import rF9 from '../../images/events/resourceFairs/IMG_6340.jpeg'
import rF10 from '../../images/events/resourceFairs/IMG_6341.jpeg'
import rF11 from '../../images/events/resourceFairs/IMG_6342.jpeg'
import rF12 from '../../images/events/resourceFairs/IMG_6343.jpeg'
import rF13 from '../../images/events/resourceFairs/IMG_6345.jpeg'
import rF14 from '../../images/events/resourceFairs/IMG_6350.jpeg'
import rF15 from '../../images/events/resourceFairs/IMG_6351.jpeg'
import rF16 from '../../images/events/resourceFairs/IMG_6355.jpeg'
import rF17 from '../../images/events/resourceFairs/IMG_6357.jpeg'
import rF18 from '../../images/events/resourceFairs/IMG_6358.jpeg'
import rF19 from '../../images/events/resourceFairs/Mentalhealthfair.jpeg'

const resourceFairs = [rF1, rF2, rF3, rF4, rF5, rF6, rF7, rF9, rF10, rF11, rF12, rF13, rF14, rF15, rF16, rF17, rF18, rF19];
const clothesHandouts = [clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, clothes7, clothes8];
const cleanup = [cleanup1, cleanup2, cleanup3, cleanup4, cleanup5, cleanup6, cleanup7, cleanup8];
const summerHaircuts = [summer1, summer2, summer3, summer4, summer5, summer6, summer7, summer8, summer9, summer10, summer11, summer12, summer13];

const values = [
    {
        title: "Resource Fairs", description: "After many requests, we began hosting resource fairs to connect people directly with essential services and support. Our first fair focused on mental health and served hundreds of people, featuring over 20 mental health organizations and programs. These fairs bring together various organizations to provide information and assistance in one convenient location. We will be hosting additional mental health and affordable housing fairs in the near future. These events are designed to help individuals access crucial resources and support, making it easier to find the help they need.", images: resourceFairs
    },
    {
        title: "Clothes & Meal Handouts", description: "We started handing out hot meals on Thanksgiving 2020 in Herbert Von King Park in Brooklyn. Since then we've been holding regular food hand outs in public spaces across the city, including the Upper West, Alphabet City, Washington Square Park, and Bedstuy. We've fed over 1,000 food insecure New Yorkers and handed out more than 300 items of clothing at our events alone!", images: clothesHandouts
    },
    {
        title: "Community Cleanup", description: "Believe New York Volunteers care about your community, and believe that everyone should live in a safe and clean environment. We've held clean up events in Bushwick, Harlem, the Bronx, LES, and Astoria. ", images: cleanup
    },
    {
        title: "Free Summer Hair Cuts and Clothes", description: "Like with our Hot Meals and Warm Clothes events, we aspire to make sure that everyone in NYC has access to basic hygiene, clothing, and safety. This past summer we partnered with local stylists at Cutler Salon to give free hair cuts to over 100 people in Washington Square Park, while also handing summer clothes and cool meals.", images: summerHaircuts
    }
]

const pastEvents = () => {

    return(
        <div>
            <div className={`mt-5 pt-5 ${custom.categoryFont} text-center`}>Our events help your community</div>
            <Container className={`${custom.mainButtonContainer} d-flex justify-content-center`}>
                <Link to="/donate">
                    <button type="button" className={`btn btn-dark mt-5 rounded-5 fw-bold ${custom.mainButton} ${custom.eventsDonateButton}`}>
                        DONATE TO EVENTS FUND</button>
                </Link>
            </Container>
            <Container className='mt-5 pt-5'>
                    {values.map((value, key) => (
                    <Row className="mb-5">
                        <Col xs={12} lg={6}>
                            <Carousel fade>
                                {value.images.map((value, key) => (
                                    <Carousel.Item key={key}>
                                        <Image src={value} className='rounded-4' fluid></Image>
                                    </Carousel.Item>
                                ))}

                            </Carousel>
                        </Col>
                        <Col xs={12} lg={6} className={`${custom.backgroundLight} rounded-4`}>
                            <div className={`${custom.categoryFont} text-center mt-4`}>
                                {value.title}
                            </div>
                            <div className={`${custom.descriptionFont} mt-4 pb-3`}>
                                {value.description}
                            </div>
                        </Col>
                    </Row>
                ))}
            </Container>
        </div>
    )
}

export default pastEvents;