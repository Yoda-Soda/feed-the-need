CREATE TABLE user_account
(
	id SERIAL PRIMARY KEY,
	email TEXT NOT NULL UNIQUE
);
insert into user_account
	(email)
values
	( 'michaelbotur@developersinstitute.co.nz' );
insert into user_account
	(email)
values
	( 'katie2miles@developersinstitute.co.nz' );

CREATE TABLE list
(
	id SERIAL PRIMARY KEY,
	donor_id int NOT NULL,
	title TEXT NOT NULL,
	date_created TIMESTAMP DEFAULT NOW(),
	claimant_id int REFERENCES user_account(id),
	date_claimed TIMESTAMP,
	description TEXT NOT NULL,
	CONSTRAINT fk_user_account
		FOREIGN KEY(donor_id)
		REFERENCES user_account(id)

);

insert into list
	(donor_id, title, description )
values
	( 1, 'My Item', 'My Item Description');