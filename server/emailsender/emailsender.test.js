const sgMail = require('@sendgrid/mail')

jest.mock("@sendgrid/mail");



describe('Given that we have an email sender', () => {
    describe('When an email is sent to a donatee', () => {
        
        test('SendGrid is available to the email sender', () => {
            // arrange
            
            sgMail.send.mockResolvedValue(1);
            sgMail.send('hello');
            // expect(sgMail.send).toHaveBeenCalled();
        })
        test('The correct message should be sent using SendGrid', () => {
            
        })
    })
})