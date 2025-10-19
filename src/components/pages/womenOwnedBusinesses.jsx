import Flower from "../../images/womenOwnedBusiness/FlowerPower.jpg";
import TGB from "../../images/womenOwnedBusiness/TGB_Logo_Orange.png";
import Stufd from "../../images/womenOwnedBusiness/Stufd.png";
import Amy from "../../images/womenOwnedBusiness/amy.png";


const womenOwnedBusinesses = () => {

    return (
        <div>
            <div className="flex justify-center items-center flex-col pt-50">
                <div className="text-3xl font-bold">Women-Owned Business Sponsors</div>
                <div className="pt-40 w-8/10 max-w-800">We are deeply grateful to the incredible women-owned businesses whose generosity helps sustain our mission and create lasting impact in our communities.</div>
                <div className="pt-25 font-bold w-8/10 max-w-800">Thank you for your continued support and partnership — we couldn’t do this work without you!</div>
            </div>
            <div className="flex justify-center w-full pt-40">
                <div className="w-9/10 max-w-1000 flex flex-wrap flex-col sm:flex-row justify-center items-center gap-20">
                    <img src={Flower} className=" max-w-400"></img>
                    <img src={TGB} className=" max-w-400"></img>
                    <img src={Amy} className=" max-w-400"></img>
                    <img src={Stufd} className=" max-w-400"></img>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col pt-50">
                <div className="pt-40 w-8/10 max-w-800">Want to see your business featured here? <a href="supportUs" className="!text-[#5d55ce]">Contact us</a> to learn how you can become a sponsor and join our growing network of women entrepreneurs making a difference.</div>
            </div>
        </div>
    )
}

export default womenOwnedBusinesses;