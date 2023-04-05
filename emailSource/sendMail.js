const sgMail = require('@sendgrid/mail');

function sendMail(data){

    if (data.type === 'contactForm'){
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: process.env.FROM_EMAIL, // Change to your recipient
            from: process.env.FROM_EMAIL, // Change to your verified sender
            subject: data.subject,
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
                            <th class="white textSize1" style="font-weight: 500;background-color: white;font-size: 36px;">${data.name} sent a message.</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Email address: 
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.email}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Phone number: 
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.phone}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Subject: </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.subject}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Description: </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.text}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Best callback time:</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.time}</th>
                        </tr>    
                        <tr>
                            <th></th>
                            <th class="pad40 white borderBottom" style="height: 40px;background-color: white;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;"></th>
                        </tr>
                </table>
            </body>
            </html>`,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent to believeny.');
            toSubmitter(data);
        })
        .catch((error) => {
            console.error(error)
            console.log(process.env.FROM_EMAIL)
        })

        function toSubmitter(data){
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg2 = {
                to: data.email, // Change to your recipient
                from: process.env.FROM_EMAIL, // Change to your verified sender
                subject: data.subject,
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
                                <th class="white textSize1" style="font-weight: 500;background-color: white;font-size: 36px;">Thank you for reaching out!</th>
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
                                <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                            </tr>
                            <!-- gray area -->
                            <tr>
                                <th></th>
                                <th class="pad40 gray " style="height: 40px;background-color: rgb(101, 101, 101);color: white;"></th>
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
                                                <a href="https://www.facebook.com/believeny"><img src="https://www.believeny.org/c25eacea879db34dceeb.png"></a>
                                                <a href="https://www.twitter.com/Believe_NewYork"><img src="https://www.believeny.org/37a16ce61b3d48080b95.png"></a>
                                                <a href="https://www.instagram.com/believeny"><img src="https://www.believeny.org/b4c003cfc757cd8ff84c.png"></a>
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
            .send(msg2)
            .then(() => {
                console.log('Email sent to submitter.')
            })
            .catch((error) => {
                console.error(error)
                console.log(process.env.FROM_EMAIL)
            })
        }
    }

    if (data.type === 'eventSponsor'){
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: process.env.FROM_EMAIL, // Change to your recipient
            from: process.env.FROM_EMAIL, // Change to your verified sender
            subject: `${data.contactName} from ${data.businessName} submitted an event sponsor form.`,
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
                            <th class="white textSize1" style="font-weight: 500;background-color: white;font-size: 36px;">${data.contactName} from ${data.businessName} sent a message.</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Email address: 
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.email}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Phone number: 
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.phone}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Description: </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.text}</th>
                        </tr>  
                        <tr>
                            <th></th>
                            <th class="pad40 white borderBottom" style="height: 40px;background-color: white;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;"></th>
                        </tr>
                </table>
            </body>
            </html>`,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent to believeny.');
            toSubmitter(data);
        })
        .catch((error) => {
            console.error(error)
            console.log(process.env.FROM_EMAIL)
        })

        function toSubmitter(data){
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg2 = {
                to: data.email, // Change to your recipient
                from: process.env.FROM_EMAIL, // Change to your verified sender
                subject: "Thank you for reaching out!",
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
                                <th class="white textSize1" style="font-weight: 500;background-color: white;font-size: 36px;">Thank you for reaching out!</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">A Believe New York representative will get in touch with you within 48 hours.
                                </th>
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
                                            <a href="https://www.facebook.com/believeny"><img src="https://www.believeny.org/c25eacea879db34dceeb.png"></a>
                                            <a href="https://www.twitter.com/Believe_NewYork"><img src="https://www.believeny.org/37a16ce61b3d48080b95.png"></a>
                                            <a href="https://www.instagram.com/believeny"><img src="https://www.believeny.org/b4c003cfc757cd8ff84c.png"></a>
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
            .send(msg2)
            .then(() => {
                console.log('Email sent to submitter.')
            })
            .catch((error) => {
                console.error(error)
                console.log(process.env.FROM_EMAIL)
            })
        }
    }

    if (data.type === 'booking'){
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: process.env.FROM_EMAIL, // Change to your recipient
            from: process.env.FROM_EMAIL, // Change to your verified sender
            subject: `${data.name} booked a session for ${data.date} at ${data.time}`,
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
                            <th class="white textSize1" style="font-weight: 500;background-color: white;font-size: 36px;">${data.name} booked a session.</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Email address: 
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.email}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Phone number: 
                            </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.phone}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Message: </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.text}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Date: </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.date}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Time:</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.time}</th>
                        </tr>    
                        <tr>
                            <th></th>
                            <th class="pad40 white borderBottom" style="height: 40px;background-color: white;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;"></th>
                        </tr>
                </table>
            </body>
            </html>`,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent to believeny.');
            toSubmitter(data);
        })
        .catch((error) => {
            console.error(error)
            console.log(process.env.FROM_EMAIL)
        })

        function toSubmitter(data){
            sgMail.setApiKey(process.env.SENDGRID_API_KEY)
            const msg2 = {
                to: data.email, // Change to your recipient
                from: process.env.FROM_EMAIL, // Change to your verified sender
                subject: 'Thank you for booking your session!',
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
                                <th class="white textSize1" style="font-weight: 500;background-color: white;font-size: 36px;">Thank you for booking your session!</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                            </tr>
                            <tr>
                                <th></th>
                                <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px; text-align: center">We will send you a Google Meet invite shortly. We look forward to seeing you at this time:
                                </th>
                            </tr>
                            <tr>
                                <th></th>
                                <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.date} ${data.time}</th>
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
                                <th class="gray textSize1" style="font-weight: 500;background-color: rgb(101, 101, 101);color: white;font-size: 36px;">Need to reschedule or cancel your session?
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
                                            <td class="button textSize2" style="font-weight: 500; text-align: center; background-color: rgb(245, 192, 255);color: black;height: 66px;width: 33%;border-radius: 5px;font-size: 22px;text-decoration: none;color: black;"><a href="https://www.believeny.org/cancelSession/${data.id}">Click Here</a></td>
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
                                            <a href="https://www.facebook.com/believeny"><img src="https://www.believeny.org/c25eacea879db34dceeb.png"></a>
                                            <a href="https://www.twitter.com/Believe_NewYork"><img src="https://www.believeny.org/37a16ce61b3d48080b95.png"></a>
                                            <a href="https://www.instagram.com/believeny"><img src="https://www.believeny.org/b4c003cfc757cd8ff84c.png"></a>
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
            .send(msg2)
            .then(() => {
                console.log('Email sent to submitter.')
            })
            .catch((error) => {
                console.error(error)
                console.log(process.env.FROM_EMAIL)
            })
        }
    }

    if (data.type === "cancellation"){
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            to: process.env.FROM_EMAIL, // Change to your recipient
            from: process.env.FROM_EMAIL, // Change to your verified sender
            subject: `${data.name} has cancelled their session for ${data.date}`,
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
                            <th class="white textSize1" style="font-weight: 500;background-color: white;font-size: 36px;">${data.name} cancelled a session.</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">Date: </th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="white textSize2" style="font-weight: 500;background-color: white;font-size: 22px;">${data.date}</th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white " style="height: 40px;background-color: white;"></th>
                        </tr>
                        <tr>
                            <th></th>
                            <th class="pad40 white borderBottom" style="height: 40px;background-color: white;border-bottom-left-radius: 8px;border-bottom-right-radius: 8px;"></th>
                        </tr>
                </table>
            </body>
            </html>`,
        }
        sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent to believeny.');
        })
        .catch((error) => {
            console.error(error)
            console.log(process.env.FROM_EMAIL)
        })
    }
}

module.exports = {sendMail}