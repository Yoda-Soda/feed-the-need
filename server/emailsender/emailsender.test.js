
const mockSend = jest.fn(()=>new Promise(()=>{}));
const mockSetApiKey = jest.fn((apiKey)=>{});
const expectedEmailContent = [    
    {"from": "michaelbotur@developersinstitute.co.nz", "subject": "You have accepted a listing", "text": "Congratulations, you claimed an item. Please arrange hand-over by emailing them at donator@test.example", "to": "donatee@test.example"},
    {"from": "michaelbotur@developersinstitute.co.nz", "subject": "Your Listing has been claimed", "text": "An item has been claimed by a donatee. Please arrange hand-over by emailing them at donatee@test.example", "to": "donator@test.example"}  
]

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
            emailsender.notifyListingParticipants('donator@test.example', 'donatee@test.example');
            expect(mockSend).toBeCalledWith(expectedEmailContent[0]);            
        });
        test("then send donator message", () => {           
            emailsender.notifyListingParticipants('donator@test.example', 'donatee@test.example'); 
            expect(mockSend).toBeCalledWith(expectedEmailContent[1]);
		});
	});
});

