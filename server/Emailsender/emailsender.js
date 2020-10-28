const sgMail = require('@sendgrid/mail')
sgMail.setApiKey('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')
//everyone using this will require const sgMail = require('@sendgrid/mail')
//any trouble, node setup instructions came from here https://app.sendgrid.com/guide/integrate/langs/nodejs and here https://sendgrid.com/docs/for-developers/sending-email/quickstart-nodejs/
//this code is set up to find best method to email the donor and recipient
//It will eventually has SQL template strings with which to inject the email addresses of donor and claimant
const msg = {
  to: 'michaelbotur@developersinstitute.co.nz', // Change to your recipient
  from: 'michaelbotur@developersinstitute.co.nz', // Changed to  verified sender
  subject: "If test disposable branch working, SENDS TO TWO EMAIL ADDRESSES. A listing has been claimed. Please arrange handover from donor to claimant/ recipient.",
  text: "An item has been claimed by a donor. Please arrange hand-over. The details of the listing + donor + recipient are ______.  ",
}

const secondMsg = {
  to: 'michaelbotur@gmail.com', 
  from: 'michaelbotur@developersinstitute.co.nz', // Changed to  verified sender
  subject: "SENDS TO my emails if Test Disposable branch is working Y ES IT IS!. A listing has been claimed. Please arrange handover from donor to recipient.",
  text: "An item has been claimed by a donor. Please arrange hand-over. The details of the listing + donor + recipient are ______.  ",
}

sgMail
  .send(msg)
  .then(() => {
    console.log('WEDS NIGHT EMAIL SENT TO TWO EMAIL ADDRESSES')
  })
  .catch((error) => {
    console.error(error)
  })

sgMail
  .send(secondMsg)
  .then(() => {
    console.log('WEDS NIGHT EMAIL SENT TO TWO 2 EMAIL ADDRESSES CODED BY MIKE')
  })
  .catch((error) => {
    console.error(error)
  })

  //this will be set up to match with listingRouter.js so when you click a Claim button, the email sends 
  //Mike will need to set up SQL to insert the email that goes with a donor and recipient's listing

  // export default sgMail;

