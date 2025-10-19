import PhotoTextBox from '../items/photoTextBox'
import Lilfrankies from '../../images/eventSponsors/LilFrankies.webp'
import HavanaCentral from '../../images/eventSponsors/havana-central-logo-v3.webp'
import CutlerLogo from '../../images/eventSponsors/cutlerLogo.png'

const pastSponsors = () => {
    return (
        <div className="flex flex-col justify-center items-center pt-40">

            <div className="text-[36px] pb-40">Benefits of Sponsorship</div>
            <div className="flex w-full justify-center items-center flex-col">
                <PhotoTextBox content={{ description: "Our Thanksgiving Hot Meal and Warm Clothes handouts are a huge success in no small part to Lil' Frankies and Supper who have donated from 2020 to 2024. With each donation, they notice a tax-deduction come April! They've also seen some well earned attention from their community because of their ongoing support of our events.", image: Lilfrankies, series: "Bottom", version: "Left" }} />
                <PhotoTextBox content={{ description: "Summer 2021, stylists from Cutler Salon joined us in Washington Square Park to give free haircuts to persons living with poverty. From the event itself, Cutler Salon reported back a 30% increase in bookings, and spike in social media engagements. And come tax season, the stylists and the business will get a sizable tax deduction for their services.", image: CutlerLogo, series: "Top", version: "Left" }} />
                <PhotoTextBox content={{ description: "For Labor Day Weekend 2021, Havana Central graciously donated meals for our Meal Handout in the Upper West. Havana Central also saw an increase in social media engagements leading up to the event. They will also enjoy a sizable tax deduction for the 2021 tax year, as well as earning a charitable reputation in their neighborhood.", image: HavanaCentral, series: "", version: "Right" }} />

            </div>

        </div>
    )
}

export default pastSponsors;