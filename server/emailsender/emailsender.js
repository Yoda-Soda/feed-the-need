const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const senderEmail = 'michaelbotur@developersinstitute.co.nz'
const sendDonatorMessage = (donatorEmail, donateeEmail) => {
    const msg = {
        to: donatorEmail, //  recipient
        from: senderEmail, // sender
        subject: "Your Listing has been claimed",
        text: `An item has been claimed by a donatee. Please arrange hand-over by emailing them at ${donateeEmail}`,
    }
    sgMail.send(msg).catch(e=>{console.dir(e.response.body)})
}

const sendDonateeMessage = (donatorEmail, donateeEmail) => {
    const msg = {
        to: donateeEmail, //  recipient
        from: senderEmail, // sender
        subject: "You have accepted a listing",
        text: `Congratulations, you claimed an item. Please arrange hand-over by emailing them at ${donatorEmail}`,
    }
    sgMail.send(msg).catch(e=>{console.dir(e.response.body)})
}

const notifyListingParticipants = (donatorEmail, donateeEmail) => {
    console.log(donatorEmail, donateeEmail)
    sendDonateeMessage(donatorEmail, donateeEmail)
    sendDonatorMessage(donatorEmail, donateeEmail)
}
module.exports = { notifyListingParticipants };