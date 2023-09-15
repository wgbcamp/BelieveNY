import React, {useState, useEffect} from 'react';
import StripeLogo from "../images/general/poweredByStripe.svg";
import VisaLogo from "../images/general/visaLogo.png";
import MastercardLogo from "../images/general/mastercardLogo.png";
import AMEXLogo from "../images/general/amexLogo.svg";
import DiscoverLogo from "../images/general/discoverLogo.png";


const donateForm = () => {

  var [frequency, updateFreq] = useState(0);
  var [amount, updateAmnt] = useState(0);

    function activeButton(param){
      var x = "one";
      var y = "monthly";
      if(param === "monthly"){
        x = "monthly";
        y = "one";
      }
      document.getElementById(x).style.backgroundColor = "#674ca1";
      document.getElementById(x).style.color = "white";
      document.getElementById(y).style.backgroundColor = "white";
      document.getElementById(y).style.color = "black";
      updateFreq(param);
    }

    function activeNumber(param){
      var values = ["5", "10", "20", "50", "100"];
      for(var i=0; i<values.length; i++){
        if(param === values[i]){
          document.getElementById(values[i]).style.backgroundColor = "#674ca1";
          document.getElementById(values[i]).style.color = "white";
          updateAmnt(param);
        }else{
          document.getElementById(values[i]).style.backgroundColor = "white";
          document.getElementById(values[i]).style.color = "black";
        }
        
      }
    }


    var stripeLinks = {
      link5: "https://donate.stripe.com/8wM3fS9m26Oaau48ww"
    }

    //stripe + custom code
    function checkValues(){
        // if(amount === "5" || amount === "10" || amount === "20" || amount === "50" || amount === "100"){
        //   const data = JSON.stringify({
        //     name: "lookup_key",
        //     value: "donate5key"
        //   });
        //   var xhr = new XMLHttpRequest();
        //   xhr.open("POST", "/create-checkout-session", true);
        //   xhr.setRequestHeader('Content-Type', 'application/json');
        //   xhr.send(data);
        // }
      if(frequency === "one"){
        if(amount === "5"){
          location.href = "https://donate.stripe.com/8wM3fS9m26Oaau48ww";
        }
        if(amount === "10"){
          location.href = "https://buy.stripe.com/cN28AcgOub4q6dO8wx";
        }
        if(amount === "20"){
          location.href = "https://buy.stripe.com/bIYcQsdCiegCcCcfZ0";
        }
        if(amount === "50"){
          location.href = "https://buy.stripe.com/14kaIk7dU6OadGg7sv";
        }
        if(amount === "100"){
          location.href = "https://buy.stripe.com/fZe17K0Pw7Se45G8wA";
        }
      }

      if(frequency === "monthly"){
        if(amount === "5"){
          location.href = "https://buy.stripe.com/fZeaIk41Idcyau48wB";
        }
        if(amount === "10"){
          location.href = "https://buy.stripe.com/5kA6s4gOub4qau49AG";
        }
        if(amount === "20"){
          location.href = "https://buy.stripe.com/cN26s4dCifkGcCc7sz";
        }
        if(amount === "50"){
          location.href = "https://buy.stripe.com/7sIcQsdCigoKdGg4go";
        }
        if(amount === "100"){
          location.href = "https://buy.stripe.com/fZe5o07dUfkG59KeV3";
        }
      }

        if(frequency === 0 || amount === 0){
          alert("Please select a donation frequency and amount.");
        }
    }

    return(
        <div className="simpleFlex">
            <div className="maxWidth width80Per">
                <div className="donationParametersGrid">
                  <div className="dFbigTitle">Your Donation</div>
                  <div className="dFtitle">Frequency</div>
                  <div className="simpleFlex">
                    <div className="dFbuttonGrid">
                      <div className="dFbutton" id="one" onClick={() => activeButton("one")}>One Time</div>
                      <div className="dFbutton" id="monthly" onClick={() => activeButton("monthly")}>Monthly</div>
                    </div>
                  </div>
                  <div className="dFtitle">Amount</div>
                  <div className="simpleFlex">
                    <div className="dFbuttonGridNumbers">
                      <div className="dFbutton" id="5" onClick={() => activeNumber("5")}>$5</div>
                      <div className="dFbutton" id="10" onClick={() => activeNumber("10")}>$10</div>
                      <div className="dFbutton" id="20" onClick={() => activeNumber("20")}>$20</div>
                      <div className="dFbutton" id="50" onClick={() => activeNumber("50")}>$50</div>
                      <div className="dFbutton" id="100" onClick={() => activeNumber("100")}>$100</div>
                    </div>
                  </div>
                </div>
                <div className="donationFormGrid">
                  <div className='dFbigTitle'>Payment Methods</div>
                  <div className="simpleFlex">
                    <div className="dFbuttonPayMethodGrid" onClick={() => checkValues()}>
                      <div className='dFbuttonPayMethod'>
                        <div className="ccAndStripeGrid">
                          <div className="ccGrid">
                            <div className='ccFlex'>
                              <img className="logoResize3" src={VisaLogo}></img>
                            </div>
                            <div className='ccFlex'>
                              <img className="logoResize3" src={MastercardLogo}></img>
                            </div>
                            <div className='ccFlex'>
                              <img className="logoResize3" src={AMEXLogo}></img>
                            </div>
                            <div className='ccFlex'>
                              <img className="logoResize3" src={DiscoverLogo}></img>
                            </div>
                          </div>
                          <div className="logoFit">
                            <img className="logoResize4" src={StripeLogo}></img>
                          </div>
                        </div>
                          <div className="dFbuttonPayMethodDesc">Credit Card</div>
                        </div>
                      {/* <div className='dFbuttonPayMethod'>
                          <div className="logoFit">
                            <img className="logoResize2" src={PaypalLogo}></img>
                          </div>
                          <div className="dFbuttonPayMethodDesc">Paypal</div>
                      </div> */}
                    </div>
                  </div>
              </div>
            </div>
        </div>
    )
}

export default donateForm;