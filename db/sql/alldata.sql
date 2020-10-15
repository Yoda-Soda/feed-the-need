CREATE TABLE user_account (
	id SERIAL PRIMARY KEY,	
	email TEXT NOT NULL UNIQUE
);
insert into user_account (email) values ( 'michaelbotur@developersinstitute.co.nz' );
insert into user_account (email) values ( 'katiemiles@developersinstitute.co.nz' );

CREATE TABLE list (
	id SERIAL PRIMARY KEY,
	donor_id int,
	title TEXT NOT NULL,
	description text,
	date_created TIMESTAMP DEFAULT NOW(),
	CONSTRAINT fk_user_account
		FOREIGN KEY(donor_id)
		REFERENCES user_account(id) 	
);

insert into list (donor_id, title, description) values ( 1, 'My Item', 'My Item Description' );
