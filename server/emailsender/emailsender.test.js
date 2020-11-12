
// create your mock variables that you will use to replace the real ones
const mockSend = jest.fn(()=>new Promise(()=>{}));
const mockSetApiKey = jest.fn((apiKey)=>{});
const mockEmailContent = {
    donateeEmail: 'foo@test.example', //  recipient
    senderEmail: 'bar@test.example', // sender
    // subject: "mock subject",
    // text: `Congratulations, you claimed an item. Please arrange hand-over by emailing them at mock-sender@example.example`
}

// attach your mock variables in place of the correct real variables
jest.mock("@sendgrid/mail", () => {
	return {
		send: mockSend,
        setApiKey: mockSetApiKey,
        msg: mockEmailContent
	}
});

const emailsender= require('./emailsender');

describe("Given that we have a mail sender", () => {
	describe("When sending an email", () => {
		test("Then it will use sendgrid to send a mail", () => {
			emailsender.notifyListingParticipants('foo@test.example', 'bar@test.example');
			expect(mockSend).toBeCalled();
		});
		test("Then it will set the API Key", () => {
			expect(mockSetApiKey).toBeCalled();
		});

		test("then send donatee message", () => {
			emailsender.notifyListingParticipants('foo@test.example', 'bar@test.example');            
            expect(mockSend).toBeCalledWith(expect.anything());		
            expect.objectContaining(mockEmailContent);
		});
	});
});

