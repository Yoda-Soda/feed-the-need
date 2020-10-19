CREATE TABLE user_account (
	id SERIAL PRIMARY KEY,	
	email TEXT NOT NULL UNIQUE
);
insert into user_account (email) values ( 'michaelbotur@developersinstitute.co.nz' );
insert into user_account (email) values ( 'katie2miles@developersinstitute.co.nz' );

CREATE TABLE list (
	id SERIAL PRIMARY KEY,
	donor_id int NOT NULL,
	title TEXT NOT NULL,
	description TEXT NOT NULL,
	date_created TIMESTAMP DEFAULT NOW(),
	CONSTRAINT fk_user_account
		FOREIGN KEY(donor_id)
		REFERENCES user_account(id) 	
);

insert into list (donor_id, title, description) values ( 1, 'My Item', 'My Item Description' );


SELECT id from user_account WHERE email = {$}


INSERT users (email) values (email from the token) returning id
possibly get it all in one!

insert users select {email from token} where not exists (SELECT id from users WHERE email = the email you just got fro the token) returning id

function addEmailToAccessToken(user, context, callback) {
  
   const email = req.user["http://feedtheneed.click/email"];
  