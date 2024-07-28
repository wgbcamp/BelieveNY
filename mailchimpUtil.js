const mailchimp = require("@mailchimp/mailchimp_marketing");
const md5 = require("md5");

mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_KEY,
    server: process.env.MAILCHIMP_SERVER,
  });

module.exports = {

  subscribe: async function (data, cb) {

    const listId = process.env.MAILCHIMP_LISTID;

    const subscribingUser = {
      firstName: "",
      lastName: "",
      email: data.email
    };

    const subscriberHash = md5(subscribingUser.email.toLowerCase());

    try {
      const response = await mailchimp.lists.getListMember(listId, subscriberHash);
  
      console.log(`This user's subscription status is ${response.status}.`);

      if (response.status === "subscribed") {
        cb("Your email address has already been subscribed. Thank you.")
      }

      if (response.status === "unsubscribed") {
        const response = await mailchimp.lists.updateListMember(listId, subscriberHash,
            { email_address: subscribingUser.email, status: "subscribed" }
          );
          console.log(response);
          cb("Your email address has been resubscribed. Welcome back!");
    }
      
    } catch (e) {
      if (e.status === 404) {
        console.error(`This email is not subscribed to this list.`, e);
        try {
            const response = await mailchimp.lists.addListMember(listId, {
                email_address: subscribingUser.email,
                status: "subscribed",
                merge_fields: {
                  FNAME: subscribingUser.firstName,
                  LNAME: subscribingUser.lastName
                }
              });
            console.log(`Successfully added contact as an audience member. The contact's id is ${response.id}.`); 
            cb("Your email address has been added to our newsletter. Thank you!")
        } catch (e) {
            console.error(`Failed to add this contact as an audience member. Error: ${e.status}`, e);
            cb("Sorry, we experienced an issue when trying to get you signed up. Please try again later.")
        }
      } else {
        console.error(e);
      }
    } 
  },
}

//scoping issue, needs to be added to module export with this function called from server file
async function unsubscribe() {

    const listId = process.env.MAILCHIMP_LISTID;
    const email = subscribingUser.email;
    const subscriberHash = md5(email.toLowerCase());

    const response = await mailchimp.lists.updateListMember(
        listId,
        subscriberHash,
        {
        status: "unsubscribed"
        }
    );

    console.log(`This user is now ${response.status}.`);
    
  }

// unsubscribe();
