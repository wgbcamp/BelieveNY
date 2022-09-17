const sgMail = require('@sendgrid/mail');

function sendMail(){

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: process.env.TEST_TO_EMAIL, // Change to your recipient
        from: process.env.FROM_EMAIL, // Change to your verified sender
        subject: 'Email Test Warren',
        text: 'Test email',
        html: `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            
                
          </head>
          <body style="background-color: rgb(231, 231, 231);">
            <table class="flexTable" style="font-family: 'Raleway', sans-serif;width: 100%;border-spacing: 0px!important;">
                <tr>
                    <th class="sideDiv" style="width: 50px;"></th>
                    <th>
                        <img src="https://www.believeny.org/c589220876aa06bb46c6.png" class="paddingBottom40">
                    </th>
                    <th class="sideDiv" style="width: 50px;"></th>
                </tr>
                    <!-- white area -->
                    <tr>
                        <th></th>
                        <th class="pad40 white borderTop" style="height: 40px;background-color: white;border-top-left-radius: 8px;border-top-right-radius: 8px;"></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="white textSize1" style="font-weight: 500;background-color: white;font-size: 36px;">Thank you for booking your appointment!</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">We will contact you at the best callback time you have provided us.
                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Thank you!</th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                    </tr>
                    <!-- gray area -->
                    <tr>
                        <th></th>
                        <th class="pad40 gray " style="height: 40px;background-color: rgb(101, 101, 101);color: white;"></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="gray textSize1" style="font-weight: 500;background-color: rgb(101, 101, 101);color: white;font-size: 36px;">Need to reschedule or cancel your appointment?
                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="pad20 gray" style="height: 20px;background-color: rgb(101, 101, 101);color: white;"></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="gray fontSize2" style="background-color: rgb(101, 101, 101);color: white;">
                            <table class="fullWidth" style="font-family: 'Raleway', sans-serif;width: 100%;border-spacing: 0px!important;">
                                <tr>
                                    <td class="thirdWidth" style="width: 33%;"></td>
                                    <td class="button textSize2" style="font-weight: 500;background-color: rgb(245, 192, 255);color: black;height: 66px;width: 33%;border-radius: 5px;font-size: 22px;">Click Here</td>
                                    <td class="thirdWidth" style="width: 33%;"></td> 
                                </tr>
                            </table>
                        </th>
                        <th class=""></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="pad20 gray" style="height: 20px;background-color: rgb(101, 101, 101);color: white;"></th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="gray textSize2" style="font-weight: 500;background-color: rgb(101, 101, 101);color: white;font-size: 22px;">Need additional support? Email or give us a call.
                        </th>
                    </tr>
                    <tr>
                        <th></th>
                        <th class="pad40 gray " style="height: 40px;background-color: rgb(101, 101, 101);color: white;"></th>
                    </tr>
                    <!-- white bottom area -->
                    <tr>
                        <th></th>
                        <th class=" white fontSize3 borderBottom" style="background-color: white;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;">
                            <table class="fullWidth" style="font-family: 'Raleway', sans-serif;width: 100%;border-spacing: 0px!important;">
                                <tr style="font-weight: 500"> 
                                    <td class="spaceMiddle textLeft" style="text-align: left;width: 33%;">
                                        <img src="https://www.believeny.org/c25eacea879db34dceeb.png">
                                        <img src="https://www.believeny.org/37a16ce61b3d48080b95.png">
                                        <img src="https://www.believeny.org/b4c003cfc757cd8ff84c.png">
                                    </td>
                                    <td class="textCenter" style="text-align: center;">GetHelp@BelieveNY.org</td>
                                    <td class="textRight" style="text-align: right;width: 33%;">(347) NYC-0011</td> 
                                </tr>
                            </table>
                        </th>
                    </tr>
                    <tr class="space40" style="height: 40px;width: 650px;"></tr>
        
            
            </table>
        </body>
        </html>`,
    }
    sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent1')
    })
    .catch((error) => {
        console.error(error)
        console.log(process.env.FROM_EMAIL)
    })
}

module.exports = {sendMail}