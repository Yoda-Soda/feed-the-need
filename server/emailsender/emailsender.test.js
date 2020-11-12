
const mockSend = jest.fn(()=>new Promise(()=>{}));
const mockSetApiKey = jest.fn((apiKey)=>{});
 
jest.mock("@sendgrid/mail", () => {
	return {
		send: mockSend,
		setApiKey: mockSetApiKey
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
			
		});


	});

});

