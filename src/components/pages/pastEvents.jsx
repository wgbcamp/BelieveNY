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
import giftDrive1 from '../../images/events/holidayGiftDrives/giftDrive1.png'
import giftDrive2 from '../../images/events/holidayGiftDrives/giftDrive2.png'
import giftDrive3 from '../../images/events/holidayGiftDrives/giftDrive3.png'
import giftDrive4 from '../../images/events/holidayGiftDrives/giftDrive4.png'
import giftDrive5 from '../../images/events/holidayGiftDrives/giftDrive5.png'
import giftDrive6 from '../../images/events/holidayGiftDrives/giftDrive6.png'
import giftDrive7 from '../../images/events/holidayGiftDrives/giftDrive7.png'
import giftDrive8 from '../../images/events/holidayGiftDrives/giftDrive8.png'
import giftDrive9 from '../../images/events/holidayGiftDrives/giftDrive9.png'
import giftDrive10 from '../../images/events/holidayGiftDrives/giftDrive10.png'


const resourceFairs = [rF1, rF2, rF3, rF4, rF5, rF6, rF7, rF9, rF10, rF11, rF12, rF13, rF14, rF15, rF16, rF17, rF18, rF19];
const clothesHandouts = [clothes1, clothes2, clothes3, clothes4, clothes5, clothes6, clothes7, clothes8];
const cleanup = [cleanup1, cleanup2, cleanup3, cleanup4, cleanup5, cleanup6, cleanup7, cleanup8];
const summerHaircuts = [summer1, summer2, summer3, summer4, summer5, summer6, summer7, summer8, summer9, summer10, summer11, summer12, summer13];
const holidayGiftDrives = [giftDrive1, giftDrive2, giftDrive3, giftDrive4, giftDrive5, giftDrive6, giftDrive7, giftDrive8, giftDrive9, giftDrive10];

const values = [
    {
        title: "Holiday Gift Drives", description: "Since 2021, we’ve hosted annual Holiday Gift Drives to bring joy and relief to families experiencing poverty during the holiday season—particularly single mothers and families living in shelters. Each year, we collect and distribute new toys, books, clothing, and other caregiver-requested items. All gifts are thoughtfully wrapped and hand-delivered to preserve dignity and respect for the families we serve. In 2024, we held our largest drive yet, partnering with Toys for Tots and Sprout Society to provide over 250 gifts to more than 144 children. Since launching, our drives have helped over 500 children receive meaningful, personalized gifts for the holidays.", images: holidayGiftDrives
    },
    {
        title: "Resource Fairs", description: "In response to many community requests, we launched our first Resource Fair in July 2024—our Mental Health Resource Fair, which welcomed over 100 attendees and featured over 20 community organizations. Since then, we've expanded our resource fairs to include Affordable Housing Fairs and additional Mental Health-focused events. These fairs connect people directly with essential services, offering on-the-spot information, support, and care. Designed to reduce barriers, our fairs make critical resources accessible to all who need them.", images: resourceFairs
    },
    {
        title: "Hot Meal & Clothing Handouts", description: "What began with hot meal distributions in Herbert Von King Park on Thanksgiving 2020 has grown into regular food and clothing handouts across NYC. Through these events, we've reached thousands of New Yorkers in neighborhoods including the Upper West Side, Alphabet City, Washington Square Park, and Bed-Stuy—ensuring that anyone in need can access a warm meal and seasonal clothing.", images: clothesHandouts
    },
    {
        title: "Community Cleanups", description: "We believe every New Yorker deserves to live in a clean, healthy, safe neighborhood. Our volunteers have led cleanup events in Bushwick, Harlem, the Bronx, the Lower East Side, and Astoria, demonstrating that collective care for our communities starts with all of us.", images: cleanup
    },
    {
        title: "Summer Haircuts", description: "In the summer of 2021, through a partnership with a local salon, we provided free haircuts to hundreds of people in Washington Square Park, creating moments of dignity and connection. Alongside fresh cuts, we distributed cool summer meals and lightweight clothing to help neighbors stay nourished and comfortable in the heat. These efforts, like our Hot Meals and Warm Clothes events, reflect our commitment to meeting basic needs with compassion and care. ", images: summerHaircuts
    }
]

const pastEvents = () => {

    return(
        <div>
            <div className={`mt-5 pt-5 ${custom.categoryFont} text-center`}>Events that support our community!</div>
            <Container className={`${custom.mainButtonContainer} d-flex justify-content-center`}>
                <a href="/donate">
                    <button type="button" className={`btn btn-dark mt-5 rounded-5 fw-bold  ${custom.mainButton} ${custom.eventsDonateButton} ${custom.eDBFix}`}>
                        DONATE TO EVENTS FUND</button>
                </a>
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